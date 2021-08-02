// tslint:disable-next-line: no-namespace
export namespace EnumEscolaridade {
  export enum Enum {
    EDUCACAO_INFANTIL = 'Educação infantil',
    FUNDAMENTAL = 'Fundamental',
    MEDIO = 'Médio',
    SUPERIOR = 'Superior (Graduação)',
    POS_GRADUACAO = 'Pós-graduação',
    MESTRADO = 'Mestrado',
    DOUTORADO = 'Doutorado',
  }

  export function descricoes() {
    const descricoesEnum = [];
    Object.keys(Enum).forEach(i => descricoesEnum.push(Enum[i]));

    return descricoesEnum;
  }

  export function obterValor(descricao: string) {
    return Object.keys(Enum).find(i => Enum[i] === descricao);
  }

  export function obterDescricao(key: string) {
    const descricao = Object.keys(Enum).find(status => status === key) as Enum;
    return Enum[descricao];
  }
}
