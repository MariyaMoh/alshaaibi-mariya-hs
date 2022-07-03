const fs = require('fs');

const recurse = (file, depth = 0) => {
fs.stat(file, (err, stats) => {
if (stats.isDirectory()) {
console.log(" ".repeat(depth) + " -> " + file + " dir");
fs.readdir(file, (err, files) => {
files.forEach(child => recurse(`${file}/${child}`, depth + 1))
})
} else {
console.log(" ".repeat(depth) + " -- " + file + " file");
}
});

}

recurse('./mariya');
