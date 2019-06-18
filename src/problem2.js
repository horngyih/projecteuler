function* fibonacci(limit){
    limit = (limit>0)?limit:-1;
    let lastlast = 0;
    let last = 1;
    let current = 1;
    while( current <= limit ){
        yield current;
        current = (lastlast||1)+last;
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
    } while(!i.done)
}

module.exports = problem;
