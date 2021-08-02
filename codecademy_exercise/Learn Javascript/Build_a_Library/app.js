class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title() {
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get rating() {
      return this._ratings;
    }
    set isCheckedOut(checkOutStatus) {
  
    }
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
    getAverageRating() {
      let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating);
      return (ratingsSum / this._ratings.length).toFixed(1);
    }
    addRating(newRating) {
      this._ratings.push(newRating);
    }
}
  
class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get page() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.rating);
console.log(`Aerverage rating: ${historyOfEverything.getAverageRating()}`);
console.log('-----------------');
console.log(historyOfEverything);

console.log('=========================');

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.rating);
console.log(`Aerverage rating: ${speed.getAverageRating()}`);
console.log('-----------------');
console.log(speed);  