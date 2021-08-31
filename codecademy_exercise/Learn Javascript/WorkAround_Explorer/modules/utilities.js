const addComma = number => {
    let numString = number.toString()
    let numArr = numString.split('')
    let numArrRev = numArr.reverse()
    let dotLoc = numArrRev.indexOf('.')
    for (i = 0; i < Math.floor((numString.length - 1) / 4); i++){
        numArrRev.splice(dotLoc + 4 + i * 4, 0, ',')
    }
    return numArrRev.reverse().join('')
}
