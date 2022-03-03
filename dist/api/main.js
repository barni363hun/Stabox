/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../apps/api/src/Entities/address.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addressEntity = void 0;
const tslib_1 = __webpack_require__("tslib");
const typeorm_1 = __webpack_require__("typeorm");
const _1 = __webpack_require__("../../apps/api/src/Entities/index.ts");
const reciever_entity_1 = __webpack_require__("../../apps/api/src/Entities/reciever.entity.ts");
let addressEntity = class addressEntity {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, tslib_1.__metadata)("design:type", Number)
], addressEntity.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], addressEntity.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToOne)(() => _1.userEntity, (user) => user.addresses),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof _1.userEntity !== "undefined" && _1.userEntity) === "function" ? _a : Object)
], addressEntity.prototype, "user", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], addressEntity.prototype, "country", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", Number)
], addressEntity.prototype, "zipCode", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], addressEntity.prototype, "cityName", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], addressEntity.prototype, "street", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], addressEntity.prototype, "houseNumber", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], addressEntity.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ default: false }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], addressEntity.prototype, "isDeleted", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(() => reciever_entity_1.recieverEntity, (reciever) => reciever.address),
    (0, tslib_1.__metadata)("design:type", Array)
], addressEntity.prototype, "recievers", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(() => _1.exchangeDateEntity, (exchangeDate) => exchangeDate.address),
    (0, tslib_1.__metadata)("design:type", Array)
], addressEntity.prototype, "exchangeDates", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(() => _1.packageEntity, (package_) => package_.fromAddress) // "package" is a reserved word for js
    ,
    (0, tslib_1.__metadata)("design:type", Array)
], addressEntity.prototype, "packages", void 0);
addressEntity = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], addressEntity);
exports.addressEntity = addressEntity;


/***/ }),

/***/ "../../apps/api/src/Entities/exchangeDate.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.exchangeDateEntity = void 0;
const tslib_1 = __webpack_require__("tslib");
const typeorm_1 = __webpack_require__("typeorm");
const _1 = __webpack_require__("../../apps/api/src/Entities/index.ts");
let exchangeDateEntity = class exchangeDateEntity {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, tslib_1.__metadata)("design:type", Number)
], exchangeDateEntity.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", Object)
], exchangeDateEntity.prototype, "addressId", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToOne)(() => _1.addressEntity, (address) => address),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof _1.addressEntity !== "undefined" && _1.addressEntity) === "function" ? _a : Object)
], exchangeDateEntity.prototype, "address", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], exchangeDateEntity.prototype, "startDate", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], exchangeDateEntity.prototype, "endDate", void 0);
exchangeDateEntity = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], exchangeDateEntity);
exports.exchangeDateEntity = exchangeDateEntity;


/***/ }),

/***/ "../../apps/api/src/Entities/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
(0, tslib_1.__exportStar)(__webpack_require__("../../apps/api/src/Entities/package.entity.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("../../apps/api/src/Entities/vehicle.entity.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("../../apps/api/src/Entities/transaction.entity.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("../../apps/api/src/Entities/user.entity.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("../../apps/api/src/Entities/address.entity.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("../../apps/api/src/Entities/exchangeDate.entity.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("../../apps/api/src/Entities/reciever.entity.ts"), exports);


/***/ }),

/***/ "../../apps/api/src/Entities/package.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.packageEntity = void 0;
const tslib_1 = __webpack_require__("tslib");
const typeorm_1 = __webpack_require__("typeorm");
const _1 = __webpack_require__("../../apps/api/src/Entities/index.ts");
const reciever_entity_1 = __webpack_require__("../../apps/api/src/Entities/reciever.entity.ts");
let packageEntity = class packageEntity {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, tslib_1.__metadata)("design:type", Number)
], packageEntity.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], packageEntity.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], packageEntity.prototype, "vehicleId", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToOne)(() => _1.vehicleEntity, (vehicle) => vehicle.id),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof _1.vehicleEntity !== "undefined" && _1.vehicleEntity) === "function" ? _a : Object)
], packageEntity.prototype, "vehicle", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToOne)(() => _1.userEntity, (user) => user.packages),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof _1.userEntity !== "undefined" && _1.userEntity) === "function" ? _b : Object)
], packageEntity.prototype, "user", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", Number)
], packageEntity.prototype, "recieverId", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToOne)(() => reciever_entity_1.recieverEntity, (reciever) => reciever.package),
    (0, tslib_1.__metadata)("design:type", typeof (_c = typeof reciever_entity_1.recieverEntity !== "undefined" && reciever_entity_1.recieverEntity) === "function" ? _c : Object)
], packageEntity.prototype, "reciever", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", Number)
], packageEntity.prototype, "fromAddressId", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToOne)(() => _1.addressEntity, (fromAddress) => fromAddress.packages),
    (0, tslib_1.__metadata)("design:type", typeof (_d = typeof _1.addressEntity !== "undefined" && _1.addressEntity) === "function" ? _d : Object)
], packageEntity.prototype, "fromAddress", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], packageEntity.prototype, "postDate", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], packageEntity.prototype, "shippingDate", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], packageEntity.prototype, "size", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], packageEntity.prototype, "weight", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", Boolean)
], packageEntity.prototype, "fragile", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", Number)
], packageEntity.prototype, "price", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", Number)
], packageEntity.prototype, "currentCity", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], packageEntity.prototype, "name", void 0);
packageEntity = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], packageEntity);
exports.packageEntity = packageEntity;


/***/ }),

/***/ "../../apps/api/src/Entities/reciever.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.recieverEntity = void 0;
const tslib_1 = __webpack_require__("tslib");
const typeorm_1 = __webpack_require__("typeorm");
const _1 = __webpack_require__("../../apps/api/src/Entities/index.ts");
let recieverEntity = class recieverEntity {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, tslib_1.__metadata)("design:type", Number)
], recieverEntity.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", Number)
], recieverEntity.prototype, "addressId", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToOne)((type) => _1.addressEntity, (address) => address.recievers),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof _1.addressEntity !== "undefined" && _1.addressEntity) === "function" ? _a : Object)
], recieverEntity.prototype, "address", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], recieverEntity.prototype, "firstName", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], recieverEntity.prototype, "lastName", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], recieverEntity.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], recieverEntity.prototype, "phoneNumber", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)((type) => _1.packageEntity, (package_) => package_.reciever),
    (0, tslib_1.__metadata)("design:type", Array)
], recieverEntity.prototype, "package", void 0);
recieverEntity = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], recieverEntity);
exports.recieverEntity = recieverEntity;


/***/ }),

/***/ "../../apps/api/src/Entities/transaction.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.transactionEntity = void 0;
const tslib_1 = __webpack_require__("tslib");
const typeorm_1 = __webpack_require__("typeorm");
const _1 = __webpack_require__("../../apps/api/src/Entities/index.ts");
let transactionEntity = class transactionEntity {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, tslib_1.__metadata)("design:type", Number)
], transactionEntity.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", Number)
], transactionEntity.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToOne)(() => _1.userEntity, (user) => user.transactions),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof _1.userEntity !== "undefined" && _1.userEntity) === "function" ? _a : Object)
], transactionEntity.prototype, "user", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", Number)
], transactionEntity.prototype, "amount", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", Boolean)
], transactionEntity.prototype, "direction", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)('timestamp'),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], transactionEntity.prototype, "timeStamp", void 0);
transactionEntity = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], transactionEntity);
exports.transactionEntity = transactionEntity;


/***/ }),

