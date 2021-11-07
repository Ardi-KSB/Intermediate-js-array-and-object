/*
Reverse Array
Ketentuan :
- Membalikkan sebuah array
- Buat fungsi yang menerima parameter data array
- kembalikan dalam bentuk array
*/

const arr = [1, 4, 6, 7];
const arr2 = [7, 4, 2, 1];
function reverse(arr) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i]);
  }
  return newArray.reverse();
}
const newArr = reverse(arr);
const newArr2 = reverse(arr2);
console.log(arr, newArr);
console.log(arr2, newArr2);

/*
Sum Array
Ketentuan:
- Menghitung total nilai yang terdapat pada sebuah array
- Buat fungsi yang menerima parameter data array
- Kembalikan dalam bentuk number
*/
function sumArray() {
  const numbers = [8, 3, 9, 2, 5];
  let sum = 0;
  for (let i = 0; i < numbers.length; i = i + 1) {
    sum = sum + numbers[i];
  }
  return sum;
}
console.log(sumArray([8, 3, 9, 2, 5]));

/*
Linear Search
Ketentuan:
- Mencari data pada array
- Buat fungsi yang menerima parameter angka yg ingin dicari dan data array
- Kembalikan dalam bentuk number
- Kembalikan undefined jika tidak dikembalikan
*/
let number = [8, 3, 9, 2, 5];
let findNumber = [];
for (let i = 0; i < number.length; i++) {
  if (number[i] === 3) {
    findNumber = number[i];
    break;
  }
}
console.log(findNumber);





/*
Fizz Buzz Array
Ketentuan:
Mencari mengubah angka fizz buzz
Buat fungsi yang menerima parameter data array
Kembalikan dalam bentuk boolean
*/

function fizz(fizbus){
  for(let i=0;i<fizbus.length ;i++){
      if(fizbus[i] %3 === 0){
        fizbus[i]='fizz'
      }else if(fizbus[i]%5=== 0){
          fizbus[i]="buzz"
         
      }else if(fizbus[i] % 15 === 0){
          fizbus[i]="fizzbuzz"
      }
  }
  return  fizbus
  }
  console.log(fizz([8 ,3 ,9 ,2 ,5,15]))


