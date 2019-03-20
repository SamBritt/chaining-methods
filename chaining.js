const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

//sort in desc order:
let descSort = integers.sort((a, b) => b - a);
console.log(descSort)
//filter out values greater than 19 
let filterDescSort = descSort.filter(e => e > 19)
console.log(filterDescSort)
//multiply by 1.5 then subtract by 1
let multDescSort = filterDescSort.map(e => (e * 1.5) - 1)
console.log(multDescSort)
//Sum all of 'em
let sumDescSort = multDescSort.reduce((acc, curr) => acc + curr);
console.log(sumDescSort);

