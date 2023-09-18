## O que é o projeto

Projeto realizado para o Hackaton OAB - Minas Gerais para o suporte de advogados, ficando em 2º lugar na competição.
A idealização do projeto é um sistema que utiliza jurimetria para apresentar insights sobre um processo judicial. O presente repositório lida diretamente com a UI da solução.


<img width="900" alt="progno-tela-1" src="https://github.com/thiagoaramizo/progno/assets/48260314/6412db1a-0b2f-4ad4-8630-9d3ec2fc1431">

## Para acessar o projeto

Para executar o projeto é necessário ter o `node` instalado em sua versão mínima `v16.17.0` com o gerenciador de pacotes `npm@9.7.1`.
Após clonar o projeto em sua máquina utilize o comando abaixo:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Abra o endereço [http://localhost:3000](http://localhost:3000) no seu navegador para acessar o conteúdo.

Se preferir, acesse a versão on-line do projeto em [https://progno.vercel.app](https://progno.vercel.app). Neste caso não é necessário instalar nada em seu computador.

## Navegando pelo projeto

O projeto visa oferecer um prognóstico de custos (financeiros e temporais) de um processo e estimar seu resultado, com base no histórico de processos similares. Para isso é necessário o preenchimento de algumas variáveis, em 3 etapas simples, conforme as telas abaixo:

### 1) Tribunal, Comarca ou região e jurisdição
<img width="900" alt="progno-tela-2" src="https://github.com/thiagoaramizo/progno/assets/48260314/a89538d2-857f-4071-8408-d3a7f6850b1a">

### 2) Classe processual e assunto
<img width="900" alt="progno-tela-3" src="https://github.com/thiagoaramizo/progno/assets/48260314/85e005ac-ad8e-4107-953f-92801f76651f">

A próxima etapa é a revisão das informações apresentadas:

### 3) Revisão das informações
<img width="900" alt="progno-tela-4" src="https://github.com/thiagoaramizo/progno/assets/48260314/a26cf031-bb4e-4d20-910e-cb60dc95da52">

## Resultado para o usuário

Como resultado o usuário poderá receber o prognóstico conforme os dados apresentados:

<img width="900" alt="progno-tela-5" src="https://github.com/thiagoaramizo/progno/assets/48260314/63e27045-079b-44eb-bf0d-24af4b7e8dc6">

Os resultados são apresentados de forma a possibilitar a fácil compreensão das informações, utilizando técnicas de Legal Design:

<img width="900" alt="progno-relatorio-1" src="https://github.com/thiagoaramizo/progno/assets/48260314/45aa71ee-bb7a-44b4-868d-c647c4a9e11c">

<img width="900" alt="progno-relatorio-2" src="https://github.com/thiagoaramizo/progno/assets/48260314/c4d32918-66a4-4038-96d0-96ff55170a1f">

<img width="900" alt="progno-relatorio-3" src="https://github.com/thiagoaramizo/progno/assets/48260314/7bd97c93-ee32-43e5-aee6-045f680abaca">

<img width="900" alt="progno-relatorio-4" src="https://github.com/thiagoaramizo/progno/assets/48260314/b8e581ed-9017-4fc6-a474-e80f6ba57995">


## Tecnologias utilizada no front-end

Para a realização deste projeto as principais bibliotecas utilizadas foram:
- [Next.js](https://nextjs.org)
- [Tailwindcss](https://tailwindcss.com)

