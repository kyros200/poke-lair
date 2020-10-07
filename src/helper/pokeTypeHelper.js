//Helper to get Pokémon/Move Type image, List, and Theme.

import normal from '../imgs/normal.JPG';
import dark from '../imgs/dark.JPG';
import bug from '../imgs/bug.JPG';
import fire from '../imgs/fire.JPG';
import water from '../imgs/water.JPG';
import ice from '../imgs/ice.JPG';
import dragon from '../imgs/dragon.JPG';
import electric from '../imgs/electric.JPG';
import psychic from '../imgs/psychic.JPG';
import steel from '../imgs/steel.JPG';
import ground from '../imgs/ground.JPG';
import fighting from '../imgs/fight.JPG';
import fairy from '../imgs/fairy.JPG';
import flying from '../imgs/flying.JPG';
import ghost from '../imgs/ghost.JPG';
import grass from '../imgs/grass.JPG';
import poison from '../imgs/poison.JPG';
import rock from '../imgs/rock.JPG';

const typeImgs = {
    normal,
    dark,
    bug,
    fire,
    water,
    ice,
    dragon,
    electric,
    psychic,
    steel,
    ground,
    fighting,
    fairy,
    flying,
    ghost,
    grass,
    poison,
    rock
}

const typeStringList = [
    "normal",
    "fire",
    "water",
    "grass",
    "flying",
    "electric",
    "bug",
    "ground",
    "fighting",
    "rock",
    "psychic",
    "dark",
    "ice",
    "dragon",
    "ghost",
    "poison",
    "steel",
    "fairy",
];

const typeThemes = {
    normal:{
        dark: "#aaaaaa",
        main: "#A2A073"
    },
    dark:{
        dark: "#aaaaaa",
        main: "#705848"
    },
    bug:{
        dark: "#aaaaaa",
        main: "#A8B820"
    },
    fire:{
        dark: "#aaaaaa",
        main: "#F08030"
    },
    water:{
        dark: "#aaaaaa",
        main: "#6890F0"
    },
    ice:{
        dark: "#aaaaaa",
        main: "#98D8D8"
    },
    dragon:{
        dark: "#aaaaaa",
        main: "#7038F8"
    },
    electric:{
        dark: "#aaaaaa",
        main: "#F8D030"
    },
    psychic:{
        dark: "#aaaaaa",
        main: "#F85888"
    },
    steel:{
        dark: "#aaaaaa",
        main: "#B8B8D0"
    },
    ground:{
        dark: "#aaaaaa",
        main: "#E0C068"
    },
    fighting:{
        dark: "#aaaaaa",
        main: "#C03028"
    },
    fairy:{
        dark: "#aaaaaa",
        main: "#DEA5DE"
    },
    flying:{
        dark: "#aaaaaa",
        main: "#A890F0"
    },
    ghost:{
        dark: "#aaaaaa",
        main: "#705898"
    },
    grass:{
        dark: "#aaaaaa",
        main: "#78C850"
    },
    poison:{
        dark: "#aaaaaa",
        main: "#A040A0"
    },
    rock:{
        dark: "#aaaaaa",
        main: "#B8A038"
    },
}

const typeHelper = {
    typeImgs,
    typeStringList,
    typeThemes
}

export default typeHelper;