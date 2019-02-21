const Pet = require('../src/pet');

describe('Pet constructor', () => {
    const pet = new Pet('Fido');
    it('returns an object', () => {
      expect(new Pet()).toBeInstanceOf(Object);
    });
    it('check that an instance of Pet with a name property has been created', () => {
        expect(pet.name).toBe('Fido');
    });
    it('has a initial age of 0', () => {
        expect(pet.age).toBe(0);
    });
    it ('growUp method adds one year to pet\'s age', () => {
        pet.growUp();
        expect(pet.age).toBe(1);
    });
});
