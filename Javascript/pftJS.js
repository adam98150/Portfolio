
//Weather app function
function getWeather() {


    //JS Objects
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

    var miscObj =
        {
            check : false,
            tempRow : document.getElementById('tempRow'),
            locationRow : document.getElementById('locationRow'),
            mainContainer : document.getElementById('mainContainer')
        };

            //Using JSON to access API



        $.getJSON('https://api.apixu.com/v1/current.json?key=e96f5aacc68040f9af800902172606&q=London', function(json) {

                console.log('hey');
                var returnName = function() {
                    if (json.location.name.length >= 8)
                        {
                            locationObj.location.style.fontSize = '1.4em';
                            return json.location.name.toUpperCase();
                        }
                    else
                        {
                            locationObj.location.style.fontSize = '2.4em';
                            return json.location.name.toUpperCase();
                        }
                    }

                var dateAndTime = json.location.localtime.split(' ');


                imgObj.questMark.setAttribute('src', 'Images/questionMark.png');
                imgObj.questMark.className = 'questionMarkImg';

                locationObj.container.insertBefore(imgObj.questMark, dateObj.date);
                locationObj.location.innerHTML = returnName();

                dateObj.date.innerHTML = dateAndTime[0];
                dateObj.time.innerHTML = dateAndTime[1];

                tempObj.current.innerHTML = json.current.temp_c + 'c';

                conditionsObj.humidity.innerHTML = json.current.humidity;
                conditionsObj.wind.innerHTML = json.current.wind_mph;


                //Finds the right image for time of day / temp
                var str = dateAndTime[1].toString();
                var spl = str.split(':');

                if (spl[0] == '19' ||
                    spl[0] == '20' ||
                    spl[0] == '21' ||
                    spl[0] == '22' ||
                    spl[0] == '23' ||
                    spl[0] == '0' ||
                    spl[0] == '1' ||
                    spl[0] == '2' ||
                    spl[0] == '3' ||
                    spl[0] == '4' ||
                    spl[0] == '5')
                {
                    imgObj.weather.src = 'Images/night.png';
                }

                else if (json.current.temp_c >= 10 && json.current.temp_c < 15) {
                    imgObj.weather.src = 'Images/mild.png';
                }

                else if(json.current.temp_c < 10) {
                    imgObj.weather.src = 'Images/cold.png';
                }

                else if(json.current.temp_c >= 15) {
                    imgObj.weather.src = 'Images/sunny.png';
                }

                else {
                    imgObj.weather.src = 'Images/mild.png';
                }

                //Changes location to a text field when the question mark img is clicked
                imgObj.questMark.addEventListener('click', function() {

                    if(confirm('Change location?'))
                        {
                            locationObj.textField.value = '';
                            locationObj.location.innerHTML = '';
                            imgObj.questMark.remove();

                            locationObj.textField.className = 'findLocation';
                            locationObj.location.appendChild(locationObj.textField);
                            locationObj.textField.focus();
                        }

                    else
                        {
                            imgObj.questMark.remove();
                            getWeather();
                        }

                            //On enter key up the new location request gets sent to the API
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

                                                    var returnName = function() {
                                                        if (json.location.name.length > 6)
                                                            {
                                                                locationObj.location.style.fontSize = '1.4em';
                                                                return json.location.name.toUpperCase();
                                                            }
                                                        else
                                                            {
                                                                locationObj.location.style.fontSize = '2.4em';
                                                                return json.location.name.toUpperCase();
                                                            }
                                                        }

                                                    var dateAndTime = json.location.localtime.split(' ');

                                                    console.log(newLocation());
                                                    locationObj.textField.remove();
                                                    locationObj.location.innerHTML = returnName();

                                                    dateObj.date.innerHTML = dateAndTime[0];
                                                    dateObj.time.innerHTML = dateAndTime[1];

                                                    conditionsObj.wind.innerHTML = json.current.wind_mph;
                                                    conditionsObj.humidity.innerHTML = json.current.humidity;

                                                    tempObj.current.innerHTML = json.current.temp_c + 'C';
                                                    imgObj.questMark.setAttribute('src', 'Images/questionMark.png');
                                                    imgObj.questMark.className = 'questionMarkImg';
                                                    locationObj.container.insertBefore(imgObj.questMark, dateObj.date);
                                             },

                                            statusCode : {
                                                400 : function() {

                                                    //
                                                    while (miscObj.check == false)
                                                        {
                                                            alert('Valid locations only');
                                                            locationObj.textField.setAttribute('placeholder', 'Enter valid location');
                                                            miscObj.check = true;
                                                        }

                                                    locationObj.textField.value = '';

                                                }
                                                }
                                            })
                                    }
                                else
                                    {
                                        return 'hey';
                                    }
                            })
                        })
                    })
                }


getWeather();
