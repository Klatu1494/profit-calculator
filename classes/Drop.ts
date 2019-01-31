class Drop {
    private value: number;
    private dropChance: number;

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

    public setValue(value: number): void {
        this.value = value;
    }

    public setDropChance(valuesString: string): void {
        this.dropChance = NaN;
        let values: Array<string>;
        valuesString = valuesString.replace(",", ".");
        values = valuesString.split("/");
        /*
         * this assignment is valid because String.split
         * always returns an Array which length is at least 1
         */
        this.dropChance = Drop.parseValue(values[0]);
        for (let i: number = 1; i < values.length; i++) {
            this.dropChance /= Drop.parseValue(values[i]);
        }
    }
}
