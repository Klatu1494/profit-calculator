addEventListener("load", () => {
    //player's character creation
    let character: Character = Character.getInstance();

    //movement modes select creation
    let movementModesSelect: HTMLSelectElement = document.createElement(
        "select"
    );
    createMovementMode(character, "Standing", 1.1, movementModesSelect);
    createMovementMode(character, "Sitting", 1.5, movementModesSelect);
    createMovementMode(character, "Running", 0.7, movementModesSelect);
    createMovementMode(character, "Walking", 1, movementModesSelect);
    document.body.appendChild(movementModesSelect);
});
