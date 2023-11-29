

fetch('https://zylalabs.com/api/2281/mobile+phone+database+api/2162/get+brands')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));