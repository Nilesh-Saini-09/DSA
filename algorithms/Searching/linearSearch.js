const search = (arr, x) => {
    for(let i of arr) {
        if(i === x) return true;
    }

    return false;
}