// // //Write a JavaScript function named `isOddOrEven` that takes an integer as input and returns `Odd` if the
// // number is odd and `"Even"` if the number is even.
// // 1. Create a function named `isOddOrEven` that takes a number as a parameter
// // 2. Declare and initialize the variable
// // 3. Use a conditional statement to check if the number is divisible by 2
// // 4. Call the function and print the result

// function funnum(){
   
//    let a=21;
// if(a%2==0)
// {
//     console.log("It is an even number");

// }
// else{
//     console.log("It is an odd number");
// }
// }
// funnum();


// //Create a JavaScript function that determines if a number is positive, negative, or zero and returns a
// corresponding string indicating the type.
// 1. Create a function named that takes a number as a parameter.
// 2. Declare and initialize the variable.
// 3. Use a conditional statement to check if the number is greater than 0, to check if the number is less than 0,
// and to handle the case when the number is zero.
// 4. Return the corresponding string value for each case.
// 5. Call the function and print the result.


// function funname1(num)
// {
//     let a;
    
//         if (num>0){
//             a= "number is positive";
//     }
//     else if(num<0)
//     {
//      a= "number is negative"
//     }
    
//     else
//         {
//          a ="The number is 0"
//     }
//     return a;
// }
// let b=funname1(-1)
// console.log(b)
// //let b=funname(0) we cannot redefine the let 
// //console.log(b)

// //Write a JavaScript program to observe how the same variable name behaves:
// * in *global scope*,
// * inside a *function*, and
// * inside an *if-block* using both var and let.
// 1. Declare a *global variable* named genderType with value "female".
// 2. Create a function named *printGender*.
// 3. Inside the function, declare a *function-scoped* variable color with value "brown" using let.
// 4. Create an *if condition* that checks whether genderType starts with "female".
// 5. Inside this if-block:
//  * Declare a variable age = 30 using *var*.
//  * Create a *block-scoped* variable color = "pink" using let.
//  * Print the color inside the block and observe which value appears.
// 6. Outside the if-block but inside the function, print the value of age.
// 7. Call the function and print the value of genderType globally.
// 8. Now change the global variable named genderType with value “male” and observe the
// functionality of scoping in JavaScript.



    var gendertype = "female";
    function printGender(){
    let colur ="brown"
    if(gendertype.startsWith("female")){
        var age=30
        
            let colur="pink"
            console.log(colur+" inside the block")
        

    }
    console.log(age)
    console.log("outsideblock" + colur)
    }
printGender()
console.log(gendertype);
gendertype="male";
printGender();




    





















