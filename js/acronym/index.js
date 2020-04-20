function getAcronym(sentence){
    let words = sentence.split(' ');
    let acro = words.map(word => word[0]);
    return acro.join('').toUpperCase();
};

const acronym = getAcronym("Portable Network Graphics");

console.log(acronym);