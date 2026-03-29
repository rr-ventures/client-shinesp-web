const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'v0/src/app/globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

css = css.replace(/--color-brand-navy: #[0-9A-Fa-f]+;/g, '--color-brand-navy: #3f3a7d;');
css = css.replace(/--color-brand-gold: #[0-9A-Fa-f]+;/g, '--color-brand-gold: #d5f2db;'); // Mint green accent
css = css.replace(/--color-brand-white: #[0-9A-Fa-f]+;/g, '--color-brand-white: #ffffff;');
css = css.replace(/--color-brand-light-blue: #[0-9A-Fa-f]+;/g, '--color-brand-light-blue: #f2f5ff;');
css = css.replace(/--color-brand-sand: #[0-9A-Fa-f]+;/g, '--color-brand-sand: #f2f5ff;');
css = css.replace(/--color-brand-sage: #[0-9A-Fa-f]+;/g, '--color-brand-sage: #eaebef;');

fs.writeFileSync(cssPath, css);
console.log('Updated v0 globals.css');
