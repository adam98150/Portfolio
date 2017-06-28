
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
            time : document.getElementById('time'),
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
        
        //Retrieves weather images (sunny, cloudy, night, mild etc)
        function retrieveImg() {
            
            $.getJSON('https://api.apixu.com/v1/current.json?key=e96f5aacc68040f9af800902172606&q=London', function(json) {
                var dateAndTime = json.location.localtime.split(' ');

                console.log(json);

                imgObj.questMark.setAttribute('src', '../Images/questionMark.png');
                imgObj.questMark.className = 'questionMarkImg';

                locationObj.container.insertBefore(imgObj.questMark, dateObj.date);
                locationObj.location.innerHTML = json.location.name.toUpperCase();

                dateObj.date.innerHTML = dateAndTime[0];
                dateObj.time.innerHTML = dateAndTime[1];

                tempObj.current.innerHTML = json.current.temp_c + 'c';

                conditionsObj.humidity.innerHTML = json.current.humidity;
                conditionsObj.wind.innerHTML = json.current.wind_mph;
            
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
                
                else if (json.current.temp_c >= 10 && json.current.temp_c < 15) {
                    imgObj.weather.src = '../Images/mild.png';
                }
                else if(json.current.temp_c < 10) {
                    imgObj.weather.src = '../Images/cold.png';
                }
                else if(json.current.temp_c >= 15) {
                    imgObj.weather.src = '../Images/sunny.png';
                }
                else {
                    imgObj.weather.src = '../Images/mild.png';
                }
                
                imgObj.questMark.addEventListener('click', function() {
                    if(confirm('Change location?')) 
                        {
                            locationObj.location.innerHTML = '';
                            imgObj.questMark.remove();
                            
                            locationObj.textField.className = 'findLocation';
                            locationObj.location.appendChild(locationObj.textField);
                            locationObj.textField.focus();
                            
                            event.preventDefault();
                            locationObj.textField.addEventListener('keyup', function() {
                                if (event.keyCode == 13) 
                                    {
                                        var newLocation = function() {
                                            var input = locationObj.textField.value;
                                            return input.toString();
                                    }
                                        
                                        $.ajax({
                                            url : 'https://api.apixu.com/v1/current.json?key=e96f5aacc68040f9af800902172606&q=' + newLocation(),
                                            dataType : 'json',
                                            success : function(json) {
                                                
                                                var dateAndTime = json.location.localtime.split(' ');
                                                    
                                                console.log(newLocation());
                                                locationObj.textField.remove();
                                                locationObj.location.innerHTML = json.location.name.toUpperCase();
                                                
                                                dateObj.date.innerHTML = dateAndTime[0];
                                                dateObj.time.innerHTML = dateAndTime[1];
                                                
                                                conditionsObj.wind.innerHTML = json.current.wind_mph;
                                                conditionsObj.humidity.innerHTML = json.current.humidity;
                                                
                                                tempObj.current.innerHTML = json.current.temp_c;
                                                imgObj.questMark.setAttribute('src', '../Images/questionMark.png');
                                                imgObj.questMark.className = 'questionMarkImg';
                                                locationObj.container.insertBefore(imgObj.questMark, dateObj.date);
                                                
                                                
                                            },
                                            statusCode : {
                                                400 : function() {
                                                    alert('Valid location required');
                                                    getWeather();
                                                }
                                            }
                                        })
                                        
                                    }
                                else 
                                    {
                                        return '';
                                    }
                                
                                function test() {
                                    console.log()
                                }
                            })
                            
                        }
                    else 
                        {
                            return '';
                        }
                })
            })
        }
    retrieveImg();
}

getWeather();
























