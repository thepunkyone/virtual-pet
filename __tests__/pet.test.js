// Did some formatting of the tests here, so they look as intended but are also easier to read.
// As mentioned in class, the test coverage here is very good but it's probably overkill
// and over tested in certain areas.
// Jest has the ability to test your coverage. I've added that option to your package.json
// if you run the command "npx jest --coverage" it will run your tests and give you an overview
// of what % your code is covered
// Overall this is very good but you might want to consider testing rogue data a user may enter
// such as 0's and minus numbers

const Pet = require('../src/pet');

describe('Pet constructor', () => {
  let pet;
  beforeEach(() => {
    pet = new Pet('Fido');
  });

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
  it('has an initial fitness level of maximum fitness', () => {
    expect(pet.fitness).toBe(10);
  });

  it('growUp method adds one year to pet\'s age, five points to hunger and removes three points from fitness', () => {
    pet.growUp();
    expect(pet.age).toBe(1);
    expect(pet.hunger).toBe(5);
    expect(pet.fitness).toBe(7);

    pet.growUp();
    expect(pet.age).toBe(2);
    expect(pet.hunger).toBe(10);
    expect(pet.fitness).toBe(4);
  });

  it('walk method adds four points to pet\'s fitness until maximum fitness is achieved', () => {
    pet.fitness = 5;

    pet.walk();
    expect(pet.fitness).toBe(9);

    pet.walk();
    expect(pet.fitness).toBe(10);
  });

  it('feed method decreases pet\'s hunger by three points until a minimum of 0 is achieved', () => {
    pet.hunger = 5;

    pet.feed();
    expect(pet.hunger).toBe(2);

    pet.feed();
    expect(pet.hunger).toBe(0);
  });

  it('checkUp method returns I am hungry if hunger is above optimum levels', () => {
    pet.hunger = 5;
    expect(pet.checkUp()).toBe('I am hungry');
  });
  it('checkUp method returns I need a walk if fitness is below optimum levels', () => {
    pet.fitness = 3;
    expect(pet.checkUp()).toBe('I need a walk');
  });
  it('checkUp method returns I am hungry AND I need a walk if hunger is above and fitness is below optimum levels', () => {
    pet.hunger = 5;
    pet.fitness = 3;
    expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
  });
  it('checkUp method returns I feel great! if hunger and fitness is at optimum levels', () => {
    expect(pet.checkUp()).toBe('I feel great!');
  });

  it('isAlive property has a value of true when a new instance of Pet is created', () => {
    expect(pet.isAlive).toBe(true);
  });
  it('isAlive property has a value of false if pet\'s fitness is insufficient', () => {
    pet.fitness = 0;
    expect(pet.isAlive).toBe(false);
  });
  it('isAlive property has a value of false if pet\'s hunger reaches starvation level', () => {
    pet.hunger = 10;
    expect(pet.isAlive).toBe(false);
  });
  it('isAlive property has a value of false if pet\'s age reaches maximum lifespan', () => {
    pet.age = 30;
    expect(pet.isAlive).toBe(false);
  });

  it('calling growUp, walk or feed methods throws an error if pet\'s fitness is insufficient', () => {
    pet.fitness = 0;
    expect(() => pet.growUp()).toThrowError('Your pet is no longer alive :(');
    expect(() => pet.walk()).toThrowError('Your pet is no longer alive :(');
    expect(() => pet.feed()).toThrowError('Your pet is no longer alive :(');
  });

  it('calling growUp, walk or feed methods throws an error if pet\'s hunger reaches starvation level', () => {
    pet.hunger = 10;
    expect(() => pet.growUp()).toThrowError('Your pet is no longer alive :(');
    expect(() => pet.walk()).toThrowError('Your pet is no longer alive :(');
    expect(() => pet.feed()).toThrowError('Your pet is no longer alive :(');
  });

  it('calling growUp, walk or feed methods throws an error if pet\'s age reaches maximum lifespan', () => {
    pet.age = 30;
    expect(pet.growUp).toThrowError('Your pet is no longer alive :(');
    expect(pet.walk).toThrowError('Your pet is no longer alive :(');
    expect(pet.feed).toThrowError('Your pet is no longer alive :(');
  });

  it('adoptChild method ads the child object to Pet instance\'s children array', () => {
    const parent = new Pet('Dave');
    const child = new Pet('Amelia');
    parent.adoptChild(child);

    expect(parent.children).toEqual([{
      name: 'Amelia',
      age: 0,
      hunger: 0,
      fitness: 10,
      children: [],
    }]);
  });

  it('haveBaby method ads the child object to Pet instance\'s children array', () => {
    const parent = new Pet('Dave');
    parent.haveBaby('Billy');
    expect(parent.children).toEqual([{
      name: 'Billy',
      age: 0,
      hunger: 0,
      fitness: 10,
      children: [],
    }]);
  });
});