/***/ "../../apps/api/src/Entities/user.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.userEntity = void 0;
const tslib_1 = __webpack_require__("tslib");
const typeorm_1 = __webpack_require__("typeorm");
const _1 = __webpack_require__("../../apps/api/src/Entities/index.ts");
let userEntity = class userEntity {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.PrimaryColumn)(),
    (0, tslib_1.__metadata)("design:type", String)
], userEntity.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ unique: true }),
    (0, tslib_1.__metadata)("design:type", String)
], userEntity.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], userEntity.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], userEntity.prototype, "firstName", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], userEntity.prototype, "lastName", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], userEntity.prototype, "phoneNumber", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ default: 0 }),
    (0, tslib_1.__metadata)("design:type", Number)
], userEntity.prototype, "stabucks", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(() => _1.transactionEntity, (transaction) => transaction.user),
    (0, tslib_1.__metadata)("design:type", Array)
], userEntity.prototype, "transactions", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(() => _1.vehicleEntity, (vehicles) => vehicles.user),
    (0, tslib_1.__metadata)("design:type", Array)
], userEntity.prototype, "vehicles", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(() => _1.packageEntity, (package_) => package_.user) // package name is reserved in 'strict mode'
    ,
    (0, tslib_1.__metadata)("design:type", Array)
], userEntity.prototype, "packages", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(() => _1.addressEntity, (address) => address.user) // package name is reserved in 'strict mode'
    ,
    (0, tslib_1.__metadata)("design:type", Array)
], userEntity.prototype, "addresses", void 0);
userEntity = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], userEntity);
exports.userEntity = userEntity;


/***/ }),

/***/ "../../apps/api/src/Entities/vehicle.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.vehicleEntity = void 0;
const tslib_1 = __webpack_require__("tslib");
const typeorm_1 = __webpack_require__("typeorm");
const _1 = __webpack_require__("../../apps/api/src/Entities/index.ts");
let vehicleEntity = class vehicleEntity {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, tslib_1.__metadata)("design:type", Number)
], vehicleEntity.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], vehicleEntity.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToOne)(() => _1.userEntity, (user) => user.vehicles),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof _1.userEntity !== "undefined" && _1.userEntity) === "function" ? _a : Object)
], vehicleEntity.prototype, "user", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], vehicleEntity.prototype, "name", void 0);
vehicleEntity = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], vehicleEntity);
exports.vehicleEntity = vehicleEntity;


/***/ }),

/***/ "../../apps/api/src/app/address/address.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddressController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const class_validator_1 = __webpack_require__("class-validator");
const auth_1 = __webpack_require__("../../apps/api/src/app/auth/index.ts");
const roles_decorator_1 = __webpack_require__("../../apps/api/src/app/auth/roles.decorator.ts");
const address_service_1 = __webpack_require__("../../apps/api/src/app/address/address.service.ts");
const typeorm_1 = __webpack_require__("typeorm");
class idDto {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNumber)(),
    (0, tslib_1.__metadata)("design:type", Number)
], idDto.prototype, "id", void 0);
class addressDto {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], addressDto.prototype, "country", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNumber)(),
    (0, tslib_1.__metadata)("design:type", Number)
], addressDto.prototype, "zipCode", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], addressDto.prototype, "cityName", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], addressDto.prototype, "street", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], addressDto.prototype, "houseNumber", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], addressDto.prototype, "name", void 0);
class myAddressDto {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNumber)(),
    (0, tslib_1.__metadata)("design:type", Number)
], myAddressDto.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, tslib_1.__metadata)("design:type", String)
], myAddressDto.prototype, "country", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.NotEquals)(0),
    (0, tslib_1.__metadata)("design:type", Number)
], myAddressDto.prototype, "zipCode", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, tslib_1.__metadata)("design:type", String)
], myAddressDto.prototype, "cityName", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, tslib_1.__metadata)("design:type", String)
], myAddressDto.prototype, "street", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, tslib_1.__metadata)("design:type", String)
], myAddressDto.prototype, "houseNumber", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, tslib_1.__metadata)("design:type", String)
], myAddressDto.prototype, "name", void 0);
let AddressController = class AddressController {
    constructor(addressService) {
        this.addressService = addressService;
    }
    //creates address
    create(req, body) {
        return this.addressService.create({
            id: 0,
            userId: req.user.sub,
            country: body.country,
            zipCode: body.zipCode,
            cityName: body.cityName,
            street: body.street,
            houseNumber: body.houseNumber,
            name: body.name,
        });
    }
    // gets all addresses
    getAll() {
        return this.addressService.getAll();
    }
    // gets user's all address
    getMyAddresses(req) {
        return this.addressService.find({
            where: { userId: req.user.sub, name: (0, typeorm_1.Not)(''), isDeleted: false },
        });
    }
    // gets user's own addresses
    getMyRecieverAddresses(req) {
        return this.addressService.find({
            where: { userId: req.user.sub, name: '', isDeleted: false },
        });
    }
    // delete own address
    delete(req, body) {
        return this.addressService.getById(body.id).then((a) => {
            if (a.userId == req.user.sub) {
                a.isDeleted = true;
                return this.addressService.update(body.id, a).then(() => {
                    return this.addressService.delete(body.id);
                });
                // this.update(req, a)
                // throw new MethodNotAllowedException(
                //   'done'
                // ); 
            }
            else {
                throw new common_1.MethodNotAllowedException('You can only delete your own address');
            }
        });
    }
    //modify own address
    update(req, body) {
        return this.addressService.getById(body.id).then((a) => {
            if (a.userId == req.user.sub) {
                const newDates = {
                    country: body.country,
                    zipCode: body.zipCode,
                    cityName: body.cityName,
                    street: body.street,
                    houseNumber: body.houseNumber,
                    name: body.name,
                };
                return this.addressService.update(body.id, newDates);
            }
            else {
                throw new common_1.MethodNotAllowedException('You can only modify your own address');
            }
        });
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('user'),
    (0, common_1.Put)(),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof auth_1.authRequest !== "undefined" && auth_1.authRequest) === "function" ? _a : Object, addressDto]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], AddressController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Post)('/all'),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], AddressController.prototype, "getAll", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('user'),
    (0, common_1.Get)(),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof auth_1.authRequest !== "undefined" && auth_1.authRequest) === "function" ? _b : Object]),
    (0, tslib_1.__metadata)("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], AddressController.prototype, "getMyAddresses", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('user'),
    (0, common_1.Get)('/reciever'),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_d = typeof auth_1.authRequest !== "undefined" && auth_1.authRequest) === "function" ? _d : Object]),
    (0, tslib_1.__metadata)("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], AddressController.prototype, "getMyRecieverAddresses", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('user'),
    (0, common_1.Delete)(),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_f = typeof auth_1.authRequest !== "undefined" && auth_1.authRequest) === "function" ? _f : Object, idDto]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], AddressController.prototype, "delete", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('user'),
    (0, common_1.Patch)(),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_g = typeof auth_1.authRequest !== "undefined" && auth_1.authRequest) === "function" ? _g : Object, myAddressDto]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], AddressController.prototype, "update", null);
AddressController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('address'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_h = typeof address_service_1.AddressService !== "undefined" && address_service_1.AddressService) === "function" ? _h : Object])
], AddressController);
exports.AddressController = AddressController;


/***/ }),

/***/ "../../apps/api/src/app/address/address.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddressModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const Entities_1 = __webpack_require__("../../apps/api/src/Entities/index.ts");
const address_controller_1 = __webpack_require__("../../apps/api/src/app/address/address.controller.ts");
const address_service_1 = __webpack_require__("../../apps/api/src/app/address/address.service.ts");
let AddressModule = class AddressModule {
};
AddressModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Entities_1.addressEntity])],
        controllers: [address_controller_1.AddressController],
        providers: [address_service_1.AddressService],
        exports: [address_service_1.AddressService],
    })
], AddressModule);
exports.AddressModule = AddressModule;


/***/ }),

/***/ "../../apps/api/src/app/address/address.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddressService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const typeorm_2 = __webpack_require__("typeorm");
const Entities_1 = __webpack_require__("../../apps/api/src/Entities/index.ts");
const generic_service_1 = __webpack_require__("../../apps/api/src/app/generics/generic.service.ts");
let AddressService = class AddressService extends generic_service_1.GenericService {
    constructor(addressRepository) {
        super(addressRepository);
        this.addressRepository = addressRepository;
    }
};
AddressService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__param)(0, (0, typeorm_1.InjectRepository)(Entities_1.addressEntity)),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], AddressService);
exports.AddressService = AddressService;


/***/ }),

