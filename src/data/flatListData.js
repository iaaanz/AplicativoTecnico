var flatListData = [
  {
    id: 1,
    title: 'O que é?',
    description: 'Informações importantes referente aos testes de software',
    title1: ['O que é um teste de software?', '\n \n'],
    text1:
      'Funciona como um mecanismo de verificação de desenvolvimento que indica  falhas e bugs a serem corrigidos. Garantindo a qualidade do produto na hora da entrega final.',

    title2: ['\n \n', 'Quem são os responsáveis pela área?', '\n \n'],
    text2:
      'Conhecidos como Homologadores, Analistas de Testes ou Técnicos em Testes, esses profissionais atuam por meio de(a):',
    topics: [
      '\n \n',
      '•  Avaliação de Requisitos',
      '\n',
      '•  Avaliação de Interface',
      '\n',
      '•  Avaliação de Projeto Técnico',
      '\n',
      '•  Verificações de Dados',
      '\n',
      '•  Testes de Performance',
      '\n',
      '•  Testes Funcionais de Aplicação',
      '\n \n',
    ],
    text3: [
      'Sendo assim responsáveis pela realização de inúmeras verificações e avaliações como as citadas.',
      '\n \n',
    ],
    title3: ['Qual é o propósito do teste de software?', '\n \n'],
    text4:
      'Atua como meio para investigação de dados e processos, com o intuito de  retratar falhas sob o processo de desenvolvimento / qualidade do  funcionamento prático do software. Garantindo sua efetividade funcional, quando entregue ao cliente.',
  },
  {
    id: 4,
    title: 'Teste de Caixa-preta',
    description:
      'Testar todas as entradas e saídas desejadas. Não se está preocupado com o código, cada saída indesejada é visto como um erro.',
    textTitle: 'OBJETIVO: ',
    text:
      'Prioriza aspectos externos como funções que deverão ser desempenhadas pelo sistema  Reflete  a óptica do usuário, que está interessado em se servir do programa sem considerar os detalhes de sua construção Um exemplo simples de aplicação é verificar a consistência de dados de interface, realizando entradas erradas de dados observando o comportamento do programa',
  },
  {
    id: 5,
    title: 'Teste de Regressão',
    description:
      'Toda vez que algo for mudado, deve ser testada toda a aplicação novamente.',
    textTitle: 'OBJETIVO: ',
    text:
      'Testa o efeito de atualizações no sistema. Consiste na aplicação de versões mais recente do software, para garantir que não surgiram novos defeitos em componentes já analisados. Atualmente, cada vez mais empresas buscam a diminuição dos custos nas atividades de produção e mais agilidade na fase de teste para trazer o produto para o mercado de maneira rápida e com qualidade. Nesse cenário, metodologias ágeis de desenvolvimento ganham evidência (como os Testes de Regressão), fornecendo respostas rápidas às mudanças e colaborando para com o cliente ao invés de seguir planos rígidos e negociações contratuais.',
  },
  {
    id: 6,
    title: 'Teste de Carga',
    description:
      'Verifica o funcionamento da aplicação com a utilização de uma quantidade grande de usuários simultâneos.',
    textTitle: 'OBJETIVO: ',
    text:
      'Verificar se a aplicação funcionará corretamente com vários usuários simultâneos ao mesmo tempo. Realizado para verificar qual o volume de transações, acessos simultâneos ou usuários que um servidor/software/sistema suporta, medindo assim o volume de carga das informações transpostas. ',
  },
  {
    id: 7,
    title: 'Teste de Estresse',
    description:
      'Testar a aplicação sem situações inesperadas. Testar caminhos, às vezes, antes não previstos no desenvolvimento/documentação.',
    textTitle: 'OBJETIVO: ',
    text:
      'Submeter o software a situações extremas. Baseia-se em testar os limites do software e avaliar seu comportamento. Assim, avalia-se até quando o software pode ser exigido e quais as falhas (se existirem) decorrentes do teste Os testes de stress são fundamentais em aplicações em que a eficiência seja uma característica primordial',
  },
  {
    id: 8,
    title: 'Teste de Performance',
    description:
      'Verifica se o tempo de resposta é o desejado para o momento de utilização da aplicação. ',
    textTitle: 'OBJETIVO: ',
    text:
      'Testar se o software está respondendo de acordo com o tempo desejado naquele momento. Consiste em avaliar a capacidade de resposta, robustez, disponibilidade, confiabilidade e escalabilidade de uma aplicação, conforme a quantidade de conexões simultâneas, avaliando seu desempenho em alta carga de trabalho e considerando seu comportamento em circunstâncias normais.',
  },
  {
    id: 9,
    title: 'Teste de Sistema',
    description:
      'O teste de sistema tem por objetivo testar o sistema por completo. O sistema é testado com tudo ligado: batch jobs, banco de dados, serviços web, etc.. Este teste coloca a prova o sistema por completo.',
    textTitle: 'OBJETIVO: ',
    text:
      'Testar o sistema por completo. Na prática eles são executados em condições similares àquelas que o usuário irá utilizar. Esse teste verifica se os componentes são compatíveis, se eles interagem corretamente, se transferem os dados certos no momento certo,etc. É uma fase do processo de teste de software e de hardware em que o sistema já completamente integrado é verificado dentro do ambiente de produção',
  },
  {
    id: 10,
    title: 'Teste de Configuração',
    description:
      'Testar se a aplicação funciona corretamente em diferentes ambientes de hardware ou de software. ',
    textTitle: 'OBJETIVO: ',
    text:
      'Testar se a aplicação funciona corretamente em qualquer espaço de software e hardware. Avalia a capacidade de resposta, robustez, disponibilidade, confiabilidade e escalabilidade de uma aplicação, conforme a quantidade de conexões simultâneas, avaliando seu desempenho em alta carga de trabalho e considerando seu comportamento em circunstâncias normais. Em particular, garante que o software não apresente problemas ou indisponibilidade em condições de insuficiência dos recursos computacionais',
  },
  {
    id: 11,
    title: 'Teste Beta',
    description:
      'O teste beta é implementado por usuários, geralmente com pouco ou nenhum gerenciamento por parte da organização de desenvolvimento. O teste beta é o mais subjetivo de todas as estratégias de teste de aceitação.',
    textTitle: 'OBJETIVO: ',
    text:
      'Verificar detalhes de dados de acordo com as escolhas do testador. Cada testador é responsável por criar o próprio ambiente, selecionar os dados correspondentes e determinar as funções, os recursos ou as tarefas a serem exploradas. Implementado por usuários, geralmente com pouco ou nenhum gerenciamento por parte da organização de desenvolvimento (ou outra que não seja do usuário final). ',
  },
  {
    id: 12,
    title: 'Teste de Segurança',
    description:
      'Testar a segurança da aplicação das mais diversas formas. Utilizar os diversos papéis, perfis, permissões, para navegar no sistema.',
    textTitle: 'OBJETIVO: ',
    text:
      'Garantir que o funcionamento da aplicação esteja exatamente como especificado. A segurança da aplicação vem a ser das mais diversas e “inusitadas” formas possíveis, a utilização de diversos papéis, perfis e permissões do sistema para verificar o comportamento do mesmo  mediante as mais diversas tentativas ilegais de acesso, visando possíveis vulnerabilidades. Pode auxiliar também na definição de um plano de contingência, visando determinar qual precaução será tomada contra os possíveis ataques.',
  },
  {
    id: 13,
    title: 'Teste de Aceitação Formal e Informal',
    description:
      'O teste de aceitação formal é um processo altamente gerenciado e costuma ser uma extensão do teste do sistema. Os testes são planejados e projetados com o mesmo cuidado e no mesmo detalhe que o teste do sistema.',
    textTitle: 'OBJETIVO: ',
    text:
      'Planejar e projetar o sistema nos mínimos detalhes gerenciando suas extensões. Aproximar o cliente final do resultado esperado pelo sistema além de auxiliar a equipe de desenvolvimento na compreensão dos recursos esperados pelo cliente, para garantir que a entrega do software esteja nos padrões com o que foi solicitado no início do projeto. ',
  },
];
export default flatListData;
