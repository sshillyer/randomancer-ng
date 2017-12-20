import { Background } from '../background';
import { CharacterClass } from '../data/character-class';

export class CharacterStory {
    absentParent: string;
    background: Background;
    backgroundReason: string;
    birthplace: string;
    charClass: CharacterClass;
    charSubclass: string;
    childhoodHome: string;
    childhoodMemories: string;
    classReason: string;
    currentAge: string;
    family: string;
    familyLifestyle: string;
    knowParents: boolean;
    lifeEvents: string[];
    parentInfo: string;
    race: string;
    siblings: string[];
}
