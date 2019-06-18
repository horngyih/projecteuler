function palindrome( str ){
    if( str.length === 1 ){
        return true;
    } else if( str[0] === str[str.length-1] ){
        if( str.length > 2 ){
        return palindrome(str.substring(1, str.length-1));
        } else {
            return true;
        }
    }
    return false;
}

function product( arr1, arr2 ){
    let result = [];
    arr1 = (Array.isArray(arr1))?arr1:[arr1];
    arr2 = (Array.isArray(arr2))?arr2:[arr2];
    for( i of arr1 ){
        try{
        for( j of arr2 ){
            try{
                result.push(parseInt(i)*parseInt(j));
            } catch(error) {}
        }
        } catch(error){}
    }
    return result;
}

function problem( arr1, arr2 ){
    let arrProduct = product(arr1, arr2);
    let unique = Object.keys( arrProduct.reduce( (map,i)=>{ map[i] = 1; return map; }, {} ) );
    return unique.filter(i=>palindrome(i)).map(i=>parseInt(i)).sort((a,b)=>b-a)[0];
}

module.exports = {
    problem : problem,
    product : product,
    palindrome : palindrome
};
