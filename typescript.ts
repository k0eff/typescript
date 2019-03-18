interface IEngine {
    start(callback: (startStatus: boolean, engineType: string) => void): void;
    stop(callback: (stopStatus: boolean, engineType: string) => void): void;
}



class Engine implements IEngine {

    constructor(public horsePower: number, public engineType: string) { }


    start(callback: (startStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }



    stop(callback: (stopStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }

}


class CustomEngine implements IEngine {

    start(callback: (startStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, 'Custom Engine');
        }, 1000);
    }


    stop(callback: (stopStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, 'Custom Engine');
        }, 1000);
    }
}



class Accessory {
    constructor(public accessoryNumber: number, public title: string) { }

}

class Auto {
    private _basePrice: number;
    private _engine: IEngine;
    make: string;
    model: string;
    accessoryList: string;
    state: string;
    year: number;



    constructor(
        basePrice: number,
        engine: IEngine,
        make: string,
        model: string,
        state: string,
        year: number
    ) {

            this._engine = engine;
            this._basePrice = basePrice;
            this.make = make;
            this.model = model;
            this.year = year;
            this.state = state;

    }

    calculateTotal(): number {
        var taxRate = .08;
        return this._basePrice + (taxRate * this._basePrice);
    }

    addAccessories(...accessories: Accessory[]) {
        this.accessoryList = '';
        for (var i = 0; i < accessories.length; i++) {
            var ac = accessories[i];
            this.accessoryList += ac.accessoryNumber + ' ' + ac.title + '<br />';
        }
    }

    getAccessoryList(): string {
        return this.accessoryList;

    }

    get basePrice() {
        return this.basePrice;
    }


    set basePrice(value: number)  {
        if (value <= 0) throw 'price must be >= 0';
        this._basePrice = value;
    }

    get engine(): IEngine {
        return this._engine;
    }

    set engine(value: IEngine) {
        if (value === undefined) throw 'Please supply an engine.';
        this._engine = value;
    }



}

//class Truck extends Auto {
//    bedLength: string;
//    fourByFour: boolean;

//    constructor(basePrice: number, engine: Engine, make: string, model: string, bedLength: string, fourByFour: boolean) {
//        super(basePrice, engine, make, model);
//        this.bedLength = bedLength;
//        this.fourByFour = fourByFour;
//    }

//}




window.onload = function () {
    //var truck = new Truck(40000, new Engine(300, 'v12'), 'Chevy', 'Silverado',
    //    'Long Bed', true);
    //alert(truck.engine.enginetype);
    //alert(truck.bedlength);
    //alert(truck.calculatetotal().tostring());

    //truck.addAccessories(new Accessory(1234, 'Sunroof'), new Accessory(4321, 'Towing package'));

    //truck.engine.start( /*defining a new function here*/(status: boolean, engineType: string) => {
    //    alert(engineType + ' was started');
    //});


    var auto = new Auto(40000, new Engine(250, 'Type'), 'Make', 'Model', 'Good', 2012);
    var myEngine = <Engine>auto.engine;
    alert(myEngine.horsePower.toString);


}
