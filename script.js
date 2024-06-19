const answers = document.querySelectorAll('.answerContainer');
const btns = document.querySelectorAll('.pop');
const container = document.querySelector('.container');

const images = ['url("./assets/images/bg1.jpg")','url("./assets/images/bg2.jpg")','url("./assets/images/bg3.jpg")','url("./assets/images/bg4.jpg")'];


//add background slideshow
let currentIndex = 0;
function changeBG(){
    document.body.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
    console.log(currentIndex);
}
setInterval(changeBG, 8000);
changeBG();

container.addEventListener('click', (e)=>{
    const id = e.target.dataset.id;

    if (id) {
        const element = document.getElementById(id);
        const currentBtn =  e.target.getAttribute("src") === "./assets/images/icon-minus.svg";

        // //uncomment this to close all answers when a new answer is opened
        // //remove the 'show' class from all answers
        // answers.forEach((answer)=>{
        //     answer.classList.remove('show');
        // });
        // //display all the buttons as plus
        // btns.forEach((btn)=>{
        //     btn.setAttribute("src", "./assets/images/icon-plus.svg");
        // })

        if (currentBtn) {
            //transform the clicked btn into minus
            e.target.setAttribute("src", "./assets/images/icon-plus.svg");
            element.classList.remove('show');
        } else {
            //show the answer that corresponds to the btn
            element.classList.add('show');
            //transform the clicked btn into minus
            e.target.setAttribute("src", "./assets/images/icon-minus.svg");
        }
    }
});
