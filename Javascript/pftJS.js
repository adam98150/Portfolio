



function test() {
    var humidity = document.getElementById('humidity');
    
    $.getJSON('https://api.apixu.com/v1/current.json?key=e96f5aacc68040f9af800902172606&q=Paris', function(json) {
        console.log(json.current.temp_c);
        console.log(json);
        humidity.innerHTML = json.current.temp_c;
    })
    
}

test();




























