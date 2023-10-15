import { Module } from '@nestjs/common';
import { PessoaController } from './controller/pessoa/pessoa.controller';
import { PessoaService } from './service/pessoa/pessoa.service';

@Module({
  controllers: [PessoaController],
  providers: [PessoaService]
})
export class PessoaModule {}
