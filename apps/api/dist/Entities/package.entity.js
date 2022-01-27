"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.packageEntity = void 0;
const typeorm_1 = require("typeorm");
const _1 = require(".");
const reciever_entity_1 = require("./reciever.entity");
let packageEntity = class packageEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], packageEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.userEntity, user => user.packages),
    __metadata("design:type", Object)
], packageEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.shipperEntity, shipper => shipper.packages),
    __metadata("design:type", Object)
], packageEntity.prototype, "shipper", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => reciever_entity_1.recieverEntity, reciever => reciever.package),
    __metadata("design:type", Object)
], packageEntity.prototype, "reciever", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => _1.addressEntity, fromAdress => fromAdress.packages),
    __metadata("design:type", Object)
], packageEntity.prototype, "fromAdress", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], packageEntity.prototype, "postDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], packageEntity.prototype, "shippingDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], packageEntity.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], packageEntity.prototype, "weight", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], packageEntity.prototype, "fragile", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], packageEntity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], packageEntity.prototype, "currentRegion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], packageEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], packageEntity.prototype, "name", void 0);
packageEntity = __decorate([
    (0, typeorm_1.Entity)()
], packageEntity);
exports.packageEntity = packageEntity;
//# sourceMappingURL=package.entity.js.map