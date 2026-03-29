const fs = require('fs');
const path = require('path');

const versions = ['v0', 'v1', 'v2', 'v3'];

versions.forEach(v => {
  const configPath = path.join(__dirname, v, 'next.config.ts');
  let config = fs.readFileSync(configPath, 'utf8');
  if (!config.includes('images:')) {
    config = config.replace('output: "standalone",', 'output: "standalone",\n  images: { unoptimized: true },');
    fs.writeFileSync(configPath, config);
    console.log(`Updated ${configPath}`);
  }
});

function replaceInFile(filePath, version) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Replace <img src="/... with <img src="/vX/...
  const imgRegex = /<img\s+([^>]*?)src="\/([^"]+)"/g;
  content = content.replace(imgRegex, (match, before, srcPath) => {
    if (!srcPath.startsWith(version + '/')) {
      modified = true;
      return `<img ${before}src="/${version}/${srcPath}"`;
    }
    return match;
  });

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  }
}

function walkDir(dir, version) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath, version);
    } else if (fullPath.endsWith('.tsx')) {
      replaceInFile(fullPath, version);
    }
  }
}

versions.forEach(v => {
  const srcDir = path.join(__dirname, v, 'src');
  if (fs.existsSync(srcDir)) {
    walkDir(srcDir, v);
  }
});
