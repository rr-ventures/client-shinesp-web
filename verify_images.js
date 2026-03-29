const fs = require('fs');
const path = require('path');

const versions = ['v0', 'v1', 'v2', 'v3'];
let allGood = true;

function checkFileExists(v, imagePath) {
  // imagePath might be /v0/image.png or /image.png
  let publicPath = '';
  if (imagePath.startsWith(`/${v}/`)) {
    publicPath = path.join(__dirname, v, 'public', imagePath.substring(v.length + 2));
  } else if (imagePath.startsWith('/')) {
    publicPath = path.join(__dirname, v, 'public', imagePath.substring(1));
  } else {
    console.log(`[${v}] Warning: Relative path used: ${imagePath}`);
    return;
  }

  if (!fs.existsSync(publicPath)) {
    console.error(`[${v}] ERROR: Image not found: ${publicPath} (from src: ${imagePath})`);
    allGood = false;
  }
}

function walkDir(dir, v) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath, v);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      
      // Check <img src="..."
      const imgRegex = /<img[^>]+src=["']([^"']+)["']/g;
      let match;
      while ((match = imgRegex.exec(content)) !== null) {
        // Ignore external URLs or data URIs
        if (!match[1].startsWith('http') && !match[1].startsWith('data:')) {
          checkFileExists(v, match[1]);
        }
      }

      // Check <Image src="..."
      const nextImgRegex = /<Image[^>]+src=["']([^"']+)["']/g;
      while ((match = nextImgRegex.exec(content)) !== null) {
        if (!match[1].startsWith('http') && !match[1].startsWith('data:')) {
          checkFileExists(v, match[1]);
        }
      }
    }
  }
}

versions.forEach(v => {
  const srcDir = path.join(__dirname, v, 'src');
  if (fs.existsSync(srcDir)) {
    walkDir(srcDir, v);
  }
});

if (allGood) {
  console.log('SUCCESS: All image paths in the source code point to existing files in the public directories.');
} else {
  console.log('FAILED: Some images are missing.');
}
