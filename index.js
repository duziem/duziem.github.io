$('#view').css({'visibility': 'hidden'});
$(document).ready(function(){
    $('#loader').css({'display': 'none'});
    $('#view').css({'visibility': 'visible'});
/** create a typewriter animation for the welcome text-- Hi i'm Francis... */
function typewriter(text, i, textRowIndex, callBackFn, currentText){

    
    if(i < text.length){

        let space;
        if(text[i].isSpaceNeeded != null || text[i].isSpaceNeeded != undefined){
            space= '&nbsp;';
        }else{
            space= '';
        }

        if(textRowIndex == 0){
            
            currentText += "<span class='color-" + text[i].color + "'><h1>" + text[i].text + space + "</h1></span>"; // update the current text-- here the h1 element is used
            let firstRow= document.getElementById('first-row-of-text'); //get the first row of text container
            firstRow.innerHTML= `${currentText}<span class="blinking-insert-line color-gray"></span>`;
            //$('#first-row-of-text').html(`<span class=${text[i].color}><h1>${currentText + space}</h1></span><span id="blinking-insert-line"></span>`);
        
        }else if(textRowIndex == 1){
            currentText += "<span class='color-" + text[i].color + "'><h2>" + text[i].text + space + "</h2></span>"; // update the current text-- here the h2 element is used
            let secondRow= document.getElementById('second-row-of-text');//get the second row of text container
            secondRow.innerHTML= `${currentText}<span class="blinking-insert-line color-gray"></span>`;
            //$('#second-row-of-text').html(`<span class=${text[i].color}><h1>${currentText + space}</h1></span><span id="blinking-insert-line"></span>`);
        }

        setTimeout(() => {
            typewriter(text, i + 1, textRowIndex, callBackFn, currentText);
        }, 100);
        
    }else{
        
        /**clear the blinking insert line */
        let blinkingLines= document.getElementsByClassName('blinking-insert-line');
        for(blinkingLine of blinkingLines){
            blinkingLine.style.display= 'none';
        }
        /**clear the blinking insert line */
       
        //call the callBackFn containing the startAnimation function in order to render the second row of welcome text: 'I am a full stack developer'
        if(textRowIndex <= 1){
            callBackFn();
        }
        
    }
}

function startAnimation(i){
    /*create variables representing the text color*/
    let color1= 'gray';
    let color2= 'inherit';

    let textRow= [
        [
            
            {text:'H',color:color1}, {text:'i',color:color1,isSpaceNeeded:true}, {text:'i',color:color1}, {text:"'",color:color1}, {text:'m',color:color1,isSpaceNeeded:true}, {text:'F',color:color2},
            {text:'r',color:color2}, {text:'a',color:color2}, {text:'n',color:color2}, {text:'c',color:color2}, {text:'i',color:color2}, {text:'s',color:color2}
        
        ],
        
        [
            {text:'I',color:color1,isSpaceNeeded: true}, {text:'a',color:color1}, {text:'m',color:color1,isSpaceNeeded: true}, {text:"a",color:color1,isSpaceNeeded: true}, {text:'f',color:color1}, {text:'u',color:color1},
            {text:'l',color:color1}, {text:'l',color:color1,isSpaceNeeded: true}, {text:'s',color:color2}, {text:'t',color:color2}, {text:'a',color:color2}, {text:'c',color:color2},
            {text:'k',color:color2,isSpaceNeeded: true}, {text:'d',color:color2}, {text:'e',color:color2}, {text:'v',color:color2}, {text:'e',color:color2}, {text:'l',color:color2}, 
            {text:'o',color:color2}, {text:'p',color:color2}, {text:'e',color:color2}, {text:'r',color:color2}
        ]
    ];

    let text= textRow[i];

    if(i < textRow.length){
        typewriter(text, 0, i, function(){startAnimation(i + 1)}, '');
    }
}

// calling this function with a parameter of 0 renders the first row of welcome text: 'Hi i'm Francis'
startAnimation(0); // call the animation function for the first time

/** create a typewriter animation for the welcome text-- Hi i'm Francis... */

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
    if($("#skills-section").hasClass('d-none')){
        $("#profile-toggle-btn").removeClass('d-none');
    }else{
        $("#profile-toggle-btn").addClass('d-none');
    }
})
$("#profile-card").mouseout(function(){
    $("#skills-section").addClass("d-none");
    if($("#skills-section").hasClass('d-none')){
        $("#profile-toggle-btn").removeClass('d-none');
    }else{
        $("#profile-toggle-btn").addClass('d-none');
    }
})


