var SetBonus = /** @class */ (function () {
    function SetBonus() {
        this.healthRegenerationMultiplier = 1;
    }
    SetBonus.prototype.getHealthRegenerationMultiplier = function () {
        return this.healthRegenerationMultiplier;
    };
    SetBonus.prototype.setHealthRegenerationMultiplier = function (value) {
        this.healthRegenerationMultiplier = value;
    };
    return SetBonus;
}());
