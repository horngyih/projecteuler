const assert = require("assert");
let problem = require("../src/problem1");
let limit = 1000;
let filter = i=>( i%3===0 || i%5===0 );
let answer = 233168;

describe( "Multiples of 3 and 5\n If we list all natural numbers below 10 that are multiples of 3 or 5, we get 3,5,6, and 9. The sum of these multiples is 23.\n Find the sum of all the multiples of 3 or 5 below 1000.", ()=>{
    it("Should return the expected answer " + answer, ()=>{
        assert( problem(limit) === answer, "Answer : " + answer );
    });
});
