const Pet = require('../src/pet');

describe('Pet constructor', () => {
    it('returns an object', () => {
      expect(new Pet()).toBeInstanceOf(Object);
    });
    it('check that an instance of Pet with a name property has been created', () => {
        const pet = new Pet('Fido');
        expect(pet).toEqual({
            name: 'Fido'
        });
    });
});
