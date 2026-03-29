const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('Shine Teoh') && !content.includes('Shine Yin Teoh')) {
    // Has old name but not new name - replace
    content = content.replace(/Shine Teoh/g, 'Shine Yin Teoh');
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } else if (content.includes('Shine Teoh')) {
    // Has both old and new, fix remaining old
    const remaining = (content.match(/(?<!Yin )Shine Teoh/g) || []).length;
    if (remaining > 0) {
      // Replace "Shine Teoh" but not "Shine Yin Teoh"
      content = content.replace(/(?<!\bYin )Shine Teoh/g, 'Shine Yin Teoh');
      // Fix any double "Yin Yin" if the lookbehind failed
      content = content.replace(/Shine Yin Yin Teoh/g, 'Shine Yin Teoh');
      fs.writeFileSync(filePath, content);
      console.log(`Fixed remaining: ${filePath}`);
    }
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.next') walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      fixFile(fullPath);
    }
  }
}

['v0', 'v1', 'v2', 'v3'].forEach(v => {
  const srcDir = path.join('/workspace/client-shinesp-web', v, 'src');
  if (fs.existsSync(srcDir)) walkDir(srcDir);
});
console.log('Done.');
