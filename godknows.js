//const $ = document.getElementById;
let readSpeed = 250
let buzz = false
let questionNumber = -1
const questionBank = [["Pretend this is an actual question! Lorem ipsum dolor sit amet. Yeah, I dunno man.", "Pretend this is an answer"], ["IIIII IIIIIIIIIIIDK"]]

function sleep(time){
    return new Promise(resolve => {setTimeout(resolve, time)});
}

async function printQuestion(){
    //Reset
    document.getElementById("answerInput").style.visibility="hidden"
    buzz=false
    questionNumber+=1
    //Sets up text
    let questionText = questionBank[questionNumber][0].split(" ")
    //Question Printing
    document.getElementById("question").innerHTML = ""
    for (let x of questionText){
        if (buzz == false){
            document.getElementById("question").append(x + " ")
            await sleep(readSpeed);
        } else{break}
    }
}

function endQuestion() {
    document.getElementById("answerInput").style.visibility="visible"
    document.getElementById("answerInput").focus()
}

function displayAnswer(){
    document.getElementById("answerline").innerHTML = questionBank[questionNumber][1]
}
//printQuestion("Give the Latin word and its meaning that appears in the mottoes of both the state of New Mexico and the University of Chicago.")

printQuestion()
