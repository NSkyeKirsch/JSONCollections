let outputElement;
let outPutParagraph;
let contentGridElement;
let happyButtonElement;
let sadButtonElement;
let coolButtonElement;
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

  happyButtonElement = document.querySelector('#happy-button');
  sadButtonElement = document.querySelector('#sad-button');
  coolButtonElement = document.querySelector('#cool-button');

  happyButtonElement.addEventListener("click", function(){

    while(contentGridElement.hasChildNodes()){
      contentGridElement.removeChild(contentGridElement.firstChild);
    }

    for (var i = 0; i < musicDataBaseHappy.length; i++) {
      createElementProper(musicDataBaseHappy[i]);
    }

  })

  sadButtonElement.addEventListener("click", function(){

    while(contentGridElement.hasChildNodes()){
      contentGridElement.removeChild(contentGridElement.firstChild);
    }

    for (var i = 0; i < musicDataBaseSad.length; i++) {
      createElementProper(musicDataBaseSad[i]);
    }

  })

  coolButtonElement.addEventListener("click", function(){

    while(contentGridElement.hasChildNodes()){
      contentGridElement.removeChild(contentGridElement.firstChild);
    }

    for (var i = 0; i < musicDataBaseCool.length; i++) {
      createElementProper(musicDataBaseCool[i]);
    }

  })


})


let musicDataBaseHappy = [
  {
    "songTitle" : "Save You Save Me",
    "artist" : ["WJSN", "Cosmic Girls", "Starship Entertainment", "Yuehua Entertainment"],
    "year" : "2018",
    "artWork" : "WJSN_SaveYouSaveMe.jpg",
    "description" : "This is the description",
    "color" : "rgba(18, 11, 92, 0.5)"
  },
  {
    "songTitle" : "Woowa",
    "artist" : ["DIA", "MBK Entertainment", "PocketDol Studio"],
    "year" : "2019",
    "artWork" : "DIA_Woowa.jpg",
    "description" : "This is the 2nd description",
    "color" : "#8782bd"
  },
  {
    "songTitle" : "Hi High",
    "artist" : ["LOONA", "BlockBerryCreative"],
    "year" : "2018",
    "artWork" : "Loona_HiHigh.png",
    "description" : "This is the 3rd description",
    "color" : "rgba(18, 11, 92, 0.5)"
  },
  {
    "songTitle" : "Dreams Come True",
    "artist" : ["SES", "SM Entertainment"],
    "year" : "1998",
    "artWork" : "SES_DreamsComeTrue.jpg",
    "description" : "This is the 4th description",
    "color" : "#8782bd"
  },
  {
    "songTitle" : "Jogging",
    "artist" : ["LUCY", "MYSTIC Story Entertainment"],
    "year" : "2020",
    "artWork" : "LUCY_Jogging.jpg",
    "description" : "This is the 5th description",
    "color" : "rgba(18, 11, 92, 0.5)"
  },
  {
    "songTitle" : "I GOT A BOY",
    "artist" : ["SNSD", "Girl's Generation", "SM Entertainment"],
    "year" : "2013",
    "artWork" : "SNSD_IGotABoy.jpg",
    "description" : "This is the 6th description",
    "color" : "#8782bd"
  },
  {
    "songTitle" : "Sherlock",
    "artist" : ["SHINee", "SM Entertainment"],
    "year" : "2016",
    "artWork" : "SHINee_WorldFourConcert.jpg",
    "description" : "This is the 7th description",
    "color" : "rgba(18, 11, 92, 0.5)"
  }
];

let musicDataBaseSad = [
  {
    "songTitle" : "SAD SONGS ACTIVATED",
    "artist" : ["WJSN", "Cosmic Girls", "Starship Entertainment", "Yuehua Entertainment"],
    "year" : "2018",
    "artWork" : "WJSN_SaveYouSaveMe.jpg",
    "description" : "This is the description",
    "color" : "rgba(18, 11, 92, 0.5)"
  }
];

let musicDataBaseCool = [
  {
    "songTitle" : "COOL SONGS ACTIVATED",
    "artist" : ["WJSN", "Cosmic Girls", "Starship Entertainment", "Yuehua Entertainment"],
    "year" : "2018",
    "artWork" : "WJSN_SaveYouSaveMe.jpg",
    "description" : "This is the description",
    "color" : "rgba(18, 11, 92, 0.5)"
  }
];


function createElementProper(incomingJSON) {



  //create card for the whole item
  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('contentItemBox');
  newContentElement.style.backgroundColor = incomingJSON['color'];
  newContentElement.style.padding = "20px 50px 20px 50px",
  newContentElement.style.display = "flex";
  newContentElement.style.borderRadius = "24px";

  newContentElement.style.boxShadow =  "5px 5px 20px #231e59, -8px -8px 30px #c4c1e6";

  //create box for left inside
  let newContentLeftSide = document.createElement("DIV");
  newContentLeftSide.classList.add('contentLeftSide');
  newContentLeftSide.style.paddingRight = "25px";
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
  let newContentHeading = document.createElement("DIV");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.style.display = "flex";
  newContentHeading.style.width = "500px";
  newContentHeading.style.fontSize = "xx-large";
  newContentHeading.style.justifyContent = "center";
  newContentHeading.style.padding = "20px";
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
  newContentDesc.style.display = "flex";
  newContentDesc.style.width = "600px";
  newContentDesc.style.justifyContent = "center";
  newContentDesc.innerText = incomingJSON['description'];
  //add to right side
  newContentRightSide.appendChild(newContentDesc);

  //create img for left side
  let newImage = document.createElement("IMG");
  newImage.classList.add("leftSideImage");
  newImage.src = incomingJSON['artWork'];
  newImage.style.width = "200px";
  //add image to left side
  newContentLeftSide.appendChild(newImage);

  //add whole item box to the list element
  contentGridElement.appendChild(newContentElement);


}
