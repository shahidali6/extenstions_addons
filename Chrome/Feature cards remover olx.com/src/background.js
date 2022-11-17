function reddenPage() {
  //document.body.style.backgroundColor = 'blue';
  document.getElementsByTagName("header")[1].style.background = "lightblue";
  var cards = document.getElementsByTagName("ul")[1].getElementsByTagName("li");
  for (let index = 0; index < cards.length; index++) {
    var text = cards[index].innerText;
    if (text.startsWith("FEATURED") || text.startsWith('Want to see your stuff here')) {
      cards[index].remove();
      continue;
    }
    console.log(text);
  }
  console.log("Created tab ");
}

chrome.action.onClicked.addListener((tab) => {
  if ((!tab.url.includes("chrome://"))&&(tab.url.includes("olx.com"))) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: reddenPage,
    });
  }
});
