// console.log("Assessment: Coin Object")
/* 1. Randomly set your coin object's "state" property to be either 
  0 or 1: use "this.state" to access the "state" property on this object.*/
let coin = {
  state: 0,
  flip: function () {
    if (Math.floor(Math.random() * 2)) {
      this.state = 0;
    } else {
      this.state = 1;
    }
  },

  toString: function () {
    /* 2. Return the string "Heads" or "Tails", depending on whether
  "this.state" is 0 or 1. */
    if (this.state == 0) {
      return "Head";
    } else {
      return "tail";
    }
  },

  toHTML: function () {
    let image = document.createElement("img");

    /* 3. Set the properties of this image element to show either face-up or face-down, depending on whether this.state is 0 or 1.*/
    //    let container = document.createElement("div");
    //    container.append (coin.toHTML());
    //    document.body.append(container);

    if (this.state == 0) {
      image.src = "Images/Head.jpg";
    } else {
      image.src = "Images/Tail.jpg";
    }

    return image;
  },
};
// console.log(coin.toHTML());

function display20Flips() {
  // use a loop to flip the coin 20 times. Each time the coin flips, display the result of each flip as a string on the page (make use of your toString() method)
  for (i = 0; i < 20; i++) {
    coin.flip();
    document.body.append(coin.toString());
  }
}

function display20Images() {
  // use a loop to to flip the coin 20 times to display the result as each flip as an HTML IMG element on the page (make use of your toHTML() method)
  // }
  for (i = 0; i < 20; i++) {
    coin.flip();
    document.body.append(coin.toHTML());
  }
}

coin.flip();
document.body.append(coin.toString());
display20Flips();
display20Images();
document.body.append(coin.toHTML());
// console.log(coin.state);
// coin.toString();
// console.log(coin.state);
// coin.flip();
// document.body.append(coin.toString());
// document.body.append(coin.toHTML());
// document.body.append(coin.toString(20));
// document.body.append(coin.toHTML(20));
