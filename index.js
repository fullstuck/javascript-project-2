const names = [
    "Mr. Fahri",
    "Mr. Abdul",
    "Mrs. Josephhine",
    "Mr. Joseph",
    "Mr. Paul",
    "Mrs. Paula",
    "Mr. Hakim"
];

console.log("Level 0");

names.forEach(function (element) {
    console.log(element);
});

console.log("Level 1");

const man = names.filter(name => name.includes("Mr."));
man.forEach(function (element) {
    console.log(element);
});