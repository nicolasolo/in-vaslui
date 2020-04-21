

$(document).ready(function(){

      

      let url = "https://newsapi.org/v2/top-headlines?country=ro&category=entertainment&apiKey=2f3006974899439eb3c00f0079599aed";
      let url2 = "https://newsapi.org/v2/top-headlines?q=&country=ro&apiKey=2f3006974899439eb3c00f0079599aed";
      let url3 = "https://newsapi.org/v2/top-headlines?country=ro&category=sports&apiKey=2f3006974899439eb3c00f0079599aed";
      
        
        $.ajax({
          
          url: url,
          method: "GET",
          dataType: "json",
          
          success: function(news){
            let output = "";
            let latestNews = news.articles;
            
            for(var i in latestNews){
              output +=`
<div class="col-sm-6 col-md-6 col-lg-4 m-auto">
  <div class="rotating-card-container manual-flip" style="margin-bottom: 30px;">
    <div class="card">
      <div class="card-rotate ">
          <div class="front front-background" data-background="image" style="background-image: url('${latestNews[i].urlToImage}'); background-size:cover">
              <div class="card-body">
                <label class="badge-pill badge-danger">
                ${latestNews[i].source.name}
                </label>
                <h6 class="card-title text-white"style="background-color:rgba(44, 44, 44, 0.8)">${latestNews[i].title}</h6>    
              </div>
            <div class="card-footer text-center m-auto ">
            <button type="button" name="button" class="btn btn-white btn-round btn-rotate" onclick="rotateCard(this)">
            <i class="fa fa-refresh"></i>continua...
            </button>
            </div>
          </div>
          <div class="back">
              <div class="card-body">
                <p class="card-title">${latestNews[i].description}</p>
              <div class="card-footer text-center m-auto ">
                <a href="#pablo" class="btn btn-just-icon btn-round btn-white">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#pablo" class="btn btn-just-icon btn-round btn-white">
                  <i class="fa fa-dribbble"></i>
                </a>
                <a href="#pablo" class="btn btn-just-icon btn-round btn-white">
                  <i class="fa fa-facebook"></i>
                </a>
              <button type="button" name="button" class="btn btn-success btn-round btn-rotate" onclick="rotateCard(this)">
                <i class="fa fa-refresh"></i>refresh
              </button>
              </div>
          </div>
          </div>
    </div>
  </div>
</div>   
</div>
              `;
            }
            
            if(output !== ""){
              $("#newsResults").html(output);
               M.toast({
                html: "There you go, nice reading",
                classes: 'green'
              });
              
            }else{
              let noNews = `<div style='text-align:center; font-size:36px; margin-top:40px;'>This news isn't available. Sorry about that.<br>Try searching for something else </div>`;
               $("#newsResults").html(noNews);
              M.toast({
                html: "This news isn't available",
                classes: 'red'
              });
            }
            
          },
          
          error: function(){
             let internetFailure = `
             <div style="font-size:34px; text-align:center; margin-top:40px;">Please check your internet connection and try again.
             <img src="img/internet.png" class="responsive-img">
             </div>`;
             
            $("#newsResults").html(internetFailure);
             M.toast({
                html: "We encountered an error, please try again",
                classes: 'red'
              });
          }
          
          
        });
        
        $.ajax({
          
          url: url2,
          method: "GET",
          dataType: "json",
          
          success: function(news){
            let output = "";
            let latestNews = news.articles;
            
            for(var i in latestNews){
              output +=`
          <div class="col-lg-4 col-md-6 col-sm-6 m-auto"> 
            <div class="rotating-card-container manual-flip" style="margin-bottom: 30px">
              <div class="card-plain card-blog card">
                <div class="card-rotate ">
                  
                  <div class="card-body m-auto">
<div class=" card-image clear-filter"filter-color="orange">
                  <img class=" img" src="${latestNews[i].urlToImage}" style="background-size: cover;">
       
                  </div>
                    <h6 class="card-title text-center">${latestNews[i].title}</h6>
                    </div>
                      <div class="card-footer text-center m-auto ">
                        <button type="button" name="button" class="btn btn-white btn-round btn-rotate" onclick="rotateCard(this)">
                         <i class="fa fa-refresh"></i>citeste...
                        </button>
                      </div>
                    </div>
                    <div class="back">
                      <h6 class="card-title text-center">${latestNews[i].title}</h6>
                        <div class="card-body m-auto">
                          <p class="card-title">${latestNews[i].description}</p>
                        </div>
                        <div class="card-footer text-center m-auto ">
                          <a href="#pablo" class="btn btn-just-icon btn-round btn-white">
                            <i class="fa fa-twitter"></i>
                          </a>
                          <a href="#pablo" class="btn btn-just-icon btn-round btn-white">
                            <i class="fa fa-dribbble"></i>
                          </a>
                          <a href="#pablo" class="btn btn-just-icon btn-round btn-white">
                            <i class="fa fa-facebook"></i>
                          </a>
                          <button type="button" name="button" class="btn btn-success btn-round btn-rotate" onclick="rotateCard(this)">
                          <i class="fa fa-refresh"></i>refresh
                          </button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>   
          </div>
              `;
            }
            
            if(output !== ""){
              $("#regionalResults").html(output);
               M.toast({
                html: "There you go, nice reading",
                classes: 'green'
              });
              
            }else{
              let noNews = `<div style='text-align:center; font-size:36px; margin-top:40px;'>This news isn't available. Sorry about that.<br>Try searching for something else </div>`;
               $("#regionalResults").html(noNews);
              M.toast({
                html: "This news isn't available",
                classes: 'red'
              });
            }
            
          },
          
          error: function(){
             let internetFailure = `
             <div style="font-size:34px; text-align:center; margin-top:40px;">Please check your internet connection and try again.
             <img src="img/internet.png" class="responsive-img">
             </div>`;
             
            $("#regionalResults").html(internetFailure);
             M.toast({
                html: "We encountered an error, please try again",
                classes: 'red'
              });
          }
          
          
        });
      
        $.ajax({
          
          url: url3,
          method: "GET",
          dataType: "json",
          
          success: function(news){
            let output = "";
            let latestNews = news.articles;
            
            for(var i in latestNews){
              output +=`
            <div class="col-sm-6 col-md-6 col-lg-4 m-auto">
            <div class="rotating-card-container manual-flip" style="margin-bottom: 30px;">
              <div class="card">
                <div class="card-rotate ">
                <div class=" card-image">
                <img class=" img " src="${latestNews[i].urlToImage}">
               </div>
                <div class="card-body m-auto">
                <h6 class="card-title text-center">${latestNews[i].title}</h6>
                </div>
                      <div class="card-footer text-center m-auto ">
                      <button type="button" name="button" class="btn btn-white btn-round btn-rotate" onclick="rotateCard(this)">
                      <i class="fa fa-refresh"></i>continua...
                      </button>
                      </div>
                    </div>
                    <div class="back">
                    
                        <div class="card-body m-auto">
                                            <h6 class="card-title text-center">${latestNews[i].title}</h6>

                          <p class="card-title">${latestNews[i].description}</p>
                        <div class="card-footer text-center m-auto ">
                          <a href="#pablo" class="btn btn-just-icon btn-round btn-white">
                            <i class="fa fa-twitter"></i>
                          </a>
                          <a href="#pablo" class="btn btn-just-icon btn-round btn-white">
                            <i class="fa fa-dribbble"></i>
                          </a>
                          <a href="#pablo" class="btn btn-just-icon btn-round btn-white">
                            <i class="fa fa-facebook"></i>
                          </a>
                        <button type="button" name="button" class="btn btn-success btn-round btn-rotate" onclick="rotateCard(this)">
                          <i class="fa fa-refresh"></i>refresh
                        </button>
                        </div>
                    </div>
                    </div>
              </div>
            </div>
          </div>   
          </div>
              `;
            }
            
            if(output !== ""){
              $("#sportResults").html(output);
               M.toast({
                html: "There you go, nice reading",
                classes: 'green'
              });
              
            }else{
              let noNews = `<div style='text-align:center; font-size:36px; margin-top:40px;'>This news isn't available. Sorry about that.<br>Try searching for something else </div>`;
               $("#sportResults").html(noNews);
              M.toast({
                html: "This news isn't available",
                classes: 'red'
              });
            }
            
          },
          
          error: function(){
             let internetFailure = `
             <div style="font-size:34px; text-align:center; margin-top:40px;">Please check your internet connection and try again.
             <img src="img/internet.png" class="responsive-img">
             </div>`;
             
            $("#sportResults").html(internetFailure);
             M.toast({
                html: "We encountered an error, please try again",
                classes: 'red'
              });
          }
          
          
        });

    
});