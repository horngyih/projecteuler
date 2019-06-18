function range(start, end, step){
    step = step||1;
    let result = [];

    if( start > end ){
        let temp = end;
        end = start;
        start = temp;
    }

    console.log( `Start : ${start}; End : ${end}` );

    for( let i = start; i <= end; i += step ){
        result.push(i);
    }
    return result;
}

module.exports = {
    range : range
};
