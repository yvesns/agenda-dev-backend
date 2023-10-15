import { Injectable } from '@nestjs/common';
import { PessoaDto } from 'src/pessoa/dto/pessoa.dto/pessoa.dto';
import { createClient } from '@supabase/supabase-js'

const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3d2x1dnN0aHBqbXZqdXVyc2xoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcwMjg0NjIsImV4cCI6MjAxMjYwNDQ2Mn0.eC9fPng3kLaajJfmv-rm0rFXkJj9bV0Ny95PTFFsBSw'

@Injectable()
export class PessoaService {
    public pessoas: PessoaDto[] = [];

    create(pessoa: PessoaDto): PessoaDto {
        const supabase = createClient(
            'https://lwwluvsthpjmvjuurslh.supabase.co/',
            apiKey
        )
  
        supabase
        .from('Pessoa')
        .insert(pessoa)
        .then((data) => {
            console.log(data)
        })

        return pessoa;
    }

    update(pessoa: PessoaDto) {
        const supabase = createClient(
            'https://lwwluvsthpjmvjuurslh.supabase.co/', 
            apiKey
        )
  
        supabase
        .from('Empresa')
        .update({
            nome: pessoa.nome,
            email: pessoa.email,
            data_de_nascimento: pessoa.data_de_nascimento,
            sexo: pessoa.sexo,
            profissao: pessoa.profissao,
            empresa: pessoa.empresa,
            whatsapp: pessoa.whatsapp,
            celular: pessoa.celular,
            rua: pessoa.rua,
            rua_numero: pessoa.rua_numero,
            cidade: pessoa.cidade,
            estado: pessoa.estado,
        })
        .eq('id', pessoa.id)
        .then((data) => {
            console.log(data)
        })
    }

    delete(pessoa: PessoaDto) {
        const supabase = createClient(
            'https://lwwluvsthpjmvjuurslh.supabase.co/', 
            apiKey
        )

        supabase
        .from('Pessoa')
        .delete()
        .eq('id', pessoa["id"])
        .then((data) => {
            console.log(data)
        })
    }

    async findAll(): Promise<PessoaDto[]> {
        const supabase = createClient(
          'https://lwwluvsthpjmvjuurslh.supabase.co/', 
          apiKey
        )

        const pessoas = []
        const { data, error } = await supabase
        .from('Pessoa')
        .select('*')

        data.forEach((pessoa) => {
            pessoas.push(new PessoaDto(pessoa))
        })

        return pessoas
    }

    async find(pessoa): Promise<PessoaDto[]> {
        const supabase = createClient(
          'https://lwwluvsthpjmvjuurslh.supabase.co/', 
          apiKey
        )

        const pessoas = []
        const { data, error } = await supabase
        .from('Pessoa')
        .select('*')
        .eq('nome', pessoa.nome)
        .eq('profissao', pessoa.profissao)
        .eq('cidade', pessoa.cidade)

        data.forEach((pessoa) => {
            pessoas.push(new PessoaDto(pessoa))
        })

        return pessoas
    }
}
