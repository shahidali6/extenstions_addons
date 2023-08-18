function feature_card_remover() {
  //fields
  let total_cards = 0;
  let total_feature_card = 0;
  let remainig_cards = 0;
  //document.body.style.backgroundColor = 'blue';
  //Change the color of the background to check the extension is working fine.
  document.getElementsByTagName("header")[0].style.background = "lightblue";

  // for (let index = 0; index < 3; index++) {
  //   setTimeout(console.log(index + 1 + ": itration"), 15000);

  //   var buttons = document.getElementsByTagName("button");

  //   for (let index = 0; index < buttons.length; index++) {
  //     var text = buttons[index].innerText.trim();
  //     if (text.toLowerCase().startsWith("load more")) {
  //       buttons[index].click();
  //       console.log("Button cliked");
  //     }
  //   }
  // }

  //all words or text that need to avoid
  const hate_words = ["featured", "want to see your stuff here"];

  //Get all 'li' items
  var cards = document.getElementsByTagName("li");

  let removeCards = 0;

  //Trivers all the 'li' items and manupolate as required
  for (let index = 0; index < cards.length; index++) {
    var text = cards[index].innerText.trim();
    if (hate_words.some((word) => text.toLowerCase().startsWith(word)))
      cards[index].style.display = "none";
    removeCards++;
  }

  console.log("Total Feature Cards hidden: " + removeCards);
}

chrome.action.onClicked.addListener((tab) => {
  if (!tab.url.includes("chrome://") && tab.url.includes("olx.com.pk")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: feature_card_remover,
    });
  }
});
