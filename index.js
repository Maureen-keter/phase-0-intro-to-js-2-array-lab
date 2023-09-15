// Write your solution here!
const cats=["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(Ralph){
    cats.push(Ralph)
}
function destructivelyPrependCat(Bob){
    cats.unshift(Bob)
}
function destructivelyRemoveLastCat(){
    cats.pop(-1)
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(Broom){
    const copyOfCats=[...cats,Broom];
    return copyOfCats
}
function prependCat(Arnold){
    const copyOfCats=[Arnold,...cats];
    return copyOfCats
}
function removeLastCat(){
    const newCats=cats.slice(0,-1)
    return newCats
}

function removeFirstCat(){
    const newCats=cats.slice(1)
    return newCats
}