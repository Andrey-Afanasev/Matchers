import {life} from '../js/app.js';

test('basic test', () => {
    let characters = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
      ];

      const result = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
      ];
      
    expect(life(characters)).toEqual(result)

})