//using selectors inside the element
//traversing the DOM

const questions = document.querySelectorAll('.question')

questions.forEach(function(question) {
    // console.log(question);
    const btn = question.querySelector('.question-btn');
    // console.log(btn);
    btn.addEventListener('click',function () {

        questions.forEach(function(item) {
            if(item !== question) {
                item.classList.remove('show-text');
            }
        });

        question.classList.toggle('show-text');
    });
});



/*
const btns = document.querySelectorAll('.question-btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        // console.log(e.currentTarget.parentElement.parentElement);
        //  e.currentTarget.parentElement.parentElement.classList.toggle('show-text'); 

        const answer = e.currentTarget.parentElement.parentElement;
        answer.classList.toggle('show-text');

    });
});
*/