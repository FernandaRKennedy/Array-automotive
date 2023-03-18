//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

class Car extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage,maximumPassengers, pasager, numberOfWheels,maximumSpeed, fuel, scheduleService){
        super(make, model, year, color, mileage)
        this.maximumPassengers = maximumPassengers;
        this.passenger = pasager;
        this.numberOfWheels = numberOfWheels;
        this.maximumSpeed = maximumSpeed;
        this.fuel = fuel;
        this.scheduleService = scheduleService;
    }
    loadPassenger(num){
        if (this.passenger < this.maxPassengers) {
         if((num + `${this.passenger}`) <= `${this.maximumPassengers}`)
          this.passenger = num;
          return this.passenger;
       }else{
         console.log(`${this.model} is full`);
       }

    }
     start() {
       if(this.fuel > 0){
       console.log("Car has started");
       return this.started = true;
     }else{
      console.log("no fuel");
      return this.started = false;
     }
     }
    
    newService(){
      if(this.mileage > 30000){
          this.scheduleService = false;
          console.log("service needed")
        return this.scheduleService;
        } 
}
}
//this shows how to call from this module...
 let mycar = new Car("Mecury", "Sedan", "1965", "Black", 40010, 5, 0, 4, 160, 10 );
 mycar.start();
 mycar.loadPassenger(0);
 mycar.stop();
 mycar.newService();
 console.log(mycar)
 const mycar1 = new Car("audi")
 console.log(mycar1)

