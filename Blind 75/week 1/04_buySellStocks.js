// link - https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// method 1
const maxProfit = prices => {
    let maxProfit = 0;
    let min = prices[0];
    for(let i = 1; i < prices.length; i++) {
        min = Math.min(prices[i], min);
        maxProfit = Math.max(maxProfit, prices[i] - min);
    }
    return maxProfit;
};