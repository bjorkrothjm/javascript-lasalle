console.log("%c Event listeners practice", "font-weight: bold" );

// Adding 
function clickInSubtitle() {
  console.log("You've clicked in the subtitle");
}

let subtitle = document.querySelector("h3");
subtitle.addEventListener("click", clickInSubtitle);

// Adding a event listeners to all paragraphs 
function clickInParagraph() {
  console.log("You've clicked in a paragraph");
}

let paragraphs = document.querySelectorAll("p")

/// Using a function 
// for (let i = 0; i < paragraphs.length; i++) {
//   paragraphs[i].addEventListener("click", clickInParagraph);

// }

/// Using a an arrow function 
// for (let i = 0; i < paragraphs.length; i++) {
//   paragraphs[i].addEventListener("click", () => console.log(`You've clicked in paragraph number ${i+1}`));
// }

/// Using forEach + arrow function
paragraphs.forEach((para, i ) => {
  para.addEventListener("click", () => console.log(`You've clicked in paragraph number ${i+1}`) );
});

console.log(paragraphs.length);





