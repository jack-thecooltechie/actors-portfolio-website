const nextButton = document.getElementById('next_button');
const prevButton = document.getElementById('prev_button');

const XpOne = document.getElementById('experience_content_one');
const XpTwo = document.getElementById('experience_content_two');
const XpThree = document.getElementById('experience_content_three');


nextButton.addEventListener("click", function(){navButtonsClicked(1)});
prevButton.addEventListener("click", function(){navButtonsClicked(0)});




let workArray = [

    [    {
        imageSrc: '../images/image_a.jpg',
        imageText: 'Played the character of Mark in Blame On Me movie'
    },

    {
        imageSrc: '../images/image_b.jpg',
        imageText: 'Did a runaway modelling with Zara'
    },

    {
        imageSrc: '../images/image_c.jpg',
        imageText: 'Played the lead in series Two Plus Two'
    },],

    [    {
        imageSrc: '../images/p_image_a.jpg',
        imageText: 'Fitness modelling for sports brands'
    },

    {
        imageSrc: '../images/p_image_b.jpg',
        imageText: 'Played lead in music video for Shak'
    },
    {
        imageSrc: '../images/p_image_c.jpg',
        imageText: 'Did a supporting role in ABC Movie'
    },],





]

let i = 0;

console.log("Initial length of the array: " + workArray.length);

function navButtonsClicked(value){

    console.log("Value Of I before: " + i);
    if(value==0){
        if(i>0){
            i--;

        }
        else{
            i = workArray.length - 1;
        }

    }
    else if(value == 1){
        if(i<workArray.length-1){
            i++;
       
        }
        else{
            i = 0;
        }
    }

            //changing XPOne image source
            XpOne.childNodes[1].childNodes[0].src=workArray[i][0].imageSrc;
            XpOne.childNodes[3].textContent = workArray[i][0].imageText;
    
            //changing XPTwo image source
            XpTwo.childNodes[1].childNodes[0].src=workArray[i][1].imageSrc;
            XpTwo.childNodes[3].textContent = workArray[i][1].imageText;
    
            //changing XPThree image source
            XpThree.childNodes[1].childNodes[0].src=workArray[i][2].imageSrc;
            XpThree.childNodes[3].textContent = workArray[i][2].imageText;

    console.log("Value Of I after: " + i);
}