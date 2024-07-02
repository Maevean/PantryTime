
function saveToFile() {
    const userInput = document.getElementById('userInput').value;
    const blob = new Blob([userInput], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'recipes.txt';
    link.click();

    // Clean up the URL object
    URL.revokeObjectURL(url);
}



<div id="fileTextHere"></div>

    // Load the text file (replace [file url or location path] with the actual file path)
    $('#fileTextHere').load("C:\Users\jessm\Pictures\♥ School\SIP\PantryTime");


    function appendText() {
        const userInput = document.getElementById("userInput2").value;
        // Assuming 'existingFile.txt' is the name of your existing text file
        const fileName = "recipes.txt";

        // Append the user input to the file
        fetch(fileName, { method: "POST", body: userInput, mode: "no-cors" })
            .then(() => alert("Text appended successfully!"))
            .catch((error) => console.error("Error appending text:", error));
    }

