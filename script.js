const asciiArtArray = [
    ` ___          ____        
(_  _   _  __  /  _   '_  
/  / ()//)    (  (//)///) `,
    // You can add more ASCII art strings here
];

function generateAscii() {
    const randomIndex = Math.floor(Math.random() * asciiArtArray.length);
    const asciiArt = asciiArtArray[randomIndex];
    document.getElementById('asciiArt').textContent = asciiArt;
}

// Generate an initial ASCII art on page load
generateAscii();
