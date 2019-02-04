class Equipment {
    private chestArmor: Armor;
    private legsArmor: Armor;
    private gloves: Armor;
    private boots: Armor;
    private helmet: Armor;

    public constructor() {
        this.chestArmor = Armor.getNullArmor();
        this.legsArmor = Armor.getNullArmor();
        this.gloves = Armor.getNullArmor();
        this.boots = Armor.getNullArmor();
        this.helmet = Armor.getNullArmor();
    }

    public getSetBonus(): SetBonus {
        let set = this.chestArmor.getSet();
        let bonus = SetBonus.getNullBonus();
        if (this.chestArmor.getSet() !== null) {
            let bonusIndex = 0;
            for (let armor of this.getSetIterableIterator()) {
                if (armor.getSet() === set) {
                    bonusIndex++;
                }
            }
            bonus = set.getBonusByIndex(bonusIndex);
        }
        return bonus;
    }

    private *getSetIterableIterator(): IterableIterator<Armor> {
        yield this.legsArmor;
        yield this.gloves;
        yield this.boots;
        yield this.helmet;
    }
}
