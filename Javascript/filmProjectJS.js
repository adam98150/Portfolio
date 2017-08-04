function submitTitle() {

  var obj = {
    title : document.getElementById('textFieldName'),
    btn : document.getElementById('nxtSrcBtn'),
    label : document.getElementsByTagName('Label')[0],
    showTitle : document.getElementById('textFieldName'),
    previewTitle : document.getElementsByClassName('previewTitle'),
    previewImg : document.getElementsByClassName('previewImg'),
    previewTable : document.getElementsByClassName('previewTable')
  };

  var previewTitle = function() {

    obj.title.addEventListener('keyup', function() {

      if (obj.title.value.length < 1)
      {
        obj.previewTable[0].style.display = 'none';
      }
      else
      {
        obj.previewTable[0].style.display = 'block';

        $.getJSON('https://api.tvmaze.com/search/shows?q=' + obj.title.value, function(json) {

          var jsonObj = {

            previewOne : {
              image : json[0].show.image.original,
              title : json[0].show.name
            },

            previewTwo : {
              image : json[1].show.image.original,
              title : json[1].show.name
            },

            previewThree : {
              image : json[2].show.image.original,
              title : json[2].show.name
            }
          };

          obj.previewTitle[0].innerHTML = jsonObj.previewOne.title;
          obj.previewImg[0].src = jsonObj.previewOne.image;

          obj.previewTitle[1].innerHTML = jsonObj.previewTwo.title;
          obj.previewImg[1].src = jsonObj.previewTwo.image;

          obj.previewTitle[2].innerHTML = jsonObj.previewThree.title;
          obj.previewImg[2].src = jsonObj.previewThree.image;

        });
      };
    });
  };

  previewTitle();


  obj.btn.addEventListener('click', function() {
    $.getJSON('https://api.tvmaze.com/search/shows?q=' + obj.showTitle.value, function(json) {
    console.log(json);
    });
  });

};

submitTitle();
