var allBtns = document.querySelectorAll('.rating__number');
var sectionRating = document.querySelector('.rating');
var sectionThanks = document.querySelector('.thanks');
var ratingNumber = document.querySelector('.thanks__selected');

function getBtn(data, number){
    console.log('clicked');
    [].forEach.call(allBtns, function(btn) {
        btn.classList.remove("selected");
    });
    data.classList.add("selected");
    console.log(number)

    switch(number){
        case 1:
            ratingNumber.innerHTML="You selected 1 out of 5"
        break;
        case 2:
            ratingNumber.innerHTML="You selected 2 out of 5"
        break;
        case 3:
            ratingNumber.innerHTML="You selected 3 out of 5"
        break;
        case 4:
            ratingNumber.innerHTML="You selected 4 out of 5"
        break;
        case 5:
            ratingNumber.innerHTML="You selected 5 out of 5"
        break;
    }
}

function submitRating(){
    sectionRating.classList.add("hidden");
    sectionThanks.classList.remove("hidden");
}