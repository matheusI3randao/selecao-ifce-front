import HabilidadeDTO from '../../habilidade/models/habilidade-dto.interface';

export default interface IPessoaOuputDTO {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  habilidades: HabilidadeDTO[];
}
