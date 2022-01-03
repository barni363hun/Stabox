import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { packageEntity, userEntity } from 'src/Entities';
import { packageController } from './package.controller';
import { PackageService } from './package.service';


@Module({
    imports: [TypeOrmModule.forFeature([packageEntity])],
    providers: [PackageService],
    controllers: [packageController],
})
export class PackageModule { }