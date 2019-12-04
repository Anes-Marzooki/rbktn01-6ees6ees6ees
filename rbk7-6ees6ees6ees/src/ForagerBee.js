/*
the Bee superclass
 an age property that is set to 10
 a job property that is set to find pollen
 a color property inherited from bee that is set to yellow
 a food property that is inherited from grub
 an eat method that is inherited from grub
 a canFly property that is set true
 a treasureChest property that is set to an empty array []
 a forage method that allows the bee to add a treasure to the treasureChest
*/

class ForagerBee extends Bee {
  
  constructor(age = 10, job = "find pollen", canFly = true) {
  	super();
  	this.age = age;
  	this.job = job;
  	this.canFly = canFly;
  	this.treasureChest = [];
  }

  forage(treasure) {
  	this.treasureChest.push(treasure);
  }
};
