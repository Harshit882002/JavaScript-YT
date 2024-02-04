const name = "Harshit";
const surname = ' Chourasiya';
const repocount = 50;

// console.log(name + surname + repocount);
console.log(`Hello My Name is ${name + surname} and my repo count is ${repocount}.`);

const username = new String("Harshit");
console.log(username.__proto__);
console.log(username[3]);
console.log(username.length);
console.log(username.toUpperCase());
console.log(username.valueOf());
console.log(username.charAt(4));
console.log(username.indexOf('s'));

const str1 = username.substring(0,5);
console.log(str1);

const str2 = username.slice(-7,5);
console.log((str2));

const str3 = "  Harshit    ";
console.log(str3.trim());

const url = "https://harshit.com/harshit%20chourasiya";
console.log(url.replace('%20', '_'));

const str4 = "Harshit-HC-com";
console.log(str4.split('-'));

console.log(username.fontsize());