/***/ "../../apps/api/src/app/app.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const app_service_1 = __webpack_require__("../../apps/api/src/app/app.service.ts");
const auth_1 = __webpack_require__("../../apps/api/src/app/auth/index.ts");
const roles_decorator_1 = __webpack_require__("../../apps/api/src/app/auth/roles.decorator.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    //needs to be logged in
    getData(req) {
        return req.user;
    }
    //needs admin role
    getCat() {
        return this.appService.getCat();
    }
    getDog(req) {
        return req.user + ' and a dog';
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard),
    (0, common_1.Get)('hello'),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof auth_1.authRequest !== "undefined" && auth_1.authRequest) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], AppController.prototype, "getData", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Get)('/cat'),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", String)
], AppController.prototype, "getCat", null);
(0, tslib_1.__decorate)([
    (0, common_1.Get)('/dog'),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", String)
], AppController.prototype, "getDog", null);
AppController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _b : Object])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "../../apps/api/src/app/app.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const config_1 = __webpack_require__("@nestjs/config");
const app_controller_1 = __webpack_require__("../../apps/api/src/app/app.controller.ts");
const app_service_1 = __webpack_require__("../../apps/api/src/app/app.service.ts");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const user_module_1 = __webpack_require__("../../apps/api/src/app/user/user.module.ts");
const auth_module_1 = __webpack_require__("../../apps/api/src/app/auth/auth.module.ts");
const exchange_date_module_1 = __webpack_require__("../../apps/api/src/app/exchange-date/exchange-date.module.ts");
const transaction_module_1 = __webpack_require__("../../apps/api/src/app/transaction/transaction.module.ts");
const vehicle_module_1 = __webpack_require__("../../apps/api/src/app/vehicle/vehicle.module.ts");
const address_module_1 = __webpack_require__("../../apps/api/src/app/address/address.module.ts");
const reciever_module_1 = __webpack_require__("../../apps/api/src/app/reciever/reciever.module.ts");
const package_module_1 = __webpack_require__("../../apps/api/src/app/package/package.module.ts");
const ormconfig = __webpack_require__("../../apps/api/src/app/ormconfig.ts");
let AppModule = class AppModule {
};
AppModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot(ormconfig),
            user_module_1.UserModule,
            exchange_date_module_1.ExchangeDateModule,
            transaction_module_1.TransactionModule,
            vehicle_module_1.VehicleModule,
            address_module_1.AddressModule,
            reciever_module_1.RecieverModule,
            package_module_1.PackageModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "../../apps/api/src/app/app.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
let AppService = class AppService {
    getData() {
        return { message: 'Welcome to api!' };
    }
    getDog() {
        return 'woof';
    }
    getCat() {
        return 'meow';
    }
    getHello() {
        return 'Hello World!';
    }
};
AppService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;


/***/ }),

/***/ "../../apps/api/src/app/auth/auth.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthGuard = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const jwks_rsa_1 = __webpack_require__("jwks-rsa");
const util_1 = __webpack_require__("util");
const jwt = __webpack_require__("express-jwt");
let AuthGuard = class AuthGuard {
    constructor() {
        this.AUTH0_AUDIENCE = process.env.AUTH0_AUDIENCE;
        this.AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;
    }
    canActivate(context) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const req = context.getArgByIndex(0);
            const res = context.getArgByIndex(1);
            const checkJwt = (0, util_1.promisify)(jwt({
                secret: (0, jwks_rsa_1.expressJwtSecret)({
                    cache: true,
                    rateLimit: true,
                    jwksRequestsPerMinute: 5,
                    jwksUri: `${this.AUTH0_DOMAIN}.well-known/jwks.json`,
                }),
                audience: this.AUTH0_AUDIENCE,
                issuer: this.AUTH0_DOMAIN,
                algorithms: ['RS256'],
            }));
            try {
                yield checkJwt(req, res);
                return true;
            }
            catch (error) {
                throw new common_1.UnauthorizedException(error);
            }
            return true;
        });
    }
};
AuthGuard = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [])
], AuthGuard);
exports.AuthGuard = AuthGuard;


/***/ }),

/***/ "../../apps/api/src/app/auth/auth.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
let AuthModule = class AuthModule {
};
AuthModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({})
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

/***/ "../../apps/api/src/app/auth/authRequest.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/*
"https://www.stabox.hu/roles": [
    "admin",
    "Cat person"
  ],
  "given_name": "Princzes",
  "family_name": "Barnabás",
  "nickname": "barni.pbs",
  "name": "Princzes Barnabás",
  "picture": "https://lh3.googleusercontent.com/a-/AOh14GiL0zvdT_-Kx5_1Y14i_EOgid0e_Pfpd5ceiFwm=s96-c",
  "locale": "hu",
  "updated_at": "2022-01-28T12:23:33.644Z",
  "iss": "https://barni363hun.eu.auth0.com/",
  "sub": "google-oauth2|109681074907317705948",
  "aud": "70x759xfYo7pvQS39ptmBpnpBRv8MUkA",
  "iat": 1643372614,
  "exp": 1643408614,
  "auth_time": 1643372613
*/


/***/ }),

/***/ "../../apps/api/src/app/auth/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
(0, tslib_1.__exportStar)(__webpack_require__("../../apps/api/src/app/auth/auth.guard.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("../../apps/api/src/app/auth/role.guard.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("../../apps/api/src/app/auth/authRequest.interface.ts"), exports);


/***/ }),

/***/ "../../apps/api/src/app/auth/role.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoleGuard = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
let RoleGuard = class RoleGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const [req] = context.getArgs();
        const userRoles = (req === null || req === void 0 ? void 0 : req.user[process.env.AUTH0_ROLES]) || [];
        const requiredRoles = this.reflector.get('roles', context.getHandler());
        const hasAllRequiredRoles = requiredRoles.every((permission) => userRoles.includes(permission));
        if (requiredRoles.length === 0 || hasAllRequiredRoles) {
            return true;
        }
        throw new common_1.ForbiddenException('Insufficient Roles');
    }
};
RoleGuard = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object])
], RoleGuard);
exports.RoleGuard = RoleGuard;


/***/ }),

/***/ "../../apps/api/src/app/auth/roles.decorator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Roles = void 0;
const common_1 = __webpack_require__("@nestjs/common");
const Roles = (...roles) => (0, common_1.SetMetadata)('roles', roles);
exports.Roles = Roles;


/***/ }),

