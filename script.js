const quesText = document.getElementById('qText');
const quizContainer = document.getElementById('quizContainer');
const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const d = document.getElementById('d');
const next = document.getElementById('next');
const back = document.getElementById('back');
const subButton = document.getElementById('submit');
const theFather = document.getElementById('theFather');
let qID = 0;
var selection = [];
var corAns = 0;
back.style.display = "none";
subButton.style.display = "none";

a.addEventListener('click', () => selectA(qID));
b.addEventListener('click', () => selectB(qID));
c.addEventListener('click', () => selectC(qID));
d.addEventListener('click', () => selectD(qID));
subButton.addEventListener('click', () => checkAnswers());

next.addEventListener('click', () => {
    if (qID <= 8) {
        qID += 1;
        showQuestion(qID);
        a.style.backgroundColor = "#DAD7CD";
        b.style.backgroundColor = "#DAD7CD";
        c.style.backgroundColor = "#DAD7CD";
        d.style.backgroundColor = "#DAD7CD";
        back.style.display = "block";
        switch (selection[qID]) {
            case "a":
                a.style.backgroundColor = "#817f78";
            break;
            case "b":
                b.style.backgroundColor = "#817f78";
            break;
            case "c":
                c.style.backgroundColor = "#817f78";
            break;
            case "d":
                d.style.backgroundColor = "#817f78";
            break;
        }
    }
    if(qID == 8) {
        subButton.style.display = "block";
        next.style.display = "none";
    } 
})

back.addEventListener('click', () => {
    if (qID >= 1) {
        qID -= 1;
        showQuestion(qID);
        a.style.backgroundColor = "#DAD7CD";
        b.style.backgroundColor = "#DAD7CD";
        c.style.backgroundColor = "#DAD7CD";
        d.style.backgroundColor = "#DAD7CD";
        next.style.display = "block";
        switch (selection[qID]) {
            case "a":
                a.style.backgroundColor = "#817f78";
            break;
            case "b":
                b.style.backgroundColor = "#817f78";
            break;
            case "c":
                c.style.backgroundColor = "#817f78";
            break;
            case "d":
                d.style.backgroundColor = "#817f78";
            break;
        }
        if(qID < 8) {
            subButton.style.display = "none";
        }
    }

})

const quiz = [{
    id: 0, 
    q: "Which of the following are not ways to link a CSS document?",
    a:[ {text: "External", correct: false},
        {text: "Internal", correct: false},
        {text: "Inline", correct: false},
        {text: "Synchronized", correct: true}
    ]
},
{
    id: 1, 
    q: "Which of the following commands is used to set the color of text?",
    a:[ {text: "text-color", correct: false},
        {text: "text-style", correct: false},
        {text: "color", correct: true},
        {text: "style", correct: false}
    ]
},
{
    id: 2, 
    q: "CSS stands for:",
    a:[ {text: "Color Shading Style", correct: false},
        {text: "Color Styling Spreadsheet", correct: false},
        {text: "Crazy Styling Sandwich", correct: false},
        {text: "Cascading Style Sheet", correct: true}
    ]
},
{
    id: 3, 
    q: "Which of the following is not a list-style-type?",
    a:[ {text: "Square", correct: false},
        {text: "Triangle", correct: true},
        {text: "Upper-Roman", correct: false},
        {text: "Circle", correct: false}
    ]
},
{
    id: 4, 
    q: "Which of the following is not a position type in CSS?",
    a:[ {text: "Dynamic", correct: true},
        {text: "Static", correct: false},
        {text: "Sticky", correct: false},
        {text: "Relative", correct: false}
    ]
},
{
    id: 5, 
    q: "To specify the stack order of an element, you can use: ",
    a:[ {text: "Position", correct: false},
        {text: "Z-index", correct: true},
        {text: "Margin", correct: false},
        {text: "Padding", correct: false}
    ]
},
{
    id: 6, 
    q: "To round the corners of a div, you can use: ",
    a:[ {text: "Margin", correct: false},
        {text: "Border", correct: false},
        {text: "Border-Radius", correct: true},
        {text: "Radius", correct: false}
    ]
},
{
    id: 7, 
    q: "To override all previous styling on an element, use: ",
    a:[ {text: "!major", correct: false},
        {text: "important!", correct: false},
        {text: "!important", correct: true},
        {text: "major!", correct: false}
    ]
},
{
    id: 8, 
    q: "To make a font italic, use: ",
    a:[ {text: "style", correct: false},
        {text: "text-style", correct: false},
        {text: "font-style", correct: true},
        {text: "font", correct: false}
    ]
},
{
    id: 9, 
    q: "To specify the speed curve of a transition, use",
    a:[ {text: "transition-duration", correct: false},
        {text: "transition-delay", correct: false},
        {text: "transition-timing-function", correct: true},
        {text: "transition", correct: false}
    ]
}
]

function showQuestion(id) {
    quesText.textContent = quiz[id].q;
    a.textContent = quiz[id].a[0].text;
    b.textContent = quiz[id].a[1].text;
    c.textContent = quiz[id].a[2].text;
    d.textContent = quiz[id].a[3].text;

    a.value = quiz[id].a[0].correct;
    b.value = quiz[id].a[1].correct;
    c.value = quiz[id].a[2].correct;
    d.value = quiz[id].a[3].correct;
}

function selectA(id) {
    selection[id] = "a";
    a.style.backgroundColor = "#817f78";
    b.style.backgroundColor = "#DAD7CD";
    c.style.backgroundColor = "#DAD7CD";
    d.style.backgroundColor = "#DAD7CD";
}

function selectB(id) {
    selection[id] = "b";
    b.style.backgroundColor = "#817f78";
    a.style.backgroundColor = "#DAD7CD";
    c.style.backgroundColor = "#DAD7CD";
    d.style.backgroundColor = "#DAD7CD";
}

function selectC(id) {
    selection[id] = "c";
    c.style.backgroundColor = "#817f78";
    a.style.backgroundColor = "#DAD7CD";
    b.style.backgroundColor = "#DAD7CD";
    d.style.backgroundColor = "#DAD7CD";
}

function selectD(id) {
    selection[id] = "d";
    d.style.backgroundColor = "#817f78";
    a.style.backgroundColor = "#DAD7CD";
    b.style.backgroundColor = "#DAD7CD";
    c.style.backgroundColor = "#DAD7CD";
}

function checkAnswers() {
    for (i=0; i<=9; i++) {
        if(selection[i] == "a") {
            if(quiz[i].a[0].correct == true) {
                corAns++;
            }
        }

        if(selection[i] == "b") {
            if(quiz[i].a[1].correct == true) {
                corAns++;
            }
        }

        if(selection[i] == "c") {
            if(quiz[i].a[2].correct == true) {
                corAns++;
            }
        }

        if(selection[i] == "d") {
            if(quiz[i].a[3].correct == true) {
                corAns++;
            }
        }
    }

    console.log(corAns);
    quizContainer.remove();

    const scoreDiv = document.createElement('theFather');
    const scoreText = document.createTextNode('Score: ' + corAns + '/10');
    scoreDiv.appendChild(scoreText);
    theFather.appendChild(scoreDiv);
    scoreDiv.style.backgroundColor = "#DAD7CD";
    scoreDiv.style.borderRadius = "5px";
    scoreDiv.style.height = "20vh";
    scoreDiv.style.width = "20vw";
    scoreDiv.style.fontSize = "3vw";
    scoreDiv.style.margin = "10vh";
    scoreDiv.style.padding = "5vh";

    corAns = 0;

}

showQuestion(qID);