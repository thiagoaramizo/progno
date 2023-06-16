export interface TribunalType {
    nome: string,
    sigla: string,
    ufs: string,
    id: string,
    cidades: CidadeType[]
}

export interface CidadeType {
  nome: string,
  uf: string,
  id: string,
  jurisdicoes: JurisdicaoType[]
}

export interface JurisdicaoType {
  nome: string,
  id: string
}
 
export interface ClasseType{
  nome: string,
  codigo: number | string,
  id: number | string,
    assuntos: 
      {
        nome: string,
        codigo: number | string,
        id: number | string,
      }[],
}

export interface PrognosticoType {
  tribunal: TribunalType
  classe: ClasseType
}


export interface prognosticoResultadoType {
  custasIniciais: number,
  honorariosMinimos: number,
  taxaManutencao: number,
  tempoEstimado: {
    contestacao: number,
    aij: number,
    sentenca: number,
  },
  sentenca: {
    procedencia: string,
    indicador: number,
    valor: number
  }
}