/***/ "../../apps/api/src/app/exchange-date/exchange-date.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExchangeDateController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const class_validator_1 = __webpack_require__("class-validator");
const auth_1 = __webpack_require__("../../apps/api/src/app/auth/index.ts");
const roles_decorator_1 = __webpack_require__("../../apps/api/src/app/auth/roles.decorator.ts");
const exchange_date_service_1 = __webpack_require__("../../apps/api/src/app/exchange-date/exchange-date.service.ts");
class idDto {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNumber)(),
    (0, tslib_1.__metadata)("design:type", Number)
], idDto.prototype, "id", void 0);
class exchangeDateDto {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsDateString)(),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], exchangeDateDto.prototype, "startDate", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsDateString)(),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], exchangeDateDto.prototype, "endDate", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNumber)(),
    (0, tslib_1.__metadata)("design:type", Number)
], exchangeDateDto.prototype, "addressId", void 0);
class myExchangeDateDto {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNumber)(),
    (0, tslib_1.__metadata)("design:type", Number)
], myExchangeDateDto.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsDateString)(),
    (0, tslib_1.__metadata)("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], myExchangeDateDto.prototype, "startDate", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsDateString)(),
    (0, tslib_1.__metadata)("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], myExchangeDateDto.prototype, "endDate", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNumber)(),
    (0, tslib_1.__metadata)("design:type", Number)
], myExchangeDateDto.prototype, "addressId", void 0);
let ExchangeDateController = class ExchangeDateController {
    constructor(exchangeDateService) {
        this.exchangeDateService = exchangeDateService;
    }
    //creates exchangeDate
    create(req, body) {
        return this.exchangeDateService.create(Object.assign({}, body));
    }
    // gets all exchange dates
    getAll() {
        return this.exchangeDateService.getAll();
    }
    // gets user's all exchange date
    getMyExchangeDates(req) {
        return this.exchangeDateService.find({
            where: { address: { userId: req.user.sub } },
            relations: ['address'],
            loadRelationIds: false,
        });
    }
    // gets exchange date by id
    getByPackageId(req, id) {
        return this.exchangeDateService.find({
            where: { addressId: id },
            relations: ['address'],
            //TODO!!! : get package's exhange date
        });
    }
    // delete own exchange date
    delete(req, body) {
        // TODO errors, rework
        return this.exchangeDateService.getById(body.id).then((a) => {
            if (a.address.userId == req.user.sub) {
                return this.exchangeDateService.delete(body.id);
            }
            else {
                throw new common_1.MethodNotAllowedException('You can only delete your own exchange dates');
            }
        });
    }
    //modify own exchange date
    update(req, body) {
        return this.exchangeDateService.getById(body.id).then((a) => {
            if (a.address.userId == req.user.sub) {
                return this.exchangeDateService.update(body.id, {
                    startDate: body.startDate,
                    endDate: body.endDate,
                    addressId: body.addressId,
                });
            }
            else {
                throw new common_1.MethodNotAllowedException('You can only modify your own exchange dates');
            }
        });
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('user'),
    (0, common_1.Put)(),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_e = typeof auth_1.authRequest !== "undefined" && auth_1.authRequest) === "function" ? _e : Object, exchangeDateDto]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], ExchangeDateController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Post)('/all'),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], ExchangeDateController.prototype, "getAll", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('user'),
    (0, common_1.Get)(),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_f = typeof auth_1.authRequest !== "undefined" && auth_1.authRequest) === "function" ? _f : Object]),
    (0, tslib_1.__metadata)("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], ExchangeDateController.prototype, "getMyExchangeDates", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('user'),
    (0, common_1.Get)('/package/:id'),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__param)(1, (0, common_1.Param)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_h = typeof auth_1.authRequest !== "undefined" && auth_1.authRequest) === "function" ? _h : Object, Number]),
    (0, tslib_1.__metadata)("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], ExchangeDateController.prototype, "getByPackageId", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('user'),
    (0, common_1.Delete)(),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_k = typeof auth_1.authRequest !== "undefined" && auth_1.authRequest) === "function" ? _k : Object, idDto]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], ExchangeDateController.prototype, "delete", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('user'),
    (0, common_1.Patch)(),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_l = typeof auth_1.authRequest !== "undefined" && auth_1.authRequest) === "function" ? _l : Object, myExchangeDateDto]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], ExchangeDateController.prototype, "update", null);
ExchangeDateController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('EXdate'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_m = typeof exchange_date_service_1.ExchangeDateService !== "undefined" && exchange_date_service_1.ExchangeDateService) === "function" ? _m : Object])
], ExchangeDateController);
exports.ExchangeDateController = ExchangeDateController;


/***/ }),

/***/ "../../apps/api/src/app/exchange-date/exchange-date.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExchangeDateModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const Entities_1 = __webpack_require__("../../apps/api/src/Entities/index.ts");
const user_module_1 = __webpack_require__("../../apps/api/src/app/user/user.module.ts");
const exchange_date_controller_1 = __webpack_require__("../../apps/api/src/app/exchange-date/exchange-date.controller.ts");
const exchange_date_service_1 = __webpack_require__("../../apps/api/src/app/exchange-date/exchange-date.service.ts");
let ExchangeDateModule = class ExchangeDateModule {
};
ExchangeDateModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Entities_1.exchangeDateEntity]), user_module_1.UserModule],
        controllers: [exchange_date_controller_1.ExchangeDateController],
        providers: [exchange_date_service_1.ExchangeDateService],
        exports: [exchange_date_service_1.ExchangeDateService],
    })
], ExchangeDateModule);
exports.ExchangeDateModule = ExchangeDateModule;


/***/ }),

/***/ "../../apps/api/src/app/exchange-date/exchange-date.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExchangeDateService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const typeorm_2 = __webpack_require__("typeorm");
const Entities_1 = __webpack_require__("../../apps/api/src/Entities/index.ts");
const generic_service_1 = __webpack_require__("../../apps/api/src/app/generics/generic.service.ts");
let ExchangeDateService = class ExchangeDateService extends generic_service_1.GenericService {
    constructor(exchangeDateRepository) {
        super(exchangeDateRepository);
        this.exchangeDateRepository = exchangeDateRepository;
    }
    getById(id) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const item = yield this.repository.findOne(id, { relations: ['address'] });
            if (!item) {
                throw new common_1.NotFoundException('NOT_FOUND');
            }
            return item;
        });
    }
};
ExchangeDateService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__param)(0, (0, typeorm_1.InjectRepository)(Entities_1.exchangeDateEntity)),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ExchangeDateService);
exports.ExchangeDateService = ExchangeDateService;


/***/ }),

/***/ "../../apps/api/src/app/generics/generic.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GenericService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("typeorm");
let GenericService = class GenericService {
    constructor(repository) {
        this.repository = repository;
    }
    getAll() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return yield this.repository.find();
        });
    }
    getById(id) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const item = yield this.repository.findOne(id);
            if (!item) {
                throw new common_1.NotFoundException('NOT_FOUND');
            }
            return item;
        });
    }
    find(options) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return yield this.repository.find(options);
        });
    }
    create(data) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const result = this.repository.create(data);
            return yield this.repository.save(result);
        });
    }
    update(id, data) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return yield this.repository.update(id, data);
        });
    }
    delete(id) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return yield this.repository.delete(id);
        });
    }
};
GenericService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object])
], GenericService);
exports.GenericService = GenericService;


/***/ }),

/***/ "../../apps/api/src/app/ormconfig.ts":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const Entities_1 = __webpack_require__("../../apps/api/src/Entities/index.ts");
// You can load you .env file here synchronously using dotenv package (not installed here),
// import * as dotenv from 'dotenv';
// import * as fs from 'fs';
// const environment = process.env.NODE_ENV || 'development';
// const data: any = dotenv.parse(fs.readFileSync(`${environment}.env`));
// You can also make a singleton service that load and expose the .env file content.
// ...
//!!!
//!!! We can't get the db informations from .env
//!!!
// Check typeORM documentation for more information.
const config = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Abc123456',
    database: 'stabox',
    entities: [
        Entities_1.userEntity,
        Entities_1.addressEntity,
        Entities_1.exchangeDateEntity,
        Entities_1.packageEntity,
        Entities_1.recieverEntity,
        Entities_1.vehicleEntity,
        Entities_1.transactionEntity,
    ],
    // We are using migrations, synchronize should be set to false.
    synchronize: true,
    // Run migrations automatically,
    // you can disable this if you prefer running migration manually.
    migrationsRun: false,
    logging: false,
    logger: 'file',
    // allow both start:prod and start:dev to use migrations
    // __dirname is either dist or src folder, meaning either
    // the compiled js in prod or the ts in dev
    migrations: ['dist/src/migrations/**/*{.ts,.js}'],
    cli: {
        migrationsDir: 'src/migrations',
    },
};
module.exports = config;


/***/ }),

