const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'v2/src/app/globals.css');
let css = fs.readFileSync(cssPath, 'utf8');
css = css.replace(/--background: #fdfbf9;/g, '--background: #efeef3;');
fs.writeFileSync(cssPath, css);

function replaceHex(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/#2B4C7E/g, '#005f8a');
  content = content.replace(/#E8A84C/g, '#0096d3');
  content = content.replace(/#1e3a63/g, '#007bb5');
  fs.writeFileSync(filePath, content);
}

['src/app/page.tsx', 'src/app/about/page.tsx', 'src/components/Header.tsx', 'src/components/Footer.tsx'].forEach(file => {
  const fullPath = path.join(__dirname, 'v2', file);
  if (fs.existsSync(fullPath)) replaceHex(fullPath);
});
console.log('Updated v2 colors');
