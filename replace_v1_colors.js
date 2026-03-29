const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'v1/src/app/globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

css = css.replace(/--foreground: #1B365D;/g, '--foreground: #2c3e38;');
css = css.replace(/--primary: #1B365D;/g, '--primary: #a1b8b2;');
css = css.replace(/--secondary: #D4AF37;/g, '--secondary: #e1bbff;');
css = css.replace(/--secondary-foreground: #ffffff;/g, '--secondary-foreground: #2c3e38;');
css = css.replace(/--accent: #FDFBF7;/g, '--accent: #f4f7f6;');
css = css.replace(/--accent-blue: #F0F4F8;/g, '--accent-blue: #eef2f1;');

fs.writeFileSync(cssPath, css);
console.log('Updated v1 globals.css');
