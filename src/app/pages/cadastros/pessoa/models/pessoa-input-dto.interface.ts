import HabilidadeDTO from '../../habilidade/models/habilidade-dto.interface';

export default interface IPessoaInputDTO {
  id?: number;
  cpf: string;
  nome: string;
  dataNascimento: Date;
  email?: string;
  escolaridade: string;
  observacao?: string;
  habilidades: HabilidadeDTO[];
}
