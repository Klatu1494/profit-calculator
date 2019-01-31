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

function createDropRow(tableBody: HTMLTableSectionElement) {
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
    input.addEventListener("blur", function() {
        try {
            drop.setDropChance(input.value);
        } catch (error) {
            this.value = drop.getDropChanceString();
        }
    });
    tableBody.appendChild(row);
}
