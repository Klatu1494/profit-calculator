class Armor {
    private static nullArmor: Armor = new Armor(0, null);

    public constructor(
        private readonly defense: number,
        private readonly set: ItemSet
    ) {}

    public getDefense(): number {
        return this.defense;
    }

    public getSet(): ItemSet {
        return this.set;
    }

    public static getNullArmor(): Armor {
        return this.nullArmor;
    }
}
