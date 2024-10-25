const taskFirst = require('./0-constants.js')

test('varaibles initialised with const', () => {
	expect(taskFirst()).toBe('I prefer const when I can.');
})

const getLast = require('./0-constants.js'); 

test('returns correct string', () => {
    expect(getLast()).toBe(' is okay');
});

const taskNext = require('./0-constants.js'); 

test('returns correct concatenated string', () => {
    expect(taskNext()).toBe('But sometimes let is okay');
});

