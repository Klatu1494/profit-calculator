class Character {
    private static instance: Character = null;
    private movementModeMultiplier: number;
    private level: number;
    private readonly constitutionModifiers: Array<number>;

    private constructor() {
        this.constitutionModifiers = [
            null,
            0.46,
            0.47,
            0.48,
            0.5,
            0.51,
            0.53,
            0.54,
            0.56,
            0.58,
            0.59,
            0.61,
            0.63,
            0.65,
            0.67,
            0.69,
            0.71,
            0.73,
            0.75,
            0.77,
            0.8,
            0.82,
            0.85,
            0.87,
            0.9,
            0.93,
            0.95,
            0.98,
            1.01,
            1.04,
            1.07,
            1.1,
            1.14,
            1.17,
            1.21,
            1.24,
            1.28,
            1.32,
            1.36,
            1.4,
            1.44,
            1.48,
            1.53,
            1.58,
            1.62,
            1.67,
            1.72,
            1.77,
            1.83,
            1.88,
            1.94,
            2,
            2.06,
            2.12,
            2.18,
            2.25,
            2.31,
            2.38,
            2.45,
            2.53,
            2.6
        ];
    }

    public static getInstance(): Character {
        if (this.instance === null) {
            this.instance = new Character();
        }
        return this.instance;
    }

    private getHealthRegeneration(
        level: number,
        constitution: number,
        buffs: Array<Buff>,
        passives: Array<Passive>
    ): number {
        let bonus = 0;
        let multiplier = 1;
        for (let buff of buffs) {
            multiplier *= buff.getHealthRegenerationMultiplier();
        }
        for (let passive of passives) {
            if (passive.isActive()) {
                bonus += passive.getHealthRegenerationBonus();
            }
        }
        return (
            Math.floor(
                ((level < 10 ? 1.9 + level / 20 : 1.45 + level / 10) *
                    multiplier *
                    this.constitutionModifiers[constitution] *
                    this.getLevelModifier(level) +
                    bonus) *
                    10
            ) / 10
        );
    }

    private getLevelModifier(level: number): number {
        return (level + 89) / 100;
    }

    public getProfit(): number {
        return null;
    }

    public setMovementModeMultiplier(value: number): void {
        this.movementModeMultiplier = value;
    }
}
