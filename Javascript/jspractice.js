document.getElementById('closeBtn').addEventListener('click', function() {

    var mainImage = document.getElementById('mainImage');
    var closeBtn = document.getElementById('closeBtn');
        
    mainImage.style.display = 'none';
    closeBtn.style.visibility = 'hidden';
        
    });


function changeImage(event) {
    
    var closeBtn = document.getElementById('closeBtn');
    var mainImage = document.getElementById('mainImage');
    
    mainImage.style.display = 'block';
    closeBtn.style.visibility = 'visible';
    
    event = event || window.event;
    
    var targetElement = event.target || event.srcElement;
    
    if (targetElement.tagName == 'IMG') 
    {
        document.getElementById('mainImage').src = targetElement.getAttribute('src');    
    }
    
};