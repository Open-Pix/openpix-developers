---
id: security-guidelines
title: Diretrizes de Segurança
---

*Versão: Março de 2021*


*Histórico do documento*

| Data  | Descrição | Autor | Revisores |
| -  | - | - | - |
| Março de 2021 | Notas de banco de dados corrigidas, melhorar notas de Infosec | ANB | SIBS |
| Janeiro de 2021 | Primeira versão | JCB | RAT, SIBS |


## Estratégia & Guia de desenvolvimento de Software Seguro

Somos uma plataforma digital como tal, nossa segurança estará fortemente relacionada a como: Projetar, Codificar, Construir, Liberar Código para produção.

Código de qualidade significa menos riscos e maior segurança.

## Princípios de Segurança

**ACREDITAMOS QUE A SEGURANÇA NÃO É NEGOCIÁVEL E DEVE ESTAR PRESENTE, TESTADA E APLICADA EM TODOS OS ASPECTOS E ETAPAS DO PRODUTO.** 

**A SEGURANÇA DEVE ESTAR PRESENTE EM DOCUMENTOS, CÓDIGO, CÓDIGO FONTE, TESTES, MENSAGENS, ANÁLISES, IMAGENS OU QUALQUER OUTRA INFRAESTRUTURA DIGITAL OU FÍSICA USADA PARA FORNECER SERVIÇOS AOS NOSSOS CLIENTES.**

### Propriedade do código

Os desenvolvedores devem agir como proprietários e guardiões do código que constroem.

As equipes de desenvolvimento devem operar em equipes. Permitir que os desenvolvedores sejam proprietários e responsáveis ​​pelo que codificam.

O desenvolvimento só começa depois que a linha de base da interface do usuário e da experiência (UI / UX) é concluída. 

Codificamos apenas quando requisitos e resultados claros são definidos. Os desenvolvedores são encorajados, têm permissão e espera-se que desafiem e até recusem designs pouco claros ou diretrizes enganosas.

### Construção contínua

Contaremos fortemente com a construção e integração contínuas.

Assim que o desenvolvimento de uma nova versão for iniciado, ela será disponibilizada para teste. Somente após a aprovação, ele será enviada para o ambiente de produção.

Ao codificar para o aplicativo móvel, as plataformas IOS e Android são criadas simultaneamente, enrolando na estrutura React Native. Os recursos e o escopo de cada sprint serão definidos em conjunto com a equipe de Produto.

Esta abordagem permite um aprendizado rápido e contínuo sobre as funcionalidades do App, bem como ajustes e correções de possíveis erros de forma ágil.

Um sprint só termina depois que o código chega à produção.

## Segurança de Front End 

### Segurança de aplicativos móveis
 
Nossos aplicativos são recursos importantes para nossos clientes. No entanto, não controlamos toda a cadeia de distribuição de aplicativos móveis. Os dispositivos podem ser comprometidos, os downloads podem ser alterados, nossos aplicativos podem ser comprometidos por terceiros e transformados em vetores de ataque de segurança em potencial. A fim de garantir a segurança do aplicativo irá cobrir vários requisitos de segurança em relação ao ciclo de vida do aplicativo: Desenvolvimento, Teste, Lançamento e Uso. Cada etapa terá um escopo separado e um conjunto de requisitos como parte de nossas rotinas de segurança.

### Premissas de segurança de APPs

**NÃO ACREDITE EM NINGUÉM**

Os dispositivos podem ser comprometidos, adulterados, alterados, infectados com vírus. O sistema operacional do dispositivo, nem o hardware e sua estrutura de segurança não são confiáveis. Por exemplo, os certificados raiz podem ser injetados, forjados ou removidos. Chaves de usuário podem ser comprometidas.

**A CAMADA DE REDE PODE SER COMPROMETIDA**

A comunicação entre a nosso App e o nosso próprio backend pode ser comprometida. Não vamos confiar na camada de rede que os utilizadores da nossa plataforma. Exemplos: ataque man in the middle.

**PEGADA MÍNIMA**

O Front-end consumirá apenas o que precisa, apenas quando necessário, deixando espaço mínimo para trás. Os dados serão solicitados lentamente e usados ​​somente quando necessário. Após uso o front-end deve descartar dados.



## Requisitos de segurança de APPs

| Item | Descrição |
| - | - |
| **Simplificação de código** | A simplificação do código reduz a área de cobertura do código que precisa ser testado e certificado. Isso reduz os riscos de incompatibilidade de código.<br/><br/> Dentro do escopo do aplicativo móvel, os aplicativos IOS e Android compartilham o mesmo repositório, reutilizando a maior parte do código. Isso é possível através do React Native, a principal linguagem de programação para Apps.<br/><br/> Essa estratégia reduz a complexidade do código enquanto mantém uma ótima experiência do cliente. |
| **Diretrizes de qualidade de código** | O desenvolvimento de aplicativos deve usar as práticas recomendadas de código.<br/><br/><ul><li>ES7</li> <li>Automatic Lint</li> <li>[Unit Testing]</li><li>Asynchronous functions (async/await)</li><li>Modern component rendering</li><li>Relay Modern.</li></ul>|
| **Processo de compilação para produção** | A compilação final (compilação de produção) deve ser sempre gerada pelo sistema [CI/CD].<br/><br/> Nenhuma intervenção humana é realizada ao criar o build final que irá para o ambiente de produção |


