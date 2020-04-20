export function parse(sentence) {
    const newSentence = sentence.replace(/_/g, '').replace(/-/g, ' ').replace(/\'/g, '');
    let words = newSentence.split(' ');
    let acro = words.map(word => word[0]);
    return acro.join('').toUpperCase();
};
