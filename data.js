// Jewelry data object

const jewelryData = [
  { title: "עגילי פנינה", url: "./images/jewerly/greenearingspnina.jpg" },
  { title: "צמיד חרוזים בגווני ירוק", url: "./images/jewerly/greentzamid.jpg" },
  { title: "שרשרת פנינים ארוכה", url: "./images/jewerly/lightpninim.jpg" },
  { title: "צמיד חרוזים ורוד", url: "./images/jewerly/pink.jpg" },
  {
    title: "עגילי פנינה וחרוזים ורודים",
    url: "./images/jewerly/pninaearings.jpg",
  },
  { title: "שרשרת כוכב ים", url: "./images/jewerly/starfish.jpg" },
  { title: "צמיד פנינים ורוד", url: "./images/jewerly/tzamidpnina.jpg" },
  {
    title: "צמיד חרוזים ופנינה",
    url: "./images/jewerly/tazamidGreenPnina.jpg",
  },
  { title: "עגיל חישוק חרוזים", url: "./images/jewerly/AgilHarooziBoozi.jpg" },
  {
    title: "עגיל חגיגי פנינה",
    url: "./images/jewerly/AgilHagigiPninaREPLACE.jpg",
  },
  {
    title: "עגיל חרוזי מארבל",
    url: "./images/jewerly/agilBrown.jpg",
  },
  {
    title: "עגיל חישוק פנינה צבעוני",
    url: "./images/jewerly/agilKatom.jpg",
  },
  {
    title: "צמיד חרוזים זוהר",
    url: "./images/jewerly/TzamidZoher.jpg",
  },
  {
    title: "צמיד פנינה צבעוני",
    url: "./images/jewerly/tzamidPninatzivoni.jpg",
  },
  {
    title: "צ'וקר פנינה צבעוני",
    url: "./images/jewerly/choker.jpg",
  },

  {
    title: "צמיד חום פנינה",
    url: "./images/jewerly/tzamidhoom.jpg",
  },
  {
    title: "צמיד חרוזים אומברה",
    url: "./images/jewerly/tzamidgalaxy.jpg",
  },
  {
    title: "שרשרת פנינה בגווני תכלת",
    url: "./images/jewerly/sharsheretlightblue.jpg",
  },
  {
    title: "צמיד חרוזים עדין",
    url: "./images/jewerly/ktor.jpg",
  },
  {
    title: "צ'וקר חרוזים חום לבן",
    url: "./images/jewerly/chokerDark.jpg",
  },
  {
    title: "צ'וקר חרוזי מארבל",
    url: "./images/jewerly/chokerpninim.jpg",
  },
  {
    title: "צמיד חרוזים לגבר",
    url: "./images/jewerly/boyes.jpg",
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