## Segurança na web

A maioria de nossos clientes se conecta à plataforma usando navegadores regularmente. A Web é um componente chave da plataforma e está amplamente exposta na Internet.

A Web é um potencial vetor de ataques à segurança.

A fim de garantir que a segurança da web abranja vários requisitos de segurança em relação ao ciclo de vida do aplicativo: Desenvolvimento, teste, lançamento e uso. Cada etapa terá um escopo separado e um conjunto de requisitos como parte de nossas rotinas de segurança.

### Requisitos de segurança da web

| Item | Descrição |
| - | - |
| **Simplificação de código** | A Web usa uma única base de código no React. O React permite que os componentes sejam construídos como tijolos de lego. Cada componente pode ser testado individualmente.<br/><br/>A simplificação reduz os riscos de incompatibilidade de código. |
| **Diretrizes de código** | O aplicativo deve usar as práticas recomendadas de código de desenvolvimento.<br/><br/> <ul><li>ES7</li><li>Automatic Lint</li><li>[Unit Testing]</li><li>Modern component rendering</li></ul> |
| **Processo de construção** | A compilação final (compilação de produção) deve ser sempre gerada pelo sistema [CI/CD].<br/><br/> O build é gerado em uma plataforma automatizada. Depois que o código é compilado, ele é movido para um registro de contêiner privado. O registro é consumido pelo Agente Kubernetes, que recarregará o contêiner diretamente do registro. |




## Política de teste

Os testes são um elemento chave para a qualidade e segurança do código.

Nossa política de testes exige que o código usado na produção seja acompanhado de seus respectivos testes. Além de seguir boas práticas de desenvolvimento, sempre escrevemos os testes primeiro, antes de criar linhas de código.

### Testes automatizados

O código é sempre aceito se fornecido com testes de unidade relevantes aplicáveis. A melhor prática espera; Escreva os testes primeiro, depois o código.

Para cada commit, os testes serão executados novamente. Sempre usamos testes contínuos e automatizados. Os testes automatizados são executados em nossa plataforma de [CI/CD].

Os testes serão executados automaticamente, mesmo se o novo código não for aplicável ao repositório principal.

Além disso, a equipe de desenvolvimento recebe, em tempo real, o resultado de todos os testes.

### Testes humanos

Todas as versões terão uma revisão final manual, executada por uma pessoa usando o ambiente de teste.


### Teste de tipados. Validação de código durante o desenvolvimento
 
O código JavaScript usará a estrutura de validação usando código tipado baseado em [TypeScript]. Esta ferramenta ajuda a validar a qualidade do código no momento da edição e avisa o desenvolvedor se forem encontrados erros de consistência. O uso do [TypeScript] é extremamente importante para atender a uma premissa básica deste projeto: Reutilização de código. 

Os componentes do código só podem ser reutilizados com qualidade se, em sua origem, declararem de forma clara e concisa quais dados esperam receber e / ou produzir.

### Revisão de código

Cada desenvolvedor da equipe tem seu revisor par, ou seja, outro desenvolvedor que não participou do desenvolvimento do código atuará como levantador de barreiras realizando a revisão do código de forma crítica e construtiva.

Os repositórios devem ser privados, as ramificações são protegidas. Cada confirmação deve ser executada usando uma solicitação pull. As solicitações pull só serão mescladas se dois ou mais desenvolvedores aprovarem o commit.

### API unificada e componentes de back-end

Ao se comunicar com o back-end, o aplicativo ou aplicativo de navegador usará um único componente no código que lida com todas as comunicações do mundo externo.

Todas as solicitações originadas do cliente devem passar pelo componente API e devem se conectar a um serviço de back-end conhecido.
 
 
### Minimize o uso de memória 

O código ou as bibliotecas devem fazer pouco uso da memória. Isso é fundamental em dispositivos de baixo custo, onde a RAM costuma ser limitada. Além disto uso excessivo de memória indica possíveis falhas de segurança ou dá margem para ataques usando vetores de código baseados em memory leak.

O uso de funções como should component update em componentes melhora drasticamente a experiência do usuário, pois reduz significativamente o uso de recursos de computação em dispositivos móveis. Para dispositivos Android com pouca RAM e ou poucos recursos de CPU, o uso correto deste recurso pode aumentar significativamente o número de dispositivos suportados, especialmente no caso de dispositivos de baixo custo.

### Bibliotecas maduras e estáveis
 
Bibliotecas de código devem ser preferencialmente adotar a versão [LTS], quando esta política não estiver presente adoremos última versão estável. Será dada preferência a implementações usando código aberto que possam ser auditadas.

Como estratégia de desenvolvimento contínuo, sempre praticamos manter o código de produção em sintonia com cada nova versão (estável) do React Native (para dispositivos Android e IOS) e com React para plataformas web.

