console.log("DOM Exercises");


// Obtain the full HTML doc
console.log(document)

// Access DOM propertires
console.log(document.title);
console.log(document.URL);

// Access DOM Elements
console.log(document.querySelector("h1").style)
console.log(document.querySelector("h1").innerHTML)
console.log(document.querySelector("h1").innerText)

// Access RENDERED propetries of an element (NOT IN THE DOM!)

const title = document.querySelector("h1");
console.log(window.getComputedStyle(title).color);
console.log(window.getComputedStyle(title).getPropertyValue("color"));

console.log(window.getComputedStyle(title).fontFamily)
console.log(window.getComputedStyle(title).getPropertyValue("font-family"))


// innerHTMl vs innerText vs textContent
console.log("innerHTMl vs textContent vs innerText (in order)");

console.log(document.querySelector("header").innerHTML)
console.log(document.querySelector("header").textContent)
console.log(document.querySelector("header").innerText)

// Save an element in a variable
const header = document.querySelector("header")
header.innerHTML = "<h1>Document Object Model</h1>"
header.innerHTML += "<h3>Test page modifying the DOM with JS</h3>"

// Obtaining the CSS in the HTML doc's <style> tag
console.log(document.querySelector("style") );
console.log(document.querySelector("style").textContent)

// Updating the HTML doc's CSS after X milliseconds using setTimeout()
setTimeout(() => {
  header.style.backgroundColor = `#b13cb9`
  // 
  document.querySelector('input[type="submit"]').style.backgroundColor = `#b13cb9`
  // document.querySelector('input[type="submit"]:hover').style.backgroundColor = `#67196d`
}, 4000)

// Updating the HTML doc's CSS stylesheet using setTimeout()
// - (changing the Font family) 

setTimeout(canviarCSS, 6000)

function canviarCSS() {
    document.querySelector("link[rel='stylesheet']").href = "../styles/dom_styles.css"
}


// Selecting more than one element with a selector 
const images = document.querySelectorAll("img")
console.log(images);

for (const img of images) {
    img.src = "https://cataas.com/cat?width=600&height=400"
}

// Adding content to a section 
section2 = document.querySelector("#section2") 
section2OriginalContent = document.querySelector("#section2").innerHTML

section2.innerHTML += '<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, itaque! Explicabo quibusdam harum mollitia dolorem asperiores quis. Cupiditate est, perferendis quasi cumque iste molestiae reprehenderit!</p>'

section2.innerHTML += '<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus amet sunt voluptates consequuntur ad perspiciatis labore error impedit aliquid architecto veniam earum exercitationem aliquam tenetur, <span class="custom">blanditiis voluptatibus explicabo quod numquam enim fugiat!</span> Tenetur doloremque assumenda cupiditate blanditiis saepe necessitatibus omnis!</p>'

console.log(section2OriginalContent);
console.log(section2.innerHTML);


/// Updating the style of a <span> in the different sections (all with: class="custom")

const customTexts = document.querySelectorAll(".custom")

customTexts[0].style.fontWeight = "bold"
customTexts[1].style.fontStyle = "italic"
customTexts[2].style.color = "#b13cb9"
customTexts[3].style.fontVariant = "small-caps"

