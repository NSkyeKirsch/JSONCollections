let outputElement;
let outPutParagraph;
let contentGridElement;
let happyButtonElement;
let sadButtonElement;
let othersButtonElement;
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
  othersButtonElement = document.querySelector('#others-button');

  happyButtonElement.addEventListener("click", function(){

    while(contentGridElement.hasChildNodes()){
      contentGridElement.removeChild(contentGridElement.firstChild);
    }

    for (var i = 0; i < musicDataBaseHappy.length; i++) {
      createElementProper(musicDataBaseHappy[i]);
    }

    outPutParagraph.innerText = "K-Pop Songs that Make Me Happy";

  })

  sadButtonElement.addEventListener("click", function(){

    while(contentGridElement.hasChildNodes()){
      contentGridElement.removeChild(contentGridElement.firstChild);
    }

    for (var i = 0; i < musicDataBaseSad.length; i++) {
      createElementProper(musicDataBaseSad[i]);
    }

    outPutParagraph.innerText = "K-Pop Songs that Make Me Sad";

  })

  othersButtonElement.addEventListener("click", function(){

    while(contentGridElement.hasChildNodes()){
      contentGridElement.removeChild(contentGridElement.firstChild);
    }

    for (var i = 0; i < musicDataBaseOthers.length; i++) {
      createElementProper(musicDataBaseOthers[i]);
    }

    outPutParagraph.innerText = "K-Pop Songs that Make Me Feel Honorable Mentions";

  })

})


