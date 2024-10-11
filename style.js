const loremIpsumText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquid saepe deleniti! Fugit voluptatibus quis voluptatem consequuntur deleniti assumenda ex similique porro in temporibus? Quis iure ex tempore laudantium nostrum!";

const button = document.querySelector('button');

const generateLoremIpsum = () => {
    const numWords = parseInt(document.getElementById('numWords').value, 10);
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";

    // Split the lorem ipsum text into words
    const wordsArray = loremIpsumText.split(" ");
    
    // Create an array large enough to hold the requested number of words
    let wordsToDisplay = [];
    while (wordsToDisplay.length < numWords) {
        wordsToDisplay = wordsToDisplay.concat(wordsArray);
    }
    
    // Trim the array to the exact number of words requested
    wordsToDisplay = wordsToDisplay.slice(0, numWords).join(" ");
    
    // Create and append the paragraph with the specified number of words
    const paragraph = document.createElement('p');
    paragraph.textContent = wordsToDisplay;
    outputDiv.appendChild(paragraph);
};

button.addEventListener('click', generateLoremIpsum);
