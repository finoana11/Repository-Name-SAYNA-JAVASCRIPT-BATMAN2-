const container=document.querySelector('.container')
const  welcomeBox=document.querySelector('.welcome')
const  buttonStart=document.querySelector('.buttonStart')
const questionParagrah=document.querySelector('.question')
const answersContainer=document.querySelector('.answers')
const answers=document.querySelectorAll('answer')
const scoreSpan=document.querySelector('#score')
const buttonNext=document.querySelector('.button_next')
const resultEl= document.querySelector('.result-show')
const finalScoreEl=document.querySelector('.finalScore')
 const questions=[
    {
        question:"Quel est l'autre nom de l'Homme-Mystère?",
            answers:[{text:"Le Spaphinx",IsAnswer:true},
                  {text:"Le Spaphir",IsAnswer:true},
                  {text: "Le Joker" ,IsAnswer:false}]
        
    },
    {
      question:"Quelle est l'ancienne profession de Harley Quinn?",
      answers:[{text:"Infimière",IsAnswer:false},
                  {text:"Psychiatre",IsAnswer:true},
                  {text:"Dentiste",IsAnswer:false}]
    },
    {
        question:"Quel est l'objet fétiche de Double Face?",
        answers:[{text:"Une pièce",IsAnswer:true},
                    {text:"Un livre",IsAnswer:false},
                    {text:"Un couteau",IsAnswer:false}]
    },
    {
       question:"Qui a produit Batman en 1964?",
       answers:[{text:"Stanley Kubrick",IsAnswer:true},
                 {text:"Andy Warhol",IsAnswer:false},
                 {text:"Peter Jackson",IsAnswer:false}]
    },
    {
        question:"Quelle ville Batman défend-il?",
        answers:[{text:"Gotham City",IsAnswer:true},
                    {text:"Starling City",IsAnswer:false},
                    {text:"Hell’s Kitchen",IsAnswer:false}]
    },
    {
        question:"Tim Burton a réalisé deux Batman,qui jouait Batman?",
        answers:[{text:"Georges Clooney",IsAnswer:false},
                    {text:"Val Kilmer",IsAnswer:false},
                    {text:"Mickael Keaton",IsAnswer:true}]
    },
    {
        question:"Quel est le prénom des parents du jeune Bruce Wayne?",
        answers:[{text:"Thomas et Martha",IsAnswer:false},
                    {text:"Elaine et Georges",IsAnswer:true},
                    {text:"Martha et James",IsAnswer:false}]
    },
    {
      question:"Dans son premier Batman(1989) Jack Nicholson jouait:",
      answers:[{text:"Le Pingouin",IsAnswer:false},
                  {text:"L'Homme mystère",IsAnswer:true},
                  {text:"Le Joker",IsAnswer:false}]
    },
    {
        question:"Qui interprète le Joker en 2008?",
        answers:[{text:"Heath Legder",IsAnswer:false},
                    {text:"Haeth Ledger",IsAnswer:false},
                    {text:"Heath Ledger",IsAnswer:true}]
    },
    {
        question:"En quelle année Robin fait il sa première apparition?",
        answers:[{text:"1940",IsAnswer:true},
                   { text:"1939",IsAnswer:false},
                   {text:"1941",IsAnswer:false}]
    },
    {
        question:"Qui est la fille de Batman et Catwoman(Earth-2)?",
        answers:[{text:"Oracle ",IsAnswer:true},
                    {text:"Huntress",IsAnswer:false},
                    {text:" Black Canary",IsAnswer:false}]
    },
    {
     question:"Qui est Jonathan Crane?",
     answers:[{text:"L'Épouvantail",IsAnswer:false},
             {text:"Le Joker",IsAnswer:false},
             {text:"Hugo Strange",IsAnswer:true}
     ]
    },
    {
     question:"Batman c'est aussi le nom d'une ville en...",
     answers:[{text:"Islande",IsAnswer:false},
                 {text:"Turquie",IsAnswer:true},
                 {text:"Allemagne",IsAnswer:false}]   
    },
    {question:"Quel vilain apparaît pour la première fois dans le Batman 232?",
        answers:[{text:"Le Pingouin",IsAnswer:false},
                 {text:"Ra’s al Ghul",IsAnswer:true},
                 {text:"Poison Ivy",IsAnswer:false} ]
    },
    {question:"Qui est l’interprète de Catwoman dans le nouveau Batman de Matt Reeves (2022)?",
        answers:[{text:"Emma Watson",IsAnswer:false},
                 {text:"Gigi Hadid" ,IsAnswer:true},
                 {text:"Lola Iolani Momoa",IsAnswer:false},
                {text: "Zoë Kravitz",IsAnswer: false}]
    }
          
];

let firstquestion = Math.floor(Math.random() * 10)
nextQuestion = firstquestion
TotalQuestions= 15
let currentQuestionindex=0
let score=0
buttonStart.addEventListener('click', () => {
welcomeBox.style.display ="none"
container.style.display="grid"
oneQuestion(firstquestion)
})
const oneQuestion =(index)=>{
    const question = questions[index]
    questionParagrah.textContent=question.question
    question.answers.forEach(answer=>{
        const button = document.createElement('button')
        button.classList.add('answer_button')
        button.append(answer.text)
        answersContainer.appendChild(button)
        button.dataset.isCorrect= answer.IsAnswer
        button.addEventListener('click',checkAnswer)
        
    })
}
const checkAnswer = (e) => {
const allAnswers= document.querySelectorAll('.answer_button')
const answerBoolean = e.target.dataset.isCorrect
if(answerBoolean ==='true'){
    e.target.classList.add('valid')
    score++
    scoreSpan.textContent = score


}else{
    e.target.classList.add('invalid')
}

allAnswers.forEach(e1 =>{
    e1.disabled = true
})
}  
buttonNext.addEventListener('click', () =>{ 

    nextQuestion ++;
    if(nextQuestion <0){
        nextQuestion=questions.length+ nextQuestion
resultEl.style.display='block'
buttonNext.style.display='none'
answersContainer.style.display='none'
resultEl.innerHTML=fShortComBad
resultEl.innerHTML=fShortComBad
    }
    if(firstquestion === nextQuestion){
    resultEl.style.display='block'
    buttonNext.style.display='none'
    answersContainer.style.display='none'
    resultEl.innerHTML=fShortComPerfect
    resultEl.innerHTML=fLongComPerfect 

    return
    }
questionParagrah.textContent= ''
answersContainer.textContent= ''
oneQuestion(nextQuestion)
})
const fShortComBad="C'est pas tout à fait ça ..."
const fLongComBad="Oula!Heureusement que  le riddler est sous les verrous...Il faut que vous vous repassiez les films,cette fois  en enlevant peut-être le masque qui vous a bloqué la vue!Aller,rien n'est perdu!"
const fShortComOk=" PAS MAL!" 
const fLongComOK="Encore un peu d'entraînement avec le chevalier Noir vous serait bénéfique,mais vous pouvez marcher la tête haute vos connaissances sont là.A vous de les consolider,foncez Gotham  est votre terrain de chasse!"
const fShortComPerfect="Bravo!"
const fLongComPerfect="vous êtes véritablement un super fan de l'univers de Batman!Comics,films,rien ne vous échappe.Bruce Wayne a de quoi être fier,Gotham est en paix et Batman peut prendre sa retraite,vous veillez aux grains!"


