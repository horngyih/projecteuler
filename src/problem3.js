function primeFactors(number){
    let factors = {};
    let n = number||1;
    let p = 2;
    while( n >= (p*p) ){
        if( n % p === 0 ){
            factors[p] = 1;
            n = n /p;
        } else {
            p++;
        }
    }
    factors[n]=1;
    return Object.keys(factors).map(i=>parseInt(i));
}

function problem(n){
    n = n||1;
    return primeFactors(n).sort((a,b)=>b-a)[0];
}

module.exports = {
    problem : problem,
    primeFactors : primeFactors
}
