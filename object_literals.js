const book1 = {
    title: 'Book one',
    author: 'John Doe',
    year: '2018',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

const book2 = {
    title: 'Book two',
    author: 'Jane Doe',
    year: '2016',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

console.log(book1.title);
// Book one

console.log(book2.getSummary());
// Book Two was written by Jane Doe in 2016

console.log(Object.values(book2));
// ["Book Two", "Jane Doe", "2016"]

console.log(Object.keys(book2));
// ["title", "author", "year", "getSummary"]