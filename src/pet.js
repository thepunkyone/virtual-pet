/* eslint-disable func-names */
const initialAge = 0;
const maximumLifespan = 30;
const initialHunger = 0;
const starvationLevel = 10;
const maximumFitness = 10;
const insufficientFitness = 0;

function Pet(name) {
  this.name = name;
  this.age = initialAge;
  this.hunger = initialHunger;
  this.fitness = maximumFitness;
}

Pet.prototype = {
  get isAlive() {
    return this.fitness > insufficientFitness && this.hunger < starvationLevel
    && this.age < maximumLifespan;
  },
};

//Alternate version, based on MDN get examples https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

// Object.defineProperties(Pet.prototype, {
//   isAlive: {
//     get: function () {
//       return this.fitness > insufficientFitness && this.hunger < starvationLevel
//       && this.age < maximumLifespan;
//     },
//   },
// });

const checkIfDead = function () {
  if (!this.isAlive) {
    throw new Error('Your pet is no longer alive :(');
  }
};

Pet.prototype.growUp = function () {
  checkIfDead.call(this);
  const hungerIncrement = 5;
  const fitnessDecrement = 3;

  this.age = this.age + 1;
  this.hunger += hungerIncrement;
  this.fitness -= fitnessDecrement;
};

Pet.prototype.walk = function () {
  checkIfDead.call(this);
  const fitnessImprovement = 4;

  if (maximumFitness - this.fitness > fitnessImprovement) {
    this.fitness += fitnessImprovement;
  } else {
    this.fitness = maximumFitness;
  }
};

Pet.prototype.feed = function () {
  checkIfDead.call(this);
  const hungerImprovement = 3;

  if (this.hunger - hungerImprovement >= 0) {
    this.hunger -= hungerImprovement;
  } else {
    this.hunger = initialHunger;
  }
};

Pet.prototype.checkUp = function () {
  checkIfDead.call(this);
  const needsFeeding = 5;
  const needsWalking = 3;

  if (this.hunger >= needsFeeding && this.fitness <= needsWalking) {
    return 'I am hungry AND I need a walk';
  }
  if (this.hunger >= needsFeeding) {
    return 'I am hungry';
  }
  if (this.fitness <= needsWalking) {
    return 'I need a walk';
  }
  return 'I feel great!';
};

module.exports = Pet;
