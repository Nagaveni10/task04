var req = new XMLHttpRequest();
req.open('GET', 'https://restcountries.eu/rest/v2/all', true);
req.send();
req.onload = function() {
    var data = JSON.parse(this.response);
    data.filter(el => el.region === "Asia")
    for (var i in data) {
        if (data[i].region === "Asia") {
            console.log(data[i].region, data[i].name);
        }
    }
}