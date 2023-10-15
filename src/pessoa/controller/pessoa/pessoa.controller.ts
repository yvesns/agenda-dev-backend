import { Body, Controller, Get, Post } from '@nestjs/common';
import { PessoaDto } from 'src/pessoa/dto/pessoa.dto/pessoa.dto';
import { PessoaService } from 'src/pessoa/service/pessoa/pessoa.service';

@Controller('pessoa')
export class PessoaController {
    constructor(private pessoaService: PessoaService) {}

    @Post('/')
    create(@Body() pessoa: PessoaDto): PessoaDto {
        return this.pessoaService.create(pessoa)
    }

    @Post('/update')
    update(@Body() pessoa: PessoaDto) {
        return this.pessoaService.update(pessoa)
    }

    @Post('/delete')
    delete(@Body() pessoa: PessoaDto){
        return this.pessoaService.delete(pessoa)
    }

    @Get('/')
    async findAll(): Promise<PessoaDto[]> {
        return this.pessoaService.findAll()
    }

    @Get('/find')
    async find(@Body() pessoa: PessoaDto): Promise<PessoaDto[]> {
        return this.pessoaService.find(pessoa)
    }
}