### Preferencia pela última versão LTS 

Todo JavaScript produzido deve usar preferencialmente se basear em [LTS], ES6 e funções de versão mais recente. Async / await (funções ES7) devem ser utilizadas sempre que sejam necessárias operações assíncronas.

 
### Ferramentas monitoramento relatórios de falhas

As ferramentas de monitoramento e relatórios de falhas não devem registrar nenhuma informação de identificação pessoal [PII]. 

Essas são as informações que podem ser usadas sozinhas ou com outras informações para identificar, contatar ou localizar uma única pessoa, ou para identificar um indivíduo no contexto.




## Segurança de Back-End

### Segurança na nuvem
 
A plataforma OpenPix é executada na nuvem. A nuvem reduz nosso tempo de entrada no mercado, permite prototipagem rápida e custos controlados. No entanto, a nuvem é um ambiente compartilhado e deve ser considerado um
ambiente que pode ser comprometido.

Independentemente da nuvem ou DataCenter utilizado a segurança da plataforma permanece sob nossa responsabilidade.

### Premissas de segurança na nuvem


**NÃO ACREDITE EM NINGUÉM**

A nuvem é apenas o servidor de outra pessoa, gerenciado por terceiros. Devemos levar em consideração em nosso código que o provedor de nuvem pode e será eventualmente comprometido. 
	
**TUDO FALHA EVENTUALMENTE**

Mesmo o melhor provedor de nuvem irá falhar. Mesmo o melhor esquema de replicação falhará.

**ENCRYPT**

Os dados devem ser criptografados o tempo todo. Os dados devem ser criptografados durante o percurso ou quando armazenados.



### Requisitos de segurança da nuvem

| Item | Descrição |
| - | - |
| **Criptografia em repouso** | Os dados do banco de dados devem ser criptografados usando chaves de criptografia exclusivas. As chaves devem ser armazenadas em chaves HSM de enclave seguro. Isso garante que os dados não sejam lidos por uma pessoa não autorizada, caso os arquivos sejam comprometidos.<br/><br/>Com a criptografia em repouso, os bancos de dados criptografam os dados antes de armazená-los no disco.<br/><br/>O acesso às chaves [HSM] deve ser protegidas por chaves IAM.
| **Containers** | Todos os serviços de back-end devem ser executados em seu próprio contêiner designado. |
| **Diretrizes de código** |  O aplicativo deve usar as práticas recomendadas de código de desenvolvimento<br/><br/><ul><li>ES, using latest [LTS]</li><li>Automatic Lint</li><li>[Unit Testing]</li><li>Asynchronous functions (async/await)</li></ul> |
| **Separação de deveres** | A separação de funções e o controle de acesso baseado em funções são inerentes ao design da nuvem.<br/><br/>Os sistemas que executam códigos ou monitoram a saúde e a disponibilidade da rede de [HSM] não devem estar envolvidos na criação e gerenciamento do material chave armazenado em [HSM]. |
| **Processo de construção** | A compilação final (compilação de produção) deve ser sempre gerada pelo sistema [CI/CD].<br/><br/>O build é gerado em uma plataforma automatizada. Depois que o código é compilado, ele é movido para um registro de contêiner privado. O registro é consumido pelo Agente Kubernetes, que recarrega os contêineres diretamente do registro. |
| **Acesso limitado à infraestrutura em nuvem** | O acesso ao provedor de nuvem é restrito a um número reduzido de desenvolvedores seniores na empresa, todos membros da empresa.<br/><br/>Os desenvolvedores só têm acesso ao código-fonte. O ambiente de desenvolvimento é separado do ambiente produtivo (ambiente de preparação).<br/><br/>As alterações de código, seja no desenvolvimento, teste ou produção, são realizadas apenas por meio da plataforma de implantação contínua, portanto, é possível rastrear e controlar cada alteração no código. |
| **MFA** | Os humanos devem usar a autenticação com [MFA] ao se conectar à infraestrutura em nuvem. |
| **Gerenciamento de chave IAM** | Each environment will use its own set of keys. Keys will be loaded directly into Kubernetes. |
| **As chaves IAM devem ser rotacionadas a cada 6 meses.** | A rotação de chaves é realizada diretamente no ambiente de configuração do Kubernetes |


## Política de backup & Segurança

### Política de Backup
 
Política de backup e requisitos de segurança [Política de backup](backup-policy)

[MFA]: https://en.wikipedia.org/wiki/Multi-factor_authentication
[CI/CD]: https://en.wikipedia.org/wiki/CI/CD
[Continuous Delivery]: https://en.wikipedia.org/wiki/Continuous_delivery
[TypeScript]: https://en.wikipedia.org/wiki/TypeScript
[LTS]: https://en.wikipedia.org/wiki/Long-term_support
[Unit Testing]: https://en.wikipedia.org/wiki/Unit_testing
[HSM]: https://en.wikipedia.org/wiki/Hardware_security_module
[PII]: https://en.wikipedia.org/wiki/Personal_data