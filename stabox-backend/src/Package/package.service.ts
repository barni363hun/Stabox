import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { log } from 'console';
import { packageEntity, shipperEntity, userEntity } from 'src/Entities';
import { Repository } from 'typeorm';
import { CreatePackageDTO } from './package.dto';
import { PackageModule } from './package.module';


@Injectable()
export class PackageService {
    constructor(
        @InjectRepository(packageEntity) private packageRepository: Repository<packageEntity>,
    ) { }

    async findAll(): Promise<packageEntity[]> {
        return this.packageRepository.find({ join: { alias: "shipper", leftJoin: { shipper: "shipper" } } })
    }
    async createpackage(body: CreatePackageDTO) {
        return this.packageRepository.create(body)
    }
}