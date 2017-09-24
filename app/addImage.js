let smallImg = document.createElement('img');
// 必须 require 进来
smallImg.src = require('../imgs/small.jpg');
document.body.appendChild(smallImg);

let bigImg = document.createElement('img');
bigImg.src = require('../imgs/big.jpg');
document.body.appendChild(bigImg);

