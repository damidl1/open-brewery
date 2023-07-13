class DBService{


    static getBreweries(pageNumber){

        const url = 'https://api.openbrewerydb.org/v1/breweries?per_page=10&page=' + pageNumber;
         
        console.log(url);
         
        return fetch(url)  
        .then(resp => resp.json())  // possiamo costruire una promise a metà (senza altro then) e chiamare poi la seconda metà (secondo then) nel main per completarla
        
    }
}