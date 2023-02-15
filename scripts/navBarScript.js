
const menuButton = document.getElementsByClassName("burger_icon")[0];

const mobileNavigation = document.getElementsByClassName("mobile_navigation_container")[0];

var cancelIcon;

console.log(menuButton);

mobileNavigation.style.visibility = "hidden";

menuButton.addEventListener("click", function (){

    if(mobileNavigation.style.visibility === "hidden"){
        mobileNavigation.style.visibility = "visible";
        menuButton.children[0].src="/../icons/cancel-icon.png";
        console.log(menuButton.children[0]);
    }

    else{
        mobileNavigation.style.visibility = "hidden";
        menuButton.children[0].src="/../icons/burger-menu.png";
        console.log(menuButton.children[0]);
    }
      
    })


