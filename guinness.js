const button = document.getElementById("split-button");
const foam = document.getElementById("foam");
const message = document.getElementById("split-message");

let lastHeight = null;

button.addEventListener("click", () => {

    const possibleHeights = [
        120,
        140,
        168,
        195,
        215
    ];

    let newHeight;

    // KEEP ROLLING UNTIL DIFFERENT
    do{
        newHeight =
            possibleHeights[
                Math.floor(Math.random() * possibleHeights.length)
            ];

    } while(newHeight === lastHeight);

    lastHeight = newHeight;

    foam.style.height = newHeight + "px";

    // SUCCESS
    if(newHeight === 168){

        message.textContent =
            "Perfect split. The locals approve.";

    } else if(newHeight < 168){

        message.textContent =
            "Too high. The G is unsplit. Try again!";

    } else {

        message.textContent =
            "Too low. Mix in a water eh? Try again!";
    }

});

// This is super duper chatgpt