var flatListData = [
  {
    key: '1',
    title: 'Teste de Caixa-preta',
    description:
      'Testar todas as entradas e saídas desejadas. Não se está preocupado com o código, cada saída indesejada é visto como um erro.',
    text:
      'O Teste de Caixa-Preta ou Teste Funcional, também é usado na engenharia, no problema de identificação de sistemas, e advém do fato de que ao analisar o comportamento de um objeto, ignora-se totalmente sua construção interna. Nesse tipo de teste, uma determinada função g() que não aceita valores negativos, mas não possui tratamento adequado de exceção, poderia ser testada para cem mil valores diferentes no intervalo [0...106], sem que fosse detectado algum defeito. O teste de caixa-preta é baseado nos requisitos funcionais do software. Como não há conhecimento sobre a operação interna do programa, o avaliador se concentra nas funções que o software deve desempenhar. A partir da especificação são determinadas as saídas esperadas para certos conjuntos de entrada de dados. Esse tipo de teste reflete, de certa forma, a óptica do usuário, que está interessado em se servir do programa sem considerar os detalhes de sua construção. Comparando a outros tipos de teste, este é relativamente mais simples. O teste é particularmente útil para revelar problemas, tais como: [TOPICOS] funções incorretas ou omitidas/ erros de interface/ erros de comportamento ou desempenho/ erros de iniciação e término.[/TOPICOS] Um exemplo simples de aplicação é verificar a consistência de dados de interface. Um exemplo de aplicação do teste é fazer entradas erradas de dados e observar o comportamento do programa. Ao realizar o teste, o avaliador deve buscar simular erros que um usuário pode cometer e que fogem da especificação do programa: [TOPICOS] usar como data de nascimento a data atual ou uma data futura/ preencher campos com um número insuficiente de caracteres (por exemplo, digitar apenas “123” para CPF ou telefone/ códigos de CPF ou de CEP errados/ preencher campos como nome com valores muito grandes (por exemplo, copiar- colar um texto de 10 Kbytes num campo)/ deixar campos de entrada vazios ou preenchê-los com espaços brancos ou zeros(sobretudo campos de preenchimento obrigatório)/ usar valores negativos para números, como valor a pagar/  não respeitar tipos de dados (por exemplo, digitar letras ou símbolos em um campo “idade”.[/TOPICOS] Além da interface, pode-se verificar a execução de funções ou tarefas inteiras. Alguns exemplos de testes são: [TOPICOS]   duplicar informações (por exemplo, tentar cadastrar duas vezes exatamente os mesmos dados)/ imprimir relatórios para bases de dados vazias/ procurar registros inexistentes.',
  },
  {
    key: '2',
    title: 'Teste de Regressão',
    description:
      'Toda vez que algo for mudado, deve ser testada toda a aplicação novamente.',
    text:
      'O teste de regressão é uma técnica do teste de software que consiste na aplicação de versões mais recente do software, para garantir que não surgiram novos defeitos em componentes já analisados. Se, ao juntar o novo componente ou as suas alterações com os componentes restantes do sistema surgirem novos defeitos em componentes inalterados, então considera-se que o sistema regrediu. Muita s vezes são usadas ferramentas específicas para o teste de regressão, chamadas de ferramentas de automação. Elas conseguem um resultado mais exato do teste executando exatamente os passos seguidos para o teste das primeiras versões já que elas permitem a gravação do teste. Atualmente, cada vez mais empresas buscam a diminuição dos custos nas atividades de produção e mais agilidade na fase de teste para trazer o produto para o mercado de maneira rápida e com qualidade . Nesse cenário, as metodologias ágeis de desenvolvimento ganham evidência, pois se destacam dos processos de desenvolvimento tradicionais devido, principalmente, ao fato de darem prioridade ao desenvolvimento de funcionalidades através de código executável ao invés da produção de extensa documentação, e ainda, respostas rápidas às mudanças e colaboração com o cliente ao invés de seguir planos rígidos e negociações contratuais.',
  },
  {
    key: '3',
    title: 'Teste de Carga',
    description:
      'Verifica o funcionamento da aplicação com a utilização de uma quantidade grande de usuários simultâneos.',
    text:
      'O teste de carga é realizado para verificar qual o volume de transações, acessos simultâneos ou usuários que um servidor/software/sistema suporta. Serve basicamente para medir o volume de carga suportado. Através desse procedimento é possível: [TOPICOS] Analisar a estabilidade de um servidor ou sistema em um período de grande carga de modo a estabelecer um limite de operação/ Medir o desempenho de um software mediante um grande fluxo de dados e informações/ Encontrar itens do sistema que podem vir a falhar ou incorrer em erros durante momentos de grande carga/ Evidenciar como o sistema se comporta enquanto a carga de informações vai aumentando, de modo a verificar lentidão, falhas, bugs etc/ Fornecer dados e informações para que o sistema/site seja melhorado e otimizado. Entre essas informações, temos o tempo de resposta das páginas.[/TOPICOS] Por exemplo, no gráfico abaixo vemos o resultado da execução de uma carga de 20 usuários e vemos que o tempo de resposta da página não ultrapassa os 3,5 segundos. [IMAGEM] ',
  },
  {
    key: '4',
    title: 'Teste de Estresse',
    description:
      'Testar a aplicação sem situações inesperadas. Testar caminhos, às vezes, antes não previstos no desenvolvimento/documentação.',
    text:
      'È  realizado para submeter o software a situações extremas. Basicamente, o teste de estresse baseia-se em testar os limites do software e avaliar seu comportamento. Assim, avalia-se até quando o software pode ser exigido e quais as falhas (se existirem) decorrentes do teste. Os testes de estresse são fundamentais em aplicações em que a eficiência seja uma característica importante. Por exemplo: [TOPICOS]servidores de arquivos e servidores web, que devem atender a solicitações de um grande número de clientes/ aplicações industriais, tais como o controle de uma refinaria de petróleo/ jogos de computador, que precisam de um desempenho aceitável para serem viáveis comercialmente.[/TOPICOS]Vamos considerar como exemplo a implementação de um servidor web utilizado em e-commerce. Ao estabelecer os requisitos do sistema, fixou-se um máximo de 5000 transações por minuto para uma determinada plataforma de execução. Um teste de estresse pode, então, ser feito para responder a várias perguntas: [TOPICOS] o sistema consegue atingir o objetivo?/ qual o número máximo de transações realmente possível?/ se a plataforma de execução se degradar (por exemplo, uma falha parcial de rede, falta de espaço em disco, etc.), como o sistema se comportará? [/TOPICOS]Em certos casos é preferível que a execução do programa seja mantida mesmo que se degrade, evitando uma parada completa. Um exemplo típico são sistemas financeiros. Possibilidades de falhas sob condições de operação difícil, como registrar operações incorretas, devem ser detectadas e evitadas. Um bom teste de estresse deve poder revelar essas informações aos avaliadores. Um exemplo de ferramenta que pode ser utilizada para um teste de estresse é o WinStress, da Ultra-X. Trata-se de um programa que permite reduzir artificialmente o desempenho de um computador, de acordo com a configuração desejada pelo avaliador. É possível variar parâmetros como carga de CPU, memória disponível, espaço em disco disponível e carga de rede.',
  },
  {
    key: '5',
    title: 'Teste de Performance',
    description:
      'Verifica se o tempo de resposta é o desejado para o momento de utilização da aplicação. ',
    text:
      'O Teste de Performance consiste em avaliar a capacidade de resposta, robustez, disponibilidade, confiabilidade e escalabilidade de uma aplicação, conforme a quantidade de conexões simultâneas, avaliando seu desempenho em alta carga de trabalho e considerando seu comportamento em circunstâncias normais.​ Em particular, o objetivo de tais experiências pode ser o de garantir que o software não apresente problemas ou indisponibilidade em condições de insuficiência dos recursos computacionais (como memória, processamento ou espaço em disco), quando trabalhando em alta concorrência ou sofrendo algum ataque de negação de serviço. Tipo de teste previsto na qualidade de software e teste de software.',
  },
  {
    key: '6',
    title: 'Teste de Sistema',
    description:
      'O teste de sistema tem por objetivo testar o sistema por completo. O sistema é testado com tudo ligado: batch jobs, banco de dados, serviços web, etc.. Este teste coloca a prova o sistema por completo.',
    text:
      'O teste de sistema tem por objetivo testar o sistema por completo. O sistema é testado com tudo ligado: batch jobs, banco de dados, serviços web, etc.. Este teste coloca a prova o sistema por completo. Na prática eles são executados em condições similares àquelas que o usuário irá utilizar. Esse teste verifica se os componentes são compatíveis, se eles interagem corretamente, se transferem os dados certos no momento certo,etc. É uma fase do processo de teste de software e de hardware em que o sistema já completamente integrado é verificado quanto a seus requisitos num ambiente de produção. Está no escopo da técnica de teste de caixa-preta, e dessa forma não requer conhecimento da estrutura (lógica) interna do sistema. É um teste mais limitado em relação aos testes de unidade e de integração, fases anteriores do processo de teste, pois se preocupa somente com aspectos gerais do sistema. O teste de sistema não se limita a testar somente requisitos funcionais, mas também requisitos não funcionais como a expectativa do cliente, e por isso inclui também técnicas não funcionais de teste. ',
  },
  {
    key: '7',
    title: 'Teste de Configuração',
    description:
      'Testar se a aplicação funciona corretamente em diferentes ambientes de hardware ou de software. ',
    text:
      'Verifica o comportamento do sistema em diferentes configurações de software e hardware. Testa se o software funciona no hardware a ser instalado e sob diferentes condições, como pouco espaço de memória, interrupções de rede, interrupções na instalação entre outros. Esse teste também pode ser implementado como um teste de desempenho do sistema.Exemplos: Navegadores, Servidores de aplicação, Banco de dados entre outros. ',
  },
  {
    key: '8',
    title: 'Teste Beta',
    description:
      'O teste beta é implementado por usuários, geralmente com pouco ou nenhum gerenciamento por parte da organização de desenvolvimento. O teste beta é o mais subjetivo de todas as estratégias de teste de aceitação.',
    text:
      'O teste beta é o menos controlado das três estratégias de teste de aceitação. No teste beta, a quantidade de detalhes, os dados e a abordagem adotadas são de inteira escolha do testador individual. Cada testador é responsável por criar o próprio ambiente, selecionar os dados correspondentes e determinar as funções, os recursos ou as tarefas a serem exploradas. Cada um deles é responsável por identificar seus próprios critérios para aceitar, ou não, o sistema em seu estado atual. O teste beta é implementado por usuários, geralmente com pouco ou nenhum gerenciamento por parte da organização de desenvolvimento (ou outra que não seja do usuário final). O teste beta é o mais subjetivo de todas as estratégias de teste de aceitação. Os benefícios dessa forma de teste são: [TOPICOS] O teste é implementado por usuários./Há grandes volumes de potenciais recursos de teste./ Há uma maior satisfação do cliente para aqueles que participam./ São revelados defeitos mais subjetivos que o teste de aceitação formal ou informal.[/TOPICOS] As desvantagens incluem: [TOPICOS]Talvez você não teste todas as funções ou os recursos./ É difícil medir o progresso do teste./ Os usuários podem se adaptar à forma como o sistema funciona e não encontrar ou relatar defeitos./ Os usuários podem se concentrar na comparação do novo sistema com um sistema legado, em vez de procurar defeitos./ Os recursos do teste de aceitação não estão mais sob o controle do projeto e podem ficar limitados./ Os critérios de aceitabilidade não são conhecidos./ São necessários recursos com suporte adicional para gerenciar os testadores beta. [/TOPICOS]',
  },
  {
    key: '9',
    title: 'Teste de Segurança',
    description:
      'Testar a segurança da aplicação das mais diversas formas. Utilizar os diversos papéis, perfis, permissões, para navegar no sistema.',
    text:
      'O Teste de Segurança tem como meta garantir que o funcionamento da aplicação esteja exatamente como especificado. Verifica também se o software se comporta adequadamente mediante as mais diversas tentativas ilegais de acesso, visando possíveis vulnerabilidades. Para isso, testa se todos os mecanismos de proteção embutidos na aplicação de fato a protegerão de acessos indevidos. É muito comum que as aplicações se tornem alvo de sujeitos que buscam provocar ações que possam prejudicar ou, até mesmo, beneficiar pessoas. Em função de situações como estas, o Teste de Segurança propõe demonstrar se a aplicação faz exatamente o que deve fazer ou se a aplicação não faz o que não deve ser feito. A execução do Teste de Segurança possibilita que dúvidas sobre prováveis vulnerabilidades do software sejam sanadas. Pode auxiliar também na definição de um plano de contingência, visando determinar qual precaução será tomada contra os possíveis ataques. É Utilizado em diversos papéis, perfis, permissões, para navegar no sistema.',
  },
  {
    key: '10',
    title: 'Teste de Aceitação Formal e Informal',
    description:
      'O teste de aceitação formal é um processo altamente gerenciado e costuma ser uma extensão do teste do sistema. Os testes são planejados e projetados com o mesmo cuidado e no mesmo detalhe que o teste do sistema.',
    text:
      '[TITULO]Formal: O teste de aceitação formal é um processo altamente gerenciado e costuma ser uma extensão do teste do sistema. Os testes são planejados e projetados com o mesmo cuidado e no mesmo detalhe que o teste do sistema. Os casos de teste escolhidos devem ser um subconjunto dos que foram realizados no teste do sistema. É importante não desviar de nenhum dos casos de teste escolhidos. Em muitas organizações, o teste de aceitação formal é totalmente automatizado.As tarefas e os produtos de trabalho são os mesmos do teste do sistema. Em algumas organizações, a organização de desenvolvimento (ou o grupo de teste independente), com os representantes da organização do usuário final, executa o teste de aceitação. Em outras organizações, o teste de aceitação é executado inteiramente pela organização do usuário final ou por um grupo objetivo de pessoas por ela escolhidas.Os benefícios dessa forma de teste são: [TOPICOS] As funções e os recursos a serem testados são conhecidos./ Os detalhes dos testes são conhecidos e podem ser medidos./ Os testes podem ser automatizados, o que permite o teste de regressão./ O progresso dos testes pode ser medido e monitorado./ Os critérios de aceitabilidade são conhecidos.[/TOPICOS]As desvantagens incluem: [TOPICOS] São necessários recursos e planejamento significativos./ Os testes podem ser uma nova implementação dos testes do sistema./ O teste não pode revelar defeitos subjetivos no software, já que você está procurando apenas os defeitos esperados.[/TOPICOS] [TITULO]Informal:No teste de aceitação informal, os procedimentos para executar o teste não são definidos com tanto rigor como no teste de aceitação formal. As funções e as atividades de negócios a serem exploradas são identificadas e documentadas, mas não há casos de teste específicos para seguir. O testador individual determina o que deve ser feito. Esta abordagem do teste de aceitação não é controlada como teste formal e é mais subjetiva que o tipo formal.O teste de aceitação informal é realizado com mais freqüência pela organização do usuário final.Os benefícios dessa forma de teste são: [TOPICOS] As funções e os recursos a serem testados são conhecidos./ O progresso dos testes pode ser medido e monitorado./ Os critérios de aceitabilidade são conhecidos./ Serão revelados defeitos mais subjetivos do que no teste de aceitação formal.[/TOPICOS] As desvantagens incluem:[TOPICOS] São necessários recursos, planejamento e recursos de gerenciamento./ Você não tem controle sobre os casos de teste que são utilizados./ Os usuários podem se adaptar à forma como o sistema funciona e não encontrar defeitos./ Os usuários podem se concentrar na comparação do novo sistema com um sistema legado, em vez de procurar defeitos./ Os recursos do teste de aceitação não estão mais sob o controle do projeto e podem ficar limitados.[/TOPICOS]',
  },
];

export default flatListData;
