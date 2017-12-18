import { CharacterClass } from './character-class';
export const CHAR_CLASSES: CharacterClass[] = [
    {
        name: 'Barbarian',
        subclasses: ['Berserker', 'Totem', 'Storm Herald', 'Ancestral Guardian', 'Zealot'],
        reasons: [
            'My devotion to my people lifted me in battle, making me powerful and dangerous.',
            'The spirits of my ancestors called on me to carry out a great task.',
            'I lost control in battle one day, and it was as if something else was manipulating my body, ' +
                'forcing it to kill every foe I could reach.',
            'i went on a spiritual journey to find myselfand instead found a spirit animal to guide, protect, and inspire me.',
            'I was struck by lightning and lived. Afterward, I found a new strength within me that let me push beyond my limitations.',
            'My anger needed to be channeled into battle, or i risked becoming an indiscriminate killer.',
        ],
    },
    {
        name: 'Bard',
        subclasses: ['Valor', 'Lore', 'Glamour', 'Swords', 'Whispers'],
        reasons: [
            'I awakened my latent bardic abilities through trial and error.',
            'I was a gifted performer and attracted the attention of a master bard who schooled me in the old techniques.',
            'I joined a loose society of scholars and orators to learn new techniques of performance and magic.',
            'i felt a calling to recount the deeds of champions and heroes, to bring them alive in song and story.',
            'I joined one ofthe great colleges to learn old lore, the secrets of magic, and the art ofperformance.',
            'I picked up a musical instrument one day and instantly discovered that I could play it.',
        ],
    },
    {
        name: 'Cleric',
        subclasses: ['Knowledge', 'Life', 'Light', 'Nature', 'Tempest', 'Trickery', 'War', 'Forge', 'Grave'],
        reasons: [
            'A supernatural being in service to the gods called me to become a divine agent in the world.',
            'I saw the injustice and horror in the world and felt moved to take a stand against them.',
            'My god gave me an unmistakable sign. i dropped everything to serve the divine.',
            'Although I was always devout, it wasn\'t until I completed a pilgrimage that I knew my true calling.',
            'I used to serve in my religion\'s bureaucracy but found I needed to work in the world, ' +
                'to bring the message of my faith to the darkest corners oftheland.',
            'I realize that my god works through me, and I do as commanded, even though I don’t know why I was chosen to serve.',
        ],
    },
    {
        name: 'Druid',
        subclasses: ['Moon', 'Circle of Land', 'Circle of Dreams', 'Shepherd'],
        reasons: [
            'I saw too much devastation in the wild places, too much of nature’s splendor ruined by the despoilers.' +
                'I joined a circle of druids to fight back against the enemies of nature.',
            'I found a place among a group of druids after I fled a catastrophe.',
            'I have always had an affinity for animals, so I explored my talent to see how I could best use it.',
            'I befriended a druid and was moved by druidic teachings. I decided to follow my friend\'s guidance ' +
                'and give something back to the world.',
            'Whiie l was growing up, I saw spirits all around me—entities no one else could perceive. ' +
                'I sought out the druids to help me understand the visions and communicate with these beings.',
            'I have always felt disgust for creatures of unnatural origin. For this reason, I immersed myself ' +
                'in the study ofthe druidic mysteries and became a champion of the natural order.',
        ],
    },
    {
        name: 'Fighter',
        subclasses: ['Champion', 'Battlemaster', 'Eldritch Knight', 'Arcane Archer', 'Cavalier', 'Samurai'],
        reasons: [
            'I wanted to hone my combat skills, and so I joined a war college.',
            'I squired for a knight who taught me how to fight, care for a steed, and conduct myself with honor. ' +
                'I decided to take up that path for myself.',
            'Horrible monsters descended on my community, killing someone I loved. I took up arms to destroy those ' +
                'creatures and others ofa similar nature.',
            'I joined the army and learned how to fight as part ofa group.',
            'I grew up fighting, and I refined my talents by defending myself against people who crossed me.',
            '1 could always pick up just about any weapon and know how to use it effectively.',
        ],
    },
    {
        name: 'Monk',
        subclasses: ['Open Hand', 'Shadow', 'Four Elements', 'Kensei', 'Sun Soul', 'Drunken Master'],
        reasons: [
            'I was chosen to study at a secluded monastery. There, I was taught the fundamental techniques ' +
                'required to eventually master a tradition.',
            'I sought instruction to gain a deeper understanding‘ of existence and my place in the world.',
            'I stumbled into a portal to the Shadowfell and took refuge in a strange monastery, ' +
                'where I learned how to defend myselfagainst the forces ofdarkness.',
            'I was overwhelmed with grief after losing someone close to me, and I sought the advice of ' +
                'philosophers to help me cope with my loss.',
            'I could feel that a special sort of power lay within me, so I sought out those who could help me call it forth and master it.',
            'I was wild and undisciplined as a youngster, but then I realized the error of my ways. I applied to a monastery and ' +
                'became a monk as a way to live a life of discipline.',
        ],
    },
    {
        name: 'Paladin',
        subclasses: ['Devotion', 'Ancients', 'Vengeance', 'Conquest', 'Redemption'],
        reasons: [
            'A fantastical being appeared before me and called on me to undertake a holy quest.',
            'One of my ancestors left a holy quest unfulfilled, so I intend to finish that work.',
            'The world is a dark and terrible place. I decided to serve as a beacon of light shining out against the gathering shadows.',
            'l served as a paladin’s squire, learning all I needed to swear my own sacred oath.',
            'Evil must be opposed on all fronts. I feel compelled to seek out wickedness and purge it from the world.',
            'Becoming a paladin was a natural consequence of my unwavering faith. In taking my vows, I became the holy ' +
                'sword of my religion.',
        ],
    },
    {
        name: 'Ranger',
        subclasses: ['Hunter', 'Beast Master', 'Gloom Stalker', 'Horizon Walker', 'Monster Slayer'],
        reasons: [
            'I found purpose while I honed my hunting skills by bringing down dangerous animals at the edge of civilization.',
            'I always had a way with animals, able to calm them with a soothing word and a touch.',
            'I suffer from terrible wanderlust, so being a ranger gave me a reason not to remain in one place for toolong.',
            'I have seen what happens when the monsters come out from the dark. I took it upon myself to become the first ' +
                'line of defense against the evils that lie beyond civilization\'s borders.',
            'I met a grizzled ranger who taught me woodcraft and the secrets ofthe wild lands.',
            'I served in an army, learning the precepts of my profession while blazing trails and scouting enemy encampments.',
        ],
    },
    {
        name: 'Rogue',
        subclasses: ['Thief', 'Assassin', 'Arcane Trickster', 'Inquisitive', 'Mastermind', 'Scout', 'Swashbuckler'],
        reasons: [
            'I\'ve always been nimble and quick ofwit, so I decided to use those talents to help me make my way in the world.',
            'An assassin or a thief wronged me, so I focused my training on mastering the skills of my enemy to better combat ' +
                'foes of that sort.',
            'An experienced rogue saw something in me and taught me several useful tricks.',
            'I decided to turn my natural lucky streak into the basis ofa career, though I still realize that improving my ' +
                'skills is essential.',
            'I took up with a group of ruffians who showed me how to get what I want through sneakiness rather than direct confrontation.',
            'I’m a sucker for a shiny bauble or a sack of coins, as long as I can get my hands on it without risking life and limb.',
        ],
    },
    {
        name: 'Sorcerer',
        subclasses: ['Draconic', 'Wild', 'Divine Soul', 'Storm Sorcery'],
        reasons: [
            'When I was born, all the water in the house froze solid. the milk spoiled, or all the iron turned to copper. My family is ' +
                'convinced that this event was a harbinger of stranger things to come for me.',
            'I suffered a terrible emotional or physical strain, which brought forth my latent magical power. I have fought to control ' +
                'it ever since.',
            'My immediate family never spoke of my ancestors, and when I asked, they would change the subject. It wasn\'t until I ' +
                'started displaying strange talents that the full truth of my heritage came out.',
            'When a monster threatened one of my friends, I became filled with anxiety. I lashed out instinctively and blasted the ' +
                'wretched thing with a force that came from within me.',
            'Sensing something special in me, a stranger taught me how to control my gift.',
            'After I escaped from a magical conflagration, I realized that though I was unharmed, I was not unchanged. I began to ' +
                'exhibit unusual abilities that I am just beginning to understand.',
        ],
    },
    {
        name: 'Warlock',
        subclasses: ['Archfey', 'Fiend', 'Great Old One', 'The Celestial', 'The Hexblade'],
        reasons: [
            'While wandering around in a forbidden place, I encountered an otherworldly being that offered to enter into a pact with me.',
            'I was examining a strange tome I found in an abandoned library when the entity that would become my patron suddenly ' +
                'appeared before me.',
            'I stumbled into the clutches of my patron after I accidentally stepped through a magical doorway.',
            'When I was faced with a terrible crisis, I prayed to any being who would listen, and the creature that answered ' +
                'became my patron.',
            'My future patron visited me in my dreams and offered great power in exchange for my service.',
            'One of my ancestors had a pact with my patron, so that entity was determined to bind me to the same agreement.',
        ],
    },
    {
        name: 'Wizard',
        subclasses: [
            'Abjuration', 'Conjuration', 'Divination', 'Enchantment', 'Evocation', 'Illusion', 'Necromancy', 'Transmutation', 'War Magic'],
        reasons: [
            'An old wizard chose me from among several candidates to serve an apprenticeship.',
            'When I became lost in a forest, a hedge wizard found me, took me in, and taught me the rudiments of magic.',
            'I grew up listening to tales of great wizards and knew I wanted to follow their path. I strove to be accepted at an ' +
                'academy of magic and succeeded.',
            'One of my relatives was an accomplished wizard who decided l was smart enough to learn the craft.',
            'While exploring an old tomb, library, or temple, I found a spellbook. I was immediately driven to learn all I could ' +
                'about becoming a wizard.',
            'I was a prodigy who demonstrated mastery of the arcane arts at an early age. When I became old enough to set out on ' +
                'my own, I did so to learn more magic and expand my power.',
        ],
    }
];
