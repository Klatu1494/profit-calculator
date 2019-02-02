class Drop {
    private value: number;
    private dropChance: number;
    private dropChanceString: string;

    public constructor() {
        this.value = 0;
        this.dropChance = 0;
    }

    private static parseValue(value: string): number {
        let parsedValue = parseFloat(value);
        if (value[value.length - 1] === "%") {
            parsedValue /= 100;
        }
        return parsedValue;
    }

    public getAverageValue(): number {
        return this.dropChance * this.value;
    }

    public setValue(value: number): void {
        this.value = value;
    }

    public getDropChanceString(): string {
        return this.dropChanceString;
    }

    public setDropChance(valuesString: string): void {
        let newDropChance: number;
        let values: Array<string>;
        valuesString = valuesString.replace(",", ".");
        values = valuesString.split("/");
        /*
         * this assignment is valid because String.split
         * always returns an Array which length is at least 1
         */
        newDropChance = Drop.parseValue(values[0]);
        for (let i: number = 1; i < values.length; i++) {
            newDropChance /= Drop.parseValue(values[i]);
        }
        if (newDropChance === NaN || newDropChance < 0) {
            throw new Error("Invalid drop chance.");
        }
        this.dropChance = newDropChance;
        this.dropChanceString = valuesString;
    }
}
