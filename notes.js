console.log('Starting notes.js ...');

// Arrow function is not gonna bind the this keyword and args array
module.exports.addNote = () => {
    console.log('addNote called...');
    return 'New note';
};

module.exports.add = (x,y) => {
    return x + y;
};