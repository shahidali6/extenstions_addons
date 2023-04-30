function feature_card_remover() {
  //Change the color of the background to check the extension is working fine.
  document.getElementsByTagName('header')[0].style.background = 'lightblue'

  //fields
  let category = 'NA'
  let sub_category = 'NA'
  let service_type = 'NA'
  let row_builder = ''
  let date = 'NA'

  //Get the list of categories
  var categories = document.getElementsByClassName('W46fKfn cK9KPQl XlivBII')

  for (let i = 0; i < categories.length; i++) {
    //Assign the values to variables
    switch (i) {
      case 0:
        category = categories[i].textContent
        break
      case 1:
        sub_category = categories[i].textContent
        break
      case 2:
        service_type = categories[i].textContent

        break
    }
  }

  var getdate = document.getElementsByClassName('co-grey-800 tbody-6')

  for (let i = 0; i < getdate.length; i++) {
    date = getdate[i].textContent
  }

  var cell = document.getElementsByTagName('td')

  let hash = '#'
  let empty = ''

  for (let i = 0, j = 0; i < cell.length; i++) {
    row_builder = row_builder.concat(
      cell[i].textContent.replace(hash, empty) + ',',
    )

    if (++j > 5) {
      console.log(
        category +
          ',' +
          sub_category +
          ',' +
          service_type +
          ',' +
          row_builder +
          date,
      )
      row_builder = ''
      j = 0
    }
  }

  //Print the name of all lists present on the page
  console.log(row_builder)
  row_builder = ''
}

chrome.action.onClicked.addListener((tab) => {
  if (!tab.url.includes('chrome://') && tab.url.includes('fiverr.com')) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: feature_card_remover,
    })
  }
})
