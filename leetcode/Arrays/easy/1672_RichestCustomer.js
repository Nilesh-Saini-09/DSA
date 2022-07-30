var maximumWealth = accounts => {
    return Math.max(...accounts.map(i => {
        return i.reduce((a,b) => a+b, 0)
    }))
}