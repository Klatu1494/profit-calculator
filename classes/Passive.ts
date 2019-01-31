class Passive {
    private healthRegenerationBonus: number;

    public constructor(private readonly activationCondition: () => boolean) {
        this.healthRegenerationBonus = 0;
    }

    public getHealthRegenerationBonus(): number {
        return this.healthRegenerationBonus;
    }

    public setHealthRegenerationBonus(value: number): void {
        this.healthRegenerationBonus = value;
    }

    public isActive() {
        return this.activationCondition();
    }
}
