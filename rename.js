const fs = require('fs');
const path = require('path');

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.md')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('Shine Teoh')) {
        content = content.replace(/Shine Teoh/g, 'Shine Yin Teoh');
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

['v0', 'v1', 'v2', 'v3'].forEach(v => {
  const srcDir = path.join(__dirname, v, 'src');
  if (fs.existsSync(srcDir)) {
    walkDir(srcDir);
  }
});
