const assert = require("assert");
let {problem} = require("../src/problem3");

let target = 600851475143;
let answer = 6857;

describe( "Problem 3 : Largest Prime factor\n The prime factors of 13195 are 5,7,13 and 29\n\n What is the largest prime factor of the number 600851475143?\n",()=>{
    it( `The answer ${answer}`, ()=>{
        assert( problem(target) === answer, `Should provide the answer : ${answer}` );
    });
});
