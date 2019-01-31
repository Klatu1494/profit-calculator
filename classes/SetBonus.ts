class SetBonus {
    private healthRegenerationMultiplier: number;

    public constructor() {
        this.healthRegenerationMultiplier = 1;
    }

    public getHealthRegenerationMultiplier(): number {
        return this.healthRegenerationMultiplier;
    }

    public setHealthRegenerationMultiplier(value: number): void {
        this.healthRegenerationMultiplier = value;
    }
}
