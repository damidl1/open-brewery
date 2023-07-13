class DBService{


    static getBreweries(pageNumber){

        const url = 'https://api.openbrewerydb.org/v1/breweries' + pageNumber;
         

        return fetch(url)  
        .then(resp => resp.json())  // possiamo costruire una promise a metà (senza altro then) e chiamare poi la seconda metà (secondo then) nel main per completarla
        
    }
}