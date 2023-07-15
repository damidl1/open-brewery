// let pageNumber = 1;

DBService.getBreweries()
.then(breweries => render(breweries));  

// DBService.getBreweries(pageNumber)
// .then(breweries => render(breweries));  // per chiamare le birrerie 

let pageNumber = 1;


function render(breweries) {
    
     for (const brewery of breweries) {
        // console.log(brewery.name);
     }



const mainContainer = document.getElementById('main-container');
mainContainer.innerHTML = '';

for (let i = 0; i < breweries.length; i++) {
    
    let brewery = breweries[i];

    const breweryCard = document.createElement('div');

    breweryCard.classList.add('brewery-card');

    const nameCard = document.createElement('span');
    const typeCard = document.createElement('span');
    const addressCard = document.createElement('span');
    const streetCard = document.createElement('span');
    const stateCard = document.createElement('span');
    const cityCard = document.createElement('span');
    const countryCard = document.createElement('span');
    const stateProvinceCard = document.createElement('span');
    const phoneCard = document.createElement('span');
    const websiteCard = document.createElement('span');
    
    const nameNode = document.createTextNode('Name: ' + brewery.name + '\n');
    const typeNode = document.createTextNode('Brewery Type: ' + brewery.brewery_type + '\n');
    const addressNode = document.createTextNode('Address: ' + brewery.address_1 + '\n');
    const streetNode = document.createTextNode('Street: ' + brewery.street + '\n');
    const cityNode = document.createTextNode('City: ' + brewery.city + '\n');
    const stateProvinceNode = document.createTextNode('State Province: ' + brewery.state_province + '\n');
    const stateNode = document.createTextNode('State: ' + brewery.state + '\n');
    const countryNode = document.createTextNode('Country: ' + brewery.country + '\n');
    const phoneNode = document.createTextNode('Phone: ' + '\n');
    const websiteNode = document.createTextNode('Website: ');

    // const phoneLink = document.createElement('a');
    // phoneLink.href = 'tel: ' + brewery.phone;
    // phoneLink.textContent = brewery.phone;


    if (brewery.website_url) {
        
        const websiteLink = document.createElement('a');
    
        websiteLink.href =  brewery.website_url;
        websiteLink.textContent = brewery.website_url;
        websiteLink.target = "_blank";
        websiteCard.appendChild(websiteNode);
        websiteCard.appendChild(websiteLink);
    }
    

    if (brewery.phone) {
        
        const phoneLink = document.createElement('a');
        
        phoneLink.href = 'tel: ' + brewery.phone;
        phoneLink.textContent = brewery.phone;
        phoneCard.appendChild(phoneNode);
        phoneCard.appendChild(phoneLink);
    }

    nameCard.appendChild(nameNode);
    typeCard.appendChild(typeNode);
    addressCard.appendChild(addressNode);
    streetCard.appendChild(streetNode);
    cityCard.appendChild(cityNode);
    stateProvinceCard.appendChild(stateProvinceNode);
    stateCard.appendChild(stateNode);
    countryCard.appendChild(countryNode);
   
    

    breweryCard.appendChild(nameCard);
    breweryCard.appendChild(typeCard);
    breweryCard.appendChild(addressCard);
    breweryCard.appendChild(streetCard);
    breweryCard.appendChild(cityCard);
    breweryCard.appendChild(stateProvinceCard);
    breweryCard.appendChild(stateCard);
    breweryCard.appendChild(countryCard);
    breweryCard.appendChild(phoneCard);
    breweryCard.appendChild(websiteCard);
    mainContainer.appendChild(breweryCard);
 }
}




function previous() {
    pageNumber--;
    DBService.getBreweries(pageNumber)
    .then(breweries => render(breweries));
}

function next() {
    pageNumber++;
    DBService.getBreweries(pageNumber)
    .then(breweries => render(breweries));
}




//displaiare le informazioni delle birrerie nella maniera più cool possibile


