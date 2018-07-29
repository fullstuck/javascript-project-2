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

console.log("Level 2");

const male = names.filter(name => name.includes("Mr."));
const female = names.filter(name => name.includes("Mrs."));
const mapMale = male.map(name => name + " (male)");
const mapFemale = female.map(name => name + " (female)");

mapMale.forEach(function (element) {
    console.log(element);
});
mapFemale.forEach(function (element) {
    console.log(element);
});

console.log("Level 3");

const search_name = (search) => names.filter(name => name.toLowerCase().includes(search));
console.log(search_name("abdul"));