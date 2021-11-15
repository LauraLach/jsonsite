let websitesLayout = document.getElementById('websitesLayout')

let database = [
  {
    "title" : "Bichon Frises",
    "image" : "RosieTheBichon.png",
    "background_color" : "lightpink",
    "url" : "https://lauralach.github.io/firstsitebichonfrise/",
    "description" : "About the Bichon Frise dog breed"
  },
  {
    "title" : "Hamilton Promo",
    "image" : "HamiltonPoster.jpg",
    "background_color" : "#dda539",
    "url" : "https://lauralach.github.io/promosite/",
    "description" : "Hamilton the Musical promotion"
  },
  {
    "title" : "Waste & Recycling",
    "image" : "waste.jpg",
    "background_color" : "#EDC4B3",
    "url" : "https://lauralach.github.io/wasteandrecycling/",
    "description" : "History and information about waste and recycling"
  },
  {
    "title" : "Waste & Recycling (Flexbox)",
    "image" : "recycling.jpg",
    "background_color" : "#B06D51",
    "url" : "https://lauralach.github.io/wasterecyclingflex/",
    "description" : "History and information about waste and recycling, but structured with flexbox"
  },
  {
    "title" : "American Sign Language Resource",
    "image" : "handshake.jpeg",
    "background_color" : "#DCDCDC",
    "url" : "https://lauralach.github.io/midtermasl/",
    "description" : "Educational resource about American Sign Language"
  },
  {
    "title" : "American Sign Language Resource (Media Query)",
    "image" : "clock.jpg",
    "background_color" : "#848489",
    "url" : "https://lauralach.github.io/midtermmediaquery/",
    "description" : "Educational resource about American Sign Language, but the History page is responsive to mobile devices"
  },
  {
    "title" : "Random Fortune",
    "image" : "crystalball.jpg",
    "background_color" : "#F3C96C",
    "url" : "https://lauralach.github.io/randomFortune/",
    "description" : "Provides a random fortune"
  }
];

for(let i = 0; i < database.length; i++) {
  createElementProper(database[i]);
}

function createElementMessy(incomingJSON) {
  let incompleteHTML = "<div class=\"websites\" style=\"background-color: " + incomingJSON['background_color'] + "\"> <a href=\"" + incomingJSON['url'] + "\"  target=\"_blank\"> <h2>" + incomingJSON['title'] + "</h2></a>" + "<img src=\"" + incomingJSON['image'] + "\"> <h4>" + incomingJSON['description'] + "</h4></div>";
}

function createElementProper(incomingJSON) {

  let newSite = document.createElement("DIV");
  newSite.style.backgroundColor = incomingJSON['background_color'];
  newSite.classList.add('websites');

  let newLink = document.createElement("A");
  newLink.href = incomingJSON['url'];
  newLink.target = "_blank";
  newSite.appendChild(newLink);

  let newTitle = document.createElement("H2");
  newTitle.innerText = incomingJSON['title'];
  newLink.appendChild(newTitle);

  let newImage = document.createElement("IMG");
  newSite.appendChild(newImage);
  newImage.src = incomingJSON['image'];
  newSite.appendChild(newImage);

  let newDesc = document.createElement("H4");
  newDesc.innerText = incomingJSON['description'];
  newSite.appendChild(newDesc);

  websitesLayout.appendChild(newSite);
}
