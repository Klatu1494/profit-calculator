class SetBonus {
    private healthRegenerationMultiplier: number;
    private manaRegenerationMultiplier: number;
    private physicalDefenseMultiplier: number;
    private shieldDefenseMultiplier: number;
    private castingSpeedMultiplier: number;
    private strengthBonus: number;
    private dexterityBonus: number;
    private constitutionBonus: number;
    private intelligenceBonus: number;
    private witBonus: number;
    private criticalDamageBonus: number;
    private physicalAttackMultiplier: number;
    private magicalAttackMultiplier: number;
    private shieldDefenseRateMultiplier: number;

    public constructor() {
        this.healthRegenerationMultiplier = 1;
        this.manaRegenerationMultiplier = 1;
        this.physicalDefenseMultiplier = 1;
        this.shieldDefenseMultiplier = 1;
        this.castingSpeedMultiplier = 1;
        this.strengthBonus = 0;
        this.dexterityBonus = 0;
        this.constitutionBonus = 0;
        this.intelligenceBonus = 0;
        this.witBonus = 0;
        this.criticalDamageBonus = 0;
        this.physicalAttackMultiplier = 1;
        this.magicalAttackMultiplier = 1;
        this.shieldDefenseRateMultiplier = 1;
    }

    public getShieldDefenseRateMultiplier(): number {
        return this.shieldDefenseRateMultiplier;
    }

    public setShieldDefenseRateMultiplier(value: number): void {
        this.shieldDefenseRateMultiplier = value;
    }

    public getHealthRegenerationMultiplier(): number {
        return this.healthRegenerationMultiplier;
    }

    public setHealthRegenerationMultiplier(value: number): void {
        this.healthRegenerationMultiplier = value;
    }

    public getManaRegenerationMultiplier(): number {
        return this.manaRegenerationMultiplier;
    }

    public setManaRegenerationMultiplier(value: number): void {
        this.manaRegenerationMultiplier = value;
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

    public getDexterityBonus(): number {
        return this.dexterityBonus;
    }

    public setDexterityBonus(value: number): void {
        this.dexterityBonus = value;
    }

    public getWitBonus(): number {
        return this.witBonus;
    }

    public setWitBonus(value: number): void {
        this.witBonus = value;
    }

    public getCriticalDamageBonus(): number {
        return this.criticalDamageBonus;
    }

    public setCriticalDamageBonus(value: number): void {
        this.criticalDamageBonus = value;
    }

    public getPhysicalAttackMultiplier(): number {
        return this.physicalAttackMultiplier;
    }

    public setPhysicalAttackMultiplier(value: number): void {
        this.physicalAttackMultiplier = value;
    }

    public getMagicalAttackMultiplier(): number {
        return this.magicalAttackMultiplier;
    }

    public setMagicalAttackMultiplier(value: number): void {
        this.magicalAttackMultiplier = value;
    }

    public getConstitutionBonus(): number {
        return this.constitutionBonus;
    }

    public setConstitutionBonus(value: number): void {
        this.constitutionBonus = value;
    }

    public getIntelligenceBonus(): number {
        return this.intelligenceBonus;
    }

    public setIntelligenceBonus(value: number): void {
        this.intelligenceBonus = value;
    }
}
