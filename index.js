$(document).ready(function(){
    // isotope filter
var $grid = $(".grid").isotope({
    itemSelector : '.grid-item',
    layoutMode : 'fitRows'
});

// filter items on button click
$(".button-group").on("click", "button", function(){
    
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue});
})

/**profile skills section */
$("#skills-section").addClass("d-none");

$("#profile-card").mouseover(function(){
    $("#skills-section").removeClass("d-none");
})
$("#profile-card").mouseout(function(){
    $("#skills-section").addClass("d-none");
})

//set the skills section display to none when the chevron-circle-down profile-toggle-btn btn is clicked
/*$("#profile-toggle-btn").click(function(event){
    $("#skills-section").toggleClass("d-none");
    $(this).toggleClass("rotate-180");
})*/

/**profile skills section */

/**Toggle between light and dark mode */
$("#header").addClass(" color-white");
$("body").addClass("theme-light");

$("#toggle-light-mode").click(function(event){
    /*
    $("body").css({"background": "url('./assets/anonym.png')", "background-repeat": "no-repeat",  "background-size": "cover", "background-position": "center center"});
    */
    $("body").toggleClass("theme-light");
    $("body").toggleClass("theme-dark");
    $("#header").toggleClass("color-white");
   /*
   $(this).removeClass(" color-white");
   $(this).addClass(" color-dark");*/

   /*
   let color= $(this).css("color");
   color= color.toString();
    alert(color);

   if(color === 'rgb(255,255,255)'){
    $(this).css("color", "black");
   }else{
    $(this).css("color", "white");
   }
   */

   /*event.target.addClass("color-dark");*/
   
})
/**Toggle between light and dark mode */

//reveal the side menu when the menu icon is clicked
$("#menu-icon").click(function(evt){
    evt.stopPropagation();

    $("#side-nav-menu").toggleClass("hide-menu");
    $("#side-nav-menu").toggleClass("reveal-menu");
})

//close the side menu when the close-menu-icon 'x' is clicked
$("#close-menu-icon").click(function(evt){
    evt.stopPropagation();

    $("#side-nav-menu").removeClass("reveal-menu");
    $("#side-nav-menu").addClass("hide-menu");
})

//close the side menu when any area of the document other than the menu icon is clicked
$("html,body").click(function(evt){

    var sideMenu= $("#side-nav-menu");

    if(!sideMenu.is(evt.target) && sideMenu.has(evt.target).length === 0){
        $("#side-nav-menu").removeClass("reveal-menu");
        $("#side-nav-menu").addClass("hide-menu");
    }
})

/**The code below controls the full screen overlay displaying the app carousel */

/*on clicking the image referring to the beloxxi mobile app*/
$("#latest-works #beloxxi-app .overlay").click(function(){

    let appImages= ["./assets/beloxxiapp1.jpg","./assets/beloxxiapp2.jpg","./assets/beloxxiapp3.jpg","./assets/beloxxiapp4.jpg","./assets/beloxxiapp5.jpg","./assets/beloxxiapp6.jpg","./assets/beloxxiapp7.jpg","./assets/beloxxiapp8.jpg","./assets/beloxxiapp0.jpg"];
    let slideType= "mobile-app-slideshow";
    setHtml(appImages, slideType);
})

/*on clicking the image referring to the beloxxi mobile app*/
$("#latest-works #ecommerce-app .overlay").click(function(){

    let appImages= ["./assets/pgh1.jpg","./assets/pgh2.jpg","./assets/pgh3.jpg","./assets/pgh4.jpg","./assets/pgh5.jpg"];
    let slideType= "web-app-slideshow";
    setHtml(appImages, slideType);
})

function setHtml(appImages, slideType){
    let span= '<span id="close-fullscreen-overlay" style="font-size:80px;position:absolute;top:3;right:5vw;color:white;cursor:pointer;width: 80px;height: 80px;">&times;</span><div style="display: flex;align-items: center;justify-content: center;height: 100%;width:100%;"><div id="' + slideType + '" class="carousel slide" data-ride="carousel"><div class="row"><div class="carousel-inner col-8 offset-2 w-100 p-0">';
    for(let i=0;i<appImages.length;i++){
        if(i == 0){
            span += '<div class="carousel-item active"><img src="' + appImages[i] + '" alt="" class="img-fluid"></div>';
            continue;
        }
        span += '<div class="carousel-item"><img src="' + appImages[i] + '" alt="" class="img-fluid"></div>';
    
    }
    span += '</div></div><a class="carousel-control-prev" href="#' + slideType + '" data-slide="prev"><span class="carousel-control-prev-icon"></span></a><a class="carousel-control-next" href="#' + slideType + '" data-slide="next"><span class="carousel-control-next-icon"></span></a></div></div>';

    $("#fullscreen-overlay").html(
        span
    )

    displayFullScreenOverlay();//display the full screen overlay with the new html content

    closeFullScreenOverlay();//close the full screen overlay
}

/*display the full screen overlay*/
function displayFullScreenOverlay(){
    $("#fullscreen-overlay").css("display","block"); 
}

/*close the full screen overlay*/
function closeFullScreenOverlay(){
    $("#close-fullscreen-overlay").click(function(){
        $("#fullscreen-overlay").css("display","none");
        $("#fullscreen-overlay").html();
    })
}

})
