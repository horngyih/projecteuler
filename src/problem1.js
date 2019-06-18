function generate(limit, filter){
    limit = limit || 1;
    filter = (typeof filter === "function")? filter : i=>true;
    let arr = [];
    for( let i = 1; i < limit; i++ ){
        if( filter(i) ){
            arr.push(i);
        }
    }
    return arr;
}

function problem(){
    if( arguments.length > 0 ){
        try{
        return generate(parseInt(arguments[0]), i=>( i%3===0 || i%5===0 ) ).reduce( (sum,i)=>sum+i, 0 );
        } catch( error ){
            console.erro(error);
        }
    }
}

module.exports = {
    problem : problem,
    generate : generate
};
