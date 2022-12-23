require('dotenv').config();
require('./database');

const Games = require('../models/Games');



(async function() {
    await Games.deleteMany({});
    const items = await Games.create([
        
        {title:"apex" , price:20 , description:"Battle through Daily and Weekly Challenges to earn unique rewards like Apex Packs, XP Boosts, and skins. Skin Radical Action available at level 25. "  , genre:"Shooting"  , platform:"Xbox One"  ,clearance:false   , img:"https://i.imgur.com/EifSQsJ.jpg"  },
        {title: "matrix", price:2 , description: "Enter the Matrix is a 2003 action-adventure video game developed by Shiny Entertainment and published by Infogrames under the Atari brand name. It was the first game based on The Matrix film series." , genre:"Shooting"  , platform: "Playstation 2" ,clearance: true  , img:"https://i.imgur.com/fLtbM7e.png"  },
        {title:"Pokemon" , price:60 , description: "et ready for a new kind of grand, Pokémon adventure in Pokémon Legends: Arceus, a brand new game from Game Freak that blends action and exploration with the RPG roots of the Pokémon series. Explore natural expanses to catch Pokémon by learning their behavior, sneaking up, and throwing a well-aimed Poké Ball." , genre:"RPG"  , platform:"Nintendo Switch" ,clearance:false  , img:"https://i.imgur.com/uv04yQp.png" },
        {title:"God Of War" , price:25 , description:"Set in the realm of brutal Greek mythology, God of War III Remastered is the critically acclaimed single-player game that allows players to take on the fearless role of the ex-Spartan warrior, Kratos, as he rises from the darkest depths of Hades to scale the very heights of Mount Olympus to seek his bloody revenge."  , genre:"RPG / Fighting"  , platform: "Playstation 4" ,clearance:true   , img: "https://i.imgur.com/kHHsGdx.png" },
        {title: "Super Mario World", price:40 , description:"Super mario world consists of a plumber fighting Boswer minions to rescue a princess" , genre:"RPG"  , platform:'Super Nintendo'  ,clearance:true  , img:"https://i.imgur.com/KGwKLNq.png"  },
        {title:"Assasins Creed 2" , price:25 , description:" tells the story of Desmond Miles, who is tossed into a historical conflict between Assassins and Templars. Desmond's story takes place in modern times, where he must use a machine called an Animus to relive the memories of his ancestor Ezio Auditore"  , genre: "RPG" , platform:'Playstation 3'  ,clearance: false  , img: "https://i.imgur.com/85FkpaP.png" },
        {title:"MineCraft" , price:20 , description: "Explore randomly generated worlds and build amazing things from the simplest of homes to the grandest of castles. Play in creative mode with unlimited resources or mine deep into the world in survival mode, crafting weapons and armor to fend off the dangerous mobs. Scale craggy mountains, unearth elaborate caves and mine large ore veins." , genre:"RPG"  , platform: "Xbox One" ,clearance: true  , img:"https://i.imgur.com/qwqsPIO.png"},
        {title: "Resident Evil 2", price:35 , description:"n Resident Evil 2, the classic action, tense exploration, and puzzle solving gameplay that defined the Resident Evil series returns. Players join rookie police officer Leon Kennedy and college student Claire Redfield, who are thrust together by a disastrous outbreak in Raccoon City that transformed its population into deadly zombies. "  , genre:"Horror" , platform:"Xbox One"  ,clearance: true  , img:"https://i.imgur.com/7YdSVVU.png" },
        {title:"Resident Evil 4" , price:45 , description:"Resident Evil™ 4 joins Leon S. Kennedy six years after his hellish experiences in the biological disaster of Raccoon City. His unmatched resolve caused him to be recruited as an agent reporting directly to the president of the United States. With the experience of multiple missions on his back, Leon is dispatched to rescue the presidents recently kidnapped daughter"  , genre:"Horror"  , platform:"Playstation 4"  ,clearance:false   , img: "https://i.imgur.com/l2VE1zd.png" },
        {title:"Resident Evil 5" , price:30, description:"From the ashes of old conflicts, a new terror arises. The Umbrella Corporation and its crop of lethal viruses have been destroyed and contained. But a new, more dangerous threat has emerged. Years after surviving the events in Raccoon City, Chris Redfield has been fighting the scourge of bio-organic weapons all over the world."  , genre:"Horror"  , platform: "Playstation 4" ,clearance:true  , img: "https://i.imgur.com/jqESUAz.png" },
        {title:"Zelda Breath Of The Wild" , price:60 , description:"Forget everything you know about The Legend of Zelda games. Step into a world of discovery, exploration, and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series. Travel across vast fields, through forests, and to mountain peaks as you discover what has become of the kingdom of Hyrule in this stunning Open-Air Adventure."  , genre:"RPG"  , platform:"Nintendo Switch"  ,clearance:false   , img: "https://i.imgur.com/lZkVOwu.png"}

   
])

console.log(items)

process.exit();

})();


 ///DELETE ALL POSTS
 



