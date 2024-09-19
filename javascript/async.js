// // let promise=Promise((resolve, reject) => {
// //     console.log("promise is working");
// // });
// // promise = resolve,reject,pending

// // const { reject } = require("async");


// // let promisse = new Promise((resolve,reject) => {
// //     console.log("birthday party dega");
// //     reject("party nhi dia");
// // });



// // function data(id) {
// //     return new Promise( (resolve, reject) => {
// //         setTimeout(() => {
// //             console.log("id" +id);
// //             resolve("success");
// //             // reject("error");
// //         }, 6000);
// //     });
// // }
// // data(1).then(() => {
// //     data(2).then(() => {
// //         data(3).then(( ) => {});
// //     });
// // });



// let count = 0;
// function data(id) {
//         return new Promise( (resolve, reject) => {
//             setTimeout(() => {
//                 console.log("id" +id);
//                 count++;
//                 resolve("success");
//                 // reject("error");
//             }, 6000);
//             // setInterval(() => {
//             //     console.log("id" + id);
//             // },2000);
            
//         });
//     }
//     data(1).then(() => {
//         data(2).then(() => {
//             data(3).then(() => {
//                 console.log("ID printed ${count} times");
//             });
//         });
//     });


    
let count = 0;

function data(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("id" + id);
      count++;
      resolve("success");
    }, 6000);
    
});
}

data(1).then(() => {
  data(2).then(() => {
    data(3).then(() => {
      console.log(`ID printed ${count} times`);
    });
  });
});