let musicDataBaseHappy = [
  {
    "songTitle" : "Butterfly",
    "artist" : ["WJSN", "Cosmic Girls", "Starship Entertainment", "Yuehua Entertainment"],
    "year" : "2020",
    "artWork" : "Cosmic_Girls_Neverland.png",
    "description" : "WJSN, also commonly known as the Cosmic Girls, released their album \"Neverland\" in June of 2019. Although my favorite song on the album is \"Pantomine\", \"Butterfly\" feels like it was mixed with little sprinkles of magic.",
    "color" : "rgba(18, 11, 92, 0.5)"
  },
  {
    "songTitle" : "Woowa",
    "artist" : ["DIA", "MBK Entertainment", "PocketDol Studio"],
    "year" : "2019",
    "artWork" : "DIA_Woowa.jpg",
    "description" : "A lot of people find this song aggravating because it's almost obnoxiously bright and bubbly, but I think that this song is perfect when you want to have some fun and not worry too much about being serious. It makes me want to jump around and dance. ",
    "color" : "#8782bd"
  },
  {
    "songTitle" : "Hi High",
    "artist" : ["LOONA", "BlockBerryCreative"],
    "year" : "2018",
    "artWork" : "Loona_HiHigh.png",
    "description" : "Yes, this is the group who's fans asked people to stan them all across the internet, and who are the godmothers of the child of Elon Musk and Grimes. While they may be famous for being a part of memes, they also have some great songs as a group and as subunits, including Love4Eva, HULA HOOP, Girl Front, Sweet Crazy Love, Butterfly, Why Not, and Star. Go Won actually has the same birthday as me!",
    "color" : "rgba(18, 11, 92, 0.5)"
  },
  {
    "songTitle" : "Dreams Come True",
    "artist" : ["SES", "SM Entertainment"],
    "year" : "1998",
    "artWork" : "SES_DreamsComeTrue.jpg",
    "description" : "SES was one of the original K-Pop girl groups that started it all! This song is actually a cover and originally came from Finland, but I love this version, especially the slightly silly music video for it that was recently remastered. I highly recommend checking it out if you love bad 90s CGI nad green screen, recently popular 'cyber' or 'y2k' themed aesthetics, or that one 'butterfly' song that I think was in DDR at some point.",
    "color" : "#8782bd"
  },
  {
    "songTitle" : "Jogging",
    "artist" : ["LUCY", "MYSTIC Story Entertainment"],
    "year" : "2020",
    "artWork" : "LUCY_Jogging.jpg",
    "description" : "LUCY is a 4 member boy band under Mystic Story, a subsidary of SM Entertainment. What makes them unique is that one of the members plays the violin! All of their music makes me feel like I'm running through a field of flowers, or like the feeling of a fresh, new beginning. This specific song, \"jogging\", sounds like a breathe of fresh air and a good day with close friends.",
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
    "songTitle" : "Superhuman",
    "artist" : ["NCT", "SM Entertainment"],
    "year" : "2019",
    "artWork" : "NCT127_Superhuman.jpg",
    "description" : "This instrumental to this song is amazing just on its own. Combined with the harmonies of the 9 members of NCT's subunit NCT 127, this Michael Jackson inspired song just never gets old.",
    "color" :  "rgba(18, 11, 92, 0.5)"
  },
  {
    "songTitle" : "Catallena",
    "artist" : ["Orange Caramel", "Pledis Entertainment"],
    "year" : "2014",
    "artWork" : "Orange_Caramel_Catallena_cover.jpg",
    "description" : "Have you ever heard a song so ridiculously stupid that it's good? That's how I feel about \"Catallena\" from the Orange Caramel Trio. Every K-Pop fan can immediately recognize the girls dressed as fish in plastic packaging, the sushi they wore on their heads, and the  way that they turned to face the audience just to yell \"HA!\" at their faces. Be careful though, every single section of the song has the capacity to get stuck in your head, and for me it always manages to be a different piece every time.",
    "color" :  "#8782bd"
  },
  {
    "songTitle" : "Free Somebody",
    "artist" : ["LUNA", "SM Entertainment"],
    "year" : "2016",
    "artWork" : "Luna_Free_Somebody.png",
    "description" : "Free Somebody is one of the most underrated songs in all of K-Pop history, in my opnion. Originally a member of the SM Entertainment group F(x), LUNA has evolved into an amazing soloist, and now has her own label for producing new music. The song \"Free Somebody\" features an addicting synth and an uplifting chorus that never fails to make me feel like the main character of my own story.",
    "color" : "rgba(18, 11, 92, 0.5)"
  },
  {
    "songTitle" : "Beautiful Girl",
    "artist" : ["Woosung", "Peniel"],
    "year" : "2019",
    "artWork" : "Woosung_BeautifulGirl.jpg",
    "description" : "Beautiful girl! Parts of this song were actually written by Woosung many years ago, and the video for the song shows his growth from then to now. This song as a whole feels super cute but also warm and casual. Another great thing about this song is that when Woosung performs it, he will sometimes change the pronouns to make sure everyone feels included.",
    "color" : "#8782bd"
  },
  {
    "songTitle" : "Sherlock",
    "artist" : ["SHINee", "SM Entertainment"],
    "year" : "2016",
    "artWork" : "SHINee_WorldFourConcert.jpg",
    "description" : "This song is so much fun on its own, but the live concert version is the best because they added extra parts that make the song feel even more complete.",
    "color" : "rgba(18, 11, 92, 0.5)"
  },
  {
    "songTitle" : "Roly-Poly",
    "artist" : ["T-ARA", "MBK Entertainment"],
    "year" : "2011",
    "artWork" : "T-ARA_Roly-Poly.jpg",
    "description" : "A classic K-Pop song! Not much else I have to say about it, but it is one of my father's favorite K-Pop songs of all time. It's fun and quirky!",
    "color" : "#8782bd"
  },
  {
    "songTitle" : "After School",
    "artist" : ["Weeekly", "PLAY M Entertainment"],
    "year" : "2021",
    "artWork" : "Weeekly_AfterSchool.jpg",
    "description" : "Everyone's favorite Weeekly song! This song and StayC's ASAP were everywhere at the beginning of this year, and I'm not complaining because I love both of them.",
    "color" : "rgba(18, 11, 92, 0.5)"
  }
];

