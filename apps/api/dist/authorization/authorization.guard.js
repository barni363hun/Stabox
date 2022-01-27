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
exports.AuthorizationGuard = void 0;
const common_1 = require("@nestjs/common");
const jwks_rsa_1 = require("jwks-rsa");
const util_1 = require("util");
const jwt = require("express-jwt");
const config_1 = require("@nestjs/config");
let AuthorizationGuard = class AuthorizationGuard {
    constructor(configService) {
        this.configService = configService;
        this.AUTH0_AUDIENCE = this.configService.get('AUTH0_AUDIENCE');
        this.AUTH0_DOMAIN = this.configService.get('AUTH0_DOMAIN');
    }
    async canActivate(context) {
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
            await checkJwt(req, res);
            return true;
        }
        catch (error) {
            throw new common_1.UnauthorizedException(error);
        }
        return true;
    }
};
AuthorizationGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AuthorizationGuard);
exports.AuthorizationGuard = AuthorizationGuard;
//# sourceMappingURL=authorization.guard.js.map