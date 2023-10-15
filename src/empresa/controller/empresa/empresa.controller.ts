import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmpresaDto } from 'src/empresa/dto/empresa.dto/empresa.dto';
import { EmpresaService } from 'src/empresa/service/empresa/empresa.service';

@Controller('empresa')
export class EmpresaController {
    constructor(private empresaService: EmpresaService) {}

    @Post('/')
    create(@Body() empresa: EmpresaDto): EmpresaDto {
        return this.empresaService.create(empresa)
    }

    @Post('/update')
    update(@Body() empresa: EmpresaDto) {
        return this.empresaService.update(empresa)
    }

    @Post('/delete')
    delete(@Body() empresa: EmpresaDto){
        return this.empresaService.delete(empresa)
    }

    @Get('/')
    async findAll(): Promise<EmpresaDto[]> {
        return this.empresaService.findAll()
    }
}
