function feature_card_remover() {
  //fields
  let total_cards = 0
  let total_feature_card = 0
  let remainig_cards = 0
  //document.body.style.backgroundColor = 'blue';
  //Change the color of the background to check the extension is working fine.
  document.getElementsByTagName('header')[0].style.background = 'lightblue'

  var totalLists = document.getElementsByTagName('ul')
  for (let listIndex = 0; listIndex < totalLists.length; listIndex++) {
    //Print the name of all lists present on the page
    console.log(totalLists[listIndex])
  }

  //trivers on all list using li tag
  for (let j = 0; j < totalLists.length; j++) {
    var cards = document
      .getElementsByTagName('ul')
      [j].getElementsByTagName('li')
    for (let k = 0; k < cards.length; k++) {
      var text = cards[k].innerText
      if (
        text.startsWith('FEATURED') ||
        text.startsWith('Want to see your stuff here')
      ) {
        cards[k].remove()
        k--
        total_feature_card++
        continue
      }
    }
  }
  console.log('Total Feature Cards Removed: ' + total_feature_card)
}

chrome.action.onClicked.addListener((tab) => {
  if (!tab.url.includes('chrome://') && tab.url.includes('olx.com')) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: feature_card_remover,
    })
  }
})
