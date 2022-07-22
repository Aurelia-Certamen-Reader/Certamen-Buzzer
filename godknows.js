//const $ = document.getElementById;
let readSpeed = 250
let buzz = false
let questionNumber = 0
const questionBank = [["Pretend this is an actual question! Lorem ipsum dolor sit amet. Yeah, I dunno man.", "Pretend this is an answer"], ["IIIII IIIIIIIIIIIDK"]]

function sleep(time){
    return new Promise(resolve => {setTimeout(resolve, time)});
}

async function printQuestion(){
    document.getElementById("answerInput").style.visibility="hidden"
    let currentQuestion = questionBank[questionNumber]
    let questionText = currentQuestion[0].split(" ")
    document.getElementById("question").innerHTML = ""
    for (let x of questionText){
        if (buzz == false){
            document.getElementById("question").append(x + " ")
            await sleep(readSpeed);
        } else{break}
    }
}

function endQuestion() {
    questionNumber+=1
    buzz=false
    document.getElementById("answerInput").style.visibility="visible"
    document.getElementById("answerInput").focus()
}

//printQuestion("Give the Latin word and its meaning that appears in the mottoes of both the state of New Mexico and the University of Chicago.")

printQuestion()
