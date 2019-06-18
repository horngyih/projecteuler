function* fibonacci(limit){
    limit = (limit)?limit:100;

    let lastlast = 0;
    let last = 1;
    let current = 1;
    while( limit < 0 || current < limit ){
        yield current;
        current = last + lastlast;
        lastlast = last;
        last = current;
    }
}

function problem(limit){
    limit = (limit>0)?limit:1;
    fibGen = fibonacci(limit);
    i = fibGen.next();
    sum = 0;
    do{
        if( i.value % 2 === 0 ){
            sum +=i.value;
        }
        i = fibGen.next();
    } while(!i.done);
    return sum;
}

module.exports = {
    problem : problem,
    fibonacci : fibonacci
};
