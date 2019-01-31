function createMovementMode(
    character: Character,
    description: string,
    multiplier: number,
    selectElement: HTMLSelectElement
): void {
    let optionElement: HTMLOptionElement = document.createElement("option");
    optionElement.innerText = description;
    selectElement.addEventListener("change", () => {
        if (selectElement.selectedIndex === optionElement.index) {
            character.setMovementModeMultiplier(multiplier);
        }
    });
    selectElement.appendChild(optionElement);
}

function createDrop(drops: Array<Drop>, tableBody: HTMLTableSectionElement) {
    let drop = new Drop();
    let row: HTMLTableRowElement = document.createElement("tr");
    //name
    let cell: HTMLTableCellElement = document.createElement("td");
    let input: HTMLInputElement = document.createElement("input");
    cell.appendChild(input);
    row.appendChild(cell);
    //dropChance
    cell = document.createElement("td");
    input = document.createElement("input");
    input.value = "0";
    input.addEventListener("blur", function() {
        try {
            drop.setDropChance(this.value);
        } catch (error) {
            this.value = drop.getDropChanceString();
        }
    });
    cell.appendChild(input);
    row.appendChild(cell);
    //value
    cell = document.createElement("td");
    input = document.createElement("input");
    input.type = "number";
    input.min = "0";
    input.value = "0";
    input.addEventListener("blur", function() {
        drop.setValue(parseFloat(this.value));
    });
    cell.appendChild(input);
    row.appendChild(cell);
    //add row to the table
    tableBody.appendChild(row);
    drops.push(drop);
}
