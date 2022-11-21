//Change the background color
function changebackground() {
  document.getElementsByTagName("header")[1].style.background = "lightblue";
}
//Select main cards container
function selectmaincontainer() {
  var featureText = "FEATURED";
  var wantToSeeYour = "Want to see your stuff here";
  var mainCardUnOrderList = 1;
  var listTags = document.getElementsByTagName("ul");
  for (let index = 0; index < listTags.length; index++) {
    console.log(index + ": " + listTags[index].innerText);
    if (listTags[index].innerText.startsWith(featureText))
      mainCardUnOrderList = index;
    console.log(index + ": Start with required text");
  }
  var cards = document.getElementsByTagName("ul")[mainCardUnOrderList].getElementsByTagName("li");
  removeCards(cards);
  console.log("End Operation!");
}

function removeCards(cardsCollection) {
  document.getElementsByTagName("header")[1].style.background = "red";
  for (let index = 0; index < cardsCollection.length; index++) {
    var text = cardsCollection[index].innerText;
    if (text.startsWith(featureText) || text.startsWith(wantToSeeYour)) {
      cardsCollection[index].remove();
      continue;
    }
    var text = cardsCollection[index].innerText;
    if (text.startsWith(featureText) || text.startsWith(wantToSeeYour)) {
      cardsCollection[index].remove();
      continue;
    }
    var text = cardsCollection[index].innerText;
    if (text.startsWith(featureText) || text.startsWith(wantToSeeYour)) {
      cardsCollection[index].remove();
      continue;
    }
    console.log(text);
  }
}

chrome.action.onClicked.addListener((tab) => {
  if (!tab.url.includes("chrome://") && tab.url.includes("olx.com")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: selectmaincontainer,
      function: changebackground,
    });
  }
});
