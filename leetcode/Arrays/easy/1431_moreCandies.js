// using built in methods
var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies);
    return candies.map(candie => candie + extraCandies >= max)
};

// method 2
var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies);
    for(let i = 0; i<candies.length; i++) {
        if(candies[i] + extraCandies >= max) {
            candies[i] = true;
        } else {
            candies[i] = false;
        }
    }
    
    return candies;
};