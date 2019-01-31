function getHealthRegeneration(level, constitution, buffs) {
    var buffsMultiplier = 1;
    for (var _i = 0, buffs_1 = buffs; _i < buffs_1.length; _i++) {
        var buff = buffs_1[_i];
        buffsMultiplier *= buff.getHealthRegenerationMultiplier();
    }
    return ((level < 10 ? 1.9 + level / 20 : 1.45 + level / 10) *
        buffsMultiplier *
        constitutionModifiers[constitution]);
}
function getLevelModifier(level) {
    return (level + 89) / 100;
}
