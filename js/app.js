var allBtns = document.querySelectorAll('.rating__number');
var sectionRating = document.querySelector('.rating');
var sectionThanks = document.querySelector('.thanks')

function getBtn(data){
    console.log('clicked');
    [].forEach.call(allBtns, function(btn) {
        btn.classList.remove("selected");
    });
    data.classList.add("selected");
}

function submitRating(){
    sectionRating.classList.add("hidden");
    sectionThanks.classList.remove("hidden");
}