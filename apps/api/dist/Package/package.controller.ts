
import { Body, Controller, Get, Put } from '@nestjs/common';
import { packageEntity } from 'src/Entities';
import { CreatePackageDTO } from './package.dto';
import { PackageService } from './package.service';

@Controller('package')
export class packageController {
    constructor(private PackageService: PackageService) { }
    @Get()
    findAll(): any {
        return this.PackageService.findAll().then(
            res => res,
            err => { return { error: "error", desc: "asdasdasd" } }
        )
    }
    @Put()
    create(@Body() createdPackage: CreatePackageDTO): any {

        return this.PackageService.createpackage(createdPackage).then(
            res => res,
            err => { return { error: "error", desc: "asdasdasd" } }
        )
    }
}