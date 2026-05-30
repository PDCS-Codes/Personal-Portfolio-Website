const taskflowImages = [
    "Images/taskflow-1.png",
    "Images/taskflow-2.png",
    "Images/taskflow-3.png"
];


let currentTaskflow = 0;

setInterval(() => {

    currentTaskflow++;

    if(currentTaskflow >= taskflowImages.length){
        currentTaskflow = 0;
    }

    document.getElementById("taskflow-image").src =
        taskflowImages[currentTaskflow];

}, 3000);

const hangmanImages = [
    "Images/hangman-1.png",
    "Images/hangman-2.png",
    "Images/hangman-3.png",
    
    "Images/hangman-4.png"
];

let currentHangman = 0;
setInterval(() => {

    currentHangman++;

    if(currentHangman >= hangmanImages.length){
        currentHangman = 0;
    }

    document.getElementById("hangman-image").src =
        hangmanImages[currentHangman];

}, 3000);