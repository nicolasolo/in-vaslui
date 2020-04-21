var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            
      var agroalimentara = response.agroalimentara;

      var output = '';
      for(var i = 0;i <agroalimentara.length;i++){
        output +=
        '<div class="col-sm- col-md-6 col-lg-4 m-auto">'+
        '<div class="rotating-card-container manual-flip" style="margin-bottom: 30px;">'+
          '<div class=" card card-rotate">'+
                '<div class="front front-background" data-background="image" style="background-image: url('+agroalimentara[i].picture+'); background-size:cover; min-height:300px">'+
                    '<div class="card-body m-auto">'+
                            '<h2 class="card-title text-white bold">'+agroalimentara[i].name+'</h2>'+
                            '<br>'+
                            '<label class="badge-pill badge-danger text-center">'+
                            '<h6>'+agroalimentara[i].adress.strada+'  '+ agroalimentara[i].adress.nr+'</h6>'+
                            '</label>'+
                            '<label class="badge-pill badge-primary text-center">'+
                            
                            '<p><i class="fa fa-phone"></i>'+agroalimentara[i].phone.tel2+'</p>'+
                            '</label>'+
                    '</div>'+
                  '<div class="card-footer text-center m-auto ">'+
                  '<button type="button" name="button" class="btn btn-white btn-round btn-rotate" onclick="rotateCard(this)">'+
                  '<i class="fa fa-refresh"></i>continua...'+
                  '</button>'+
                  '</div>'+
                '</div>'+
                '<div class="back">'+
                    '<div class="card-body" data-background="color" data-color="orange">'+
                            '<div class="row">'+
                                    '<div class="col-md-4 col-sm-4 col-4">'+
                                        
                                      '<p>luni-vineri: </p>'+
                                           '<h6>'+agroalimentara[i].orar.lv+'</h6>'+     
                                      '<p> sambata:  </p>'+
                                      '<h6>'+agroalimentara[i].orar.s+'</h6>'+
                                      '<p> duminica: </p>'+
                                      '<h6>'+agroalimentara[i].orar.d+'</h6>'+
                                    '</div>'+
                                    '<div class="col-md-8 col-sm-8 col-8">'+
                          
                                                '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2739.3925031445187!2d27.7264245!3d46.6387626!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ca737ef9e95363%3A0x749a1b6b2efc6f0a!2sagroalimentara!5e0!3m2!1sen!2sro!4v1560644698081!5m2!1sen!2sro" width="200" height="auto" frameborder="0" style="border:0" allowfullscreen></iframe>'+
                                        
                                     
                                        '</div>'+
                                      '</div>'+
                                    '</div>'+
                    '<div class="card-footer text-center m-auto ">'+
                      '<a href="#pablo" class="btn btn-just-icon btn-round btn-white">'+
                        '<i class="fa fa-twitter"></i>'+
                      '</a>'+
                      '<a href="#pablo" class="btn btn-just-icon btn-round btn-white">'+
                        '<i class="fa fa-dribbble"></i>'+
                      '</a>'+
                      '<a href="#pablo" class="btn btn-just-icon btn-round btn-white">'+
                        '<i class="fa fa-facebook"></i>'+
                      '</a>'+
                    '<button type="button" name="button" class="btn btn-success btn-round btn-rotate" onclick="rotateCard(this)">'+
                      '<i class="fa fa-refresh"></i>refresh'+
                    '</button>'+
                    '</div>'+
                '</div>'+
                '</div>'+
          '</div>'+
        '</div>';
      }
      document.getElementById('agroalimentara').innerHTML = output;
    }
};
      xhttp.open("GET", "places.json", true);
      xhttp.send();
