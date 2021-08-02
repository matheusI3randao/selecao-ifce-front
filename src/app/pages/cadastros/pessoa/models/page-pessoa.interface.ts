import IPessoaListagemDTO from './pessoa-listagem-dto.interface';

export interface PagePessoa {
  content: IPessoaListagemDTO[];
  totalPages: number;
  totalElements: number;
}
