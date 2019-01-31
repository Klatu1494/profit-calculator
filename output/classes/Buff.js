var Buff = /** @class */ (function () {
    function Buff() {
        this.healthRegenerationMultiplier = 1;
    }
    Buff.prototype.getHealthRegenerationMultiplier = function () {
        return this.healthRegenerationMultiplier;
    };
    Buff.prototype.setHealthRegenerationMultiplier = function (value) {
        this.healthRegenerationMultiplier = value;
    };
    return Buff;
}());
