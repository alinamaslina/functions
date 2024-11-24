// function sayHello (name) {
//     alert("Hello," + name)
// }
// sayHello("Alina");

// let userName = prompt("enter your name");
// sayHello(userName)

// function greetUser (name=" dear, ", timeOfTheDay="day") {
//     alert("hello," + name + timeOfTheDay)
// }
// greetUser();
// greetUser("Анна"); 
// greetUser('Иван', 'утро');

// function isEven (number) {
//     if (!(number%2)) {
//         alert("even number");
//     } else {
//         alert("odd number");
//     }
// }
// isEven (4);

// function repeatText (text, n) {
//     let repeatText="";
//     if (n<1) {
//         alert("wrong value n")
//     } else {
//         for (let i = 1; i <= n; i++) {
//             repeatText = repeatText + text
//         }
//     }
//     alert(repeatText);
// }

// repeatText('Привет', 3); // "Привет Привет Привет" 

let login = prompt("Write your login:");

if (login === "admin") {
    let pass = prompt("Enter your password:");
    
    if (pass === "owner") {
        alert("Welcome!");
    } else if (pass === "" || pass === null) {
        alert("Declined");
    } else {
        alert("Wrong password");
    }
} else if (login === "" || login === null) {
    alert("Declined");
} else {
    alert("I don't know you");
}
    