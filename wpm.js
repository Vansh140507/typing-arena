const sentences = [
    "The quick brown fox jumps over the lazy dog near the riverbank while the curious cat watches from a distance.",
    "Typing speed tests are an excellent way to measure your progress and identify specific areas needing improvement over time.",
    "Practicing regularly with a wide variety of sentence structures helps build muscle memory and significantly increase typing accuracy.",
    "A comfortable mechanical keyboard with good key travel and tactile feedback can make a noticeable difference in your typing speed.",
    "JavaScript is widely used for creating interactive web pages, building server-side applications, and developing mobile apps with React Native.",
    "The sun dipped below the horizon, casting long orange shadows across the quiet suburban street as the evening breeze began to blow.",
    "Learning to write code opens up endless creative possibilities, from building your own websites to analyzing complex datasets with Python.",
    "She decided to learn touch typing after realizing how much time she wasted every day hunting for keys on her old keyboard.",
    "The old library smelled of dust and ancient wisdom, with towering wooden shelves filled with stories from around the entire world.",
    "Your words per minute score is calculated by dividing the total number of typed words by the number of minutes you took to type them.",
    "Accuracy is often more important than raw speed, especially when typing important emails, official reports, or detailed code comments.",
    "The adventurous orange cat climbed the tallest oak tree in the neighborhood, then meowed loudly for someone to come rescue her.",
    "Responsive web design ensures that your website looks and functions perfectly on smartphones, tablets, laptops, and desktop monitors.",
    "A balanced diet rich in fresh fruits and leafy vegetables can boost your energy levels and improve overall cognitive function significantly.",
    "The mysterious package arrived on a rainy Tuesday afternoon, wrapped in brown paper and tied with a thin piece of old twine.",
    "Bubble sort may not be efficient for sorting large datasets, but it teaches fundamental concepts of how sorting algorithms actually work.",
    "She whispered her deepest secrets to the glowing moon, trusting its silent silver light to keep her thoughts safe forever.",
    "GitHub is more than just a place to host code; it is a collaborative platform where developers build amazing things together as a team.",
    "The diligent student completed all of her assignments well before the deadline, earning the highest grade in the entire class this semester.",
    "Artificial intelligence is transforming industries from healthcare to finance, creating new possibilities and opportunities every single day.",
    "Typing with proper posture and correct hand placement reduces muscle fatigue and helps prevent repetitive strain injuries over many years.",
    "The five boxing wizards jumped quickly over the lazy dog, demonstrating a perfect pangram for your daily typing practice sessions.",
    "A clean and minimalist code editor helps developers focus on solving logic problems without being distracted by cluttered user interfaces.",
    "Twenty innocent people were completely surprised by the sudden thunderstorm that turned their peaceful backyard picnic into total chaos.",
    "Learning a new programming language every year keeps your mind sharp and opens doors to different ways of thinking about complex problems."
];


let content=document.getElementById("content");
let input=document.getElementById("input");
let new_test=document.getElementById("new_test");
let timerdisplay=document.getElementById("timer");
let wpm=document.getElementById("wpm");
let timerinterval= null;
let seconds=0;
let started = false;
let finished = false;


const randomIndex = Math.floor(Math.random() * sentences.length);
content.innerText = sentences[randomIndex];
function startTimer(){
    if(started || finished) return;
    started = true;
    timerinterval = setInterval(()=>{
        seconds++;
        timerdisplay.innerText = `Time: ${seconds}s`;
        if(!finished){
            updatewpm(false);
        }
    },1000);
}
function calculateWPM(){
    let text = input.value.trim();
    if(text ==="") return 0;
    let words = input.value.trim().split(/\s+/).length;
    if(seconds === 0) return 0;
    return Math.round((words / seconds) * 60);
}
function updatewpm(final = false){
    let wpmValue = calculateWPM();
    wpm.innerText = `WPM: ${wpmValue}`;
}
function checkCompletion(){
    if (finished) return;
    if(input.value.trim() === content.innerText.trim()){
        finished = true;
        if(timer) clearInterval(timer);
         const finalWPM = calculateWPM(true);
        wpm.innerText = `Final WPM: ${finalWPM}`;

    }

}

input.addEventListener("input",()=>{
    if(!started && !finished && input.value.length > 0){
        startTimer();

    }
    if(!finished){
        updatewpm();
        checkCompletion();
    }
});

new_test.addEventListener("click",()=>{
    if(timerinterval) clearInterval(timerinterval);
    seconds = 0;
    started = false;
    finished = false;
    timerdisplay.innerText = "Time: 0s";
    wpm.innerText = "WPM: 0";
    input.value = "";
    const randomIndex = Math.floor(Math.random() * sentences.length);
    content.innerText = sentences[randomIndex];
    }
);
