function createMovementMode(
    character: Character,
    description: string,
    multiplier: number,
    selectElement: HTMLSelectElement
) {
    let optionElement: HTMLOptionElement = document.createElement("option");
    optionElement.innerText = description;
    selectElement.addEventListener("change", () => {
        if (selectElement.selectedIndex === optionElement.index) {
            character.setMovementModeMultiplier(multiplier);
        }
    });
    selectElement.appendChild(optionElement);
}
