const initialAge = 0;
const initialHunger = 0;
const maximumFitness = 10;

function Pet(name) {
    this.name = name;
    this.age = initialAge;
    this.hunger = initialHunger;
    this.fitness = maximumFitness;
};

Pet.prototype.growUp = function() {
    const hungerIncrement = 5;
    const fitnessDecrement = 3;

   this.age ++; 
   this.hunger += hungerIncrement;
   this.fitness -= fitnessDecrement;
}

Pet.prototype.walk = function() {
    const currentFitness = this.fitness;
    const fitnessImprovement = 4;
    if (maximumFitness - currentFitness > fitnessImprovement) {
        this.fitness += fitnessImprovement;
    }
    else {
        this.fitness = maximumFitness;
    }
}

Pet.prototype.feed = function() {
    const currentHunger = this.hunger;
    const hungerImprovement = 3;
    if (currentHunger - hungerImprovement >= 0) {
        this.hunger -= hungerImprovement;
    }
    else {
        this.hunger = initialHunger;
    }
}

module.exports = Pet;