const body = document.body;
//div yaratmaq
const cardElem = document.createElement("div");
cardElem.classList.add("card");

const cardImg = document.createElement("img");
cardImg.classList.add("card-img-top");
cardImg.setAttribute('src', 'https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg');
cardImg.setAttribute('alt', 'cat');

const cardBody = document.createElement("div");
cardBody.classList.add("card-body");

const cardTitle = document.createElement("h5");
cardBody.classList.add("card-title");
cardBody.textContent = "Card title";

const cardText = document.createElement("p");
cardText.classList.add("card-text");
cardText.textContent = "Some quick example text to build on the card title and make up the bulk of the card's content.";

const cardTextA = document.createElement("a");
cardTextA.setAttribute('href', '#')
cardTextA.classList.add("btn", "btn-primary");
cardTextA.textContent = "Go somewhere";

cardBody.append(cardTitle,cardText,cardTextA);
cardElem.append(cardImg,cardBody);
body.append(cardElem);