import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private configService: ConfigService
  ) {}
  canActivate(context: ExecutionContext): boolean {
    const [req] = context.getArgs();
    const userRoles = req?.user[this.configService.get('AUTH0_ROLES')] || [];
    const requiredRoles = this.reflector.get('roles', context.getHandler());
    const hasAllRequiredRoles = requiredRoles.every((permission) =>
      userRoles.includes(permission)
    );
    if (requiredRoles.length === 0 || hasAllRequiredRoles) {
      return true;
    }
    throw new ForbiddenException('Insufficient Roles');
  }
}
