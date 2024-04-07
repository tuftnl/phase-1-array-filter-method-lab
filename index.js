// Code your solution here

function findMatching(arr,str) {
    return arr.filter((string) => string.toLowerCase() === str.toLowerCase())
}
function fuzzyMatch(arr,str) {
    return arr.filter((string) => 
    string.toLowerCase().indexOf(str.toLowerCase()) === 0)
}
function matchName(arr,str){
    return arr.filter((record) => record.name === str)
}