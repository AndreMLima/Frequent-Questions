//using selectors inside the element
// traversing the dom

const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
    const btn = question.querySelector('.question-btn')
    btn.addEventListener('click', function(){

        questions.forEach(function(question2){
            if(question2 !== question){
                question2.classList.remove('show-text')
            }
        })

        question.classList.toggle('show-text')
    })
})