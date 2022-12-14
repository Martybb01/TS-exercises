/**
 * START: Follow the instructions below.
 */
// Make this identity function generic.
// This should fix the type errors on Line 13 and 15.
// Hint: The type for the `value` function parameter should use a type variable.
function identity(value) {
    return value;
}
let value1 = identity("France");
console.log(value1);
let value2 = identity(67413000);
console.log(value2);
// ----
async function fetchData(url) {
    const response = await fetch(url);
    const responseBody = await response.json();
    return responseBody;
}
// Pass the `User` type as a type argument to the generic `fetchData()` function.
// This should fix the type error on Line 35.
let user = await fetchData("http://api.com/user/1");
console.log(user.name);
export {};
