var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            
      var restaurante = response.restaurante;

      var output = '';
      for(var i = 0;i <restaurante.length;i++){
        output +=
        '<div class="col-sm- col-md-6 col-lg-4 m-auto">'+
        '<div class="rotating-card-container manual-flip" style="margin-bottom: 30px;">'+
          '<div class=" card card-rotate">'+
                '<div class="front front-background" data-background="image" style="background-image: url('+restaurante[i].picture+'); background-size:cover; min-height:300px">'+
                    '<div class="card-body m-auto">'+
                            '<h2 class="card-title text-white bold">'+restaurante[i].name+'</h2>'+
                            '<br>'+
                            '<label class="badge-pill badge-danger text-center">'+
                            '<h6>'+restaurante[i].adress.strada+'  '+ restaurante[i].adress.nr+'</h6>'+
                            '</label>'+
                            '<label class="badge-pill badge-primary text-center">'+
                            
                            '<p><i class="fa fa-phone"></i>'+restaurante[i].phone.tel2+'</p>'+
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
                                           '<h6>'+restaurante[i].orar.lv+'</h6>'+     
                                      '<p> sambata:  </p>'+
                                      '<h6>'+restaurante[i].orar.s+'</h6>'+
                                      '<p> duminica: </p>'+
                                      '<h6>'+restaurante[i].orar.d+'</h6>'+
                                    '</div>'+
                                    '<div class="col-md-8 col-sm-8 col-8">'+
                          
                                    '<div class="mapouter"><div class="gmap_canvas"><iframe width="200" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q='+restaurante[i].adress.strada+'&'+restaurante[i].adress.nr+'&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>Google Maps Generator by <a href="https://www.embedgooglemap.net">embedgooglemap.net</a></div><style>.mapouter{position:relative;text-align:right;height:200px;width:200px;}.gmap_canvas {overflow:hidden;background:none!important;height:200px;width:200;}</style></div>'+
                                        
                                     
                                        '</div>'+
                                      '</div>'+
                                    '</div>'+
                    '<div class="card-footer text-center m-auto ">'+
                      '<div class="sharethis-inline-follow-buttons"></div>'+
                    '<button type="button" name="button" class="btn btn-success btn-round btn-rotate" onclick="rotateCard(this)">'+
                      '<i class="fa fa-refresh"></i>refresh'+
                    '</button>'+
                    '</div>'+
                '</div>'+
                '</div>'+
          '</div>'+
        '</div>';
      }
      document.getElementById('restaurante').innerHTML = output;
    }
};
      xhttp.open("GET", "places.json", true);
      xhttp.send();
