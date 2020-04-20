const sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

const addExcitement = (theWordArray, specChar, num) => {
    let buildMeUp = "";
    for (let i = 0; i < theWordArray.length; i++) {
        if (i === 0) {
            buildMeUp = theWordArray[i]
        } else if ((i + 1) % 3 === 0) {
            let numOfChar = "";
            for (let n = 0; n < num; n++) {
                numOfChar += specChar;       
            }
            buildMeUp += " " + theWordArray[i] + numOfChar;
        } else {
            buildMeUp += " " + theWordArray[i];
        }
        console.log(buildMeUp);
    }
}

addExcitement(sentence, "?", 4);