export const tribunais = [
  {
    nome: 'Tribunal de Justiça do Estado de Minas Gerais',
    sigla: 'TJMG',
    ufs: ['MG'],
    id: '3c3efb8e-0b3c-11ee-be56-0242ac120002',
    cidades: [
      {
        nome:'Uberlândia',
        uf: ['MG'],
        id: 'fd3efb8e-0b3c-11ee-be56-0242ac120002',
        jurisdicoes: [
          {
            nome: '1º Vara Cível da Comarca de Uberlândia',
            id: '1'
          },
          {
            nome: '3º Vara Cível da Comarca de Uberlândia',
            id: '4'
          },
          {
            nome: '10º Vara Cível da Comarca de Uberlândia',
            id: '59'
          },
        ]
      },
    ]
  },
  {
    nome: 'Tribunal Regional Federal da 6º Região',
    sigla: 'TRF6',
    ufs: ['MG'],
    id: '738043c8-0b3c-11ee-be56-0242ac120002',
    cidades: [
      {
        nome:'Uberlândia',
        uf: ['MG'],
        id: 'fd3efb8e-0b3c-11ee-be56-0242ac120002',
        jurisdicoes: [
          {
            nome: '1º Vara Federal de Uberlândia',
            id: '3'
          },
        ]
      }]
  },
  {
    nome: 'Tribunal Regional do Trabalho da 3º Região',
    sigla: 'TRT3',
    ufs: ['MG'],
    id: '65843c8d-0b3c-11ee-be56-0242ac120002',
    cidades: [
      {
        nome:'Uberlândia',
        uf: ['MG'],
        id: 'fd3efb8e-0b3c-11ee-be56-0242ac120002',
        jurisdicoes: [
          {
            nome: '1º Vara do Trabalho de Uberlândia',
            id: '5'
          },
        ]
      }]
  },
]

export const classesProcessuais = [
  { 
    nome: 'Responsabildiade Civil',
    codigo: 10431,
    id: 10431,
    assuntos: [
      {
        nome: "Indenização por Dano Moral",
        codigo: 10433,
        id: 10433,
      },
      {
        nome: "Acidente de Trânsito",
        codigo: 10435,
        id: 10435,
      },
      {
        nome: "Direito de Imagem",
        codigo: 10437,
        id: 10437,
      },
      {
        nome: "Erro Médico",
        codigo: 10434,
        id: 10434,
      },
    ]
  }
]

export const prognostico = {
  custasIniciais: 1000,
  honorariosMinimos: 3000,
  taxaManutencao: 30,
  tempoEstimado: {
    contestacao: 35,
    aij: 245,
    sentenca: 294,
  },
  sentenca: {
    procedencia: 'parcial',
    indicador: 0.5647,
    valor: 5320
  }
}