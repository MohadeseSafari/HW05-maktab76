function findingAncestor(generation,gender){
    let Ancestor ={
    "-3":["great grandfather","great grandmother"],
    "-2":["grandfather","grandmother"],
    "-1":["father",	"mother"],
    " 0":["me!","me!"],
    "1": ["son","daughter"],
	"2": ["grandson","granddaughter"],
	"3": ["great grandson","great granddaughter"]

    }
    if (gender =="m"){
        return Ancestor[generation][0];
    }else if(gender == "f"){
        return Ancestor[generation][1];
    }
}
console.log(findingAncestor(2,"f"));
console.log(findingAncestor(-3,"m"));
console.log(findingAncestor(1,"f"));



/*

generation(2, "f") ➞ "granddaughter"
generation(-3, "m") ➞ "great grandfather"
generation(1, "f") ➞ "daughter"

*/