addEventListener("load", () => {
    //drops array creation
    let drops: Array<Drop> = [];

    //player's character creation
    let player: Character = new Character();

    //movement modes select creation
    let movementModesSelect: HTMLSelectElement = document.createElement(
        "select"
    );
    createMovementMode(
        player,
        "Standing",
        MovementModesMultipliers.Walking,
        movementModesSelect
    );
    createMovementMode(
        player,
        "Sitting",
        MovementModesMultipliers.Sitting,
        movementModesSelect
    );
    createMovementMode(
        player,
        "Running",
        MovementModesMultipliers.Running,
        movementModesSelect
    );
    createMovementMode(
        player,
        "Walking",
        MovementModesMultipliers.Walking,
        movementModesSelect
    );
    document.body.appendChild(movementModesSelect);

    //drops table creation
    let table: HTMLTableElement = document.createElement("table");
    let tableBody: HTMLTableSectionElement = document.createElement("tbody");
    table.appendChild(document.createElement("thead"));
    table.appendChild(tableBody);
    document.body.appendChild(table);

    //"Add drop" button creation
    let button: HTMLButtonElement = document.createElement("button");
    button.innerText = "Add drop";
    button.addEventListener("click", () => {
        createDrop(drops, tableBody);
    });
    document.body.appendChild(button);
});