let musicDataBaseSad = [
  {
    "songTitle" : "Zombie",
    "artist" : ["Day6", "JYP Entertainment"],
    "year" : "2020",
    "artWork" : "Day6_BookofUsDemon.jpg",
    "description" : "This title track, with versions in both English and Korean, is about feeling like a zombie while living with feelings of emptiness or depression.",
    "color" : "rgba(18, 11, 92, 0.5)"
  },
  {
    "songTitle" : "Tell Me What To Do",
    "artist" : ["SHINee", "SM Entertainment"],
    "year" : "2016",
    "artWork" : "SHINee_TellMeWhatToDo.jpg",
    "description" : "I personally interpreted this song to be about a broken, failing relationship. Although the vocals feel as though the world is caving in, Jonghyun's voice comforts the listener, telling them not to cry anymore.",
    "color" : "#8782bd"
  },
  {
    "songTitle" : "Insomnia",
    "artist" : ["The Rose"],
    "year" : "2018",
    "artWork" : "TheRose_Dawn.png",
    "description" : "The last song was about a failing relationship, and this next song is about the painful memories after things are over. Woosung's style of singing is perfect for sad songs, and feels perfect for when you are looking out of the window dramatically in a car or bus. The Rose also has a bunch of other good sad songs, so I recommend checking them out!",
    "color" : "rgba(18, 11, 92, 0.5)"
  },
  {
    "songTitle" : "Diphylleia grayi",
    "artist" : ["Jonghyun"],
    "year" : "2015",
    "artWork" : "Jonghyun_StoryOp1.jpg",
    "description" : "Like The Rose, Jonghyun (from the group SHINee) has a lot of songs that are calm, comforting, and sad. This song holds a lot of meaning to fans of Jonghyun and SHINee, because it is about the very personal struggles with mental health he faced. The lyrics of the song are about the diphylleia grayi, known as the skeleton flower, which turns transparent when it touches water. Jonghyun also wrote a novel called \"Skeleton Flower\". I think this song is by far the saddest on this list, especially because you can hear Jonghyun start to cry at the end.",
    "color" : "#8782bd"
  },
  {
    "songTitle" : "Through the Night",
    "artist" : ["IU"],
    "year" : "2017",
    "artWork" : "IU_Palette.jpg",
    "description" : "A comforting but sad song about love, loss, and long distances. IU is a legend in K-Pop, and an artist that every fan should know. Another great song for comfort during hard times is her song \"Love Poem\".",
    "color" : "rgba(18, 11, 92, 0.5)"
  },
  {
    "songTitle" : "Daisy",
    "artist" : ["Pentagon", "CUBE Entertainment" ],
    "year" : "2020",
    "artWork" : "Pentagon_Daisy.jpg",
    "description" : "I don't really listen to Pentagon much, but their main singer is one of the best in K-Pop history! This song is about not wanting to let someone go, and having too much hope in a relationship that is falling apart (Daisies represent hope).",
    "color" : "#8782bd"
  },
  {
    "songTitle" : "Breathe",
    "artist" : ["LeeHi", "AOMG"],
    "year" : "2016",
    "artWork" : "LeeHi_Breathe.jpg",
    "description" : "This song is so comforting when going through overwhelming and anxious times, so while this song doesn't make me sad, it deserves to be on this list anyway.",
    "color" : "rgba(18, 11, 92, 0.5)"
  }
];

