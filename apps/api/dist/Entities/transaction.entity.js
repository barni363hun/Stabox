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
exports.transactionEntity = void 0;
const typeorm_1 = require("typeorm");
const _1 = require(".");
let transactionEntity = class transactionEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], transactionEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.userEntity, user => user.transactions),
    __metadata("design:type", _1.userEntity)
], transactionEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], transactionEntity.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], transactionEntity.prototype, "direction", void 0);
transactionEntity = __decorate([
    (0, typeorm_1.Entity)()
], transactionEntity);
exports.transactionEntity = transactionEntity;
//# sourceMappingURL=transaction.entity.js.map