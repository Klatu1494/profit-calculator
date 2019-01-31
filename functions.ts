function createMovementMode(
    description: string,
    multiplier: number,
    selectElement: HTMLSelectElement
) {
    let optionElement: HTMLOptionElement = document.createElement("option");
    optionElement.innerText = description;
    selectElement.addEventListener("change", () => {});
    selectElement.appendChild(optionElement);
}
