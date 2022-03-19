const db = require("../config/db");

class Url {
  constructor(url, urltemp) {
    this.url = url;
    this.urltemp = urltemp;
  }

  static shortIT(url) {
    const alphaUP = [
      "A",
      "B",
      "c",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    const alphaDOWN = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    const main = this.url;
    let trigger = Math.floor(Math.random() * 2);
    let starter, midder;
    let d = new Date();

    let y = d.getFullYear() - 2000;
    let m = d.getMonth() + 1;
    let dt = d.getDate();
    let s = d.getSeconds();

    if (trigger == 1) {
      starter = alphaUP[Math.floor(Math.random() * 26)];
    }
    if (trigger == 0) {
      starter = alphaDOWN[Math.floor(Math.random() * 26)];
    }

    if (trigger == 1) {
      midder = alphaUP[Math.floor(Math.random() * 26)];
    }
    if (trigger == 0) {
      midder = alphaDOWN[Math.floor(Math.random() * 26)];
    }

    let urler = `${starter}${y}${s}${midder}${m}`;
    this.urltemp = urler;

    

    if(url.startsWith("http://") || url.startsWith("https://")){
      console.log("stmt executed");
    } else {
      url = "http://" + url
      console.log(url);
    }

    let sql = `INSERT INTO urls (shorturl, mainurl) VALUES ('${urler}', '${url}')`;
    let checker = db.execute(sql);
    return urler;
  }

  static geturl(url) {
    
    
    let sql = `SELECT * from urls WHERE shorturl = '${url}';`;

    let outer = db.execute(sql);

    return outer;
  }
}

module.exports = Url;
