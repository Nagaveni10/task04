var req = new XMLHttpRequest();
req.open('GET', 'https://restcountries.eu/rest/v2/all', true);
req.send();
req.onload = function() {
    var data = JSON.parse(this.response);
    var res = data.forEach((el) => {});
    for (var i in data) {
        console.log(data[i].name, data[i].capital, data[i].flag);
    }
}