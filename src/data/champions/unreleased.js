import { CHAMPION } from '../model/Champion';

export const UNRELEASED_CHAMPIONS = [
    // Cosmic
    CHAMPION.DARKPHOENIX,
    // Tech
    // Mutant
    CHAMPION.WEAPONX,
    CHAMPION.LONGSHOT,
    CHAMPION.MOJO,
    // Skill
    // Science
    // Mystic
    // Universal
    CHAMPION.MAESTRO,
    CHAMPION.THECOLLECTOR,
    CHAMPION.GRANDMASTER,
].reduce((map, champion) => {
    map[ champion ] = true;
    return map;
}, {});
