
// function countRepetitions(arr) {
//     const countObj = {};
//     arr.forEach(num => {
//       if (countObj[num]) {
//         countObj[num]++;
//       } else {
//         countObj[num] = 1;
//       }
//     });
//     return countObj;
//   }

//   const inputArr = [1, 2, 5, 1];
//   const repetitionCount = countRepetitions(inputArr);

//   console.log(repetitionCount )



// function data(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("id" + id);
//             resolve("success");
//         }, 2000);
//     });
// }

// async function good() {
//     await data(1);
//     await data(2);
//     await data(3);
//     await data(4);
//     await data(5);
//     await data(6);
// }
// good()


// function getVowels(str) {
//    var vowelscount = 0;
//    var string = str.toString();
//    for (var i = 0; i <= string.length - 1; i++) {
//     if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" 
//     || string.charAt(i) == "o" || string.charAt(i) == "u") {
//       vowelscount += 1;
      
//     }
//    }
//    return vowelscount;
// }
