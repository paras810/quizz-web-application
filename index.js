const quizDB = [
    {
        question: 'Question: What is my Name?',
        a: 'Anuj',
        b: 'I dont know',
        c: 'Genius',
        d: 'Paras',
        ans: 'ans4'

    }, {
        question: "Question: How hot is the surface of the sun?",
        a: "1,233 K",
        b: "5,778 K",
        c: "12,130 K",
        d: "101,300 K",
        ans: 'ans2'

    }
    , {
        question: 'Question: 198+23 = ?',
        a: '231',
        b: '241',
        c: '211',
        d: '221',
        ans: 'ans3'

    }
    , {
        question: "Question: What is the capital of India?",
        a: 'Bihar',
        b: 'Kolkata',
        c: 'New Delhi',
        d: 'Himachal Pradesh',
        ans: 'ans3'

    },
    {
        question: "Question: When was Mahatma Gandhi born?",
        a: "October 2, 1869",
        b: "December 15, 1872",
        c: "July 18, 1918",
        d: "January 15, 1929",
        ans: "ans1"
    },
    {
        question: "Question: How far is the moon from Earth?",
        a: "7,918 miles (12,742 km)",
        b: "86,881 miles (139,822 km)",
        c: "238,400 miles (384,400 km)",
        d: "35,980,000 miles (57,910,000 km)",
        ans: "ans3"
    }, {
        question: "Question: How tall is Mount Everest?",
        a: "6,683 ft (2,037 m)",
        b: "7,918 ft (2,413 m)",
        c: "19,341 ft (5,895 m)",
        d: "29,029 ft (8,847 m)",
        ans: 'ans4'
    }, {
        question: "Question: What is 65 times 52?",
        a: "117",
        b: "3120",
        c: "3380",
        d: "3520",
        ans: 'ans3'
    }, {
        question: "Question: What is 70 degrees Fahrenheit in Celsius?",
        a: "18.8889",
        b: "20",
        c: "21.1111",
        d: "158",
        ans: "ans3"
    }, {
        question: "Question: What is the scientific name of a butterfly?",
        a:"Apis",
        b:"Coleoptera",
        c:"Formicidae",
        d:"Rhopalocera",
        ans:'ans4'

    }

]

let question = document.querySelector('.question')
let option1 = document.querySelector('#option1')
let option2 = document.querySelector('#option2')
let option3 = document.querySelector('#option3')
let option4 = document.querySelector('#option4')
let submit = document.querySelector('#submit')
let answers = document.querySelectorAll('.answer')
let showScore = document.querySelector('#showScore')
let scoreArea = document.querySelector('.scoreArea')

let questionCount = 0
let score = 0;
const loadQuestion = () => {
    let questionList = quizDB[questionCount]
    question.innerHTML = questionList.question
    option1.innerHTML = questionList.a
    option2.innerHTML = questionList.b
    option3.innerHTML = questionList.c
    option4.innerHTML = questionList.d
}

loadQuestion()

const getCheckAnswer = () => {
    let answer;
    answers.forEach(e => {
        if (e.checked) {
            answer = e.id
        }
    });
    return answer

}

const deselectAll = () => {
    answers.forEach(e => {
        e.checked = false;
    });
}



submit.addEventListener('click', () => {
    let checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer)

    

    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    } 


    questionCount++;
    deselectAll();

    if (questionCount < quizDB.length) {
        loadQuestion()
    } else {

        showScore.innerHTML = `
        <h3> Your scored ${score}/${quizDB.length} ✌</h3>
        <button class="btn" onclick="location.reload()"> try again  </button>
        `
        showScore.classList.remove('scoreArea')
        submit.classList.add('btn2')
    }
})




    // else if(checkedAnswer === undefined){
    //     alert('Please slect a option')
    //     loadQuestion()
    // }





















