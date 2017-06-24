
//Weather app function
function getWeather() {

    var conditionsObj = 
        {
            humidity : document.getElementById('humidityTxt'),
            wind : document.getElementById('windSpdTxt')
        };
    
    var dateObj = 
        {
            date : document.getElementById('date'),
            dayOfWeek : document.getElementById('dayOfWeek'),
            d : new Date()
        };
    
    var locationObj = 
        {
            location : document.getElementById('location'),
            container : document.getElementById('locationContainer'),
            textField : document.createElement('input')
        };
    
    var tempObj = 
        {
            current : document.getElementById('temp'),
            min : document.getElementById('minTemp'),
            max : document.getElementById('maxTemp')
        };
    
    var imgObj = 
        {
            weather : document.getElementById('weatherImg'),
            questMark : document.createElement('img')
        };
    
    
    //input a new location
    function changeLocation() {
        
        imgObj.questMark.setAttribute('src', '../Images/questionMark.png');
        imgObj.questMark.className = 'questionMarkImg';
    
        //Brings up a text field to enter new location
        imgObj.questMark.onclick = function() {
        
        if(confirm('Change the location?')) 
            {
                locationObj.location.innerHTML = '';
                
                locationObj.textField.type = 'text';
                locationObj.textField.className = 'findLocation';
                locationObj.container.insertBefore(locationObj.textField, locationObj.location);
                locationObj.textField.focus();
                
                locationObj.textField.addEventListener('keyup', function() {
                    event.preventDefault();
                    if (event.keyCode == 13 && locationObj.textField.value.length != 0)
                        {
                            var newLocation = locationObj.textField.value;
                            $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + newLocation + ',GB&APPID=c36391aff2aa7383d22acf099f99cb56', function(json) {
                                
                                locationObj.textField.remove();
                                locationObj.location.innerHTML = json.name.toUpperCase();
                                imgObj.questMark.className = 'questionMarkImg';
                                locationObj.location.appendChild(imgObj.questMark);
                                
                                conditionsObj.humidity.innerHTML = json.main.humidity;
                                conditionsObj.wind.innerHTML = json.wind.speed;
                                
                                tempObj.current.innerHTML = (json.main.temp - 273.15).toFixed(0);
                                tempObj.min.innerHTML = (json.main.temp_min - 273.15).toFixed(0);
                                tempObj.max.innerHTML = (json.main.temp_max - 273.15).toFixed(0);
                                
                                
                            })
                        }
                })
            }
            
        else 
            {
               return ''; 
            }
        }    
        
    };
    
    
    //Obtains current day and month in name
    var dayMonth = 
        {
            month : function() {
                
                    if (dateObj.d.getMonth() == 0) {
                        return 'January';
                    }
                    else if (dateObj.d.getMonth() == 1) {
                        return 'Febuary';
                    }
                    else if (dateObj.d.getMonth() == 2) {
                        return 'March';
                    }
                    else if (dateObj.d.getMonth() == 3) {
                        return 'April';
                    }
                    else if (dateObj.d.getMonth() == 4) {
                        return 'May';
                    }
                    else if (dateObj.d.getMonth() == 5) {
                        return 'June';
                    }
                    else if (dateObj.d.getMonth() == 6) {
                        return 'July';
                    }
                    else if (dateObj.d.getMonth() == 7) {
                        return 'August';
                    }
                    else if (dateObj.d.getMonth() == 8) {
                        return 'September';
                    }
                    else if (dateObj.d.getMonth() == 9) {
                        return 'October';
                    }
                    else if (dateObj.d.getMonth() == 10) {
                        return 'November';
                    }
                    else if (dateObj.d.getMonth() == 11) {
                        return 'December';
                    }
                },
            
            day : function() {
                
                    if (dateObj.d.getDay() == 0) {
                        return 'Sunday';
                    }
                    else if (dateObj.d.getDay() == 1) {
                        return 'Monday';
                    }
                    else if (dateObj.d.getDay() == 2) {
                        return 'Tuesday';
                    }
                    else if (dateObj.d.getDay() == 3) {
                        return 'Wednesday';
                    }
                    else if (dateObj.d.getDay() == 4) {
                        return 'Thursday';
                    }
                    else if (dateObj.d.getDay() == 5) {
                        return 'Friday';
                    }
                    else if (dateObj.d.getDay() == 6) {
                        return 'Saturday';
                    }
                }
            };

    
    //Weather API
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Leeds,GB&APPID=c36391aff2aa7383d22acf099f99cb56', function(json) {
        
        //Takes info from the api and prints it to the page
        function printToPage() 
        {
            console.log(json);
            
            imgObj.questMark.setAttribute('src', '../Images/questionMark.png');
            imgObj.questMark.className = 'questionMarkImg';
            
            locationObj.location.innerHTML = json.name.toUpperCase();
            locationObj.location.appendChild(imgObj.questMark);
            
            dateObj.date.innerHTML = dateObj.d.getDate() + ' ' + dayMonth.month() + ' ' + dateObj.d.getFullYear();
            dateObj.dayOfWeek.innerHTML = dayMonth.day();
            
            conditionsObj.humidity.innerHTML = json.main.humidity;
            conditionsObj.wind.innerHTML = json.wind.speed;
            
            tempObj.current.innerHTML = (json.main.temp - 273.15).toFixed(0) + 'c';
            tempObj.min.innerHTML = (json.main.temp_min - 273.15).toFixed(0) + 'c';
            tempObj.max.innerHTML = (json.main.temp_max - 273.15).toFixed(0) + 'c';
            
            imgObj.questMark.addEventListener('click', function() {
                
                
                if (confirm('Change location?')) 
                    {
                        locationObj.location.innerHTML = '';
                        locationObj.textField.type = 'text';
                        locationObj.textField.className = 'findLocation';
                        locationObj.container.insertBefore(locationObj.textField, locationObj.location);
                        locationObj.textField.focus();
                        
                        locationObj.textField.addEventListener('keyup', function() {
                            
                            event.preventDefault();
                            if(event.keyCode == 13 & locationObj.textField.value.length > 0)
                                {
                                    imgObj.questMark.setAttribute('src', '../Images/questionMark.png');
                                    imgObj.questMark.className = 'questionMarkImg';
                                    var newLocation = locationObj.textField.value;

                                    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + newLocation + ',GB&APPID=c36391aff2aa7383d22acf099f99cb56', function(newjson) {
                                        
                                        
                                        
                                        locationObj.textField.remove();
                                        locationObj.textField.value = '';
                                        locationObj.location.innerHTML = newjson.name.toUpperCase();
                                        
                                        if (newjson.name.length > 6) 
                                            {
                                                locationObj.location.style.fontSize = '2em';
                                            }
                                        else 
                                            {
                                                locationObj.location.style.fontSize = '2.4em';
                                            }
                                        
                                        locationObj.location.appendChild(imgObj.questMark);
                                        
                                        conditionsObj.wind.innerHTML = newjson.wind.speed;
                                        conditionsObj.humidity.innerHTML = newjson.main.humidity;
                                        
                                        tempObj.current.innerHTML = (newjson.main.temp - 273.15).toFixed(0) + 'c';
                                        tempObj.min.innerHTML = (newjson.main.temp_min - 273.15).toFixed(0) + 'c';
                                        tempObj.max.innerHTML = (newjson.main.temp_max - 273.15).toFixed(0) + 'c';
               
                                    })
                                }
                            else 
                                {
                                    return '';
                                }
                        })
                            
                    }
                
            })
            
        };
        
        //Retrieves weather images (sunny, cloudy, night, mild etc)
        function retrieveImg() {
            
            if (dateObj.d.getHours() == 19 || 
                dateObj.d.getHours() == 20 || 
                dateObj.d.getHours() == 21 || 
                dateObj.d.getHours() == 22 || 
                dateObj.d.getHours() == 23 ||
                 dateObj.d.getHours() == 0 ||
                 dateObj.d.getHours() == 1 || 
                 dateObj.d.getHours() == 2 ||
                 dateObj.d.getHours() == 3 ||
                 dateObj.d.getHours() == 4 ||
                 dateObj.d.getHours() == 5) 
                {
                imgObj.weather.src = '../Images/night.png';
                }
                
                else if (json.main.temp >= 283.15 && json.main.temp <= 288.15) {
                    imgObj.weather.src = '../Images/mild.png';
                }
                else if(json.main.temp < 283.15) {
                    imgObj.weather.src = '../Images/cold.png';
                }
                else if(json.main.temp > 288.15) {
                    imgObj.weather.src = '../Images/sunny.png';
                }
                else {
                    imgObj.weather.src = '../Images/mild.png';
                }
        }
       printToPage(); retrieveImg();
    })
};

getWeather();

































