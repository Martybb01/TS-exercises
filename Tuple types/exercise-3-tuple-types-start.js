/**
 * START: Follow the instructions below.
 */
// Add a tuple type annotation for this tuple.
const countryPopulation = ["China", 1412600000];
console.log(countryPopulation);
const countryCurrency = ["Italy", "Euro", "EUR"];
console.log(countryCurrency);
// Add a tuple type annotation that prevents this tuple from being modified.
// Use the readonly modifier and the tuple type syntax: readonly [type, type]
// This will cause a type error. Remove the code that now has a type error.
const countryLanguage = ["Greece", "Greek"];
// countryLanguage.reverse(); --> This will throw an error
console.log(countryLanguage);
export {};
