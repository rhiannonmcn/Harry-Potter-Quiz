//array for each of the different difficulty levels stored below

const easyQuestions = [{
    question: "What is the name of Harry Potter's Owl?",
    answers: [ 
        {text: "Hermes", correct: false},
        {text: "Scabbers", correct: false},
        {text: "Fawkes", correct: false},
        {text: "Hedwig", correct: true}
    ]
},
{
    question: "What was the Lily Potter's surname before she marries James Potter?",
    answers: [
        {text: "Evans", correct: true},
        {text: "Smith", correct: false},
        {text: "Peters", correct: false},
        {text: "Cullen", correct: false}
    ]
},
{
    question: "Who kills Albus Dumbledore?",
    answers: [
        {text: "Draco Malfoy", correct: false},
        {text: "Severus Snape", correct: true},
        {text: "Voldemort", correct: false},
        {text: "Bellatrix Lestrange", correct: false}
    ]
},
{
    question: "What spell put Neville Longbottom's parents in the long term ward of St. Mungos?",
    answers: [
        {text: "Avada Kedavra", correct: false},
        {text: "Imperious Curse", correct: true},
        {text: "Crucio Curse", correct: false},
        {text: "Expulso", correct: false}
    ]
},
{
    question: "What animal did Hermione Granger turn into when she drank Polyjuice Potion?",
    answers: [
        {text: "Owl", correct: false},
        {text: "Dog", correct: false},
        {text: "Cat", correct: true},
        {text: "Rat", correct: false}
    ]
},
{
    question: "Who put Harry Potter's name in the Goblet of Fire?",
    answers: [
        {text: "Igor Karkoroff ", correct: false},
        {text: "Mad Eye Moody", correct: false},
        {text: "Severus Snape", correct: false},
        {text: "Bartemius Crouch JR", correct: true}
    ]
},
{
    question: "What Hogwarts house was Harry Potter nearly sorted into?",
    answers: [
        {text: "Ravenclaw", correct: false},
        {text: "Slytherin", correct: true},
        {text: "Gryffindor", correct: false},
        {text: "Hufflepuff", correct: false}
    ]
},
{
    question: "What is the name of the Cerebeus thatbguards the trapdoor to the philosopher's stone?",
    answers: [
        {text: "Sooty", correct: false},
        {text: "Smiley", correct: false},
        {text: "Squishy", correct: false},
        {text: "Fluffy", correct: true}
    ]
},
{
    question: "How do you close the Marauder's Map?",
    answers: [
        {text: "Mischief Managed", correct: true},
        {text: "Mischievo Completo", correct: false},
        {text: "Mischief No Good", correct: false},
        {text: "Mischief done", correct: false}
    ]
},
{
    question: "What was the Lily Potter's surname before she marries James Potter?",
    answers: [
        {text: "Evans", correct: true},
        {text: "Smith", correct: false},
        {text: "Peters", correct: false},
        {text: "Cullen", correct: false}
    ]
},
{
    question: "What was 'prongs' real name?",
    answers: [
        {text: "Sirius Black", correct: false},
        {text: "Peter Pettigrew", correct: false},
        {text: "Remus Lupin", correct: false},
        {text: "James Potter", correct: true}
    ]
},
{
    question: "How does Harry Potter catch his first snitch?",
    answers: [
        {text: "Hand", correct: false},
        {text: "Mouth", correct: true},
        {text: "He doesn't catch it", correct: false},
        {text: "A spell", correct: false}
    ]
},
{
    question: "Who was hexing Harry Potter's broom in his first quidditch game ever?",
    answers: [
        {text: "Severus Snape", correct: false},
        {text: "Voldemort", correct: false},
        {text: "Quirinus Quirrell", correct: true},
        {text: "Peter Pettigrew", correct: false}
    ]
},
{
    question: "What animal can you speak to and undestand as a parselmouth?",
    answers: [
        {text: "Snakes", correct: true},
        {text: "Dragons", correct: false},
        {text: "Spiders", correct: false},
        {text: "Lizards", correct: false}
    ]
},
{
    question: "What magical creature pulls the carriages to Hogwarts?",
    answers: [
        {text: "Unicorns", correct: false},
        {text: "Thestrals", correct: true},
        {text: "Hippogriffs", correct: false},
        {text: "Werewolves", correct: false}
    ]
}];

const mediumQuestions = [{
    question: "What is Fleur Delacour's sister's name?",
    answers: [
        {text: "Brigitte", correct: false},
        {text: "Gabrielle", correct: true},
        {text: "Fayette", correct: false},
        {text: "Esme", correct: false}
    ]
},
{
    question: "What is the name of Ginny Weasley's Pygmy Puff?",
    answers: [
        {text: "Hugo", correct: false},
        {text: "Barry", correct: false},
        {text: "Arnold", correct: true},
        {text: "Richard", correct: false}
    ]
}
];

const hardQuestions = [{
    question: "What does Viktor Krum's wand contain?",
    answers: [
        {text: "Dragon Heartstring", correct: true},
        {text: "Thestral Hair", correct: false},
        {text: "Phoenix Feather", correct: false},
        {text: "Unicorn Hair", correct: false}
    ]
},
{
    question: "Who does Draco Malfoy marry in the epilogue?",
    answers: [
        {text: "Pansy Parkinson", correct: false},
        {text: "Astoria Greengrass", correct: false},
        {text: "Georgina Goyle", correct: true},
        {text: "Richard", correct: false}
    ]
}];