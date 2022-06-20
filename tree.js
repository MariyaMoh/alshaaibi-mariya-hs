const fs = require('fs');

const recurse = (file) => {
  const stats = fs.statSync(file);

  if (stats.isDirectory()) {
    console.log(file + " dir");
    fs.readdirSync(file).forEach(child => recurse(`${file}/${child}`));
  } else {
    console.log(file + " file");
  }
}

recurse('./mariya');