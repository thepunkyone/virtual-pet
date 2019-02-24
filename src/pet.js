const initialAge = 0;
const initialHunger = 0;
const initialFitness = 10;

function Pet(name) {
    this.name = name;
    this.age = initialAge;
    this.hunger = initialHunger;
    this.fitness = initialFitness;
};

Pet.prototype.growUp = function() {
    const hungerIncrement = 5;
    const fitnessDecrement = 3;

   this.age ++; 
   this.hunger += hungerIncrement;
   this.fitness -= fitnessDecrement;
}

Pet.prototype.walk = function() {
    const maximumFitness = 10;
    const currentFitness = this.fitness;
    const fitnessImprovement = 4;
    if (maximumFitness - currentFitness > fitnessImprovement) {
        this.fitness += fitnessImprovement;
    }
    else {
        this.fitness = maximumFitness;
    }
}

module.exports = Pet;