//arifmetik operatorlar

//masala-1
/*let a = prompt("enter a:");
let b = prompt("enter b:");

let S = a * b;

let P = 2 * (a + b);

alert("Surface: " + S + "\nPerimetr : " + P);*/

//masala-2
/*let d = prompt("enter diametr:");

const π = 3.14;

let r = d / 2;

let L = π * d;

let S = π * r ** 2;

alert("length: " + L + "\nSurface : " + S);*/

//masala-3
/*let a = prompt("enter a:");

let V = a ^ 3;
let S = (6 * a) ^ 2;

alert("Volume: " + V + "\nSurface: " + S);*/

//masala-4
/*let a = prompt("enter a:");
let b = prompt("enter b:");
let c = prompt("enter c:");

let V = a * b * c;
let S = 2 * (a * b + b * c + a * c);

alert("Volume: " + V + "\nSurface: " + S);*/

//masala-5
/*let a = prompt("enter a:");
let b = prompt("enter b:");

let M = (a + b) / 2;

alert("orta arifmetik: " + M);*/

//masala-6
/*let a = prompt("enter a:");
let b = prompt("enter b:");

let c = (a * a + b * b) ** 0.5;
let P = a + b + c;

alert("gipotenuza: " + c + "\nPerimetr: " + P);*/

//masala-7

/*let r1 = prompt("enter r1:");
let r2 = prompt("enter r2:");

const π = 3.14;
let S1 = π * r1;
let S2 = π * r2;
let S = π * (r1 ^ (2 - r2) ^ 2);

alert("fist surface: " + S1 + "\nSecond surface : " + S2 + "\nAyrimasi : " + S);*/

//masala-8
/*let l = prompt("enter L");

const π = 3.14;
let R = l / (2 * π);
let S = (π * R) ^ 2;

alert("radius: " + R + "\nYuzasi: " + S);*/

//masala-9
/*let x1 = prompt("enter x1:");
let y1 = prompt("enter y1:");
let x2 = prompt("enter x2:");
let y2 = prompt("enter y2:");

let = 

alert("lenght: " + L);*/

//masala-10
/*let a = prompt("enter a:");
let b = prompt("enter b:");
let c = prompt("enter c:");
*/

//masala-1 -birliklar va onliklarni chiqarish
/*let number = prompt("uch xonalik son kiriting:");

if (number >= 100 && number <= 999) {
  let birliklar = number % 10;

  let onliklar = (number - birliklar) / 10;

  alert(
    "birliklar xonasidagi raqam: " +
      birliklar +
      "\nonliklar xonasidagi raqam: " +
      onliklar
  );
} else {
  alert("error");
}
  */

//masala-2 -yigindilarini topish//
/*let number = prompt("uch xonalik son kiriting:");

let birliklar = number % 10;
let onliklar = ((number % 100) - birliklar) / 10;
let yuzliklar = (number - (number % 100)) / 100;

let yigindi = yuzliklar + onliklar + birliklar;

alert("raqamlar yigindisi: " + yigindi);*/

//masala-3 -raqamlarni teskari yozilishi

/*let number = prompt("uch xonalik son kiriting:");

let birliklar = number % 10;
let onliklar = ((number % 100) - birliklar) / 10;
let yuzliklar = (number - (number % 100)) / 100;

let teskariSon = birliklar * 100 + onliklar * 10 + yuzliklar;

alert("teskari tartibdagi son: " + teskariSon);
*/

//masala-4 -onliklarni yuzliklarga almashtirish
/*let number = prompt("uch xonali son kiriting:");

let birliklar = number % 10;
let onliklar = ((number % 100) - birliklar) / 10;
let yuzliklar = (number - (number % 100)) / 100;

let yangiNumber = onliklar * 100 + yuzliklar * 10 + birliklar;

alert("Natija: " + yangiNumber);*/

//masala-5 onliklarni birliklarni almashtirish
/*let number = prompt("uch xonali son kiriting:");

let birliklar = number % 10;
let onliklar = ((number % 100) - birliklar) / 10;
let yuzliklar = (number - (number % 100)) / 100;

let yangiNumber = yuzliklar * 100 + birliklar * 10 + onliklar;

alert("Natija: " + yangiNumber);*/

//masala-6
/*let number = prompt("tort xonali son kiriting:");

let mingliklar = ((number - (number % 1000)) / 1000) % 10;
alert("mingliklar xonasi: " + mingliklar);*/

//masala-7
/*let N = prompt("n sekundni kiriting:");

let minut = (N - (N % 60)) / 60;

alert("minut: " + minut);*/

//masala-8
/*let N = prompt("n sekundni kiriting:");

let soat = (N - (N % 3600)) / 3600;

alert("soat: " + soat);*/

//masala-9
/*let N = prompt("n sekundni kiriting:");

let minut = (N - (N % 60)) / 60;
let sekund = N % 60;

alert("minut: " + minut + "\nsecund: " + sekund);*/

//masala-10
/*let N = prompt("n sekundni kiriting:");

let soat = (N - (N % 3600)) / 3600;
let sekund = N % 3600;
let minut = (sekund - (sekund % 60)) / 60;
sekund = sekund % 60;

alert("soat: " + soat + "\nsecund: " + sekund + "\nminut: " + minut);*/

//boolean masalalari

//masala-1
/*let a = 5;
 if (a > 0) {
   console.log(true);
 } else {
   console.log(false);
 }
   */
