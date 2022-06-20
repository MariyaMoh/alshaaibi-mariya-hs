// (function test(){
// console.log('test')
// })();
function toText(arr) {
  const recur = ({ name, items }) =>
    name +
    (items?.length
      ? '\n' +
        items
          .map(recur)
          .map((text, i, { length }) =>
            i < length - 1
              ? '├──' + text.replace(/\n/g, '\n│  ')
              : '└──' + text.replace(/\n/g, '\n   ')
          )
          .join('\n')
      : '');
  return arr.map(recur).join('\n');
}

let arr = [
  {
    name: 1,
    items: [
      {
        name: 2,
        items: [{ name: 3 }, { name: 4 }],
      },
      {
        name: 5,
        items: [{ name: 6 }],
      },
    ],
  },
];

console.log(toText(arr));
