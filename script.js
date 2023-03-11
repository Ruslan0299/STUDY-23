//перше завдання
let users = ["Mike", "Nikola", "Tom"];
return (users[2]);//Tom
users[1] = "Alex";
return (users);// ['Mike', 'Alex', 'Tom']
users.splice(-2);
return (users);//['Mike']
return (users.length);//1

//друге завдання
function sumOfArrays (a, b) {
    let sum1 = 0;
    let sum2 = 0;
    //обчислення суми елементів масиву
    for (let i = 0; i < a.length; i++) {
        sum1 += a[i];
    }
    for (let i = 0; i < b.length; i++) {
        sum2 += b[i];
    }
    //порівняня сум масивів
    if (sum1 > sum2) {
        console.log("a > b");
    } else if (sum1 < sum2) {
        console.log("a < b");
    } else {
        console.log("a == b");
    }
}
let a = [5,3,-4,25,32,-16,6];
let b = [21,-30,9,5,12,-19,5,25];
sumOfArrays(a, b);

//третє завдання
let phrase = "I am learning JavaScript rigth now";
splitPhrase = phrase.split(" ");
console.log(splitPhrase);

//четверте завдання
let a = [5, 3, 8, 5, 3, 2, 1, 2];
let b = []; //[5, 3, 8, 2, 1]

a.forEach(function (item) {
  if (!b.includes(item)) {
    b.push(item);
  }
});
console.log(b);// [5, 3, 8, 2, 1]
console.log(a);//[5, 3, 8, 5, 3, 2, 1, 2]

//п'яте завдання
let users = [
  { id: 1, age: 17 },
  { id: 2, age: 18 },
  { id: 3, age: 19 },
  { id: 4, age: 21 },
  { id: 5, age: 17 },
  { id: 6, age: 20 },
  { id: 7, age: 25 },
];
function selectionAge(users) {
  selectionId = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].age > 18 && users[i].age < 21) {
      selectionId.push(users[i].id);
    }
  }
  console.log(selectionId.join(", "));
}
selectionAge(users);
