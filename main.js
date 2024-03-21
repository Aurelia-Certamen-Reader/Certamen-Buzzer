let readSpeed = 250
let questionBank = []
let questionParts = []
let showBoni = true

function sleep(time){
    return new Promise(resolve => {setTimeout(resolve, time)});
}

async function printQuestion(){
    document.getElementById("next").innerHTML="Skip"
    await sleep(readSpeed) //Ensures first print instance stops before starting the next one
    document.getElementById("next").disabled=false
    buzz=false
    document.getElementById("question").innerHTML = ""
    //Sets up text
    let questionText = questionBank[0][questionParts[0]].split(" ")
    //Question Printing
    for (let x of questionText) {
        if (buzz == false) {
            document.getElementById("question").append(x + " ")
            await sleep(readSpeed);
        }
        else {
            return
        }
    }
}

function endQuestion() {
    buzz = true; 
    document.getElementById("buzz").disabled = true
    document.getElementById("answerInput").style.visibility="visible"
    document.getElementById("answerInput").focus()
    document.getElementById("next").innerHTML="Next"
}

function displayAnswer(){
    document.getElementById("question").innerHTML=questionBank[0][questionParts[0]]
    document.getElementById("answerline").innerHTML = questionBank[0][[questionParts[0]] + "Answer"]
    document.getElementById("answerline").style.visibility="visible"
}

// Reset + advance to next question
function nextQuestion() {
    buzz = true; 
    document.getElementById("buzz").disabled = false
    document.getElementById("next").disabled=true
    document.getElementById("answerInput").style.visibility="hidden"
    document.getElementById("answerInput").value=""
    document.getElementById("answerline").style.visibility="hidden"
    if (document.getElementById("question").innerHTML != "") { // if it's not the first time
        logLastQuestion(questionParts.splice(0, 1)[0])
        if (showBoni) {
            if (questionParts.length == 0) {
                questionBank.splice(0, 1) // removes first question
                getQuestionParts(questionBank[0])
            }
        }
        else{
            questionBank.splice(0, 1)
            getQuestionParts(questionBank[0])
        }
    }
    else if (document.getElementById("next").innerHTML = "Start") {
        getQuestionParts(questionBank[0]) // always has tossup as the first one, so works regardless of if showBoni is true/false
    }
    if (questionBank.length == 0){ // if that was the last question
        document.getElementById("buzz").innerHTML = "Start"
        document.getElementById("buzz").disabled = true
        document.getElementById("next").disabled = true
        document.getElementById("question").innerHTML = ""
    }
    else {
        printQuestion()
    }
}

function getQuestionParts(question){
    questionParts = []
    for(key in question){
        if(!key.match("Answer")){
            questionParts.push(key)
        }
    }
}

