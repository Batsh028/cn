// This function loads pokemon data from the Pokemon API
function fetchchuckJSON() {
    const url = `https://api.chucknorris.io/jokes/random`;
    axios.get(url)
      .then(function(response) {
        return response.data;
      })
      .then(function(chuck) {
        console.log('data decoded from JSON:', chuck);
  
        // Build a block of HTML
        const chuckHtml = `
          <img src="${url}" />
        `;
        document.querySelector('#chuck').innerHTML = chuckHtml;
      });
  }
  
  fetchchuckJSON();