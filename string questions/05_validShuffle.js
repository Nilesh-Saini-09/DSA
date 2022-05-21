// Check if a string is a valid shuffle of two distinct strings
const validShuffle = (first, second, result) => {
    if (first.length + second.length !== result.length) return false;
    const sortString = str => {
        return str.split('').sort().join('');
    }

    let sortedFirst = sortString(first);
    let sortedSecond = sortString(second);
    let sortedResult = sortString(result);
    let i = 0, j = 0, k = 0;
    while (k !== sortedResult.length) {
        if (i < first.length && first.charAt(i) == result.charAt(k)) { i++ }

        else if (j < second.length && second.charAt(j) == result.charAt(k)) { j++ }
        else { return false }
        k++;
    }

    if (i < sortedFirst.length || j < sortedSecond.length) {
        return false;
    }

    return true;
}