function logLastQuestion(part) {
    questionLog = document.getElementById("questionLog")
    const lastQuestion = questionBank[0]
    let logBody
    if (part == "tossup") {
        const newDiv = document.createElement("div")
        //Button/head
        const questionData = "Custom question"
        const newLogHead = document.createElement("button")
        newLogHead.appendChild(document.createTextNode(questionData)) //puts text into button
        newLogHead.classList.add("collapsible")
        newDiv.appendChild(newLogHead)
        //Body/well
        logBody = document.createElement("div")
        //question label
        const questionLabel = document.createElement("p")
        questionLabel.append(document.createTextNode("TOSSUP"))
        questionLabel.setAttribute("style", "font-weight: bold;")
        //question text
        const text = document.createElement("p")
        text.append(document.createTextNode(lastQuestion.tossup))
        text.classList.add("question")
        //answer text
        const answer = document.createElement("p")
        answer.append(document.createTextNode(lastQuestion.tossupAnswer))
        answer.classList.add("answer")
        //append question and answer to well contents
        logBody.appendChild(questionLabel)
        logBody.appendChild(text)
        logBody.appendChild(answer)
        // append well contents to div containing both head and well
        newDiv.appendChild(logBody)
        logBody.classList.add("content")
        //add log to document, then initialize collapsible
        questionLog.insertBefore(newDiv, questionLog.firstChild)
        initializeCollapsible(newLogHead)
    }
    else{ // logging questions part by part when boni are also being shown
        logBody = questionLog.firstChild.lastChild
        //horizontal line
        const line = document.createElement("hr")
        line.setAttribute("style", "color: #eeeeee;")
        //question label
        const questionLabel = document.createElement("p")
        questionLabel.append(document.createTextNode(part.replace("bonus", "BONUS ")))
        questionLabel.setAttribute("style", "font-weight: bold;")
        //question text
        const text = document.createElement("p")
        text.append(document.createTextNode(lastQuestion[part]))
        text.classList.add("question")
        //answer text
        const answer = document.createElement("p")
        answer.append(document.createTextNode(lastQuestion[part + "Answer"]))
        answer.classList.add("answer")
        //append question and answer to well contents
        logBody.appendChild(line)
        logBody.appendChild(questionLabel)
        logBody.appendChild(text)
        logBody.appendChild(answer)
    }
    if (!showBoni) {
        questionParts.forEach(part => {
            //horizontal line
            const line = document.createElement("hr")
            line.setAttribute("style", "color: #eeeeee;")
            //question label
            const questionLabel = document.createElement("p")
            questionLabel.append(document.createTextNode(part.replace("bonus", "BONUS ")))
            questionLabel.setAttribute("style", "font-weight: bold;")
            //question text
            const text = document.createElement("p")
            text.append(document.createTextNode(lastQuestion[part]))
            text.classList.add("question")
            //answer text
            const answer = document.createElement("p")
            answer.append(document.createTextNode(lastQuestion[part + "Answer"]))
            answer.classList.add("answer")
            //append question and answer to well contents
            logBody.appendChild(line)
            logBody.appendChild(questionLabel)
            logBody.appendChild(text)
            logBody.appendChild(answer)
        })
    }
    if (logBody.style.maxHeight) {
        logBody.style.maxHeight = logBody.scrollHeight + 20 + "px" // readjust height if collapsible is open
    }
}

function enableStart() {
    if (questionBank.length > 0) {
        document.getElementById("buzz").disabled = false
    }
}

function start() {
    if (document.getElementById("buzz").innerHTML == "Start"){
        document.getElementById("buzz").innerHTML = "Buzz" 
        nextQuestion()
    } 
    else{
        endQuestion()
    }
}

function initializeCollapsible(button){
    button.addEventListener("click", async function(){ //function toggles between display and not
        if (button.nextElementSibling.style.maxHeight){ //Collapse
            button.nextElementSibling.style.maxHeight=null
            button.style.borderRadius="4px"
        }
        else { //Expand
            button.nextElementSibling.style.maxHeight=button.nextElementSibling.scrollHeight+20+"px"
            button.style.borderRadius="4px 4px 0px 0px"
        }
    })
}

function updateStatus(type, message){
    let statusBox = document.getElementById("statusBox")
    statusBox.setAttribute("class", type)
    statusBox.firstChild.innerHTML = message
    statusBox.style.display = "block"
    sleep(2000)
        .then(() => {
            statusBox.style.display = "none"
            statusBox.firstChild.innerHTML = ""})
}

//Buzzing hotkey
let buzzKey = " "
let nextKey = "Enter"
document.addEventListener('keydown', function(event){
    if(!event.target.matches("textarea") && event.target.type!="text"){ // ensure hotkey isnt triggered by typing in a text entry box
        if (event.key==buzzKey) {
            event.preventDefault()
            if (!document.getElementById("buzz").disabled){
                start()
            }
        }
        else if (event.key==nextKey){
            event.preventDefault()
            if (!document.getElementById("next").disabled){
                nextQuestion()
            }
        }
    }
})