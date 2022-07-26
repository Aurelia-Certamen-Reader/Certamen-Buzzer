let readSpeed = 250
let questionNumber = -1
const questionBank = [
["Pretend this is an actual question! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor viverra maximus. Sed bibendum, justo sit amet auctor fringilla, ligula ante pretium eros, at hendrerit nunc lorem faucibus felis. Quisque quis sem vel lectus finibus feugiat id quis magna. Fusce fringilla, nisl non pellentesque vestibulum, ex tellus rutrum tortor, vitae rutrum libero mi in neque. Phasellus aliquet bibendum sem, id volutpat eros ultricies ac. Proin fermentum tellus non erat suscipit malesuada. Sed bibendum semper hendrerit. Phasellus in volutpat leo, vel condimentum erat. Yeah, I dunno man.", "Pretend this is an answer"], 
["Next question! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor viverra maximus. Sed bibendum, justo sit amet auctor fringilla, ligula ante pretium eros, at hendrerit nunc lorem faucibus felis. Quisque quis sem vel lectus finibus feugiat id quis magna. Fusce fringilla, nisl non pellentesque vestibulum, ex tellus rutrum tortor, vitae rutrum libero mi in neque. Phasellus aliquet bibendum sem, id volutpat eros ultricies ac. Proin fermentum tellus non erat suscipit malesuada. Sed bibendum semper hendrerit. Phasellus in volutpat leo, vel condimentum erat." + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor viverra maximus. Sed bibendum, justo sit amet auctor fringilla, ligula ante pretium eros, at hendrerit nunc lorem faucibus felis. Quisque quis sem vel lectus finibus feugiat id quis magna. Fusce fringilla, nisl non pellentesque vestibulum, ex tellus rutrum tortor, vitae rutrum libero mi in neque. Phasellus aliquet bibendum sem, id volutpat eros ultricies ac. Proin fermentum tellus non erat suscipit malesuada. Sed bibendum semper hendrerit. Phasellus in volutpat leo, vel condimentum erat.", "It's a different answer now!"],
["Question three: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor viverra maximus. Sed bibendum, justo sit amet auctor fringilla, ligula ante pretium eros, at hendrerit nunc lorem faucibus felis. Quisque quis sem vel lectus finibus feugiat id quis magna. Fusce fringilla, nisl non pellentesque vestibulum, ex tellus rutrum tortor, vitae rutrum libero mi in neque. Phasellus aliquet bibendum sem, id volutpat eros ultricies ac. Proin fermentum tellus non erat suscipit malesuada. Sed bibendum semper hendrerit. Phasellus in volutpat leo, vel condimentum erat.", "Would you look at that, a third answer for a third question."]
]

function sleep(time){
    return new Promise(resolve => {setTimeout(resolve, time)});
}

async function printQuestion(){
    document.getElementById("next").innerHTML="Skip"
    //Ensures first print instance stops before starting the next one
    await sleep(readSpeed)
    document.getElementById("next").disabled=false
    buzz=false
    document.getElementById("question").innerHTML = ""
    //Sets up text
    let questionText = questionBank[questionNumber][0].split(" ")
    //Question Printing
    for (let x of questionText){
        if (buzz == false){
            document.getElementById("question").append(x + " ")
            await sleep(readSpeed);
        } 
        else{
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
    document.getElementById("next").disabled=true
    document.getElementById("answerInput").style.visibility="hidden"
    document.getElementById('answerInput').value=""
    document.getElementById("answerline").style.visibility="hidden"
    if (document.getElementById("question").innerHTML != "") {
        logLastQuestion()
    }
    questionNumber+=1
    printQuestion()
}

function logLastQuestion(){
    questionLog = document.getElementById("questionLog")
    const lastQuestion = questionBank[questionNumber]
    const newDiv = document.createElement("div")
    //Button/head
    const questionData = "Custom question " + (questionNumber+1)
    const newLogHead = document.createElement("button")
    newLogHead.appendChild(document.createTextNode(questionData)) //puts text into button
    newLogHead.classList.add("collapsible")
    newDiv.appendChild(newLogHead)
    //Body/well
    const newLogBody= document.createElement("div")
    //question text
    const text = document.createElement("p")
    text.append(document.createTextNode(lastQuestion[0]))
    text.classList.add("question")
    //answer text
    const answer = document.createElement("p")
    answer.append(document.createTextNode(lastQuestion[1]))
    answer.classList.add("answer")
    //append question and answer to well
    newLogBody.appendChild(text)
    newLogBody.appendChild(answer)
    newDiv.appendChild(newLogBody)
    newLogBody.classList.add("content")
    //add log to document, then initialize collapsible
    questionLog.insertBefore(newDiv, questionLog.firstChild)
    initializeCollapsible(newLogHead)
}

function initializeCollapsible(button){
    button.addEventListener("click", async function(){ //function toggles between display and not
        if (button.nextElementSibling.style.maxHeight){
            button.nextElementSibling.style.maxHeight=null
            await sleep(900)
            button.nextElementSibling.style.paddingTop=0
            await sleep(50)
            button.nextElementSibling.classList.remove("well")
        }
        else {
            button.nextElementSibling.style.maxHeight=button.nextElementSibling.scrollHeight+20+"px"
            button.nextElementSibling.classList.add("well")
        }
    })
}