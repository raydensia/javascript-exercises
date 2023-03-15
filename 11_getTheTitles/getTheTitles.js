const getTheTitles = function(books) {
    // let array = [];
    // books.forEach((book) => array.push(book.title))
    // return array;

    return books.map((book)=>book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
