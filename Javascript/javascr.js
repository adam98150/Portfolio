function displayMenu() {

  var obj = {
    menu : document.getElementById('menuDiv'),
    arrow : document.getElementById('arrow'),
    curveArrow2 : document.getElementById('curveArrow'),
    curveArrow : document.getElementById('curveArrowRow'),
    colDiv : document.getElementById('collapseDiv'),
    testing : document.getElementById('testing'),
    bool : true
  };



  obj.arrow.addEventListener('click', function() {

    if (obj.bool == true)
      {
        obj.menu.style.marginTop = '0px';
        obj.arrow.style.transform = 'rotate(180deg)';
        obj.curveArrow.style.opacity = '0';
        obj.bool = false;
      }
    else
      {
        obj.menu.style.marginTop = '-250px';
        obj.arrow.style.transform = 'rotate(360deg)';
        obj.curveArrow.style.opacity = '1';
        obj.bool = true;
      }
  });

};

displayMenu();
