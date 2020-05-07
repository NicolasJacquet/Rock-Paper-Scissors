import ATTACKS, { type Attack } from "./attacks.js";

export const getRandomAttack = (): Attack => {
    const attacks = Object.keys(ATTACKS);
    const min = 0;
    const max = attacks.length - 1;
    const randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
    return attacks[randomIndex];
};

export const getGameResult: (
    userAttack: Attack,
    computerAttack: Attack
) => number = (userAttack, computerAttack) => {
    if (userAttack === computerAttack) {
        return 0;
    } else if (ATTACKS[userAttack].beats === computerAttack) {
        return 1;
    }
    return -1;
};
