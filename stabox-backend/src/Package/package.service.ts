import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { packageEntity, userEntity } from 'src/Entities';
import { Repository } from 'typeorm';


@Injectable()
export class PackageService {
    constructor(
        @InjectRepository(packageEntity) private packageRepository: Repository<packageEntity>,
    ) { }
    findAll() {
        return this.packageRepository.find();
    }
}