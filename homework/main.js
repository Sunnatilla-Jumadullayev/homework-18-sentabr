console.log(`start`);
// 20 - masala
{
  console.log(`20-masala`);
  let array = [1, 2, 3, 4, 5];
  function ortaQiymat(arr) {
    let orta_qiymat = 0;
    let orta_qiymat1 = 0;
    let orta_qiymat2 = 0;
    if (arr.length % 2 !== 0) {
      orta_qiymat = arr[Math.floor(arr.length / 2)];
    } else {
      orta_qiymat1 = arr[arr.length / 2];
      orta_qiymat2 = arr[arr.length / 2 - 1];
      orta_qiymat = (orta_qiymat1 + orta_qiymat2) / 2;
    }

    console.log(orta_qiymat);
  }
  ortaQiymat(array);
}
// 21 - masala
{
  console.log(`21 - masala`);
  const primeNumber = (num) => {
    let count = 0;
    for (let n = 1; n <= num; n++) {
      if (num % n === 0) {
        count++;
      }
    }
    if (count === 2) {
      console.log(`${num} tub son`);
    } else {
      console.log(`${num} tub son emas`);
    }
    console.log(count);
  };
  primeNumber(6);
}
// 22 - masala
{
  console.log(`22 - masala`);
  function daraja(n) {
    let count = 0;
    for (; n > 1; n /= 2) {
      count++;
    }
    console.log(count);
  }
  daraja(64);
}
// 23 - masala
{
  console.log(`23 - masala`);
  function mukammalSon(num) {
    let count = [];
    for (let i = 0; i < num; i++) {
      if (num % i === 0) {
        count.push(i);
      }
    }

    let result =
      count.reduce((a, b) => a + b, 0) === num
        ? `${num} mukammal son`
        : `${num} mukammal son emas`;

    console.log(result);
  }
  mukammalSon(28);
  mukammalSon(48);
}
// 24 - masala
{
  console.log(`24 - masala`);
  function number(num) {
    let result = Array.from(String(num), Number).length;
    console.log(`${num} xonalari soni ${result} ta`);
  }
  number(34645);
}
// 25 - masala
{
  console.log(`25 - masala`);
  function fn(str) {
    let str1 = ``;
    let count = 0;
    let strArray = str.toLowerCase().split("");
    for (let i = 0; i < strArray.length; i++) {
      const element = strArray[i];
      if (element === `a`) {
        count++;
      }
    }
    console.log(
      `(${str}) siz kiritgan sozda ${count} marta a harfi qatnashgan`
    );
  }
  fn(`qaawrreaa`);
}
// 26 - masala
{
  console.log(`26 - masala`);
  let str1 = `Ish ko‘p, maosh kam: Yevropa shifoxonalarida “kadrlar inqirozi” yuz bermoqda`;
  function enUzunSoz(str) {
    let strArray = str.split(" ");
    let engUzun = strArray[0];
    for (let i = 0; i < strArray.length; i++) {
      const element = strArray[i];
      if (element.split("").length > engUzun.split("").length) {
        engUzun = element;
      }
    }
    console.log(strArray);
    console.log(engUzun);
  }
  enUzunSoz(str1);
}
// 27 - masala
{
  console.log(`27 - masala`);
  let str = ``;
  function type_Of(argument) {
    if (typeof argument === `string`) {
      return console.log(typeof argument);
    } else if (typeof argument === `number`) {
      return console.log(typeof argument);
    } else {
      return console.log(0);
    }
  }
  type_Of(23);
}
// 28 - masala
{
  console.log(`28 - masala`);
  let soz = `mukammal`;
  function reverseStr(str) {
    let strReverse = str.split("").reverse().join("");
    console.log(strReverse);
  }
  reverseStr(soz);
}
// 29 - masala
{
  console.log(`29 - masala`);
  const numberCount = (str) => {
    let strArray = str.split("");
    let count = 0;
    for (let i = 0; i < 10; i++) {
      for (let g = 0; g < strArray.length; g++) {
        const element = +strArray[g];
        if (i === element) {
          count++;
        }
      }
    }
    return console.log(`${str} siz kiritgan so'zda ${count} ta son qatnashgan`);
  };
  numberCount(`qw23rhu56kg`);
}
// 30 - masala
{
  console.log(`30 - masala`);
  reverseNumber(123456789);
  function reverseNumber(num) {
    if (typeof num === `number`) {
      let result = +Array.from(num.toString(), Number).reverse().join("");
      return console.log(result);
    }
  }
}
// 31 - masala
{
  console.log(`31 - masala`);
  string = `men kitob oqishni yahshi koraman, ismim sunnatilla`;
  function objectPush(str) {
    let strArray = str.split(" ");
    let result = {};
    for (let i = 0; i < strArray.length; i++) {
      let element = strArray[i];
      let value = element;

      result[element] = element.length;
    }
    console.log(result);
  }
  objectPush(string);
}
// 32 - masala
{
  let sentence = `Foydalanilmayotgan yerlar, bo‘sh adirlarda mevali bog‘lar barpo etiladi`;
  console.log(`32 - masala`);
  function minMaxWord(str) {
    let strArray = str.split(" ");
    let minWord = strArray[0];
    let maxWord = strArray[0];
    let result = {};
    for (let i = 0; i < strArray.length; i++) {
      const element = strArray[i];
      if (minWord.length > element.length) {
        minWord = element;
      }

      if (maxWord.length < element.length) {
        maxWord = element;
      }
    }
    result.maxWord = maxWord;
    result.minWord = minWord;

    return console.log(result);
  }
  minMaxWord(sentence);
}

console.log(`end`);
