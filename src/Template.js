// Generates HTML Cards for each role
function GenerateContent(data) {
  // empty array of cards to be turned into a string later
  let cards = [];
  // Loop through all elements in the data array of objects
  data.forEach(element => {
    // Fill html with data for role manager
    if (element.role === 'Manager') {
      let card = 
        `<div class="card col-3">
        <h3 class='name'>${element.name}</h3>
        <h3 class='role'>${element.role}</h3>
        <h4 class='id'>ID: ${element.id}</h4>
        <h4 class='email'>Email: ${element.email}</h4>
        <h4 class='last'>Office #: ${element.officeNum}</h4>
        </div>`
      // Add card to cards array
      cards.push(card);
    }
    // Fill html with data for role Engineer
    else if (element.role === 'Engineer') {
      let card =
        `<div class="card col-3">
        <h3 class='name'>${element.name}</h3>
        <h3 class='role'>${element.role}</h3>
        <h4 class='id'>ID: ${element.id}</h4>
        <h4 class='email'>Email: ${element.email}</h4>
        <h4 class='last'>Github: ${element.github}</h4>
        </div>`
      // Add card to cards array
      cards.push(card);
    }
    // Fill html with data for role Intern
    else if (element.role === 'Intern') {
      let card =
        `<div class="card col-3">
        <h3 class='name'>${element.name}</h3>
        <h3 class='role'>${element.role}</h3>
        <h4 class='id'>ID: ${element.id}</h4>
        <h4 class='email'>Email: ${element.email}</h4>
        <h4 class='last'>School: ${element.school}</h4>
        </div>`
      // add card to cards array
      cards.push(card)
    }else {
      // If role does not match any console log error
      console.log('error');
    }
  })
  return cards
}

// HTML code with the function call to create the HTML cards
function GeneratePage(data) {
  return `
  <html lang="en">
  <head>
    <title>Team Profile</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="./style.css">
  </head>

  <body>
    <header>
      <h1 class='head-text'>Team Profile</h1>
    </header>
      
    <div class="content container text-center">    
      <h3>The Team</h3><br>
      <div class="card-holder row col-9">
        ${GenerateContent(data)}
      </div>
    </div><br>

    <footer class="container-fluid text-center">
      <p class='col-4 foot1'>Team Profile Generator</p>
      <p class='col-4 foot2'>Created by: Jacob Liberty</p>
    </footer>

  </body>
  </html>
  `
}

// Export the HTML page creating function
module.exports = {
  GeneratePage
}