// masala-2
/*let a = 5;
 if (a % 2 == 0) {
   console.log(false);
 } else {
   console.log(true);
 }
*/

// masala-3
/*let a = 5;
if (a % 2 == 0) {
  console.log(true);
} else {
  console.log(false);
}
  */

// masala-4
/*let a = 2;
 let b = 3;
 if ((a) => 2 && b <= 3) {
   console.log(true);
 } else {
   console.log(false);
 }
   */
// masala-5;
/*let a = 2;
 let b = -3;
 if ((a) => 2 && b <= -2) {
   console.log(true);
 } else {
   console.log(false);
 }
   */

//  masala-6;
/*let a = 2;
 let b = 4;
 let c = 5;
 if (a <= b && b <= c) {
   console.log(true);
 } else {
   console.log(false);
 }
   */

// masala-7
/*let a = 1;
 let b = 2;
 let c = 3;
 if (b > a && b < c) {
   console.log(true);
 } else {
   console.log(false);
 }
   */

// masala-8
/*let a = 5;
 let b = 7;
 if (a % 2 == 1 && b % 2 == 1) {
   console.log(true);
 } else {
   console.log(false);
 }
   */
// masala-9

/*let a = 5;
 let b = 4;
 if (a % 2 == 1 || b % 2 == 1) {
   console.log(true);
 } else {
   console.log(false);
 }
   */
// masala-10;
/*let a = 5;
 let b = 4;
 if(a % 2 == 1 && b % 2 == 0 ){
     console.log(true)
 }else{
     console.log(false)
 }
     */

// masala-11
/*let a = 5;
 let b = 6;
 if (a % 2 == 0 || (a % 2 == 1 && b % 2 == 0) || b % 2 == 1) {
   console.log(true);
 } else {
   console.log(false);
 }
   */

// masala-12;
/*let a = 5;
 let b = 10;
 if (a > 0 && b > 0) {
   console.log(true);
 } else {
   console.log(false);
 }*/

// masala-13
/*let a = -1;
 let b = 5;
 let c = -8;
 if (a > 0 || b > 0 || c > 0) {
   console.log(true);
 } else {
   console.log(false);
 }*/

// masala-14;
/*let a = 1;
 let b = -5;
 let c = -6;
 if (a > 0 && b < 0 && c < 0) {
   console.log(true);
 } else if (b > 0 && a < 0 && c < 0) {
   console.log(true);
 } else if (c > 0 && a < 0 && b < 0) {
   console.log(true);
 } else {
   console.log(false);
 }
   */
// masala-15
/*let a = -1;
 let b = 5;
 let c = 6;
 if (a > 0 && b > 0 && c < 0) {
   console.log(true);
 } else if (b > 0 && a > 0 && c < 0) {
   console.log(true);
 } else if (c > 0 && a > 0 && b < 0) {
   console.log(true);
 } else {
   console.log(false);
 }
 */
// masala-16;
/*let a = 21;
 if (a > 10 && a % 2 == 0) {
   console.log(true);
 } else {
   console.log(false);
 }*/

//masala-17;
/* let a = 123;
 if (a > 100 && a % 2 == 1) {
   console.log(true);
 } else {
   console.log(false);
 }
   */
// masala-18
/* let a = 15;
 let b = 15;
 let c = 1;
 if (a == b || a == c) {
   console.log(true);
 } else if (b == a || b == c) {
   console.log(true);
 } else if (c == a || c == b) {
   console.log(true);
 } else {
   console.log(false);
 }
*/
//masala-19
/*alert(
  "Berilgan uchta butun sonlarning hech bo'lmaganda bir jufti o'zaro qarama-qarshi"
);
 let num1 = prompt("A sonini kiriting:");
 let num2 = prompt("B sonini kiriting:");
 let num3 = prompt("C sonini kiriting:");
 if (num1 == -num2  num2 == -num3  num1 == -num3) {
   alert("true");
 } else {
   alert("flase");
}

//masala-20
/*alert("Ushbu sonning raqamlari ketama-ket o'suvchi bo'lib joylashgan.");

let num = prompt("sonni kiriting:");
if (
  (num - (num % 100)) / 100 < ((num % 100) - (num % 10)) / 10 &&
  ((num % 100) - (num % 10)) / 10 < num % 10
) {
  alert(true);
} else {
  alert(false);
}*/

//masala-21
/*alert(
  "Ushbu sonning raqamlari ketama- ket o'suvchi bo'lib joylashgan yoki kamayuvchi ketma-ketlikka ega".

);
let num = prompt("sonni kiriting:");
if (
  ((num - (num % 100)) / 100 < ((num % 100) - (num % 10)) / 10 &&
    ((num % 100) - (num % 10)) / 10 < num % 10) ||
  ((num - (num % 100)) / 100 > ((num % 100) - (num % 10)) / 10 &&
    ((num % 100) - (num % 10)) / 10 > num % 10)
) {
  alert(true);
} else {
  alert(false);
}*/

//masala-22
/*alert(
  "Ushbu sonni chapdan o'qiganda ham, o'ngdan o'qiganda ham bir xil."
);
let num = prompt("sonni kiriting:");
if (num < 1000 && num > 99 && (num - (num % 100)) / 100 == num % 10) {
  alert(true);
} else {
  alert(false);
}*/
