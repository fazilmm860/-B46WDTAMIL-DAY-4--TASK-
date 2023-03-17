var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', true);
request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.responseText);
        data.forEach(country => {
            console.log(country.flags.png);

        })
    } else {
        console.log('Erro data from API.');
    }
};
request.onerror = function () {
    console.log('Error in connecting api');

}
request.send();



