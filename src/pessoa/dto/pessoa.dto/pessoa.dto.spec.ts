import { PessoaDto } from './pessoa.dto';

describe('PessoaDto', () => {
  it('should be defined', () => {
    expect(new PessoaDto()).toBeDefined();
  });
});
