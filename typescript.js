var Engine = /** @class */ (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    Engine.prototype.start = function (callback) {
        var _this = this;
        window.setTimeout(function () {
            callback(true, _this.engineType);
        }, 1000);
    };
    Engine.prototype.stop = function (callback) {
        var _this = this;
        window.setTimeout(function () {
            callback(true, _this.engineType);
        }, 1000);
    };
    return Engine;
}());
var CustomEngine = /** @class */ (function () {
    function CustomEngine() {
    }
    CustomEngine.prototype.start = function (callback) {
        window.setTimeout(function () {
            callback(true, 'Custom Engine');
        }, 1000);
    };
    CustomEngine.prototype.stop = function (callback) {
        window.setTimeout(function () {
            callback(true, 'Custom Engine');
        }, 1000);
    };
    return CustomEngine;
}());
var Accessory = /** @class */ (function () {
    function Accessory(accessoryNumber, title) {
        this.accessoryNumber = accessoryNumber;
        this.title = title;
    }
    return Accessory;
}());
var Auto = /** @class */ (function () {
    function Auto(basePrice, engine, make, model, state, year) {
        this._engine = engine;
        this._basePrice = basePrice;
        this.make = make;
        this.model = model;
        this.year = year;
        this.state = state;
    }
    Auto.prototype.calculateTotal = function () {
        var taxRate = .08;
        return this._basePrice + (taxRate * this._basePrice);
    };
    Auto.prototype.addAccessories = function () {
        var accessories = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            accessories[_i] = arguments[_i];
        }
        this.accessoryList = '';
        for (var i = 0; i < accessories.length; i++) {
            var ac = accessories[i];
            this.accessoryList += ac.accessoryNumber + ' ' + ac.title + '<br />';
        }
    };
    Auto.prototype.getAccessoryList = function () {
        return this.accessoryList;
    };
    Object.defineProperty(Auto.prototype, "basePrice", {
        get: function () {
            return this.basePrice;
        },
        set: function (value) {
            if (value <= 0)
                throw 'price must be >= 0';
            this._basePrice = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Auto.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value === undefined)
                throw 'Please supply an engine.';
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    return Auto;
}());
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
    var myEngine = auto.engine;
    alert(myEngine.horsePower.toString);
};
//# sourceMappingURL=typescript.js.map