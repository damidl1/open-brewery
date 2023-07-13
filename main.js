let pageNumber = 1;

DBService.getBreweries(pageNumber)
.then(breweries => render(breweries))  // per chiamare le birrerie 




function render(breweries) {
    
     for (brewery of breweries) {
        console.log(brewery.name);
     }


}



function previous() {
    pageNumber--;
}

function next() {
    pageNumber++;
}