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


htmlScroll();
cssScroll();
jsScroll();


function openPhoneMenu() {
    
    document.getElementById('menuBtnPhone').addEventListener('click', function() {
        
        document.getElementById('phoneMenu').style.top = '0px';
        document.getElementById('phoneMenu').style.opacity = '0.9';
        
    });
};

function closePhoneMenu() {
    
    document.getElementById('cancelMenuBtn').addEventListener('click', function() {
        
        document.getElementById('phoneMenu').style.top = '-1000px';
        document.getElementById('phoneMenu').style.opacity = '0';
        
    });
};

openPhoneMenu();
closePhoneMenu()
openMenu();



//Opens external link to a project
function openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
};


//REVEALS LANGUAGES USED TEXT ON ICON CLICK
function openLang() {
    console.log('hi');
    //Icon to click
    var icon = document.getElementById('viewLangImg');
    
    //If languages icon is clicked do this
    icon.addEventListener('click', function() {
        
        //Makes text disappear offscreen
        console.log('hi');
        $('.viewLangText').css('opacity', '0');
        $('.viewLangImg').css('opacity', '0');
        $('.viewWebsiteText').css('opacity', '0');
        $('.viewWebsiteImg').css('opacity', '0');
        
        
        //Calls function if i is not equal to 9 (calls it 9 times)
        for (var i = 1 ; i <= 9 ; i++) {
            doIt(i);
        }
        
        //Function that moves tech/languages used on screen
        function doIt(n) {
            setTimeout(function() {
                console.log(n);
                $('.li' + n).animate({marginLeft: '0'}, 'fast');
            }, 500 * n)
        }
    });
};


//HIDES LANGUAGES TEXT ON CLICK
function closeLang() {
    var back = document.getElementById('li9');
    
    //back.addEventListener('click', function() {
        console.log('1');
        var i = 1;
        
        while (i <= 9) 
        {
            $('.li' + i).animate({marginLeft: '1000'}, 'fast');
            i++;
        }
        
        $('.viewLangText').css('opacity', '0.8');
        $('.viewLangImg').css('opacity', '0.8');
        $('.viewWebsiteText').css('opacity', '0.8');
        $('.viewWebsiteImg').css('opacity', '0.8');
        openLang();
    //})
}
    


function adjustIcon() {
    
    imageWeb = $('.viewWebsiteImg');
    textWeb = $('.viewWebsiteText');
    imageLang = $('.viewLangImg');
    textLang = $('.viewLangText');
    
    setInterval(function() {
        
        if (window.innerWidth < 500 || window.innerHeight < 500) 
            {
                imageWeb.css('top', '135px');
                imageWeb.css('right', '50px');
                textWeb.css('top', '80px');
                textWeb.css('right', '42px');
                
                imageLang.css('top', '135px');
                imageLang.css('left', '50px');
                textLang.css('top', '55px');
                textLang.css('left', '38px');
            }
        else if (window.innerWidth > 500 || window.innerHeight > 500)
            {
                $('.viewLangText').css('left', '75px');
                $('.viewLangImg').css('left', '108px');
                $('.viewWebsiteText').css('right', '100px');
                $('.viewWebsiteImg').css('right', '108px');
                imageLang.css('top', '235px');
                textLang.css('top', '175px');
                imageWeb.css('top', '235px');
                textWeb.css('top', '175px');
                
            }
        
        
    });
};

adjustIcon();
openLang();

























