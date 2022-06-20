const fs = require('fs');

const recurse = (file, depth = 0) => {
  const stats = fs.statSync(file);

  if (stats.isDirectory()) {
    console.log(" ".repeat(depth) + " -> " + file + " dir");
    fs.readdirSync(file).forEach(child => recurse(`${file}/${child}`, depth + 1));
  } else {
    console.log(" ".repeat(depth) + " -- " + file + " file");
  }
}

recurse('./mariya');