let musicDataBaseOthers = [
  {
    "songTitle" : "Save You Save Me",
    "artist" : ["WJSN", "Cosmic Girls", "Starship Entertainment", "Yuehua Entertainment"],
    "year" : "2018",
    "artWork" : "WJSN_SaveYouSaveMe.jpg",
    "description" : "The cover of the album that this song is in inspired the palette for this website! It makes me feel like the mysterious main character with magic powers.",
    "color" : "rgba(18, 11, 92, 0.5)"
  },
  {
    "songTitle" : "Replay",
    "artist" : ["SHINee", "SM Entertainment"],
    "year" : "2008",
    "artWork" : "SHINee_Replay.jpg",
    "description" : "This song has been on the 'favorites' list of almost every K-Pop fan since 2008. Its a little outdated sounding now, but still endearing.",
    "color" : "#8782bd"
  },
  {
    "songTitle" : "Stay Tonight",
    "artist" : ["CHUNG HA"],
    "year" : "2020",
    "artWork" : "Chungha_Stay_Tonight.jpg",
    "description" : "The choreo for this song is inspired by voguing, and Chung Ha actually hired an LGBT dance crew for her performances! This song is so amazing I had to include it somewhere.",
    "color" : "rgba(18, 11, 92, 0.5)"
  },
  {
    "songTitle" : "Deja Vu",
    "artist" : ["Dreamcatcher", "Dreamcatcher Company"],
    "year" : "2019",
    "artWork" : "Dreamcatcher_Raid_of_Dream.png",
    "description" : "What makes Dreamcatcher speacial is that they are a girl group with a dark and gothic theme. Although they have many amazing songs, Deja Vu has to be my favorite because of how dramatic and cinematic it is. The one and only thing that I do not like about Dreamcatcher is their name, since it is based on something that belongs to Indigenous American cultures.",
    "color" : "#8782bd"
  },
  {
    "songTitle" : "pit-a-pet",
    "artist" : ["YUKIKA"],
    "year" : "2020",
    "artWork" : "Yukika_SoulLady.jpg",
    "description" : "Yukika is a city-pop inspired solo artist that really should be more popular than she is. My top five songs from her most famous album, \"SOUL LADY\", are pit-a-pat, SHADE, SOUL LADY, NEON 1989, and Cherries Jubiles.",
    "color" : "rgba(18, 11, 92, 0.5)"
  },
  {
    "songTitle" : "BABE",
    "artist" : ["HyunA"],
    "year" : "2017",
    "artWork" : "Hyuna_Following.jpg",
    "description" : "HyunA is amazing, and has been a part so many iconic songs over the years as a soloist, member of Wonder Girls, Trouble Maker, 4Minute, and Triple H. The song \"BABE\" is also believed by fans to be about the struggles of being constantly objectified and critized since she was around 15 years old.",
    "color" : "#8782bd"
  },
  {
    "songTitle" : "EVERY HEART",
    "artist" : ["BoA", "SM Entertainment"],
    "year" : "2002",
    "artWork" : "BoA_Miracle.jpg",
    "description" : "Anime fans might recognize this song from InuYasha, but it was originally made by the legendary BoA. This was probably the first K-Pop song I ever listened to, so it still has a place in my heart.",
    "color" : "rgba(18, 11, 92, 0.5)"
  },
  {
    "songTitle" : "The Chaser",
    "artist" : ["INFINITE", "Woolim Entertainment"],
    "year" : "2012",
    "artWork" : "INFINITE_TheChaser.jpg",
    "description" : "This song is just good idk. Old but still gold years later.",
    "color" : "#8782bd"
  },
  {
    "songTitle" : "Puzzle Moon",
    "artist" : ["GWSN", "Girls in the Park", "Kiwi Pop"],
    "year" : "2018",
    "artWork" : "GWSN_PuzzleMoon.jpg",
    "description" : "GWSN is one of many groups that unfortunately are not as popular as they should be. Although their vocals are not my favorite (They have been getting better recently), their songs are so magical/whimsical-sounding that I think they are really worth listening to. Some good songs are Puzzle Moon, Night Aviation, Black Hole, The Aerialist, Lullaby, Starry Night, RED-SUN, Melting Point, One & Only, and more!!!",
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
  newContentDesc.style.height = "96px";
  newContentDesc.style.justifyContent = "center";
  newContentDesc.style.overflowY = "auto";
  newContentDesc.innerText = incomingJSON['description'];
  //add to right side
  newContentRightSide.appendChild(newContentDesc);

  //create img for left side
  let newImage = document.createElement("IMG");
  newImage.classList.add("lozad");
  newImage.src = incomingJSON['artWork'];
  newImage.style.width = "200px";
  //add image to left side
  newContentLeftSide.appendChild(newImage);

  //add whole item box the page
  contentGridElement.appendChild(newContentElement);

  const observer = lozad(); // lazy loads elements with default selector as '.lozad'
  observer.observe();

}
