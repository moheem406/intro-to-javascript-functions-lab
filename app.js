//excercise 1

function generateEmail(username, domain){ 
     return `${username}@${domain}`;
}
//Test the function
//console.log('Exercise 1 Result:', generateEmail("sara", "company.com")) // sara@company.com
//console.log('Exercise 1 Result:', generateEmail("ali", "example.com")) // ali@example.com
//console.log('Exercise 1 Result:', generateEmail("fatima", "school.edu")) // fatima@school.edu

//excercise 2

// Write your function here
function greetUser(name,timeOfDay){
    return 'Good ${timeOfDay}, ${name}!';

}


// Test your function
console.log('Exercise 2 Result:', greetUser("Sara", "morning")) // Good morning, Sara!
console.log('Exercise 2 Result:', greetUser("Ali", "afternoon")) // Good afternoon, Ali!
console.log('Exercise 2 Result:', greetUser("Fatima", "evening")) // Good evening, Fatima!
