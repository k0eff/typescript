var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    function Auto(options) {
        this._engine = options.engine;
        this._basePrice = options.basePrice;
        this.make = options.make;
        this.model = options.model;
        this.year = options.year;
        this.state = options.state;
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
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(options) {
        var _this = _super.call(this, options) || this;
        _this.bedLength = options.bedLength;
        _this.fourByFour = options.fourByFour;
        return _this;
    }
    return Truck;
}(Auto));
window.onload = function () {
    //var truck = new Truck(40000, new Engine(300, 'v12'), 'Chevy', 'Silverado',
    //    'Long Bed', true);
    //alert(truck.engine.enginetype);
    //alert(truck.bedlength);
    //alert(truck.calculatetotal().tostring());
    //truck.addAccessories(new Accessory(1234, 'Sunroof'), new Accessory(4321, 'Towing package'));
    //truck.engine.start( /*defining a new function here*/ (status: boolean, engineType: string) => {
    //    alert(engineType + ' was started');
    //});
    //var auto = new Auto(40000, new Engine(250, 'Type'), 'Make', 'Model', 'Good', 2012);
    //var myEngine = <Engine>auto.engine;
    //alert(myEngine.horsePower.toString);
    var truck = new Truck({
        basePrice: 40000,
        engine: new Engine(300, 'V8'),
        state: 'New',
        make: 'Ford',
        model: 'F-150',
        year: 2010,
        bedLength: 'big',
        fourByFour: true
    });
    alert(truck.fourByFour);
};
//# sourceMappingURL=typescript.js.map