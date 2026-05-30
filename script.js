const taskflowImages = [
    "Images/Taskflow pic (1).png",
    "Images/Taskflow pic (2).png",
    "Images/Taskflow pic (3).png"
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
    "Images/hangman1 (1).png",
    "Images/hangman2 (2).png",
    "Images/hangman3 (3).png",
    
    "Images/hangman4 (4).png"
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