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

    //items creation
    let set: ItemSet;
    let setBonus: SetBonus;
    let armor: Armor;
    //wooden set
    set = new ItemSet();
    setBonus = new SetBonus();
    setBonus.setPhysicalDefenseMultiplier(1.02);
    set.addBonus(setBonus);
    set.addBonus(setBonus);
    armor = new Armor(47, set);
    //add to chest armor select
    armor = new Armor(29, set);
    //add to legs armor select
    armor = new Armor(19, set);
    //add to helmets select
    //devotion set
    set = new ItemSet();
    set.addBonus(SetBonus.getNullBonus());
    setBonus = new SetBonus();
    setBonus.setCastingSpeedMultiplier(1.15);
    set.addBonus(setBonus);
    armor = new Armor(30, set);
    //add to chest armor select
    armor = new Armor(19, set);
    //add to legs armor select
    armor = new Armor(23, set);
    //add to helmets select
    //rest of the no grade armor
});
