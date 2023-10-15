import { Module } from '@nestjs/common';
import { EmpresaController } from './controller/empresa/empresa.controller';
import { EmpresaService } from './service/empresa/empresa.service';

@Module({
  controllers: [EmpresaController],
  providers: [EmpresaService]
})
export class EmpresaModule {}
