//const $ = document.getElementById;
let readSpeed = 250
let buzz = false
let questionNumber = -1
const questionBank = [["Pretend this is an actual question! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor viverra maximus. Sed bibendum, justo sit amet auctor fringilla, ligula ante pretium eros, at hendrerit nunc lorem faucibus felis. Quisque quis sem vel lectus finibus feugiat id quis magna. Fusce fringilla, nisl non pellentesque vestibulum, ex tellus rutrum tortor, vitae rutrum libero mi in neque. Phasellus aliquet bibendum sem, id volutpat eros ultricies ac. Proin fermentum tellus non erat suscipit malesuada. Sed bibendum semper hendrerit. Phasellus in volutpat leo, vel condimentum erat. Yeah, I dunno man.", "Pretend this is an answer"], 
["Next question! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor viverra maximus. Sed bibendum, justo sit amet auctor fringilla, ligula ante pretium eros, at hendrerit nunc lorem faucibus felis. Quisque quis sem vel lectus finibus feugiat id quis magna. Fusce fringilla, nisl non pellentesque vestibulum, ex tellus rutrum tortor, vitae rutrum libero mi in neque. Phasellus aliquet bibendum sem, id volutpat eros ultricies ac. Proin fermentum tellus non erat suscipit malesuada. Sed bibendum semper hendrerit. Phasellus in volutpat leo, vel condimentum erat.", "It's a different answer now!"]]

function sleep(time){
    return new Promise(resolve => {setTimeout(resolve, time)});
}

async function printQuestion(){
    //Reset
    document.getElementById("answerInput").style.visibility="hidden"
    document.getElementById('answerInput').value=""
    document.getElementById("answerline").style.visibility="hidden"
    questionNumber+=1
    //Put await here
    //Sets up text
    let questionText = questionBank[questionNumber][0].split(" ")
    await sleep(readSpeed)
    buzz=false
    //Question Printing
    document.getElementById("question").innerHTML = ""
    for (let x of questionText){
        document.getElementById("next").innerHTML="Skip"
        if (buzz == false){
            document.getElementById("question").append(x + " ")
            await sleep(readSpeed);
        } 
        else{
            document.getElementById("next").innerHTML="Next"
            console.log("Return")
            return
        }
    }
}

function endQuestion() {
    document.getElementById("answerInput").style.visibility="visible"
    document.getElementById("answerInput").focus()
}

function displayAnswer(){
    document.getElementById("answerline").innerHTML = questionBank[questionNumber][1]
    document.getElementById("answerline").style.visibility="visible"
}

printQuestion() //uncomment to start script
