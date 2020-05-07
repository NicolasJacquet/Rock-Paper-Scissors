import ATTACKS from "./attacks.js";

export const getRandomAttack = (): $Keys<typeof ATTACKS> => {
    const attacks = Object.keys(ATTACKS);
    const min = 0;
    const max = attacks.length - 1;
    const randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
    return attacks[randomIndex];
};

export const getGameResult: (
    userAttack: $Keys<typeof ATTACKS>,
    computerAttack: $Keys<typeof ATTACKS>
) => number = (userAttack, computerAttack) => {
    if (userAttack === computerAttack) {
        return 0;
    } else if (ATTACKS[userAttack].beats === computerAttack) {
        return 1;
    }
    return -1;
};
