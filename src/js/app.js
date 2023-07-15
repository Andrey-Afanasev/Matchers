let characters = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];

export function life(characters) {
    return characters.sort((a, b) => b.health - a.health);
};
