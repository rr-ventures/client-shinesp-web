const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'v3/src/app/globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

css = css.replace(/--color-navy-blue: #[0-9A-Fa-f]+;/g, '--color-navy-blue: #2c4a63;');
css = css.replace(/--color-golden-amber: #[0-9A-Fa-f]+;/g, '--color-golden-amber: #f6ef95;');
css = css.replace(/--color-soft-blue: #[0-9A-Fa-f]+;/g, '--color-soft-blue: #91d7ff;');
css = css.replace(/--color-sage-green: #[0-9A-Fa-f]+;/g, '--color-sage-green: #aeb981;');
css = css.replace(/--color-warm-white: #[0-9A-Fa-f]+;/g, '--color-warm-white: #f0f8ff;');

fs.writeFileSync(cssPath, css);
console.log('Updated v3 globals.css');
