export class PessoaDto {
    id
    created_at
    nome
    email
    data_de_nascimento
    sexo
    profissao
    empresa
    whatsapp
    celular
    rua
    rua_numero
    cidade
    estado

    constructor(databasePessoa) {
        this.id = databasePessoa.id
        this.created_at = databasePessoa.created_at
        this.nome = databasePessoa.nome
        this.email = databasePessoa.email
        this.data_de_nascimento = databasePessoa.data_de_nascimento
        this.sexo = databasePessoa.sexo
        this.profissao = databasePessoa.profissao
        this.empresa = databasePessoa.empresa
        this.whatsapp = databasePessoa.whatsapp
        this.celular = databasePessoa.celular
        this.rua = databasePessoa.rua
        this.rua_numero = databasePessoa.rua_numero
        this.cidade = databasePessoa.cidade
        this.estado = databasePessoa.estado
    }
}
