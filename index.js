// setup parent elements
const header = document.createElement("header");
const banner = document.createElement("div");
banner.classList.add("banner");
const main = document.createElement("main");
const footer = document.createElement("footer");

const parents = [header, banner, main, footer];
parents.forEach(parent => document.body.appendChild(parent));

///////////////////////
///Header Elements/////
//////////////////////

///container div
const headerContainer = document.createElement("div");
headerContainer.className = "container";
header.appendChild(headerContainer);

/// h1.name
const headerName = document.createElement("h1");
headerName.className = "name";
headerContainer.appendChild(headerName);

///anchor element
const headerNameLink = document.createElement("a");
headerNameLink.href = "#";
headerNameLink.innerText = "Best City Guide";
headerName.appendChild(headerNameLink);

///nav element
const headerNav = document.createElement("nav");
headerContainer.appendChild(headerNav);

///4 anchor element
const iceCream = document.createElement("a");
const donuts = document.createElement("a");
const tea = document.createElement("a");
const coffee = document.createElement("a");

const navLinks = [iceCream, donuts, tea, coffee];
const linkText = ["ice cream", "donuts", "tea", "coffee"];

navLinks.forEach((link, i) => {
  link.href = "#";
  link.innerText = linkText[i];
  headerNav.appendChild(link);
});

// linkText.forEach((text, i) => (navLinks[i].innerText = text));
/////////////////////
//Banner Elements////
////////////////////

const addElement = (element, className, text, parent) => {
  const newElement = document.createElement(element);
  newElement.className = className;
  newElement.innerText = text;
  parent.appendChild(newElement);
  return newElement;
};

//img.logo
const bannerImg = document.createElement("img");
bannerImg.className = "logo";
bannerImg.src = "img/city-logo.svg";
bannerImg.alt = "city";
banner.appendChild(bannerImg);

//h1.headline
// const bannerHeadline = document.createElement("h1");
// bannerHeadline.className = "headline";
// bannerHeadline.innerText = "The Best City";
// banner.appendChild(bannerHeadline);

addElement("h1", "headline", "The Best City", banner);

//span.tagline
// const bannerSpan = document.createElement("span");
// bannerSpan.className = "tagline";
// bannerSpan.innerText = "The best drinks and eats in the best city ever.";
banner.appendChild(bannerSpan);
addElement(
  "span",
  "tagline",
  "The best drinks and eats in the best city ever.",
  banner
);

/////////////////////
///Main Elements/////
////////////////////

/// welcome column

//h2

//3 p tags with lorem

///food column
const food = document.createElement("div");
food.classList.add("food", "column");
main.appendChild(food);
//h2
//figure
const figure = document.createElement("figure");
food.appendChild(figure);
//2images
const locImage = document.createElement("img");
locImage.className = "feat-img";
locImage.src = "img/treats.svg";

//figcaption
const caption = document.createElement("figcaption");
const captionHeading = document.createElement("h4");
captionHeading.innerText = "featured Drinks $ Eats";
caption.innerText = "Crissant maccaroon pie...";
food.appendChild(caption);
//h4
//p

///dirrections column
//h2
//3 p tags with lorem with strong at begining

///////////////////
//Footer Elements//
///////////////////

////Create a span

const footerSpan = document.createElement("span");
footerSpan.innerHTML = "&copy; 2017 Residents of Best City Ever";
footer.appendChild(footerSpan);
