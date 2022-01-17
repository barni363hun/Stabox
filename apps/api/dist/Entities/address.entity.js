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
exports.addressEntity = void 0;
const typeorm_1 = require("typeorm");
const _1 = require(".");
const reciever_entity_1 = require("./reciever.entity");
let addressEntity = class addressEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], addressEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.userEntity, (user) => user.addresses),
    __metadata("design:type", _1.userEntity)
], addressEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], addressEntity.prototype, "region", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], addressEntity.prototype, "zipCode", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], addressEntity.prototype, "cityName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], addressEntity.prototype, "street", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], addressEntity.prototype, "houseNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], addressEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => reciever_entity_1.recieverEntity, reciever => reciever.adress),
    __metadata("design:type", Array)
], addressEntity.prototype, "recievers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => _1.packageEntity, package_ => package_.fromAdress),
    __metadata("design:type", Array)
], addressEntity.prototype, "packages", void 0);
addressEntity = __decorate([
    (0, typeorm_1.Entity)()
], addressEntity);
exports.addressEntity = addressEntity;
//# sourceMappingURL=address.entity.js.map