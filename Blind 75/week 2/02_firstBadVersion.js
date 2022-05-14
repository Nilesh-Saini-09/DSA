// link -> https://leetcode.com/problems/first-bad-version/

let solution  = (isBadVersion) => {
    return function(n) {
        let start = 1, end = n;
        while(start < end) {
            let mid = Math.floor(start + (end - start) / 2);
            if(isBadVersion(mid)) {
                // look on the left side
                end = mid;
            } else {
                // look on the right side
                start = mid + 1; 
            }
        }
        return start;
    }
}