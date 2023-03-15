const removeFromArray = function(array, ...args) {
    // args = Array.from(args);
    // let index;
    // //const args = [...arguments];
    // for (let arg of args) {
    //     index = array.indexOf(arg);
    //     if (index !== -1) {
    //         array.splice(index, 1);
    //     }
    // }
    // return(array);
    return array.filter(val => !args.includes(val));

};

// Do not edit below this line
module.exports = removeFromArray;