//set the skills section display to none when the chevron-down profile-toggle-btn btn is clicked
/*
$("#profile-toggle-btn").click(function(event){
    $("#skills-section").toggleClass("d-none");
    $(this).toggleClass("rotate-180");    
    
})
*/
let toggleProfileBtn= document.getElementById('profile-toggle-btn');
let skill= document.getElementById('skills-section');
skill.style.display == 'none'
if(skill.style.display == 'none'){
    toggleProfileBtn.classList.add('d-none');
}

/**profile skills section */

// Set the initial theme to dark and the color of the header to dark
$("#header").addClass(" color-dark");
$("#view").addClass("theme-dark");

/**Toggle between light and dark mode */
$("#toggle-light-mode").click(function(event){
    /*
    $("body").css({"background": "url('./assets/anonym.png')", "background-repeat": "no-repeat",  "background-size": "cover", "background-position": "center center"});
    */
    $("#view").toggleClass("theme-light");
    $("#view").toggleClass("theme-dark");
    $("#header").toggleClass("color-white");
    $("#header").toggleClass("color-dark");
    $("#myServices .services i").toggleClass("color-white");
    $("#myServices .services i").toggleClass("color-dark");
    $("section#about #profile-card").toggleClass("shadow-light");
    $("section#about #profile-card").toggleClass("shadow-dark");
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
    //evt.stopPropagation();

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

/*This code section below is for the nav menu: scroll to the page content when the respective menu item is clicked  */
//Begin

    $("#header .nav-menu #about-link").click(
        (e)=>{
            e.preventDefault();
            let about= document.getElementById("about")
            about.scrollIntoView({behavior:"smooth"});
        }
    )

    $("#header .nav-menu #works-link").click(
        (e)=>{
            e.preventDefault();
            let works= document.getElementById("latest-works")
            works.scrollIntoView({behavior:"smooth"});
        }
    )

    $("#header .nav-menu #services-link").click(
        (e)=>{
            e.preventDefault();
            let services= document.getElementById("myServices")
            services.scrollIntoView({behavior:"smooth"});
        }
    )

    $("#header .nav-menu #contact-link").click(
        (e)=>{
            e.preventDefault();
            let contact= document.getElementById("contact")
            contact.scrollIntoView({behavior:"smooth"});
        }
    )

    $("header #site-logo").click(
        (e)=>{
            e.preventDefault();
            let header= document.getElementById("header");
            header.scrollIntoView({behavior:"smooth"});
        }
    )

    $("#header #text #profile-btn").click(
        (e)=>{
            e.preventDefault();
            let about= document.getElementById("about")
            about.scrollIntoView({behavior:"smooth"});
        }
    )
//End
/*This code section is for the nav menu */
 
/**The code below controls the full screen overlay displaying the app carousel */

/*on clicking the image referring to the beloxxi mobile app*/
$("#latest-works #beloxxi-app .overlay").click(function(){

    // let appImages= ["./assets/beloxxiapp1.jpg","./assets/beloxxiapp2.jpg","./assets/beloxxiapp3.jpg","./assets/beloxxiapp4.jpg","./assets/beloxxiapp5.jpg","./assets/beloxxiapp6.jpg","./assets/beloxxiapp7.jpg","./assets/beloxxiapp8.jpg","./assets/beloxxiapp0.jpg"];
    // let slideType= "mobile-app-slideshow";

    /*caption for the Beloxxi App*/
    // let appCaption= {heading: "Employee Mgt App",body: "This Application was built using Flutter: https://github.com/duziem/beloxxi-app"};
    //let appCaption= {heading: "Employee Mgt App",body: "This Application was built using Flutter:the Dart framework. The app consists of: An income calculator which enables employees calculate their earnings; A profile screen which enables employees view the recent state of their profile in the company's database; An Info screen which enables an administrator upload content in order to circulate information to other employees via the app"};
    // setHtml(appImages, slideType, appCaption);
})

/*on clicking the image referring to the ecommerce app*/
$("#latest-works #ecommerce-app .overlay").click(function(){
    // window.location.href= "./pages/ecommerce-app.html"
    window.open('./pages/ecommerce-app/ecommerce-app.html', '_blank');
    // let appImages= ["./assets/pgh1.jpg","./assets/pgh2.jpg","./assets/pgh3.jpg","./assets/pgh4.jpg","./assets/pgh5.jpg"];
    // let slideType= "web-app-slideshow";
    // let appCaption= {heading: "PHP E-commerce App",body: "https://github.com/duziem/php-ecommerce-app"};//caption for the ecommerce app
    // //let appCaption= {heading: "E-commerce Application",body: "This E-commerce Application is built on php. The App enables you to view gadgets that have been uploaded to the site, make orders, and checkout your orders, add to wishlist&add to cart. The App was made for Premium Gadget Gub: an SME that deals in Gadgets and Electornics"};//caption for the ecommerce app
    // setHtml(appImages, slideType, appCaption);
})
$("#latest-works #github-finder .overlay").click(function(){
    window.open('./pages/github-finder/github-finder.html', '_blank');
})

/*on clicking the image referring to the php secure user app*/
$("#latest-works #user-app .overlay").click(function(){

    // let appImages= ["./assets/user app1.jpg","./assets/user app2.jpg","./assets/user app3.jpg","./assets/user app4.jpg"];
    // let slideType= "web-app-slideshow";
    // let appCaption= {heading: "PHP Secure User Form",body: ""}; //caption for the app
    // setHtml(appImages, slideType, appCaption);
})

// function setHtml(appImages, slideType, appCaption){
//     let overlayContent= '<span id="close-fullscreen-overlay" style="font-size:80px;position:absolute;top:3;right:5vw;color:white;cursor:pointer;width: 80px;height: 80px;">&times;</span><div style="display: flex;align-items: center;justify-content: center;height: 100%;width:100%;"><div id="' + slideType + '" class="carousel slide" data-ride="carousel"><div class="row"><div class="carousel-inner col-8 offset-2 w-100 p-0">';
//     for(let i=0;i<appImages.length;i++){
//         if(i == 0){
//             overlayContent += '<div class="carousel-item active"><img src="' + appImages[i] + '" alt="" class="img-fluid"></div>';
//             continue;
//         }
//         overlayContent += '<div class="carousel-item"><img src="' + appImages[i] + '" alt="" class="img-fluid"></div>';
    
//     }
//     overlayContent += '</div></div><a class="carousel-control-prev" href="#' + slideType + '" data-slide="prev"><span class="carousel-control-prev-icon"></span></a><a class="carousel-control-next" href="#' + slideType + '" data-slide="next"><span class="carousel-control-next-icon"></span></a></div></div><div id="app-caption" class="text-white" style="position:absolute;bottom:0;left:10vw;"><h4>' + appCaption.heading + '</h4><p>' + appCaption.body + '</p></div>';

//     $("#fullscreen-overlay").html(
//         overlayContent
//     )

//     //$('body').css('position', 'fixed'); //make the entire document fixed in order to prevent scrolling when the overlay is open

//     displayFullScreenOverlay(); //display the full screen overlay with the new html content

//     closeFullScreenOverlay(); //close the full screen overlay
// }

// /*display the full screen overlay*/
// function displayFullScreenOverlay(){
//     $("#fullscreen-overlay").css("display","block"); 
// }

// /*close the full screen overlay*/
// function closeFullScreenOverlay(){
//     $("#close-fullscreen-overlay").click(function(){4
//         $("#fullscreen-overlay").css("display","none"); //remove the overlay from view
//         $("#fullscreen-overlay").html(); //clear the contents of the overlay
//         $('body').css('position', 'static'); // make the document scrollable again
//     })
// }


/*slide the 3 elements that display my services upwards one after the other when the window is scrolled to that section of the document*/
window.onscroll = function(){slideUpFunction()};		
function slideUpFunction(){
    if(document.body.scrollTop >= 1360 || document.documentElement.scrollTop >= 1360){
        var services= document.getElementsByClassName("services");
        //alert(services[0].getBoundingClientRect().top);
        services[0].style.visibility= "visible";
        services[0].classList.add("slideUp");
    }
    if(document.body.scrollTop > 1520 || document.documentElement.scrollTop > 1520){
        var services= document.getElementsByClassName("services");
        services[1].style.visibility= "visible";
        services[1].classList.add("slideUp");
    }
    if(document.body.scrollTop >= 1620 || document.documentElement.scrollTop >= 1620){
        var services= document.getElementsByClassName("services");
        services[2].style.visibility= "visible";
        services[2].classList.add("slideUp");
        
    }

}

})
