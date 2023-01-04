//Getting element 

const accordion = document.querySelectorAll('.faq');

accordion.forEach((question) => {
  question.addEventListener('click', _ => {
    question.classList.toggle('show')
    

    accordion.forEach((different) => {
      if (different !== question) {
        different.classList.remove('show');
      }
    })

    setTimeout(() => {
      if (question.classList.contains('show')) {
        question.classList.remove('show')
      }
    }, 5000)
  })
});






// function questions() {
//   accordion.forEach((this) => {
//     this.addEventListener.('click', (e) => {
//       this.classList.toggle('show')
//     })
//   })
// }
// questions()

// let btn = question.querySelector('.btns');

//   btn.addEventListener('click', _ => {

//     accordion.forEach((items) => {
//       if (items !== question) {
//         items.classList.remove('show');
//       }
//     })

//     question.classList.toggle('show')
//   })