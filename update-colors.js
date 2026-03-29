const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('v0/src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Colors
    content = content.replace(/#1B365D/g, '#112A46');
    content = content.replace(/#E8A84C/g, '#C89B66');
    content = content.replace(/#F0F4F8/g, '#FAFAF8');
    
    // Hovers
    content = content.replace(/hover:bg-amber-600/g, 'hover:bg-[#b58956]');
    content = content.replace(/hover:bg-blue-900/g, 'hover:bg-[#1a3f69]');
    
    // Typography
    content = content.replace(/font-bold text-\[#112A46\]/g, 'font-serif font-medium text-[#112A46]');
    content = content.replace(/text-3xl font-serif/g, 'text-3xl font-serif'); // prevent double
    content = content.replace(/text-4xl font-serif/g, 'text-4xl font-serif'); // prevent double
    content = content.replace(/text-2xl font-serif/g, 'text-2xl font-serif'); // prevent double
    
    // Shape & Shadow
    content = content.replace(/rounded-md/g, 'rounded-full');
    content = content.replace(/rounded-xl/g, 'rounded-[24px]');
    content = content.replace(/shadow-sm/g, 'shadow-[0_8px_30px_rgb(0,0,0,0.04)]');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated', filePath);
    }
  }
});
