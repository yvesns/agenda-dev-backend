import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';
import { EmpresaDto } from 'src/empresa/dto/empresa.dto/empresa.dto';

const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3d2x1dnN0aHBqbXZqdXVyc2xoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcwMjg0NjIsImV4cCI6MjAxMjYwNDQ2Mn0.eC9fPng3kLaajJfmv-rm0rFXkJj9bV0Ny95PTFFsBSw'

@Injectable()
export class EmpresaService {
    create(empresa: EmpresaDto): EmpresaDto {
        const supabase = createClient(
            'https://lwwluvsthpjmvjuurslh.supabase.co/', 
            apiKey
        )
  
        supabase
        .from('Empresa')
        .insert(empresa)
        .then((data) => {
            console.log(data)
        })

        return empresa;
    }

    update(empresa: EmpresaDto) {
        const supabase = createClient(
            'https://lwwluvsthpjmvjuurslh.supabase.co/', 
            apiKey
        )
  
        supabase
        .from('Empresa')
        .update({
            razao_social: empresa.razao_social,
            nome_fantasia: empresa.nome_fantasia,
            email: empresa.email,
            cnpj: empresa.cnpj,
            responsavel: empresa.responsavel,
            whatsapp: empresa.whatsapp,
            celular: empresa.celular,
            telefone_fixo: empresa.telefone_fixo,
            rua: empresa.rua,
            rua_numero: empresa.rua_numero,
            cidade: empresa.cidade,
            estado: empresa.estado,
        })
        .eq('id', empresa.id)
        .then((data) => {
            console.log(data)
        })
    }

    delete(empresa: EmpresaDto) {
        const supabase = createClient(
            'https://lwwluvsthpjmvjuurslh.supabase.co/', 
            apiKey
        )

        supabase
        .from('Empresa')
        .delete()
        .eq('id', empresa["id"])
        .then((data) => {
            console.log(data)
        })
    }

    async findAll(): Promise<EmpresaDto[]> {
        const supabase = createClient(
          'https://lwwluvsthpjmvjuurslh.supabase.co/', 
          apiKey
        )

        const empresas = []
        const { data, error } = await supabase
        .from('Empresa')
        .select('*')

        data.forEach((empresa) => {
            empresas.push(new EmpresaDto(empresa))
        })

        return empresas
    }
}
