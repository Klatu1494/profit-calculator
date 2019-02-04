class ItemSet {
    private bonuses: Array<SetBonus>;

    public constructor() {
        this.bonuses = [SetBonus.getNullBonus()];
    }

    public addBonus(bonus: SetBonus): void {
        this.bonuses.push(bonus);
    }

    public getBonusByIndex(index: number) {
        return this.bonuses[index];
    }
}
