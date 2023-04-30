function feature_card_remover() {
  //Change the color of the background to check the extension is working fine.
  document.getElementsByTagName('header')[0].style.background = 'lightblue'

  //fields
  let category = 'NA'
  let sub_category = 'NA'
  let service_type = 'NA'
  let row_builder = ''

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
    //Print the name of all categories present on the page
    //console.log(categories[i])
  }

  var table = document.getElementsByTagName('table')
  //var table_header_row_cell = table.row.getElementsByTagName('th')

  // for (let i = 0, row; row = table.rows[i]; i++) {
  //   for (let j = 0, col; col = row.cells[j]; j++) {
  //     row_builder += col + ','
  //   }
  //   console.log(row_builder)
  //   row_builder = ''
  // }

  // for (let row of table.rows) {
  //   for (let cell of row.cells) {
  //     row_builder += cell + ','
  //   }
  //   console.log(row_builder)
  //   row_builder = ''
  // }

  // let i = 0
  // while ((row = table.rows[i++])) {}
  var cell = document.getElementsByTagName('td')
  console.log(cell.length)

  for (let i = 0, j = 0; i < cell.length; i++) {
    row_builder = row_builder.concat(cell[i].textContent + ',')
    //row_builder += cell[i].textContent + ','
    if (++j > 5) {
      console.log(
        category + ',' + sub_category + ',' + service_type + ',' + row_builder.length,
      )
      row_builder = ''
      j = 0
    }
  }

  // for (let i = 0; i < table_header_row_cell.length; i++) {
  //   row_builder += table_header_row_cell[i] + ','
  // }
  //Print the name of all lists present on the page
  console.log(row_builder)
  row_builder = ''

  // var table_body = table.getElementsByTagName('tbody')
  // var table_rows = table_body.getElementsByTagName('tr')

  // for (let i = 0; i < table_rows.length; i++) {
  //   var row_cells = table_rows[i].getElementsByTagName('td')
  //   for (let j = 0; j < row_cells.length; j++) {
  //     row_builder += table_header_row_cell[j] + ','
  //   }
  //   console.log(row_builder)
  //   row_builder = ''
  // }
}

chrome.action.onClicked.addListener((tab) => {
  if (!tab.url.includes('chrome://') && tab.url.includes('fiverr.com')) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: feature_card_remover,
    })
  }
})
