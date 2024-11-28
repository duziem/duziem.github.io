$(document).ready(function(){
    // const maintenanceMessage = document.getElementById('maintenance-message');
    // maintenanceMessage.style.display = 'flex';

    // setTimeout(()=>{$('#loader').css({'display': 'none'}); $('body').css({ 'overflow-y': 'visible'});}, 800)
    // $('#view').css({'visibility': 'visible'});
    
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
        }else if(textRowIndex == 1){
            currentText += "<span class='color-" + text[i].color + "'><h2>" + text[i].text + space + "</h2></span>"; // update the current text-- here the h2 element is used
            let secondRow= document.getElementById('second-row-of-text');//get the second row of text container
            secondRow.innerHTML= `${currentText}<span class="blinking-insert-line color-gray"></span>`;
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
    $("#view").toggleClass("theme-light");
    $("#view").toggleClass("theme-dark");
    $("#header").toggleClass("color-white");
    $("#header").toggleClass("color-dark");
    $("#myServices .services i").toggleClass("color-white");
    $("#myServices .services i").toggleClass("color-dark");
    $("section#about #profile-card").toggleClass("shadow-light");
    $("section#about #profile-card").toggleClass("shadow-dark");
    $("#latest-works .grid .grid-item .img-box").toggleClass("shadow-light");
    $("#latest-works .grid .grid-item .img-box").toggleClass("shadow-dark");
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

/*Navigate to the immigration website on clicking the overlay */
$("#latest-works #immigration-app .overlay").click(function(){
    window.open('https://sample-immigration.000webhostapp.com', '_blank');
})

/*Navigate to the ecommerce app page on clicking the overlay */
$("#latest-works #ecommerce-app .overlay").click(function(){
    window.open('./pages/ecommerce-app/ecommerce-app.html', '_blank');
})

/*Navigate to the github finder app on netlify on clicking on the overlay*/
$("#latest-works #github-finder .overlay").click(function(){
    window.open('https://github-finder8051.netlify.app/', '_blank');
})

$("#latest-works #contact-keeper .overlay").click(function(){
    window.open('https://codedmindz-contact-keeper.herokuapp.com/', '_blank');
})

$("#latest-works #it-logger .overlay").click(function(){
    window.open('https://codedmindz-it-logger.herokuapp.com/', '_blank');
})

$("#latest-works #proshopapp .overlay").click(function(){
    window.open('https://proshopcommerce.herokuapp.com/', '_blank');
})

/*Navigate to the beloxxi mobile app on clicking the overlay */
$("#latest-works #beloxxi-app .overlay").click(function(){
    window.open('./pages/beloxxi-app/beloxxi-app.html', '_blank');
})


const services= document.getElementsByClassName("services");
const myServices= document.getElementById("myServices");

let serviceHeight;
if($(document).height() > 4000){
    serviceHeight= ($(document).height() - myServices.getBoundingClientRect().bottom) + 400;
}else{
    serviceHeight= ($(document).height() - myServices.getBoundingClientRect().bottom) + 200;
}
/*slide the 3 elements that display my services upwards one after the other when the window is scrolled to that section of the document*/
window.onscroll = function(){slideUpFunction()};
	
function slideUpFunction(){

        if(myServices.getBoundingClientRect().bottom < serviceHeight ){
        services[0].classList.add("slideUp");
        services[1].classList.add("slideUp");
        services[2].classList.add("slideUp");
    }
}
})