/***/ "../../apps/api/src/app/package/package.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PackageController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const class_validator_1 = __webpack_require__("class-validator");
const typeorm_1 = __webpack_require__("typeorm");
const address_service_1 = __webpack_require__("../../apps/api/src/app/address/address.service.ts");
const auth_1 = __webpack_require__("../../apps/api/src/app/auth/index.ts");
const roles_decorator_1 = __webpack_require__("../../apps/api/src/app/auth/roles.decorator.ts");
const exchange_date_service_1 = __webpack_require__("../../apps/api/src/app/exchange-date/exchange-date.service.ts");
const vehicle_service_1 = __webpack_require__("../../apps/api/src/app/vehicle/vehicle.service.ts");
const package_service_1 = __webpack_require__("../../apps/api/src/app/package/package.service.ts");
class idDto {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNumber)(),
    (0, tslib_1.__metadata)("design:type", Number)
], idDto.prototype, "id", void 0);
class idDateDto {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNumber)(),
    (0, tslib_1.__metadata)("design:type", Number)
], idDateDto.prototype, "id", void 0);
class packageDto {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)('[0-9]+x[0-9]+x[0-9]+'),
    (0, tslib_1.__metadata)("design:type", String)
], packageDto.prototype, "size", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)('([0-9]+gramm|[0-9]+kilogramm)'),
    (0, tslib_1.__metadata)("design:type", String)
], packageDto.prototype, "weight", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsBoolean)(),
    (0, tslib_1.__metadata)("design:type", Boolean)
], packageDto.prototype, "fragile", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNumber)(),
    (0, tslib_1.__metadata)("design:type", Number)
], packageDto.prototype, "fromAddressId", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], packageDto.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNumber)(),
    (0, tslib_1.__metadata)("design:type", Number)
], packageDto.prototype, "recieverId", void 0);
class assignMeDto {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNumber)(),
    (0, tslib_1.__metadata)("design:type", Number)
], assignMeDto.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNumber)(),
    (0, tslib_1.__metadata)("design:type", Number)
], assignMeDto.prototype, "vehicleId", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsDateString)(),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], assignMeDto.prototype, "postDate", void 0);
let PackageController = class PackageController {
    constructor(packageService, addressService, exchangeDateService, vehicleService) {
        this.packageService = packageService;
        this.addressService = addressService;
        this.exchangeDateService = exchangeDateService;
        this.vehicleService = vehicleService;
    }
    //creates package
    create(req, body) {
        return this.packageService.create(Object.assign({ userId: req.user.sub, price: 500 }, body));
    }
    //create package with address
    createWithAddress(req, body) {
        return this.packageService.create(Object.assign({ userId: req.user.sub, price: 500 }, body));
    }
    // gets all packages
    getAll() {
        return this.packageService.getAll();
    }
    // gets user packages
    getMyPackages(req) {
        return this.packageService.find({
            where: { userId: req.user.sub },
        });
    }
    //returns user's own packages
    getMyPackagesWithAddress(req) {
        return this.packageService.find({
            where: { userId: req.user.sub },
            relations: ['fromAddress'],
        });
    }
    // gets acceptable packages
    getAcceptable(req) {
        return this.packageService.find({
            where: { vehicleId: null, userId: (0, typeorm_1.Not)(req.user.sub) },
            relations: ['fromAddress'],
        });
    }
    // gets accepted packages
    getAccepted(req) {
        return this.packageService.find({
            where: {
                shippingDate: false,
                vehicle: {
                    userId: req.user.sub,
                },
            },
            relations: ['fromAddress', 'vehicle'],
        });
    }
    // delete own package
    delete(req, body) {
        return this.packageService.getById(body.id).then((a) => {
            if (a.userId == req.user.sub) {
                return this.packageService.delete(body.id);
            }
            else {
                throw new common_1.MethodNotAllowedException('You can only delete your own package');
            }
        });
    }
    //assign vehicle, select post date
    assignMe(req, body) {
        return this.packageService.getById(body.id).then((a) => {
            if (a.userId !== req.user.sub) {
                return this.packageService.update(body.id, {
                    vehicleId: body.vehicleId,
                    postDate: body.postDate,
                });
            }
            else {
                throw new common_1.MethodNotAllowedException('You can not accept your own package');
            }
        });
    }
    //sent
    sent(req, body) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.packageService.getById(body.id).then((a) => {
                if (a.vehicleId == 0) {
                    return this.addressService.getById(a.fromAddressId).then((n) => {
                        return this.packageService.update(body.id, {
                            currentCity: n.cityName,
                        });
                    });
                }
                else {
                    throw new common_1.MethodNotAllowedException('You can only assign to a package without a shipper');
                }
            });
        });
    }
    //getAvaibleDates
    getAvaibleDates(req, body) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.packageService.getById(body.id).then((a) => {
                return this.exchangeDateService.find({
                    where: { address: { userId: a.userId } },
                });
            });
        });
    }
    // gets shipper's all package
    getPackageByVehicleId(req, body) {
        return this.packageService.find({
            where: { vehicleId: body.id },
        });
    }
    //adds "shipped" date
    shipped(req, body) {
        return this.packageService
            .find({
            where: { id: body.id },
        })
            .then((packag) => {
            return this.vehicleService.getById(packag[0].vehicleId).then((veh) => {
                if (veh.userId == req.user.sub) {
                    return this.packageService.update(body.id, {
                        shippingDate: new Date().toISOString(),
                    });
                }
                else {
                    throw new common_1.MethodNotAllowedException('You can only approve packages shipped by you');
                }
            });
        });
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('user'),
    (0, common_1.Put)(),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof auth_1.authRequest !== "undefined" && auth_1.authRequest) === "function" ? _b : Object, packageDto]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], PackageController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('user'),
    (0, common_1.Put)('/add'),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_c = typeof auth_1.authRequest !== "undefined" && auth_1.authRequest) === "function" ? _c : Object, packageDto]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], PackageController.prototype, "createWithAddress", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('user'),
    (0, common_1.Post)('/all'),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], PackageController.prototype, "getAll", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('user'),
    (0, common_1.Get)(),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_d = typeof auth_1.authRequest !== "undefined" && auth_1.authRequest) === "function" ? _d : Object]),
    (0, tslib_1.__metadata)("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], PackageController.prototype, "getMyPackages", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('user'),
    (0, common_1.Get)('/mypackages'),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_f = typeof auth_1.authRequest !== "undefined" && auth_1.authRequest) === "function" ? _f : Object]),
    (0, tslib_1.__metadata)("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], PackageController.prototype, "getMyPackagesWithAddress", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('shipper'),
    (0, common_1.Get)('/acceptable'),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_h = typeof auth_1.authRequest !== "undefined" && auth_1.authRequest) === "function" ? _h : Object]),
    (0, tslib_1.__metadata)("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], PackageController.prototype, "getAcceptable", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('shipper'),
    (0, common_1.Get)('/accepted'),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_k = typeof auth_1.authRequest !== "undefined" && auth_1.authRequest) === "function" ? _k : Object]),
    (0, tslib_1.__metadata)("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], PackageController.prototype, "getAccepted", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('user'),
    (0, common_1.Delete)(),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_m = typeof auth_1.authRequest !== "undefined" && auth_1.authRequest) === "function" ? _m : Object, idDto]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], PackageController.prototype, "delete", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('shipper'),
    (0, common_1.Patch)(),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_o = typeof auth_1.authRequest !== "undefined" && auth_1.authRequest) === "function" ? _o : Object, assignMeDto]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], PackageController.prototype, "assignMe", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('user'),
    (0, common_1.Post)(),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_p = typeof auth_1.authRequest !== "undefined" && auth_1.authRequest) === "function" ? _p : Object, idDto]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PackageController.prototype, "sent", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('shipper'),
    (0, common_1.Get)('/dates'),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_q = typeof auth_1.authRequest !== "undefined" && auth_1.authRequest) === "function" ? _q : Object, idDto]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PackageController.prototype, "getAvaibleDates", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('shipper'),
    (0, common_1.Get)('/vehicle'),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_r = typeof auth_1.authRequest !== "undefined" && auth_1.authRequest) === "function" ? _r : Object, idDto]),
    (0, tslib_1.__metadata)("design:returntype", typeof (_s = typeof Promise !== "undefined" && Promise) === "function" ? _s : Object)
], PackageController.prototype, "getPackageByVehicleId", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('shipper'),
    (0, common_1.Post)('/shipped'),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_t = typeof auth_1.authRequest !== "undefined" && auth_1.authRequest) === "function" ? _t : Object, idDateDto]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], PackageController.prototype, "shipped", null);
PackageController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('package'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_u = typeof package_service_1.PackageService !== "undefined" && package_service_1.PackageService) === "function" ? _u : Object, typeof (_v = typeof address_service_1.AddressService !== "undefined" && address_service_1.AddressService) === "function" ? _v : Object, typeof (_w = typeof exchange_date_service_1.ExchangeDateService !== "undefined" && exchange_date_service_1.ExchangeDateService) === "function" ? _w : Object, typeof (_x = typeof vehicle_service_1.VehicleService !== "undefined" && vehicle_service_1.VehicleService) === "function" ? _x : Object])
], PackageController);
exports.PackageController = PackageController;


