// Open/Close Menu, Show/Hide Menu Options
function openMenu() {
    //Main menu icon
    var menuBtn = document.getElementById('menuBtn');
    //One of the btns that appears when icon is clicked
    var interestsBtn = document.getElementById('interestsBtn');
    //One of the btns that appears when icon is clicked
    var aboutBtn = document.getElementById('aboutBtn');
    
    //Btn container holds all 3 btns
    var btnContainer = document.getElementById('menuBtnContainer');
    
    //On click
    menuBtn.addEventListener('click', function() {
        
        //Opens menu
        if (menuBtn.style.transform != 'rotate(90deg)') 
        {
            menuBtn.style.transform = 'rotate(90deg)';
            interestsBtn.style.marginLeft = '10px';
            aboutBtn.style.marginLeft = '10px';
        }
        
        //Closes menu
        else {
            menuBtn.style.transform = 'rotate(180deg)';
            interestsBtn.style.marginLeft = '-125px';
            aboutBtn.style.marginLeft = '-125px';
        };
    });
};


function menuScroll() {
    btn1 = $('.aboutBtn');
    btn2 = $('.interestsBtn');
    div = $('.mainBlock');
    divPos = div.position();
    
    $(window).scroll(function() {
        
        var windowPos = $(window).scrollTop();
        
        console.log(divPos.top, windowPos);
        
        if (windowPos >= 560) {
            btn1.css('color', 'black');
            btn2.css('color', 'black');
        }
        else {
            btn1.css('color', 'white');
            btn2.css('color', 'white');
        }
    });
};

menuScroll();



//Functions (5 in total) which make blocks of text appear as you scroll on main page
function htmlScroll() {
    var div = $('.htmlBlock');
    //Get div position
    var divPos = div.position();
    //On scroll do this
    $(window).scroll(function() {
        //Top of the element position (in this case 0 as window is at the very top)
        var windowPos = $(window).scrollTop();
        //When the window is within 600px of the top of the element it will add class
        if(windowPos >= (divPos.top - 700)) 
        {
            //Makes element visible
            div.addClass('afterScroll');
            
        }
    });
};

function cssScroll() {
    var div = $('.cssBlock');
    var divPos = div.position();
    $(window).scroll(function() {
        var windowPos = $(window).scrollTop();
        if(windowPos >= (divPos.top - 700)) 
        {
            div.addClass('afterScroll'); 
        }
    });
};

function jsScroll() {
    var div = $('.javascriptBlock');
    var divPos = div.position();
    $(window).scroll(function() {
        var windowPos = $(window).scrollTop();
        if (windowPos >= (divPos.top - 700)) 
        {
            div.addClass('afterScroll');
        }
    });
};

function jqueryScroll() {
    var div = $('.jqueryBlock');
    var divPos = div.position();
    $(window).scroll(function() {
        var windowPos = $(window).scrollTop();
        if (windowPos >= (divPos.top - 700)) {
            div.addClass('afterScroll');
        }
    });
};


function bootstrapScroll() {
    var div = $('.bootstrapBlock');
    var divPos = div.position();
    
    $(window).scroll(function() {
        var windowPos = $(window).scrollTop();
        if (windowPos >= (divPos.top - 700)) {
            div.addClass('afterScroll');
        }
    });
};


htmlScroll();
cssScroll();
jsScroll();
jqueryScroll();
bootstrapScroll();


function openPhoneMenu() {
    
    document.getElementById('menuBtnPhone').addEventListener('click', function() {
        
        document.getElementById('phoneMenu').style.top = '0px';
        
    });
};

function closePhoneMenu() {
    
    document.getElementById('cancelMenuBtn').addEventListener('click', function() {
        
        document.getElementById('phoneMenu').style.top = '-1000px';
        
    });
};

openPhoneMenu();
closePhoneMenu()



























openMenu();