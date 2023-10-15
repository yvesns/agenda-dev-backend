export class EmpresaDto {
    id
    created_at
    razao_social
    nome_fantasia
    email
    cnpj
    responsavel
    whatsapp
    celular
    telefone_fixo
    rua
    rua_numero
    cidade
    estado

    constructor(databaseEmpresa) {
        this.id = databaseEmpresa.id
        this.created_at = databaseEmpresa.created_at
        this.razao_social = databaseEmpresa.razao_social
        this.nome_fantasia = databaseEmpresa.nome_fantasia
        this.email = databaseEmpresa.email
        this.cnpj = databaseEmpresa.cnpj
        this.responsavel = databaseEmpresa.responsavel
        this.whatsapp = databaseEmpresa.whatsapp
        this.celular = databaseEmpresa.celular
        this.telefone_fixo = databaseEmpresa.telefone_fixo
        this.rua = databaseEmpresa.rua
        this.rua_numero = databaseEmpresa.rua_numero
        this.cidade = databaseEmpresa.cidade
        this.estado = databaseEmpresa.estado
    }
}
