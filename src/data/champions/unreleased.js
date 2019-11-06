import { CHAMPION } from '../model/Champion';

export const UNRELEASED_CHAMPIONS = [
    // Cosmic
    CHAMPION.DARKPHOENIX,
    CHAMPION.SILVERSURFER,
    // Tech
    // Mutant
    CHAMPION.WEAPONX,
    // Skill
    // Science
    CHAMPION.MRFANTASTIC,
    // Mystic
    // Universal
    CHAMPION.MAESTRO,
    CHAMPION.THECOLLECTOR,
    CHAMPION.GRANDMASTER,
].reduce((map, champion) => {
    map[ champion ] = true;
    return map;
}, {});
