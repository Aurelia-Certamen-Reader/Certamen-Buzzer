const tossupMarkers = /\s*TU\s[0-9]+\s*/ //"TU #"
const bonusMarkers = /\s*B(1|2)\s*/ //"B#"
const questionPattern = /(.|\s)*?(?=\n[^a-z]+$)/ //(.|\s) = anything or a whitespace, n? = contains 0 or one occurence of n (non-greedy matching)
const answerPattern = /(?<=\n)[^a-z]+$/
//^ add to them using | 
let bonusMode = "exclude" //alternates are "as tossups"
let newQuestions = []
const sampleText = `TU 1
What mythological group was made up of Thalia, Terpsichore, and seven others?
THE MUSES
B1
Who was the mother of the Muses?
MNEMOSYNE
B2
In one story, the Muses were said to have been born when what creature touched the Helicon
spring?
PEGASUS
TU 2
From what Latin verb with what meaning do we get the English words overt and aperture?
APERIO = TO OPEN, UNCOVER, DISCLOSE
B1
From what Latin verb with what meaning do we get the English words augment and auction?
AUGEO = TO INCREASE
B2
From what Latin verb with what meaning do we get the English word obedience?
AUDIO = TO HEAR, LISTEN TO
TU 3
For the verb capio, capere give the 3rd person, plural, future, active, indicative
CAPIENT
B1
Change capient to the future perfect
CEPERINT
B2
Change ceperint to the passive voice
CAPTI ERUNT
TU 4
What structure located between the Palatine and Aventine Hills was known for its chariot racing?
CIRCUS MAXIMUS
B1&B2
The emperor Domitian added two colored factions to the original four. For five points each,
name these colors
PURPLE & GOLD
2017 TSJCL CERTAMEN
NOVICE DIVISION ROUND 1
2
TU 5
Say in Latin: Do you like learning the Latin language?
AMASNE / AMATISNE / DILIGISNE / DILIGITISNE DISCERE LINGUAM
LATINAM?
B1
Say in Latin: You are not going to school tomorrow, are you?
NUM CRAS AD SCHOLAM IS / ITIS?
// NUM ES ITURUS / ESTIS ITURI AD SCHOLAM CRAS?
B2
Say in Latin: You want to win this contest don’t you?
NONNE HOC CERTAMEN VIS / VULTIS / CUPIS / CUPITIS VINCERE?
[SCORE CHECK]
TU 6
What state has the motto “ad astra per aspera”?
KANSAS
B1
What state has the motto “dum spiro, spero”?
SOUTH CAROLINA
B2
What is the Latin motto of the state of Missouri?
SALUS POPULI SUPREMA LEX (ESTO)
TU 7
Give the accusative singular for the phrase solum animal.
SOLUM ANIMAL
B1
Make solum animal genitive
SOLIUS ANIMALIS
B2
Make solius animalis plural
SOLORUM ANIMALIUM
TU 8
Who preceded and succeeded Caligula?
TIBERIUS (FORMER); CLAUDIUS (LATTER)
B1
Who preceded and succeeded Titus?
VESPASIAN (FORMER); DOMITIAN (LATTER)
B2
Who preceded and succeeded Marcus Aurelius?
ANTONINUS PIUS (FORMER); COMMODUS (LATTER)
2017 TSJCL CERTAMEN
NOVICE DIVISION ROUND 1
3
TU 9
Who attempted to delay choosing a new husband by unraveling the shroud she wove for her
father-in-law?
PENELOPE
B1
Name her father-in-law.
 LAERTES
B2
For how long was Penelope able to keep up this ruse?
THREE YEARS
TU 10
Listen carefully to the following passage about this adapted Shakespeare scene which I will read
twice and answer the questions that follow in English.
Rex cum suo fratre ivit ut nuptiās suae filiae videret. Post nuptiās, dum domum navigant, subito,
magna tempestas accidit. Viri timent et deos evocant, sed dei eos non audiunt. Nave pervertā,
viri ad insulam ignotam pervenerunt.
The question: With whom did the king travel?
HIS BROTHER
B1
What was the purpose of the king’s trip?
TO SEE HIS DAUGHTER’S WEDDING/MARRIAGE
B2
When the storm occurred, what did the men do?
THEY CALL OUT TO THE GODS/ASK THE GODS FOR HELP
(FOR MODERATOR REFERENCE FOR PASSAGE: A king went with his brother to see his
daughter’s wedding. After the wedding, while, they were sailing home, suddenly, a great storm
occurred. The men are scared and call out to the gods, but the gods do not hear them. After their
ship was overturned, the men arrived on an unknown island.)
[SCORE CHECK]
TU 11
According to Hesiod, what primordial being was the mother of Ourea, Pontus, and Uranus?
 GAIA
B1
What physical feature of the earth does Ourea personify?
MOUNTAINS
B2
How many Titans and Titanesses did Gaia bear with Uranus?
TWELVE
2017 TSJCL CERTAMEN
NOVICE DIVISION ROUND 1
4
TU 12
Where in Rome would you go to see venationes and naumachiae?
 COLOSSEUM / AMPHITHEATER
B1
Which emperor was credited with the construction of the Colosseum?
TITUS
B2
Who built the first permanent amphitheater in Rome?
STATILIUS TAURUS
TU 13
Identify the case and use of the word for friend in the following sentence: Hic equus carissimus
meo amico est.
DATIVE WITH (SPECIAL) ADJECTIVES
B1
… Nescivi meum amicum mortuum esse.
ACCUSATIVE SUBJECT (OF AN INDIRECT STATEMENT)
B2
… Ille altior meo amico est.
ABLATIVE COMPARISON
TU 14
Who agreed to betray her father and aid Jason on the condition that he would take her with
him?
MEDEA
B1
Among the tasks that Jason was assigned, one was to plough a field with fire-breathing oxen that
he had to yoke himself. How did Medea aid him in this seemingly impossible task?
SHE GAVE HIM A POTION THAT WOULD PROTECT HIM
B2
Whom did Medea butcher to ensure her and Jason’s flight from Colchis?
ABSYRTUS (PROMPT ON HER BROTHER)
TU 15
Translate the following sentence into English: Militēs hostem magnā cum vi oppugnaverant.
THE SOLDIERS HAD ATTACKED THE ENEMY WITH GREAT FORCE
B1
… Hoste victō, militēs regī suam victoriam nuntiaverunt.
WHEN THE ENEMY WAS DEFEATED (AFTER/WITH THE ENEMY HAVING BEEN
DEFEATED), THE SOLDIERS ANNOUNCED THEIR VICTORY TO THE KING
B2
… Rex dicet suos milites celerrimōs et potentissimōs omnium esse.
THE KING WILL SAY THAT HIS SOLDIERS ARE THE SWIFTEST AND MOST
POWERFUL OF ALL.
2017 TSJCL CERTAMEN
NOVICE DIVISION ROUND 1
5
[SCORE CHECK]
TU 16
What new institution did Diocletian establish consisting of Caesares and Augusti?
TETRARCHY
B1
What man did Diocletian defeat at the Margus River in 285 AD to become emperor of Rome?
CARINUS
B2
Who was Diocletian’s Caesar in the East?
GALERIUS
TU 17
Quid anglice significat tum?
THEN, AT THAT TIME
B1
Quid anglice significat tam?
SO, SO FAR, TO SUCH A DEGREE
B2
Quid anglice significat tamen?
HOWEVER, YET, NEVERTHELESS
TU 18
What Titan offered to take the immortality of the centaur Chiron, thereby allowing Chiron to die
in peace?
PROMETHEUS
B1
Why did Chiron wish to die?
HE HAD BEEN POISONED BY THE BLOOD OF THE HYDRA
B2
Who would ironically meet a similar fate as Chiron, as he was the one who accidentally shot him
with a poisoned arrow?
HERACLES
TU 19
Give a Latin synonym for the word teneo.
HABEO
B1
Give a Latin synonym for the word interficio.
NECO / CAEDO / OCCIDO
B2
Give a Latin synonym for the word porto.
FERO / GERO
2017 TSJCL CERTAMEN
NOVICE DIVISION ROUND 1
6
[SCORE CHECK]
TU 20
What emperor saw the words “in hoc signo vinces” in a dream and believed that this signified
that he would be the victor of Milvian Bridge?
CONSTANTINE
B1
Against whom did Constantine face at this battle?
MAXENTIUS
B2
Constantine set up a new capital at Byzantium, which he renamed after himself. Give the modern
day name of this city.
ISTANBUL`

function getQuestions(){
    if (document.getElementById("pasteText").checked){
        return document.getElementById("pasteTextInput").value
    }
    else if (document.getElementById("uploadPDF").checked) {
        return document.getElementById("uploadPDFInput").value
    } 
    else if(document.getElementById("googleDocLink").checked){
        return document.getElementById("googleDocLinkInput").value
    }
}

function splitQuestions(fullText){
    if (bonusMode == "as tossups"){
        newQuestions = fullText.split(tossupMarkers /*or bonus markers, maybe you'll have to do multiple splits and merge*/) 
        newQuestions.splice(0,1)
    }
    else if (bonusMode == "exclude"){
        newQuestions = fullText.split(tossupMarkers)
        newQuestions.splice(0,1)
        for (let i = 0; i < newQuestions.length; i++){
            newQuestions.splice(i, 1, newQuestions[i].replace(new RegExp(bonusMarkers.source + "(.|\\s)*"), ""))
        }
    }
    //Split question from answer and add them to the question bank
    for (let x of newQuestions){
        singleQuestion = [x.match(questionPattern)[0], x.match(answerPattern)[0]] //match returns an array and we only care about the first thing in it
        console.log(singleQuestion)
        questionBank.push(singleQuestion)
        
    }
}