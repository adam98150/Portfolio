var truFal = true;
var thirdImg = true;

function swapImg() {
    var btn = document.getElementById('image');
    var image = document.getElementById('image2');
    
    btn.addEventListener('click', function() {
        
        
        if (truFal == false && thirdImg == true) 
            {
                image.src = "Images/previewImg.png";
                truFal = true;
            }
        
        else if (truFal == true && thirdImg == true)
            {
                image.src = "Images/previewImg2.png";
                truFal = false;
                thirdImg = false;
            }
        
        else
            {
                image.src = "Images/previewImg3.png";
                thirdImg = true;
            }
    })
}

function swapBgImg() {
    var previewImg = document.getElementById('image2');
    var mainImg = document.getElementById('previewImg');
    
    
    previewImg.addEventListener('click', function() {
        
        if (truFal == true && thirdImg == true) 
        {
            console.log('1');
            $('html, body').animate({scrollTop: '0px'}, 'slow');
            mainImg.src = 'Images/mainImg.png';    
        }
        else if (truFal == false && thirdImg == true)
        {
            console.log('2');
            $('html, body').animate({scrollTop: '0px'}, 'slow');
            mainImg.src = 'Images/mainImg3.png';
        }
        else 
        {
            console.log('3');
            $('html, body').animate({scrollTop: '0px'}, 'slow');
            mainImg.src = 'Images/mainImg2.png';
        }
        
    })
}

swapBgImg();
swapImg();