
import { Controller, Get, Put } from '@nestjs/common';
import { PackageService } from './package.service';

@Controller('package')
export class packageController {
    constructor(private PackageService: PackageService) { }
    @Get()
    findAll(): any {
        return this.PackageService.findAll()
    }
    @Put()
    create(): string {

        return 'sikeres kreáció'
    }
}