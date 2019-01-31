var Ant = /** @class */ (function () {
    function Ant(maximumLife, attack, age, canCarryThings) {
        this.maximumLife = maximumLife;
        this.attack = attack;
        this.age = age;
        this.canCarryThings = canCarryThings;
        this.life = maximumLife;
    }
    Ant.prototype.onFrame = function () {
        this.life = Math.min(this.maximumLife, this.life + 1);
    };
    return Ant;
}());
