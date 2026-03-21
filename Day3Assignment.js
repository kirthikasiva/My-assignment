// // // Write a function to reverse the string.
// // // 1. Convert the input into characters
// // // 2. Loop them in reverse direction
// // // 3. Concatenate the string
// // // 4. Print the new string
// // // Write a function to check the given string is a palindrome
// // // [If the given string and reverse string are the same, it is a palindrome]
// // // 1. Check if the reverse string and original string are the same
// // // 2. Return true if same, else the false

// // function reverseString(){

// // let input ="Kirthika"
// // let reversed="";
// // for(let i=input.length-1;i>=0;i--)
// // {
// // reversed= reversed+input[i];

// // }

// // console.log(reversed);
// // if(reversed==input)
// // {
// //     console.log("It is a palindrome")
// // }
// // else{
// //     console.log("It is not palindrome")
// // }
// // }
// // reverseString()

// // //Example1: Hello world""
// // let s="Hello World"
// // let a= s.split(" ");
// // console.log(a)
// // let b=a[a.length-1];
// // console.log(b)
// // console.log(b.length);

// //example2:
// // let s1=" fly me to the moon  "
// // let a1=s1.trim();
// // console.log(a1)
// //  b1=a1.split(" ")
// //  console.log(b1)
// // c1= b1[b1.length-1]
// // console.log(c1)
// // console.log(c1.length)

// //example3:
// let a="silent"
// let b="listen"
// let z="";
// c =a.split("")
//  console.log(c);
//  d=a.split("")
// console.log(d);
// // for(let i=a.length-1;i=0;i--)
// // {
// //     z=z+a[i]
// // }
// // console.log(z);
// // if(z==d)
// // {
// //     console.log("It is an anagarm")
// // }
// // else{
// //     console.log("It is not an anagram")
// // }
// if (c.length=d.length)
// {
//     console.log("Its is an angarm")

// }
// else 
// {
//     console.log("Is is not an angram")
// }


//3rd program
//Create two functions : launchBrowser, runTests where,
function launchbrowser(browsername)

    {
    
    if(browsername=="chrome")
    {
        console.log(" launch is chrome")
    }
    else{
        console.log("Otherbroswer")
    }
    }
    function runTestswhere(testtype)
    {

switch (testtype) {
    case "smoke":
        console.log("running smoke test")
        break;
        case "sanity":
        console.log("running sanitytest")
        break;
        case "regression":
        console.log("running regression test")
        break;

    default:
        console.log("running default smoke test")
        break;
}
    }
    console.log("Calling the function in launch broswer")
    launchbrowser("chrome")
    launchbrowser("firefox")
    console.log("calling runtestwhare")
    runTestswhere("smoke")
    runTestswhere("sanity")
    runTestswhere("notest")















