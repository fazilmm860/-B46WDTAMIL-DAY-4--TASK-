let request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', true);
request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        let data = JSON.parse(request.responseText);
        data.forEach(country => {

            console.log(`Name: ${country.name.common}`);
            console.log(`Region: ${country.region}`);
            console.log(`Sub-Region: ${country.subregion}`);
            console.log(`Population: ${country.population}`);
            console.log('----------------------------------------');


        });
    } else {
        console.error('Error in geting data from api');
    }
};
request.onerror = function () {
    console.error('Error in connecting api');
}
request.send();