/***/ }),

/***/ "../../apps/api/src/app/package/package.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PackageModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const Entities_1 = __webpack_require__("../../apps/api/src/Entities/index.ts");
const address_module_1 = __webpack_require__("../../apps/api/src/app/address/address.module.ts");
const exchange_date_module_1 = __webpack_require__("../../apps/api/src/app/exchange-date/exchange-date.module.ts");
const vehicle_module_1 = __webpack_require__("../../apps/api/src/app/vehicle/vehicle.module.ts");
const package_controller_1 = __webpack_require__("../../apps/api/src/app/package/package.controller.ts");
const package_service_1 = __webpack_require__("../../apps/api/src/app/package/package.service.ts");
let PackageModule = class PackageModule {
};
PackageModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([Entities_1.packageEntity]),
            address_module_1.AddressModule,
            exchange_date_module_1.ExchangeDateModule,
            vehicle_module_1.VehicleModule,
        ],
        controllers: [package_controller_1.PackageController],
        providers: [package_service_1.PackageService],
    })
], PackageModule);
exports.PackageModule = PackageModule;


/***/ }),

/***/ "../../apps/api/src/app/package/package.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PackageService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const typeorm_2 = __webpack_require__("typeorm");
const Entities_1 = __webpack_require__("../../apps/api/src/Entities/index.ts");
const generic_service_1 = __webpack_require__("../../apps/api/src/app/generics/generic.service.ts");
let PackageService = class PackageService extends generic_service_1.GenericService {
    constructor(packageRepository) {
        super(packageRepository);
        this.packageRepository = packageRepository;
    }
};
PackageService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__param)(0, (0, typeorm_1.InjectRepository)(Entities_1.packageEntity)),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], PackageService);
exports.PackageService = PackageService;


/***/ }),

/***/ "../../apps/api/src/app/reciever/reciever.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RecieverController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const class_validator_1 = __webpack_require__("class-validator");
const address_service_1 = __webpack_require__("../../apps/api/src/app/address/address.service.ts");
const auth_1 = __webpack_require__("../../apps/api/src/app/auth/index.ts");
const roles_decorator_1 = __webpack_require__("../../apps/api/src/app/auth/roles.decorator.ts");
const reciever_service_1 = __webpack_require__("../../apps/api/src/app/reciever/reciever.service.ts");
class recieverWithAddressDto {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], recieverWithAddressDto.prototype, "firstName", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], recieverWithAddressDto.prototype, "lastName", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsEmail)(),
    (0, tslib_1.__metadata)("design:type", String)
], recieverWithAddressDto.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsPhoneNumber)(),
    (0, tslib_1.__metadata)("design:type", String)
], recieverWithAddressDto.prototype, "phoneNumber", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], recieverWithAddressDto.prototype, "country", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNumber)(),
    (0, tslib_1.__metadata)("design:type", Number)
], recieverWithAddressDto.prototype, "zipCode", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], recieverWithAddressDto.prototype, "cityName", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], recieverWithAddressDto.prototype, "street", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNumber)(),
    (0, tslib_1.__metadata)("design:type", Number)
], recieverWithAddressDto.prototype, "houseNumber", void 0);
let RecieverController = class RecieverController {
    constructor(recieverService, addressService) {
        this.recieverService = recieverService;
        this.addressService = addressService;
    }
    //creates reciever with address
    createWithAddress(req, body) {
        return this.addressService
            .create({
            id: 0,
            userId: req.user.sub,
            country: body.country,
            zipCode: body.zipCode,
            cityName: body.cityName,
            street: body.street,
            houseNumber: body.houseNumber,
        })
            .then((res) => {
            return this.recieverService.create({
                id: 0,
                addressId: res.id,
                firstName: body.firstName,
                lastName: body.lastName,
                email: body.email,
                phoneNumber: body.phoneNumber,
            });
        });
    }
    // gets all recieveres
    getAll() {
        return this.recieverService.getAll();
    }
    // gets user's all reciever
    getMyRecieveres(req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const addressIds = yield this.addressService
                .find({
                where: { userId: req.user.sub },
            })
                .then((addresses) => {
                return addresses.map((a) => a.id);
            });
            return this.recieverService.RecieveresByAddressIds(addressIds);
        });
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('user'),
    (0, common_1.Put)(),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof auth_1.authRequest !== "undefined" && auth_1.authRequest) === "function" ? _a : Object, recieverWithAddressDto]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], RecieverController.prototype, "createWithAddress", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Post)('/all'),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], RecieverController.prototype, "getAll", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('user'),
    (0, common_1.Get)(),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof auth_1.authRequest !== "undefined" && auth_1.authRequest) === "function" ? _b : Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RecieverController.prototype, "getMyRecieveres", null);
RecieverController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('reciever'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_c = typeof reciever_service_1.RecieverService !== "undefined" && reciever_service_1.RecieverService) === "function" ? _c : Object, typeof (_d = typeof address_service_1.AddressService !== "undefined" && address_service_1.AddressService) === "function" ? _d : Object])
], RecieverController);
exports.RecieverController = RecieverController;


/***/ }),

/***/ "../../apps/api/src/app/reciever/reciever.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RecieverModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const reciever_service_1 = __webpack_require__("../../apps/api/src/app/reciever/reciever.service.ts");
const reciever_controller_1 = __webpack_require__("../../apps/api/src/app/reciever/reciever.controller.ts");
const Entities_1 = __webpack_require__("../../apps/api/src/Entities/index.ts");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const address_module_1 = __webpack_require__("../../apps/api/src/app/address/address.module.ts");
let RecieverModule = class RecieverModule {
};
RecieverModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Entities_1.recieverEntity]), address_module_1.AddressModule],
        providers: [reciever_service_1.RecieverService],
        controllers: [reciever_controller_1.RecieverController],
    })
], RecieverModule);
exports.RecieverModule = RecieverModule;


/***/ }),

/***/ "../../apps/api/src/app/reciever/reciever.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RecieverService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const typeorm_2 = __webpack_require__("typeorm");
const Entities_1 = __webpack_require__("../../apps/api/src/Entities/index.ts");
const generic_service_1 = __webpack_require__("../../apps/api/src/app/generics/generic.service.ts");
let RecieverService = class RecieverService extends generic_service_1.GenericService {
    constructor(recieverRepository) {
        super(recieverRepository);
        this.recieverRepository = recieverRepository;
    }
    RecieveresByAddressIds(addressIds) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const recievers = yield Promise.all(addressIds.map((id) => {
                return this.getRecByAdId(id);
            }));
            return [].concat(...recievers);
        });
    }
    getRecByAdId(id) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.recieverRepository.find({
                where: { addressId: id },
            });
        });
    }
};
RecieverService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__param)(0, (0, typeorm_1.InjectRepository)(Entities_1.recieverEntity)),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], RecieverService);
exports.RecieverService = RecieverService;


/***/ }),

/***/ "../../apps/api/src/app/transaction/transaction.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const class_validator_1 = __webpack_require__("class-validator");
const auth_1 = __webpack_require__("../../apps/api/src/app/auth/index.ts");
const roles_decorator_1 = __webpack_require__("../../apps/api/src/app/auth/roles.decorator.ts");
const transaction_service_1 = __webpack_require__("../../apps/api/src/app/transaction/transaction.service.ts");
class buyDto {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNumber)(),
    (0, tslib_1.__metadata)("design:type", Number)
], buyDto.prototype, "amount", void 0);
let TransactionController = class TransactionController {
    constructor(transactionService) {
        this.transactionService = transactionService;
    }
    all() {
        return this.transactionService.getAll();
    }
    getMyTransactions(req) {
        return this.transactionService.find({
            where: { userId: req.user.sub },
        });
    }
    buy(req, body) {
        const tra = { userId: req.user.sub, amount: body.amount, direction: true };
        return this.transactionService.create(tra);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Post)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], TransactionController.prototype, "all", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('user'),
    (0, common_1.Get)(),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof auth_1.authRequest !== "undefined" && auth_1.authRequest) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], TransactionController.prototype, "getMyTransactions", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('admin') // TODO: hogyan lehessen venni stabuck-ot
    ,
    (0, common_1.Patch)(),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof auth_1.authRequest !== "undefined" && auth_1.authRequest) === "function" ? _b : Object, buyDto]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], TransactionController.prototype, "buy", null);
