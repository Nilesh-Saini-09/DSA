// method 1
const checkRotation = (str1, str2) => {
    let temp = str1+str2;
    return (str1.length === str2.length) && (temp.indexOf(str2) !== -1)
}

// method 2 using queues
const checkRotation2 = (str1, str2) => {
    let q1 = [];
    for(let i of str1) {
        q1.push(i);
    }

    let q2 = [];
    for(let j of str2) {
        q2.push(j);
    }

    let qLen = q2.length;
    while(qLen--) {
        let ch = q2[0];
        q2.shift();
        q2.push(ch);
        if(q1.join('') === q2.join('')) return true;
    }

    return false;
}
