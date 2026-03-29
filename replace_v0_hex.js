const fs = require('fs');
const path = require('path');

function replaceHex(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/#112A46/g, '#3f3a7d');
  content = content.replace(/#C89B66/g, '#5c54d1');
  content = content.replace(/#b58956/g, '#4a44a8');
  content = content.replace(/#F4EBE1/g, '#f2f5ff');
  content = content.replace(/#FAFAF8/g, '#ffffff');
  content = content.replace(/#E3E7E4/g, '#eaebef');
  fs.writeFileSync(filePath, content);
}

['src/app/page.tsx', 'src/app/about/page.tsx', 'src/components/Header.tsx', 'src/components/Footer.tsx', 'src/app/layout.tsx'].forEach(file => {
  const fullPath = path.join(__dirname, 'v0', file);
  if (fs.existsSync(fullPath)) replaceHex(fullPath);
});
console.log('Replaced hex colors in v0');