TransactionController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('transaction'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_c = typeof transaction_service_1.TransactionService !== "undefined" && transaction_service_1.TransactionService) === "function" ? _c : Object])
], TransactionController);
exports.TransactionController = TransactionController;


/***/ }),

/***/ "../../apps/api/src/app/transaction/transaction.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const Entities_1 = __webpack_require__("../../apps/api/src/Entities/index.ts");
const transaction_controller_1 = __webpack_require__("../../apps/api/src/app/transaction/transaction.controller.ts");
const transaction_service_1 = __webpack_require__("../../apps/api/src/app/transaction/transaction.service.ts");
let TransactionModule = class TransactionModule {
};
TransactionModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Entities_1.transactionEntity])],
        controllers: [transaction_controller_1.TransactionController],
        providers: [transaction_service_1.TransactionService],
    })
], TransactionModule);
exports.TransactionModule = TransactionModule;


/***/ }),

/***/ "../../apps/api/src/app/transaction/transaction.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const typeorm_2 = __webpack_require__("typeorm");
const Entities_1 = __webpack_require__("../../apps/api/src/Entities/index.ts");
const generic_service_1 = __webpack_require__("../../apps/api/src/app/generics/generic.service.ts");
let TransactionService = class TransactionService extends generic_service_1.GenericService {
    constructor(transactionRepository) {
        super(transactionRepository);
        this.transactionRepository = transactionRepository;
    }
};
TransactionService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__param)(0, (0, typeorm_1.InjectRepository)(Entities_1.transactionEntity)),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], TransactionService);
exports.TransactionService = TransactionService;


/***/ }),

/***/ "../../apps/api/src/app/user/user.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const class_validator_1 = __webpack_require__("class-validator");
const typeorm_1 = __webpack_require__("typeorm");
const auth_1 = __webpack_require__("../../apps/api/src/app/auth/index.ts");
const roles_decorator_1 = __webpack_require__("../../apps/api/src/app/auth/roles.decorator.ts");
const userUpdate_DTO_1 = __webpack_require__("../../apps/api/src/app/user/userUpdate.DTO.ts");
const user_service_1 = __webpack_require__("../../apps/api/src/app/user/user.service.ts");
const userMin_DTO_1 = __webpack_require__("../../apps/api/src/app/user/userMin.DTO.ts");
class idDto {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], idDto.prototype, "id", void 0);
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    //gets own user data
    getMyData(req) {
        return this.userService.getMyData(req);
    }
    //gets all username
    getAll() {
        return this.userService.getAllUsername();
    }
    //Create user
    create(req, body) {
        //const body: userMin = { id: 0, username: '', email: '', authId: '' };
        return this.userService.new(req.user.sub, body);
    }
    //Delete user
    delete(req) {
        return this.userService.deletee(req.user.sub);
    }
    //Modify user
    modify(req, body) {
        const newUser = {
            username: body.username,
            id: req.user.sub,
            firstName: body.firstName,
            lastName: body.lastName,
            phoneNumber: body.phoneNumber,
        };
        this.userService.addUserRole(newUser.id);
        return this.userService.updatee(newUser.id, newUser);
    }
    //get all user's all information
    find(body) {
        return this.userService.find(body);
    }
    //Add role to user
    addUserRole(body) {
        return this.userService.addUserRole(body.id);
    }
    //Add role to user
    addShipperRole(body) {
        return this.userService.addShipperRole(body.id);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard),
    (0, common_1.Get)(),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof auth_1.authRequest !== "undefined" && auth_1.authRequest) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], UserController.prototype, "getMyData", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard),
    (0, common_1.Get)('/all'),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], UserController.prototype, "getAll", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard),
    (0, common_1.Put)(),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof auth_1.authRequest !== "undefined" && auth_1.authRequest) === "function" ? _b : Object, typeof (_c = typeof userMin_DTO_1.userMinDto !== "undefined" && userMin_DTO_1.userMinDto) === "function" ? _c : Object]),
    (0, tslib_1.__metadata)("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], UserController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard),
    (0, common_1.Delete)(),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_e = typeof auth_1.authRequest !== "undefined" && auth_1.authRequest) === "function" ? _e : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], UserController.prototype, "delete", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard),
    (0, common_1.Patch)(),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_f = typeof auth_1.authRequest !== "undefined" && auth_1.authRequest) === "function" ? _f : Object, typeof (_g = typeof userUpdate_DTO_1.userUpdateDto !== "undefined" && userUpdate_DTO_1.userUpdateDto) === "function" ? _g : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], UserController.prototype, "modify", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Post)(),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_h = typeof typeorm_1.FindManyOptions !== "undefined" && typeorm_1.FindManyOptions) === "function" ? _h : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], UserController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Post)('/user'),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [idDto]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], UserController.prototype, "addUserRole", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('user'),
    (0, common_1.Post)('/shipper'),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [idDto]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], UserController.prototype, "addShipperRole", null);
UserController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('user'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_j = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _j : Object])
], UserController);
exports.UserController = UserController;


/***/ }),

/***/ "../../apps/api/src/app/user/user.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const axios_1 = __webpack_require__("@nestjs/axios");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const Entities_1 = __webpack_require__("../../apps/api/src/Entities/index.ts");
const user_controller_1 = __webpack_require__("../../apps/api/src/app/user/user.controller.ts");
const user_service_1 = __webpack_require__("../../apps/api/src/app/user/user.service.ts");
let UserModule = class UserModule {
};
UserModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Entities_1.userEntity]), axios_1.HttpModule],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService],
        exports: [user_service_1.UserService],
    })
], UserModule);
exports.UserModule = UserModule;


/***/ }),

/***/ "../../apps/api/src/app/user/user.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const tslib_1 = __webpack_require__("tslib");
const axios_1 = __webpack_require__("@nestjs/axios");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const typeorm_2 = __webpack_require__("typeorm");
const Entities_1 = __webpack_require__("../../apps/api/src/Entities/index.ts");
const generic_service_1 = __webpack_require__("../../apps/api/src/app/generics/generic.service.ts");
let UserService = class UserService extends generic_service_1.GenericService {
    constructor(userRepository, httpService) {
        super(userRepository);
        this.userRepository = userRepository;
        this.httpService = httpService;
    }
    addUserRole(id) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.userRepository.findOne({ id: id }).then((res) => {
                if (res == undefined) {
                    throw new common_1.NotFoundException('This user does not exist!');
                }
                else {
                    const options = {
                        headers: {
                            'content-type': 'application/json',
                            authorization: 'Bearer ' + process.env.AUTH0_API_TOKEN,
                            'cache-control': 'no-cache',
                        },
                        data: { roles: ['rol_fOmBHGPGmePItkqG'] },
                    };
                    const data = { roles: ['rol_fOmBHGPGmePItkqG'] };
                    return this.httpService
                        .post(process.env.AUTH0_DOMAIN + 'api/v2/users/' + id + '/roles', data, options)
                        .subscribe((res) => res);
                }
            });
        });
    }
    addShipperRole(id) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.userRepository.findOne({ id: id }).then((res) => {
                if (res == undefined) {
                    throw new common_1.NotFoundException('This user does not exist!');
                }
                else {
                    const options = {
                        headers: {
                            'content-type': 'application/json',
                            authorization: 'Bearer ' + process.env.AUTH0_API_TOKEN,
                            'cache-control': 'no-cache',
                        },
                        data: { roles: ['rol_72IOyNuWHPWpC03o'] },
                    };
                    const data = { roles: ['rol_72IOyNuWHPWpC03o'] };
                    return this.httpService
                        .post(process.env.AUTH0_DOMAIN + 'api/v2/users/' + id + '/roles', data, options)
                        .subscribe((res) => res);
                }
            });
        });
    }
    deletee(id) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return yield this.userRepository.delete(id);
        });
    }
    updatee(id, data) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return yield this.userRepository.update(id, data);
        });
    }
    new(authId, user) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const newUser = {
                email: user.email,
                username: user.username,
                id: authId,
            };
            return this.userRepository.findOne({ email: user.email }).then((res) => {
                if (res == undefined) {
                    return this.userRepository.findOne({ id: authId }).then((res) => {
                        if (res == undefined) {
                            return this.userRepository.save(newUser);
                        }
                        else {
                            throw new common_1.ConflictException('User already exists with this id!');
                        }
                    });
                }
                else {
                    throw new common_1.ConflictException('User already exists with this email address!');
                }
            });
        });
    }
    getAllUsername() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.userRepository.find().then((res) => {
                return res.map((user) => user.username);
            });
        });
    }
    getMyData(req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.userRepository.findOne({ id: req.user.sub }).then((res) => {
                if (res == undefined) {
                    throw new common_1.NotFoundException('You can only get your data if you already have a user!');
                }
                else {
                    const roles = {
                        'https://www.stabox.hu/roles': [
                            ...req.user['https://www.stabox.hu/roles'],
                        ],
                    };
                    return Object.assign(Object.assign({}, roles), res); // TODO: test this
                }
            });
        });
    }
};
UserService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__param)(0, (0, typeorm_1.InjectRepository)(Entities_1.userEntity)),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _b : Object])
], UserService);
exports.UserService = UserService;


