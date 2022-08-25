/*function Switch(energy){
  this.switchOn = 'включен',
  this.switchOff = 'выключен'
  this.getEnergy = function() {
    console.log(`Потреблено энергии ${energy}КВт`)
  }
}

const lamp = new Switch(24);

lamp.getEnergy()

const laptop = new Switch(138);

laptop.getEnergy()*/


class Electric {
    constructor(energy) {
      this.energy = energy;
      this.deviceOne = 'lamp';
      this.deviceTwo = 'laptop';
    }
    
    getInfo(){
      console.log(`Потреблено энергии ${this.energy} КВт`)
    }
  }
  
  class Switch extends Electric {
    constructor(condition, deviceName, energy) {
      super(energy);
      this.condition = condition;
      this.deviceName = deviceName;
    }
    getInfo() {
      return `${this.deviceName} ${this.condition} и потребляет ${this.energy}Квт энергии.`
    }
  }
  
  const laptop = new Switch('включен', 'ноутбук', 50)
  laptop.getInfo()