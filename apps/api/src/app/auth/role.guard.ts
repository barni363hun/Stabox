import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    const [req] = context.getArgs();
    const userRoles = req?.user[process.env.AUTH0_ROLES] || [];
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
