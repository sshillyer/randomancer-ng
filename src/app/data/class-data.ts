import { CharacterClass } from './character-class';
export const CHAR_CLASSES: CharacterClass[] = [
    {
        name: 'Barbarian',
        subclasses: ['Berserker', 'Totem', 'Storm Herald', 'Ancestral Guardian', 'Zealot']
    },
    {
        name: 'Bard',
        subclasses: ['Valor', 'Lore', 'Glamour', 'Swords', 'Whispers']
    },
    {
        name: 'Cleric',
        subclasses: ['Knowledge', 'Life', 'Light', 'Nature', 'Tempest', 'Trickery', 'War', 'Forge', 'Grave']
    },
    {
        name: 'Druid',
        subclasses: ['Moon', 'Circle of Land', 'Circle of Dreams', 'Shepherd']
    },
    {
        name: 'Fighter',
        subclasses: ['Champion', 'Battlemaster', 'Eldritch Knight', 'Arcane Archer', 'Cavalier', 'Samurai']
    },
    {
        name: 'Monk',
        subclasses: ['Open Hand', 'Shadow', 'Four Elements', 'Kensei', 'Sun Soul', 'Drunken Master']
    },
    {
        name: 'Paladin',
        subclasses: ['Devotion', 'Ancients', 'Vengeance', 'Conquest', 'Redemption']
    },
    {
        name: 'Ranger',
        subclasses: ['Hunter', 'Beast Master', 'Gloom Stalker', 'Horizon Walker', 'Monster Slayer']
    },
    {
        name: 'Rogue',
        subclasses: ['Thief', 'Assassin', 'Arcane Trickster', 'Inquisitive', 'Mastermind', 'Scout', 'Swashbuckler']
    },
    {
        name: 'Sorcerer',
        subclasses: ['Draconic', 'Wild', 'Divine Soul', 'Storm Sorcery']
    },
    {
        name: 'Warlock',
        subclasses: ['Archfey', 'Fiend', 'Great Old One', 'The Celestial', 'The Hexblade']
    },
    {
        name: 'Wizard',
        subclasses: [
            'Abjuration', 'Conjuration', 'Divination', 'Enchantment', 'Evocation', 'Illusion', 'Necromancy', 'Transmutation', 'War Magic'
        ],
    }
];
