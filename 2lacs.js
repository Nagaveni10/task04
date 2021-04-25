var req = new XMLHttpRequest();
req.open('GET', 'https://restcountries.eu/rest/v2/all', true);
req.send();
req.onload = function() {
    var data = JSON.parse(this.response);
    data.filter(el => el.population <= "200000")
    for (var i in data) {
        if (data[i].population <= 200000) {
            console.log(data[i].population, data[i].name);
        }
    }
}