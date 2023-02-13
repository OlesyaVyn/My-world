console.log("HELLO FROM OUR FIRST JS FILE!!!");
let total = 1 + 3;
console.log("GOODBYE");
let random = Math.random();
if (random < 0.5){
    console.log("YOU NUMBER IS LESS THAN 0.5")
    console.log(random)
}
if (random >= 0.5){
    console.log("YOU NUMBER IS GREATER THAN 0.5")
    console.log(random)
}

const dayOfWeek = "WEDNESDAY";
if (dayOfWeek === "Monday"){
    console.log("I HATE MONDAY")
} else if (dayOfWeek === "Saturday"){
    console.log("I LOVE SATURDAY")
} else if (dayOfWeek === "FRIDAY"){
    console.log("FRIDAYS ARE DECENT")
} else {
    console.log("MEH")
}


//0-5 - FREE
//5-10 - CHILD $10
//10-65 - ADULT $20
//65+ - SENIOR $10

const age = 80;
if (age<5){
    console.log("You are a baby. You get in for free!")
} else if (age < 10){
    console.log("You are a child. You pay $10!")
}else if (age < 65){
    console.log("You are an adult. You pay $20!")
}
else if (age > 65){
    console.log("You are a senior. You pay $10!")
}


const password = prompt ("please enter a new password");
//Password must be 6+ characters
//Password cannot include space
if (password.length >= 6) {
    if(password.indexOf(" ") === -1) {
        console.log("VALID PASSWORD");  
    } else {
        console.log("PASSWORD CANNOT CONTAIN SPACE");
    }
}
else {
    console.log("PASSWORD TOO SHORT");
}
