const images = [
    "src/demons/douma.jpg",
    "src/demons/gyutaro.jpg",
    "src/demons/kokushibo.png",
    "src/demons/muzan.jpg",
    "src/demons/nezuko.jpg",
    "src/demons/spider demon mother.png",
    "src/demons/susamaru.png",
    "src/demons/tamayo.jpg",
    
    "src/hashira/flame hashira.jpg",
    "src/hashira/inosuke.jpg",
    "src/hashira/mist hashira.jpg",
    "src/hashira/serpent hashira.jpg",
    "src/hashira/stone hashira.jpg",
    "src/hashira/tanjiro.jpg",
    "src/hashira/yoriichi.jpg",
    "src/hashira/zenitsu.jpg"
];

const descriptions = [
    "A high-ranking demon in the Twelve Kizuki, known for his cold demeanor and deadly abilities.",
    "The Upper Rank Six demon, often seen with his sister Daki, wielding deadly blood sickles.",
    "The Upper Rank One demon and Muzan’s most powerful subordinate, known for his Moon Breathing technique.",
    "The main antagonist and the first demon, possessing terrifying power and intellect.",
    "Tanjiro's sister, turned into a demon but retains her humanity and protects her brother.",
    "Part of the Spider Demon Family, known for her ability to control other demons.",
    "A demon who fights using deadly temari balls and is loyal to Muzan.",
    "A demon doctor who opposes Muzan and helps humans by developing demon cures.",

    "The Flame Hashira, known for his intense passion, courage, and mastery of Flame Breathing.",
    "A fierce and wild Demon Slayer who fights with dual swords and a self-taught Beast Breathing style.",
    "The youngest Hashira, skilled in Mist Breathing, often lost in thought but highly focused in battle.",
    "A strict Hashira with a snake companion, known for his unique Serpent Breathing technique.",
    "The physically strongest Hashira, wielding incredible power and using Stone Breathing with a spiked flail and axe.",
    "A compassionate and determined Demon Slayer with a keen sense of smell and mastery of Water Breathing and Hinokami Kagura.",
    "The legendary Demon Slayer who invented Sun Breathing and nearly defeated Muzan, setting the standard for all future Demon Slayers.",
    "A fearful yet talented Demon Slayer who uses Thunder Breathing and can unleash immense power when he is unconscious."
];

const demonNames = [
    "DOUMA",
    "GYUTARO",
    "KOKUSHIBO",
    "MUZAN KIBUTSUJI",
    "NEZUKO KAMADO",
    "SPIDER DEMON MOTHER",
    "SUSAMARU",
    "TAMAYO",

    "Flame Hashira (Kyojuro Rengoku)",
    "Inosuke Hashibira",
    "Mist Hashira (Muichiro Tokito)",
    "Serpent Hashira (Obanai Iguro)",
    "Stone Hashira (Gyomei Himejima)",
    "Tanjiro Kamado",
    "Yoriichi Tsugikuni",
    "Zenitsu Agatsuma"
];

let currentIndex = 0;

// Get element in html
const characterImage = document.getElementById("character-image");
const characterDescription = document.getElementById("character-description");
const demonName = document.getElementById("character-name")

// Set initial image and description
characterImage.src = images[currentIndex];
characterDescription.textContent = descriptions[currentIndex];
demonName.textContent = demonNames[currentIndex];
characterImage.classList.add("active");

// Function to update the image and description
function updateImage(index) {
    characterImage.classList.remove("active"); // Remove fade-in class
    setTimeout(() => {
        characterImage.src = images[index];
        demonName.textContent = demonNames[index];
        characterDescription.textContent = descriptions[index];
        characterImage.classList.add("active"); // Add fade-in class
    }, 500); // Wait for fade-out before changing image
}

// Automatic slider with fade effect
function autoSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage(currentIndex);
}

// Start the auto-slide with a 3-second interval
setInterval(autoSlide, 5000);

// Manual controls
function next() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage(currentIndex);
}

function prev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage(currentIndex);
}
