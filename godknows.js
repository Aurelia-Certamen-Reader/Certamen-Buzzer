let readSpeed = 250
let questionNumber = -1
let stopped=true
const questionBank = [
["Pretend this is an actual question! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor viverra maximus. Sed bibendum, justo sit amet auctor fringilla, ligula ante pretium eros, at hendrerit nunc lorem faucibus felis. Quisque quis sem vel lectus finibus feugiat id quis magna. Fusce fringilla, nisl non pellentesque vestibulum, ex tellus rutrum tortor, vitae rutrum libero mi in neque. Phasellus aliquet bibendum sem, id volutpat eros ultricies ac. Proin fermentum tellus non erat suscipit malesuada. Sed bibendum semper hendrerit. Phasellus in volutpat leo, vel condimentum erat. Yeah, I dunno man.", "Pretend this is an answer"], 
["Next question! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor viverra maximus. Sed bibendum, justo sit amet auctor fringilla, ligula ante pretium eros, at hendrerit nunc lorem faucibus felis. Quisque quis sem vel lectus finibus feugiat id quis magna. Fusce fringilla, nisl non pellentesque vestibulum, ex tellus rutrum tortor, vitae rutrum libero mi in neque. Phasellus aliquet bibendum sem, id volutpat eros ultricies ac. Proin fermentum tellus non erat suscipit malesuada. Sed bibendum semper hendrerit. Phasellus in volutpat leo, vel condimentum erat.", "It's a different answer now!"],
["Question three: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor viverra maximus. Sed bibendum, justo sit amet auctor fringilla, ligula ante pretium eros, at hendrerit nunc lorem faucibus felis. Quisque quis sem vel lectus finibus feugiat id quis magna. Fusce fringilla, nisl non pellentesque vestibulum, ex tellus rutrum tortor, vitae rutrum libero mi in neque. Phasellus aliquet bibendum sem, id volutpat eros ultricies ac. Proin fermentum tellus non erat suscipit malesuada. Sed bibendum semper hendrerit. Phasellus in volutpat leo, vel condimentum erat.", "Would you look at that, a third answer for a third question."]
]

function sleep(time){
    return new Promise(resolve => {setTimeout(resolve, time)});
}

async function printQuestion(){
    //Ensures first print instance stops before starting the next one
    await sleep(readSpeed)
    buzz=false
    //Sets up text
    let questionText = questionBank[questionNumber][0].split(" ")
    //Question Printing
    document.getElementById("question").innerHTML = ""
    document.getElementById("next").innerHTML="Skip"
    for (let x of questionText){
        if (buzz == false){
            document.getElementById("question").append(x + " ")
            await sleep(readSpeed);
        } 
        else{
            document.getElementById("next").disabled=false
            return
        }
    }
}

function endQuestion() {
    document.getElementById("answerInput").style.visibility="visible"
    document.getElementById("answerInput").focus()
    document.getElementById("next").innerHTML="Next"
}

function displayAnswer(){
    document.getElementById("question").innerHTML=questionBank[questionNumber][0]
    document.getElementById("answerline").innerHTML = questionBank[questionNumber][1]
    document.getElementById("answerline").style.visibility="visible"
}

//Basically resets + advances questionNumber
function nextQuestion() {
    if (stopped=false){document.getElementById("next").disabled=true}
    document.getElementById("answerInput").style.visibility="hidden"
    document.getElementById('answerInput').value=""
    document.getElementById("answerline").style.visibility="hidden"
    //logLastQuestion()
    questionNumber+=1

    printQuestion()
}

function logLastQuestion(){
    questionLog = document.getElementById("pastQuestions")
    const questionData = "Custom question " + (questionNumber+1)
    const lastQuestion = questionBank[questionNumber]
    const newLogHead = document.createElement("button")
    newLogHead.appendChild(document.createTextNode(questionData))
    const newLogBody= ""
    questionLog.insertBefore(newLogHead, questionLog.firstChild)
}

function initializeCollapsible(button){
    button.addEventListener("click", function(){ //function toggles between display and not
        if (button.nextElementSibling.style.display=="none"){
            button.nextElementSibling.style.display="block"}
        else {button.nextElementSibling.style.display="none"}
    })
}