/***/ }),

/***/ "../../apps/api/src/app/user/userMin.DTO.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.userMinDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const class_validator_1 = __webpack_require__("class-validator");
class userMinDto {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsEmail)(),
    (0, tslib_1.__metadata)("design:type", String)
], userMinDto.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], userMinDto.prototype, "username", void 0);
exports.userMinDto = userMinDto;


/***/ }),

/***/ "../../apps/api/src/app/user/userUpdate.DTO.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.userUpdateDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const class_validator_1 = __webpack_require__("class-validator");
class userUpdateDto {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], userUpdateDto.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], userUpdateDto.prototype, "firstName", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], userUpdateDto.prototype, "lastName", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsPhoneNumber)(),
    (0, tslib_1.__metadata)("design:type", String)
], userUpdateDto.prototype, "phoneNumber", void 0);
exports.userUpdateDto = userUpdateDto;


/***/ }),

/***/ "../../apps/api/src/app/vehicle/vehicle.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VehicleController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const class_validator_1 = __webpack_require__("class-validator");
const auth_1 = __webpack_require__("../../apps/api/src/app/auth/index.ts");
const roles_decorator_1 = __webpack_require__("../../apps/api/src/app/auth/roles.decorator.ts");
const vehicle_service_1 = __webpack_require__("../../apps/api/src/app/vehicle/vehicle.service.ts");
class idDto {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNumber)(),
    (0, tslib_1.__metadata)("design:type", Number)
], idDto.prototype, "id", void 0);
class vehicleDto {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], vehicleDto.prototype, "name", void 0);
class myVehicleDto {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNumber)(),
    (0, tslib_1.__metadata)("design:type", Number)
], myVehicleDto.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], myVehicleDto.prototype, "name", void 0);
let VehicleController = class VehicleController {
    constructor(vehicleService) {
        this.vehicleService = vehicleService;
    }
    //creates vehicle
    create(req, body) {
        return this.vehicleService.create({
            id: 0,
            userId: req.user.sub,
            name: body.name,
        });
    }
    // gets all vehicles
    getAll() {
        return this.vehicleService.getAll();
    }
    // gets user's all vehicles
    getMyVehicles(req) {
        return this.vehicleService.find({
            where: { userId: req.user.sub },
        });
    }
    // delete own vehicles
    delete(req, body) {
        return this.vehicleService.getById(body.id).then((a) => {
            if (a.userId == req.user.sub) {
                return this.vehicleService.delete(body.id);
            }
            else {
                throw new common_1.MethodNotAllowedException('You can only delete your own vehicles');
            }
        });
    }
    //modify own vehicles
    update(req, body) {
        return this.vehicleService.getById(body.id).then((a) => {
            if (a.userId == req.user.sub) {
                const newVehicle = {
                    name: body.name,
                };
                return this.vehicleService.update(body.id, newVehicle);
            }
            else {
                throw new common_1.MethodNotAllowedException('You can only modify your own vehicles');
            }
        });
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('shipper'),
    (0, common_1.Put)(),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof auth_1.authRequest !== "undefined" && auth_1.authRequest) === "function" ? _a : Object, vehicleDto]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], VehicleController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Post)('/all'),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], VehicleController.prototype, "getAll", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('shipper'),
    (0, common_1.Get)(),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof auth_1.authRequest !== "undefined" && auth_1.authRequest) === "function" ? _b : Object]),
    (0, tslib_1.__metadata)("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], VehicleController.prototype, "getMyVehicles", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('shipper'),
    (0, common_1.Delete)(),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_d = typeof auth_1.authRequest !== "undefined" && auth_1.authRequest) === "function" ? _d : Object, idDto]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], VehicleController.prototype, "delete", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(auth_1.AuthGuard, auth_1.RoleGuard),
    (0, roles_decorator_1.Roles)('shipper'),
    (0, common_1.Patch)(),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_e = typeof auth_1.authRequest !== "undefined" && auth_1.authRequest) === "function" ? _e : Object, myVehicleDto]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], VehicleController.prototype, "update", null);
VehicleController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('vehicle'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_f = typeof vehicle_service_1.VehicleService !== "undefined" && vehicle_service_1.VehicleService) === "function" ? _f : Object])
], VehicleController);
exports.VehicleController = VehicleController;


/***/ }),

/***/ "../../apps/api/src/app/vehicle/vehicle.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VehicleModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const vehicle_service_1 = __webpack_require__("../../apps/api/src/app/vehicle/vehicle.service.ts");
const vehicle_controller_1 = __webpack_require__("../../apps/api/src/app/vehicle/vehicle.controller.ts");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const Entities_1 = __webpack_require__("../../apps/api/src/Entities/index.ts");
let VehicleModule = class VehicleModule {
};
VehicleModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Entities_1.vehicleEntity])],
        providers: [vehicle_service_1.VehicleService],
        controllers: [vehicle_controller_1.VehicleController],
        exports: [vehicle_service_1.VehicleService],
    })
], VehicleModule);
exports.VehicleModule = VehicleModule;


/***/ }),

/***/ "../../apps/api/src/app/vehicle/vehicle.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VehicleService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const typeorm_2 = __webpack_require__("typeorm");
const Entities_1 = __webpack_require__("../../apps/api/src/Entities/index.ts");
const generic_service_1 = __webpack_require__("../../apps/api/src/app/generics/generic.service.ts");
let VehicleService = class VehicleService extends generic_service_1.GenericService {
    constructor(vehicleRepository) {
        super(vehicleRepository);
        this.vehicleRepository = vehicleRepository;
    }
};
VehicleService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__param)(0, (0, typeorm_1.InjectRepository)(Entities_1.vehicleEntity)),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], VehicleService);
exports.VehicleService = VehicleService;


/***/ }),

/***/ "@nestjs/axios":
/***/ ((module) => {

module.exports = require("@nestjs/axios");

/***/ }),

/***/ "@nestjs/common":
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/typeorm":
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "class-validator":
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "express-jwt":
/***/ ((module) => {

module.exports = require("express-jwt");

/***/ }),

/***/ "jwks-rsa":
/***/ ((module) => {

module.exports = require("jwks-rsa");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ "typeorm":
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),

/***/ "util":
/***/ ((module) => {

module.exports = require("util");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const app_module_1 = __webpack_require__("../../apps/api/src/app/app.module.ts");
function bootstrap() {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        const globalPrefix = 'api';
        app.enableCors();
        app.useGlobalPipes(new common_1.ValidationPipe());
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 3333;
        yield app.listen(port);
        common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
    });
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map