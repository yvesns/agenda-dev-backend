import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PessoaModule } from './pessoa/pessoa.module';
import { EmpresaModule } from './empresa/empresa.module';

@Module({
  imports: [PessoaModule, EmpresaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
