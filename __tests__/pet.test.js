const Pet = require('../src/pet');

describe('Pet constructor', () => {
    pet = new Pet('Fido');

    it('returns an object', () => {
      expect(pet).toBeInstanceOf(Object);
    });
    it('check that an instance of Pet with a name property and value has been created', () => {
        expect(pet.name).toBe('Fido');
    });
    it('has an initial age of 0', () => {
        expect(pet.age).toBe(0);
    });
    it('has an initial hunger level of 0', () => {
        expect(pet.hunger).toBe(0);
    });
    it('has an initial fitness level of 10', () => {
        expect(pet.fitness).toBe(10);
    });
    it ('growUp method adds one year to pet\'s age, five points to hunger and removes three points from fitness', () => {
        pet.growUp();
        expect(pet.age).toBe(1);
        expect(pet.hunger).toBe(5);
        expect(pet.fitness).toBe(7);

        pet.growUp();
        expect(pet.age).toBe(2);
        expect(pet.hunger).toBe(10);
        expect(pet.fitness).toBe(4);
    });
    it ('walk method adds four points to pet\'s fitness until a maximum of 10 points is achieved', () => {
        pet.fitness = 5;

        pet.walk();
        expect(pet.fitness).toBe(9);

        pet.walk();
        expect(pet.fitness).toBe(10);
    });
});
