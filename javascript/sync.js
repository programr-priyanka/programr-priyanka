// console.log("hello world!");
// console.log("hello world!");
// for(let i=0; i<20; i++){
//     console.log("inside for loop");
// }
// console.log("hello world!");
// console.log("hello world!");


// console.log("before settimeout");
// setTimeout(function () {
//     console.log("inside settimeout");
// }, 5000);
// console.log("after settimeout");


// setInterval(() => {
//     console.log("calling setinterval");
// }, 2000);



// listerens;

// button = document.querySelector("#btn");
// head=document.queryselector("#h1");
// button.addEventListener("click", function() {

//     head.innerHTML ="i was clicked";
// });



function data(id, fun) {
    setTimeout(() => {
        console.log("id" + id);
        if (fun) {
            fun();

        }

    },2000);

}
data(1, () => {
    data(2,() => {
        data(3,() => {
            data(4);
        })
    });
});
