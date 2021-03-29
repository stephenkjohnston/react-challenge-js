const express = require("express");

const app = express();

app.get('/api/v1/movies', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify([
        {
            title: 'The Phantom Menace',
            description: 'Jedi Knights Obi-Wan Kenobi and Qui-Gon Jinn rescue Queen Amidala, ruler of a peaceful planet invaded by dark forces. During their escape, they discover nine-year-old Anakin Skywalker, a child prodigy who is unusually strong in the Force.',
            episode_id: 1,
            release_year: "1999"
        },
        {
            title: 'Attack of the Clones',
            description: 'When Jedi apprentice Anakin Skywalker is assigned to protect Senator Padmé Amidala, he discovers his love for her…and his own darker side. Obi-Wan Kenobi uncovers a secret clone army as the galaxy marches toward full-scale war.',
            episode_id: 2,
            release_year: "2002"
        },
        {
            title: 'Revenge of the Sith',
            description: 'Clone Wars rage across the galaxy. A sinister Sith Lord seizes control of the Republic and corrupts Anakin Skywalker to be his dark apprentice, Darth Vader. Now, in an epic lightsaber duel, Jedi Obi-Wan Kenobi must confront his fallen friend.',
            episode_id: 3,
            release_year: "2005"
        },
        {
            title: 'A New Hope',
            description: 'Young farm boy Luke Skywalker is thrust into a galaxy of adventure when he intercepts a distress call from the captive Princess Leia. The event launches him on a daring mission to rescue her from the clutches of Darth Vader and the evil Empire.',
            episode_id: 4,
            release_year: "1977"
        },
        {
            title: 'The Empire Strikes Back',
            description: 'The Rebels scatter after the Empire attacks their base on the ice planet Hoth. Han Solo and Princess Leia are pursued by Imperials, while Luke trains with Jedi Master Yoda. But when Luke battles Darth Vader, he  learns the shocking truth of his past.',
            episode_id: 5,
            release_year: "1980"
        },
        {
            title: 'Return of the Jedi',
            description: 'When the Empire prepares to crush the Rebellion with a more powerful Death Star, the Rebel fleet counters with a massive attack on the space station. In a final climactic duel, Luke Skywalker confronts Darth Vader.',
            episode_id: 6,
            release_year: "1983"
        },
        {
            title: 'The Force Awakens',
            description: 'As a new threat to the galaxy rises, Rey, a desert scavenger, and Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to search for the one hope of restoring peace. Experience the motion picture event of a generation in Star Wars: The Force Awakens.',
            episode_id: 7,
            release_year: "2015"
        }
        ,        {
            title: 'The Last Jedi',
            description: 'The Star Wars saga continues as new heroes and galactic legends go on an epic adventure, unlocking mysteries of the Force and shocking revelations of the past.',
            episode_id: 8,
            release_year: "2017"
        },
        {
            title: 'The Rise of Skywalker',
            description: 'The riveting conclusion of the landmark Skywalker saga, new legends will be born—and the final battle for freedom is yet to come.',
            episode_id: 9,
            release_year: "2019"
        },
    ]));
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);