class SetBonus {
    private healthRegenerationMultiplier: number;
    private physicalDefenseMultiplier: number;
    private shieldDefenseMultiplier: number;
    private castingSpeedMultiplier: number;
    private strengthBonus: number;
    private dexterityBonus: number;
    private criticalDamageBonus: number;

    public constructor() {
        this.healthRegenerationMultiplier = 1;
        this.physicalDefenseMultiplier = 1;
        this.shieldDefenseMultiplier = 1;
        this.castingSpeedMultiplier = 1;
        this.strengthBonus = 0;
        this.dexterityBonus = 0;
        this.criticalDamageBonus = 0;
    }

    public getHealthRegenerationMultiplier(): number {
        return this.healthRegenerationMultiplier;
    }

    public setHealthRegenerationMultiplier(value: number): void {
        this.healthRegenerationMultiplier = value;
    }

    public getPhysicalDefenseMultiplier(): number {
        return this.physicalDefenseMultiplier;
    }

    public setPhysicalDefenseMultiplier(value: number): void {
        this.physicalDefenseMultiplier = value;
    }

    public getShieldDefenseMultiplier(): number {
        return this.shieldDefenseMultiplier;
    }

    public setShieldDefenseMultiplier(value: number): void {
        this.shieldDefenseMultiplier = value;
    }

    public getCastingSpeedMultiplier(): number {
        return this.castingSpeedMultiplier;
    }

    public setCastingSpeedMultiplier(value: number): void {
        this.castingSpeedMultiplier = value;
    }

    public getStrengthBonus(): number {
        return this.strengthBonus;
    }

    public setStrengthBonus(value: number): void {
        this.strengthBonus = value;
    }

    public getStrengthBonus(): number {
        return this.strengthBonus;
    }

    public setStrengthBonus(value: number): void {
        this.strengthBonus = value;
    }

    public getCriticalDamageBonus(): number {
        return this.criticalDamageBonus;
    }

    public setCriticalDamageBonus(value: number): void {
        this.criticalDamageBonus = value;
    }
}
