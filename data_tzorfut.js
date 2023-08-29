// Jewelry data object

const jewelryData = [
  { title: "שרשרת חץ וקשת כסף 925", url: "./images/tzorfut/arrow.jpg" },
  { title: "מחזיק מפתחות תלתן ירוק כסף 925", url: "./images/tzorfut/car.jpg" },
  { title: "שרשרת טביעת רגל כסף 925", url: "./images/tzorfut/dog.jpg" },
  { title: "שרשרת פנינה וכסף 925", url: "./images/tzorfut/pnina.jpg" },
  {
    title: "צמיד פנינים וכדורי כסף 925",
    url: "./images/tzorfut/berez.jpg",
  },

  // Add more jewelry items here as needed
];

// Generate the HTML content for jewelry items
function generateJewelryHTML(item) {
  return `

        <div class="img-card">
            <img src="${item.url}" alt="${item.title}">
            <h4>${item.title}</h4>
            </div>
        
    `;
}

// Display jewelry items on the webpage
const jewelryContainer = document.getElementById("jewelryContainer");

jewelryData.forEach((item) => {
  const jewelryHTML = generateJewelryHTML(item);
  jewelryContainer.innerHTML += jewelryHTML;
});
