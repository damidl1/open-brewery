let pageNumber = 1;

DBService.getBreweries(pageNumber)
.then(breweries => render(breweries));  // per chiamare le birrerie 




function render(breweries) {
    
     for (brewery of breweries) {
        console.log(brewery.name);
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


