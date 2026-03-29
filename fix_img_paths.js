const fs = require('fs');
const path = require('path');

const versions = ['v0', 'v1', 'v2', 'v3'];

function fixFile(filePath, version) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix <img src="/filename" to <img src="/vN/filename"
  // But NOT if it already has the version prefix
  const imgRegex = /(<img\s[^>]*?)src="\/([^v][^"]*?)"/g;
  content = content.replace(imgRegex, (match, before, srcPath) => {
    if (!srcPath.startsWith(version + '/') && !srcPath.startsWith('http') && !srcPath.startsWith('data:')) {
      modified = true;
      console.log(`  Fixed: /${srcPath} -> /${version}/${srcPath} in ${filePath}`);
      return `${before}src="/${version}/${srcPath}"`;
    }
    return match;
  });

  if (modified) {
    fs.writeFileSync(filePath, content);
  }
}

function walkDir(dir, version) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.next') walkDir(fullPath, version);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      fixFile(fullPath, version);
    }
  }
}

versions.forEach(v => {
  console.log(`\nProcessing ${v}...`);
  const srcDir = path.join(__dirname, v, 'src');
  if (fs.existsSync(srcDir)) {
    walkDir(srcDir, v);
  }
});

console.log('\nDone.');
