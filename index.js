const options = [
  {
    name: "Balogun",
    id: 1,
  },
  {
    name: "Olaniran",
    id: 2,
  },

  {
    name: "Mutiu",
    id: 3,
  },
];

const option = {
  name: "Sulaimon",
  id: 2,
};

//const newOptions = options.map(item =>)

Object.assign(
  options.find(item => item.id === 2),
  option
);

console.log(options);
//console.log(newOptions);
