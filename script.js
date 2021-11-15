let outputElement;
let outPutParagraph;
let contentGridElement;

/* this is the old way of doing things, but good to know
document.addEventListener("DOMContentLoaded", function(){

  outputElement = document.querySelector("#outputElement");
  outPutParagraph = document.querySelector("#outPutParagraph");
  contentGridElement = document.querySelector("#contentGrid");

  let newDiv = document.createElement("DIV");
  //create a new class for the new div
  newDiv.classList.add("newClass");

  let newimg = document.createElement("IMG");
  newImg.src = "img.png";

  //after creating elements, put img inside div
  newDiv.appendChild(newImg);

  //put Div inside outPutParagraph
  outPutParagraph.appendChild(newDiv);

})
*/

document.addEventListener("DOMContentLoaded", function(){

  outputElement = document.querySelector("#outputElement");
  outPutParagraph = document.querySelector("#outPutParagraph");
  contentGridElement = document.querySelector("#contentGrid");

  for (var i = 0; i < musicDataBaseSad.length; i++) {
    createElementProper(musicDataBaseSad[i]);
  }

})


let musicDataBaseSad = [
  {
    "songTitle" : "song name",
    "artist" : ["The Band", "The Feature"],
    "year" : "1996",
    "artWork" : "https://picsum.photos/200",
    "description" : "This is the description",
    "color" : "black"
  },
  {
    "songTitle" : "song name 2",
    "artist" : ["The guy"],
    "year" : "2004",
    "artWork" : "https://picsum.photos/200",
    "description" : "This is the 2nd description",
    "color" : "blue"
  }
];



function createElementProper(incomingJSON) {

  //create card for the whole item
  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('contentItemBox');
  newContentElement.style.backgroundColor = incomingJSON['color'];
  newContentElement.style.padding = "20px 59px 20px 50px",
  newContentElement.style.display = "flex";

  //create box for left inside
  let newContentLeftSide = document.createElement("DIV");
  newContentLeftSide.classList.add('contentLeftSide');
  newContentLeftSide.style.paddingRight = "50px";
  //add to item box
  newContentElement.appendChild(newContentLeftSide);

  //create box for right side
  let newContentRightSide = document.createElement("DIV");
  newContentRightSide.classList.add('contentRightSide');
  newContentRightSide.style.display = "flex";
  newContentRightSide.style.flexDirection = "column";
  newContentRightSide.style.alignItems = "center";
  //add to item box
  newContentElement.appendChild(newContentRightSide);

  //create Headline
  let newContentHeading = document.createElement("P");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['songTitle'];
  //add headline to the right side
  newContentRightSide.appendChild(newContentHeading);

  //create box for artist and year
  let newContentCredits = document.createElement("DIV");
  newContentCredits.classList.add('contentCreditsBox');
  newContentCredits.style.display = "flex";
  //add to right side
  newContentRightSide.appendChild(newContentCredits);

  var currentArtistString;

  //create box for artist
  let newContentArtists = document.createElement("DIV");
  newContentArtists.classList.add('contentArtists');
  newContentArtists.style.fontSize = "x-small";
  for (var i = 0; i < incomingJSON['artist'].length; i++){
    if(i == 0){
      currentArtistString = incomingJSON['artist'][i] + ", ";
    }
    else{
      currentArtistString = currentArtistString + incomingJSON['artist'][i] + ", ";
    }
  }
  newContentArtists.innerText = currentArtistString;
  //add to credit box
  newContentCredits.appendChild(newContentArtists);

  //create divider between artist and year
  let newContentDivider = document.createElement("DIV");
  newContentDivider.classList.add('contentDivider');
  newContentDivider.innerText = "-";
  //add to credit box
  newContentCredits.appendChild(newContentDivider);

  //create box for the year
  let newContentYear = document.createElement("DIV");
  newContentYear.classList.add('contentYear');
  newContentYear.style.fontSize = "x-small";
  newContentYear.innerText = incomingJSON['year'];
  //add to credit box
  newContentCredits.appendChild(newContentYear);

  //create description box for the right side
  let newContentDesc = document.createElement("DIV");
  newContentDesc.classList.add('contentDescription');
  newContentDesc.innerText = incomingJSON['description'];
  //add to right side
  newContentRightSide.appendChild(newContentDesc);

  //create img for left side
  let newImage = document.createElement("IMG");
  newImage.classList.add("leftSideImage");
  newImage.src = incomingJSON['artWork'];
  newContentLeftSide.appendChild(newImage);

  //add whole item box to the page
  contentGridElement.appendChild(newContentElement);


}
