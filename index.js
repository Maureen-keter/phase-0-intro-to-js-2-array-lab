const cats =["Milo", "Otis", "Garfield"]


function destructivelyAppendCat(Aki){
    cats.push(Aki);
}
console.log(cats)

function destructivelyPrependCat(Bob){
    cats.unshift(Bob);
}
console.log(cats)

function destructivelyRemoveLastCat(cat){
    cats.pop(cat);
}
console.log(cats)

function destructivelyRemoveFirstCat(cat){
    cats.shift(cat);
} 
console.log(cats)

function appendCat(cat){
    const newCats=[...cats, cat];
    return newCats;
}
function prependCat(rose){
    const newCats=[rose, ...cats];
    return newCats;
}

function removeLastCat(){
    const newCats=cats.slice(0,-1)
    return newCats;
}

  function removeFirstCat(){
    const newCats=cats.slice(1)
    return newCats;

  }