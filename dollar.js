var req = new XMLHttpRequest();
req.open('GET', 'https://restcountries.eu/rest/v2/all', true);
req.send();
req.onload = function() {
    var data = JSON.parse(this.response);
    data.filter(el => el.currencies.code === "USD")
    for (var i in data) {
        if (data[i].currencies[0].code === "USD") {
            console.log(data[i].currencies[0].code, data[i].name);
        }
    }
}