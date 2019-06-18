const assert = require("assert");
let {problem} = require("../src/problem4");
let p = [];
for( let i=100; i<1000;i++) p.push(i);
let q = p.map(i=>i);
let answer = 906609;

describe( "Problem 4 : Largest Palindrome Product\n A palindromic number reads the same both ways. The largest palindrom made from the product of two 2-digit numbers is 9009 = 91 x 99\n\n Find the largest palindrome made from the product of two 3-digit numbers.", ()=>{
    it(`Answer : ${answer}`, ()=>{
        assert( problem(p,q) === answer, `Answer should be ${answer}` );
    });
});
