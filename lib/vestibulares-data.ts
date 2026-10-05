export interface VestibularProduct {
  id: string;
  name: string;
  badge: string;
  badgeColor: string;
  description: string;
  originalPrice: string;
  currentPrice: string;
  installments: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
  borderClass: string;
  buttonClass: string;
  phase: '1' | '2' | 'combo';
}

export interface VestibularData {
  slug: 'unicamp' | 'unesp' | 'fuvest';
  name: string;
  fullName: string;
  tagline: string;
  heroKicker: string;
  heroTitleLeading: string;
  heroTitleHighlight: string;
  heroTitleTrailing: string;
  heroSubtitle: string;
  heroDescription: string;
  theme: {
    primary: string;
    primaryGradient: string;
    accent: string;
    accentBg: string;
    badgeBg: string;
    borderAccent: string;
    highlightMarker: string;
    textColor: string;
  };
  phase1: {
    title: string;
    badge: string;
    questionsCount: string;
    description: string;
    keyPoints: string[];
    features: string[];
  };
  phase2: {
    title: string;
    badge: string;
    format: string;
    description: string;
    keyPoints: string[];
    features: string[];
  };
  dilemmas: {
    emoji: string;
    title: string;
    desc: string;
    tag: string;
  }[];
  bentoPillars: {
    title: string;
    tag: string;
    desc: string;
    badge: string;
  }[];
  samplePages: {
    id: string;
    label: string;
    title: string;
    category: string;
    content: {
      headline: string;
      description: string;
      highlight: string;
      tip: string;
      answerKey: string;
    };
  }[];
  products: VestibularProduct[];
  faqs: {
    q: string;
    a: string;
    highlight?: boolean;
  }[];
}

export const VESTIBULARES_CONFIG: Record<'unicamp' | 'unesp' | 'fuvest', VestibularData> = {
  unicamp: {
    slug: 'unicamp',
    name: 'UNICAMP',
    fullName: 'Vestibular Estadual de Campinas · COMVEST',
    tagline: 'Foco no perfil crítico, interdisciplinar e redações de múltiplos gêneros',
    heroKicker: 'MATERIAIS DIGITAIS ESPECÍFICOS PARA A UNICAMP',
    heroTitleLeading: 'Se seu objetivo é a',
    heroTitleHighlight: 'UNICAMP',
    heroTitleTrailing: 'seu estudo também precisa ser.',
    heroSubtitle: 'Pare de perder semanas com materiais genéricos feitos para outros vestibulares.',
    heroDescription:
      'A RegioVest organiza guias digitais em PDF focados cirurgicamente no padrão COMVEST (1ª e 2ª Fase). Você descobre o que priorizar, como a banca pontua e como resolver questões sem dar voltas.',
    theme: {
      primary: 'text-blue-600',
      primaryGradient: 'from-blue-600 via-blue-600 to-indigo-600',
      accent: 'text-orange-500',
      accentBg: 'bg-orange-500',
      badgeBg: 'bg-blue-100 text-blue-900 border-blue-200',
      borderAccent: 'border-blue-500',
      highlightMarker: 'marker-yellow',
      textColor: 'text-slate-950',
    },
    phase1: {
      title: '🔥 UNICAMP 1ª Fase',
      badge: '72 Questões · Múltipla Escolha',
      questionsCount: '72 questões objetivas',
      description:
        'Preparação objetiva, gestão de tempo, leitura de gráficos interdisciplinares e domínio de distratores clássicos da COMVEST.',
      keyPoints: [
        'Raio-X de incidência dos temas mais recorrentes nos últimos 8 anos',
        'Como identificar pegadinhas em enunciados longos e contextualizados',
        'Resoluções objetivas sem enrolar nas contas',
      ],
      features: [
        '450+ questões COMVEST selecionadas e comentadas',
        'Técnica de leitura rápida de enunciados e tabelas',
        'Checklist de revisão para os 15 dias anteriores à prova',
      ],
    },
    phase2: {
      title: '⚡ UNICAMP 2ª Fase',
      badge: 'Respostas Escritas & Redação',
      format: 'Discursivas por Área + 2 Propostas de Redação',
      description:
        'Preparação direcionada para respostas discursivas, critérios de pontuação da banca e estrutura de nota máxima.',
      keyPoints: [
        'O que o corretor procura em cada linha da folha de resposta',
        'Como não perder pontos por falta de justificativa conceitual',
        'Modelos comentados de respostas com pontuação máxima',
      ],
      features: [
        'Exemplos de respostas nota 2,0/2,0 vs respostas que perderam ponto',
        'Estratégia para os gêneros textuais específicos da UNICAMP',
        'Treino prático com folhas no formato oficial da banca',
      ],
    },
    dilemmas: [
      {
        emoji: '😵‍💫',
        title: '“Tem matéria demais para cobrir.”',
        desc: 'Tentar estudar o edital inteiro sem filtro para a UNICAMP gera cansaço mental e sensação de atraso constante.',
        tag: 'Sobrecarga',
      },
      {
        emoji: '📚',
        title: '“Não sei o que a COMVEST prioriza.”',
        desc: 'A UNICAMP valoriza ecologia, cidadania e leitura crítica muito mais do que decoreba de fórmulas vazias.',
        tag: 'Falta de Filtro',
      },
      {
        emoji: '📝',
        title: '“A 2ª fase parece outro vestibular.”',
        desc: 'Exige respostas discursivas sintéticas, fundamentadas e sem enrolação nas linhas delimitadas pela banca.',
        tag: 'Choque Discursivo',
      },
      {
        emoji: '⏰',
        title: '“O tempo na 1ª fase voa.”',
        desc: 'São 72 questões densas com textos longos; se você não tiver método de leitura rápida, o relógio vira inimigo.',
        tag: 'Gestão de Tempo',
      },
    ],
    bentoPillars: [
      {
        tag: 'Raio-X de Recorrência',
        title: 'Saiba o que a COMVEST mais cobra',
        desc: 'Mapeamos estatisticamente os temas prioritários para você não gastar dias em tópicos que raramente caem.',
        badge: 'Filtro Cirúrgico',
      },
      {
        tag: 'Padrão de Resposta',
        title: 'Aprenda a pensar como o corretor',
        desc: 'Mostramos o caminho exato que os avaliadores esperam ver nas justificativas da folha oficial.',
        badge: 'Critério de Banca',
      },
      {
        tag: 'Visual & Prático',
        title: 'Marca-textos e anotações de margem',
        desc: 'Diagramação limpa com alertas de pegadinhas frequentes e destaque para comandos cruciais de enunciados.',
        badge: 'Sem Enrolação',
      },
      {
        tag: '100% Digital',
        title: 'No iPad, celular ou impresso em A4',
        desc: 'PDF de alta resolução diagramado para estudo confortável em qualquer tela ou para imprimir e rabiscar.',
        badge: 'Acesso Rápido',
      },
    ],
    samplePages: [
      {
        id: 'capa',
        label: '1. Capa & Estrutura',
        title: 'Guia Estratégico UNICAMP',
        category: 'Amostra Oficial',
        content: {
          headline: 'Mapeamento Estratégico COMVEST',
          description: 'Apostila em PDF com divisões claras por disciplina, raio-x estatístico e questões comentadas.',
          highlight: 'Classificação por incidência alta, média e baixa',
          tip: 'Concentrar nos temas de alta incidência garante até 75% dos pontos necessários para corte.',
          answerKey: 'Material estruturado para leitura dinâmica e rápida fixação.',
        },
      },
      {
        id: 'raio_x',
        label: '2. Estatística de Cobrança',
        title: 'Raio-X das 72 Questões',
        category: 'Estatística Real',
        content: {
          headline: 'Ecologia, Funções e Brasil República na Liderança',
          description: 'A prova da UNICAMP premia quem domina impactos ambientais, gráficos de funções e transformações sociais brasileiras.',
          highlight: 'Mais de 30% das questões de ciências da natureza conectam biologia com física ou química',
          tip: 'A banca penaliza quem tenta decorar sem compreender a aplicação prática do conceito.',
          answerKey: 'Foco comprovado pelo histórico dos últimos 8 exames.',
        },
      },
      {
        id: 'resolucao',
        label: '3. Resolução com Marca-Texto',
        title: 'Comentário Passo a Passo',
        category: 'Exercício Resolvido',
        content: {
          headline: 'Como Desarmar Pegadinhas de Interpretação',
          description: 'Enunciados longos trazem a resposta embutida se você souber sublinhar os operadores lógicos.',
          highlight: 'Passo 1: Destaque a pergunta central. Passo 2: Elimine os distratores de escala.',
          tip: '82% dos vestibulandos erram por distração no comando final da pergunta.',
          answerKey: 'Gabarito Oficial Alternativa A (Resolução em 3 passos).',
        },
      },
      {
        id: 'discursiva',
        label: '4. Domínio da 2ª Fase',
        title: 'Padrão Nota Máxima',
        category: 'Gabarito Discursivo',
        content: {
          headline: 'O que Escrever para Pontuar 2,0/2,0',
          description: 'Respostas diretas que citam o princípio teórico e a dedução lógica em no máximo 4 linhas.',
          highlight: 'Nunca deixe uma variável matemática sem definir sua unidade e significado físico.',
          tip: 'Corretores da COMVEST valorizam concisão e clareza analítica.',
          answerKey: 'Exemplo comentado de resposta de pontuação máxima.',
        },
      },
    ],
    products: [
      {
        id: 'produto-unicamp-essencial',
        name: 'ESSENCIAL',
        badge: 'PARA COMEÇAR',
        badgeColor: 'bg-slate-200 text-slate-800',
        description: 'Tudo o que você precisa para focar na 1ª fase da UNICAMP.',
        originalPrice: '12,90',
        currentPrice: '12,90',
        installments: 'Pagamento único',
        features: [
          'Material completo da 1ª fase',
          'Conteúdo digital',
          'Acesso imediato após a compra, conforme o sistema utilizado',
          'Estude pelo celular, tablet ou computador',
        ],
        ctaText: 'QUERO A 1ª FASE →',
        borderClass: 'border-slate-200 hover:border-slate-300',
        buttonClass: 'bg-slate-900 hover:bg-slate-800 text-white',
        phase: '1',
      },
      {
        id: 'produto-unicamp-fase2',
        name: 'FOCO 2ª FASE',
        badge: 'PARA QUEM CHEGOU NA DISCURSIVA',
        badgeColor: 'bg-purple-100 text-purple-900',
        description: 'Sua preparação para a 2ª fase, reunindo conhecimentos gerais + o conteúdo específico da sua área.',
        originalPrice: '36,80',
        currentPrice: '22,90',
        installments: 'Economize R$ 13,90',
        features: [
          'Conhecimentos Gerais (R$ 16,90)',
          'Material específico da área escolhida (R$ 19,90)',
          'Biológicas e Saúde OU Exatas e Tecnológicas OU Humanas e Artes',
          'Preparação focada na 2ª fase',
        ],
        ctaText: 'QUERO FOCAR NA 2ª FASE →',
        borderClass: 'border-purple-200 hover:border-purple-300',
        buttonClass: 'bg-purple-700 hover:bg-purple-800 text-white',
        phase: '2',
      },
      {
        id: 'produto-unicamp-combo',
        name: 'COMBO COMPLETO',
        badge: '⭐ MELHOR CUSTO-BENEFÍCIO',
        badgeColor: 'bg-amber-400 text-slate-950 font-black',
        description: '1ª + 2ª fase da sua área em um único pacote.',
        originalPrice: '49,70',
        currentPrice: '24,90',
        installments: 'ECONOMIZE R$ 24,80',
        popular: true,
        features: [
          'Material completo da 1ª fase',
          'Conhecimentos Gerais da 2ª fase',
          'Material específico da área escolhida',
          'Preparação para as duas etapas da UNICAMP',
          'Só R$ 2 a mais que o combo de 2ª fase',
        ],
        ctaText: 'QUERO 1ª + 2ª FASE 🔥',
        borderClass: 'border-2 border-orange-500 shadow-2xl shadow-orange-500/15 ring-2 ring-orange-400/30',
        buttonClass: 'bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-black',
        phase: 'combo',
      },
      {
        id: 'produto-unicamp-total',
        name: 'UNICAMP TOTAL',
        badge: '👑 COLEÇÃO COMPLETA',
        badgeColor: 'bg-amber-400 text-slate-950 font-black',
        description: 'Todos os materiais UNICAMP da RegioVest em um único pacote.',
        originalPrice: '89,50',
        currentPrice: '29,90',
        installments: 'ECONOMIZE R$ 59,60',
        features: [
          '1ª Fase Completa',
          '2ª Fase — Conhecimentos Gerais',
          'Biológicas e Saúde',
          'Exatas e Tecnológicas',
          'Humanas e Artes',
          'Por apenas R$ 5 a mais que o Combo Completo, leve TODA a coleção',
        ],
        ctaText: 'QUERO A COLEÇÃO COMPLETA 👑',
        borderClass: 'border-2 border-indigo-400/80 shadow-2xl shadow-indigo-900/30',
        buttonClass: 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black',
        phase: 'combo',
      },
    ],
    faqs: [
      {
        q: 'O material da UNICAMP é físico ou digital?',
        a: 'O material é 100% digital em formato PDF de alta resolução. Você recebe acesso imediato no seu e-mail para abrir em qualquer dispositivo ou imprimir.',
      },
      {
        q: 'O conteúdo está atualizado para o formato atual da COMVEST?',
        a: 'Sim! Todos os materiais seguem o modelo vigente da UNICAMP (72 questões objetivas na 1ª fase e discursivas estruturadas na 2ª fase).',
      },
      {
        q: 'Como funciona a preparação para a Redação da UNICAMP?',
        a: 'A 2ª fase da UNICAMP exige gêneros textuais variados (artigo de opinião, manifesto, carta aberta, discurso, etc.). O Guia de 2ª Fase ensina a máscara discursiva de cada formato.',
      },
      {
        q: 'A RegioVest pertence à UNICAMP ou à COMVEST?',
        a: 'A RegioVest é uma iniciativa educacional independente e não possui vínculo institucional com a Universidade Estadual de Campinas (UNICAMP) ou com a COMVEST.',
        highlight: true,
      },
    ],
  },

  unesp: {
    slug: 'unesp',
    name: 'UNESP',
    fullName: 'Vestibular Estadual Paulista · VUNESP',
    tagline: 'Foco na objetividade da VUNESP, temas diretos e resposta discursiva assertiva',
    heroKicker: 'PREPARAÇÃO DIRECIONADA PARA O VESTIBULAR UNESP',
    heroTitleLeading: 'Conquiste sua vaga na',
    heroTitleHighlight: 'UNESP',
    heroTitleTrailing: 'estudando o que a VUNESP realmente cobra.',
    heroSubtitle: 'A prova da UNESP tem estilo clássico, direto e previsível quando você conhece o padrão.',
    heroDescription:
      'A VUNESP é uma das bancas mais técnicas e equilibradas do país. A RegioVest organizou materiais em PDF para a 1ª fase (90 questões) e 2ª fase com foco nos padrões recorrentes, sem perda de tempo.',
    theme: {
      primary: 'text-orange-600',
      primaryGradient: 'from-orange-600 via-rose-600 to-amber-600',
      accent: 'text-rose-500',
      accentBg: 'bg-rose-500',
      badgeBg: 'bg-orange-100 text-orange-950 border-orange-200',
      borderAccent: 'border-orange-500',
      highlightMarker: 'marker-orange',
      textColor: 'text-slate-950',
    },
    phase1: {
      title: '🎯 UNESP 1ª Fase',
      badge: '90 Questões · Padrão VUNESP',
      questionsCount: '90 questões de múltipla escolha',
      description:
        'Preparação tática para as 90 questões divididas em Linguagens, Ciências Humanas e Ciências da Natureza/Matemática.',
      keyPoints: [
        'Mapeamento dos 5 temas mais recorrentes de cada matéria na VUNESP',
        'Foco em interpretação de tirinhas, gráficos socioeconômicos e biogeografia',
        'Gestão de ritmo para responder 90 questões com calma e precisão',
      ],
      features: [
        '500+ questões VUNESP gabaritadas e comentadas',
        'Raio-X estatístico de Ciências da Natureza e Humanas',
        'Simulado tático com gabarito comentado passo a passo',
      ],
    },
    phase2: {
      title: '✍️ UNESP 2ª Fase',
      badge: 'Discursivas + Redação Dissertativa',
      format: 'Questões Discursivas + Redação Temática Tradicional',
      description:
        'Domínio da redação dissertativa-argumentativa padrão VUNESP e respostas discursivas claras com terminologia técnica correta.',
      keyPoints: [
        'Como a VUNESP corrige a redação (tema, gênero, coesão e modalidade)',
        'Estruturação de respostas discursivas sem firulas, direto ao ponto',
        'Critérios de avaliação para garantir pontuação integral',
      ],
      features: [
        'Análise detalhada de redações nota 10 dos últimos 5 anos da UNESP',
        'Modelos de respostas discursivas em Física, Química, Biologia e História',
        'Guia de conectivos e repertório legitimado para temas sociais VUNESP',
      ],
    },
    dilemmas: [
      {
        emoji: '⏱️',
        title: '“90 questões na 1ª fase é muita coisa.”',
        desc: 'Sem um ritmo cronometrado e técnica para resolver rápido, você chega exausto nas últimas 20 questões.',
        tag: 'Resistência Física',
      },
      {
        emoji: '🎯',
        title: '“A prova parece mais fácil, mas a nota de corte é alta.”',
        desc: 'Como a VUNESP é direta, os concorrentes erram pouco. Não dá para perder pontos em questões padrão.',
        tag: 'Corte Alto',
      },
      {
        emoji: '✍️',
        title: '“A redação da UNESP tem critérios rígidos.”',
        desc: 'Fugas parciais do tema ou argumentação rasa são duramente penalizadas pelos corretores da banca.',
        tag: 'Critério da Redação',
      },
      {
        emoji: '🧭',
        title: '“Estudar por provas de outras bancas confunde.”',
        desc: 'A VUNESP tem enunciado limpo e direto, bem diferente da densidade da FUVEST ou da UNICAMP.',
        tag: 'Padrão Próprio',
      },
    ],
    bentoPillars: [
      {
        tag: 'Estilo VUNESP',
        title: 'Objetividade e clareza de comando',
        desc: 'Aprenda a reconhecer a pergunta central do enunciado em menos de 40 segundos por questão.',
        badge: 'Filtro Direto',
      },
      {
        tag: 'Redação Nota 10',
        title: 'O modelo dissertativo que a banca premia',
        desc: 'Estrutura passo a passo para redigir textos nota máxima sobre os temas éticos e sociais da UNESP.',
        badge: 'Padrão VUNESP',
      },
      {
        tag: 'Recorrência Real',
        title: 'O que sempre se repete no vestibular',
        desc: 'Gráficos de temas que a VUNESP não abre mão: ecologia paulista, urbanização, óptica e funções.',
        badge: 'Previsibilidade',
      },
      {
        tag: 'PDF Prático',
        title: 'Tabelas comparativas e esquemas',
        desc: 'Resumos visuais que sintetizam séculos de história e ciclos biológicos em esquemas de 1 página.',
        badge: 'Memorização',
      },
    ],
    samplePages: [
      {
        id: 'capa_unesp',
        label: '1. Capa & Estrutura UNESP',
        title: 'Guia Tático UNESP',
        category: 'Amostra VUNESP',
        content: {
          headline: 'Padrão VUNESP Mapeado',
          description: 'Material diagramado especificamente para as 90 questões da 1ª fase e discursivas da 2ª fase.',
          highlight: 'Distribuição exata das 30 questões de cada grande área',
          tip: 'A VUNESP é uma banca consistente: os mesmos conceitos retornam com roupagens novas.',
          answerKey: 'Índice tático por recorrência decrescente.',
        },
      },
      {
        id: 'raio_x_unesp',
        label: '2. Estatística da 1ª Fase',
        title: 'Raio-X VUNESP: O que Priorizar',
        category: 'Incidência de Conteúdo',
        content: {
          headline: 'Os Temas Campeões de Audiência na UNESP',
          description: 'Genética clássica, termologia, geometria plana e era Vargas dominam o topo das cobranças.',
          highlight: 'Linguagens prioriza figuras de linguagem, ironia em charges e variações linguísticas',
          tip: 'Não perca tempo com matérias periféricas antes de dominar os 10 tópicos de ouro da VUNESP.',
          answerKey: 'Tabela de incidência com base nos exames de 2018 a 2026.',
        },
      },
      {
        id: 'redacao_unesp',
        label: '3. Redação Modelo VUNESP',
        title: 'Estrutura Dissertativa Nota Máxima',
        category: 'Redação Orientada',
        content: {
          headline: 'Como Responder à Pergunta-Tema da UNESP',
          description: 'A banca quase sempre propõe uma pergunta dilemática. Seu posicionamento deve ser claro no 1º parágrafo.',
          highlight: 'Nunca fique em cima do muro: escolha uma tese e defenda com 2 argumentos sólidos.',
          tip: 'A VUNESP valoriza repertórios filosóficos e sociológicos clássicos bem articulados.',
          answerKey: 'Análise de redação nota 28/28 comentada linha por linha.',
        },
      },
      {
        id: 'discursiva_unesp',
        label: '4. Resposta Discursiva 2ª Fase',
        title: 'Terminologia Técnica Precisa',
        category: 'Gabarito Oficial',
        content: {
          headline: 'Respostas Objetivas Sem Erro Conceitual',
          description: 'A VUNESP desconta pontos se o estudante der voltas sem usar os termos científicos adequados.',
          highlight: 'Indique a lei física ou biológica logo na primeira frase da resposta.',
          tip: 'Economize espaço da linha escrevendo com caligrafia legível e ordem direta.',
          answerKey: 'Modelo de pontuação cheia em questão interdisciplinar da UNESP.',
        },
      },
    ],
    products: [
      {
        id: 'produto-unesp-essencial',
        name: 'ESSENCIAL',
        badge: 'PARA COMEÇAR',
        badgeColor: 'bg-slate-200 text-slate-800',
        description: 'Preparação focada para quem ainda está na 1ª fase da UNESP.',
        originalPrice: '37,80',
        currentPrice: '12,90',
        installments: 'Pagamento único',
        features: [
          'Material completo da 1ª fase (90 questões objetivas)',
          'Raio-X de Recorrência estatística da banca VUNESP',
          'Conteúdo digital para celular, tablet ou PC',
          'Estudo organizado com foco nos temas mais cobrados',
          'Acesso conforme as condições de entrega do produto',
        ],
        ctaText: 'QUERO A 1ª FASE →',
        borderClass: 'border-slate-200 hover:border-slate-300',
        buttonClass: 'bg-slate-900 hover:bg-slate-800 text-white',
        phase: '1',
      },
      {
        id: 'produto-unesp-foco2',
        name: 'FOCO 2ª FASE',
        badge: '2ª FASE COMPLETA',
        badgeColor: 'bg-orange-100 text-orange-950',
        description: 'Os dois dias da 2ª fase reunidos em um único pacote com redação inclusa.',
        originalPrice: '37,80',
        currentPrice: '22,90',
        installments: 'Economize R$ 14,90',
        features: [
          'Dia 1 — Humanas + Natureza + Matemática',
          'Dia 2 — Linguagens + Redação VUNESP Nota Máxima',
          'Padrão de Resposta Oficial da banca examinadora',
          'Critérios de avaliação de redação VUNESP',
          'Preparação reunida em um único combo',
        ],
        ctaText: 'QUERO A 2ª FASE COMPLETA →',
        borderClass: 'border-orange-200 hover:border-orange-400',
        buttonClass: 'bg-orange-600 hover:bg-orange-700 text-white',
        phase: '2',
      },
      {
        id: 'produto-unesp-completa',
        name: 'UNESP COMPLETA 2027',
        badge: '⭐ MELHOR OFERTA',
        badgeColor: 'bg-amber-400 text-slate-950 font-black',
        description: 'Da 1ª fase até a 2ª fase em um único pacote. Todos os materiais UNESP reunidos com a máxima economia.',
        originalPrice: '50,70',
        currentPrice: '24,90',
        installments: 'Economize R$ 25,80',
        popular: true,
        features: [
          'Material Completo da 1ª Fase (90 questões objetivas)',
          '2ª Fase — Dia 1 (Humanas + Natureza + Matemática)',
          '2ª Fase — Dia 2 (Linguagens + Redação Dissertativa)',
          'Módulo de Redação VUNESP Nota Máxima com análise',
          'Padrão de resposta com justificativas completas',
          'Apenas + R$ 2 que o combo de 2ª fase',
        ],
        ctaText: 'QUERO A UNESP COMPLETA 🔥',
        borderClass: 'border-2 border-orange-500 shadow-2xl shadow-orange-500/15',
        buttonClass: 'bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-black',
        phase: 'combo',
      },
    ],
    faqs: [
      {
        q: 'O material da UNESP é diferente do material da UNICAMP e FUVEST?',
        a: 'Sim, totalmente! A banca da UNESP (VUNESP) tem estilo próprio de enunciados, redação em formato dissertativo com pergunta-tema e critérios específicos de correção. Não reaproveitamos conteúdos genéricos.',
      },
      {
        q: 'Como o material me ajuda nas 90 questões da 1ª fase?',
        a: 'A 1ª fase da UNESP exige rapidez e clareza. Nosso material ensina a técnica de varredura visual e fornece mais de 500 questões selecionadas para treinar sua resistência mental.',
      },
      {
        q: 'O material traz orientação para a redação da UNESP?',
        a: 'Sim! No Guia de 2ª Fase e no Combo Completo há um módulo exclusivo dedicado à redação VUNESP com estrutura nota máxima e temas recentes comentados.',
      },
      {
        q: 'A RegioVest tem vínculo oficial com a UNESP ou VUNESP?',
        a: 'Não. A RegioVest é uma iniciativa educacional independente e não possui qualquer vínculo institucional com a UNESP ou com a Fundação VUNESP.',
        highlight: true,
      },
    ],
  },

  fuvest: {
    slug: 'fuvest',
    name: 'FUVEST',
    fullName: 'Vestibular da Universidade de São Paulo · USP / FUVEST',
    tagline: 'Foco na densidade conceitual, obras literárias obrigatórias e redação argumentativa de alto nível',
    heroKicker: 'PREPARAÇÃO ESTRATÉGICA PARA O VESTIBULAR DA USP',
    heroTitleLeading: 'Sua vaga na USP começa com um estudo',
    heroTitleHighlight: 'FUVEST',
    heroTitleTrailing: 'de verdade.',
    heroSubtitle: 'A FUVEST não tolera decoreba rasa. Aprenda a interpretar no nível de profundidade que a USP exige.',
    heroDescription:
      'A FUVEST é o vestibular mais concorrido e denso do país. A RegioVest desenvolveu materiais digitais em PDF focados na 1ª fase (90 questões analíticas) e 2ª fase (discursivas aprofundadas + redação dissertativa de alta reflexão).',
    theme: {
      primary: 'text-emerald-700',
      primaryGradient: 'from-emerald-600 via-teal-700 to-blue-700',
      accent: 'text-lime-500',
      accentBg: 'bg-lime-500',
      badgeBg: 'bg-emerald-100 text-emerald-950 border-emerald-200',
      borderAccent: 'border-emerald-600',
      highlightMarker: 'marker-lime',
      textColor: 'text-slate-950',
    },
    phase1: {
      title: '🏛️ FUVEST 1ª Fase',
      badge: '90 Questões · Profundidade USP',
      questionsCount: '90 questões de alta densidade',
      description:
        'Preparação tática para o filtro mais exigente do Brasil: análise literária rigorosa, física conceitual, história comparada e raciocínio matemático sólido.',
      keyPoints: [
        'Análise aprofundada das leituras obrigatórias da lista FUVEST',
        'Como interpretar gráficos científicos complexos e fontes primárias de história',
        'Gestão de tempo para as 90 questões sem deixar questões fáceis para trás',
      ],
      features: [
        '500+ questões FUVEST selecionadas por nível de incidência',
        'Fichamentos táticos das obras literárias da Fuvest',
        'Raio-X dos conteúdos que mais aparecem na nota de corte da USP',
      ],
    },
    phase2: {
      title: '🧠 FUVEST 2ª Fase',
      badge: 'Discursivas Analíticas + Redação Filosófica',
      format: 'Português + Redação (Dia 1) e Matérias Específicas da Carreira (Dia 2)',
      description:
        'Preparação profunda para as discursivas analíticas onde o detalhamento conceitual e o rigor de escrita determinam a convocação final.',
      keyPoints: [
        'Padrão de resposta esperado pelos professores da USP',
        'Como redigir a dissertação reflexiva da FUVEST sem cair no senso comum',
        'Desenvolvimento de cálculos completos com rigor matemático e justificativa física',
      ],
      features: [
        'Exemplos de respostas nota máxima concedidas pela banca avaliadora',
        'Guia de argumentação abstrata e filosófica para a redação FUVEST',
        'Treino com questões de 2ª fase das carreiras mais concorridas (Medicina, Poli, Direito)',
      ],
    },
    dilemmas: [
      {
        emoji: '🧠',
        title: '“As questões da FUVEST exigem muita teoria.”',
        desc: 'Não basta decorar a fórmula; a FUVEST cobra a dedução física e o raciocínio por trás do fenômeno.',
        tag: 'Profundidade Teórica',
      },
      {
        emoji: '📖',
        title: '“A lista de livros obrigatórios é imensa.”',
        desc: 'Ler os livros sem entender os eixos temáticos e as conexões intertextuais não garante acertos nas questões.',
        tag: 'Obras Literárias',
      },
      {
        emoji: '📝',
        title: '“A redação da FUVEST é a mais filosófica.”',
        desc: 'A banca exige reflexão autoral crítica sobre a condição humana e a sociedade contemporânea, sem fórmulas prontas.',
        tag: 'Redação Crítica',
      },
      {
        emoji: '⚖️',
        title: '“A concorrência para a USP é brutal.”',
        desc: 'Nas carreiras disputadas, 2 ou 3 acertos a mais na 1ª fase e décimos na 2ª fase definem sua aprovação.',
        tag: 'Disputa Ponto a Ponto',
      },
    ],
    bentoPillars: [
      {
        tag: 'Rigor USP',
        title: 'Conceitos explicados sem atalhos falsos',
        desc: 'A FUVEST não tolera simplificações grosseiras. Nossos materiais entregam o aprofundamento exato que a prova pede.',
        badge: 'Densidade Real',
      },
      {
        tag: 'Obras Literárias',
        title: 'Conexões e eixos analíticos dos livros',
        desc: 'Entenda como a banca relaciona os autores clássicos com as transformações históricas e a linguagem literária.',
        badge: 'Literatura USP',
      },
      {
        tag: 'Redação Filosófica',
        title: 'Autonomia argumentativa de alto impacto',
        desc: 'Aprenda a construir repertório consistente para os temas existenciais, éticos e sociopolíticos da FUVEST.',
        badge: 'Redação Nota 50',
      },
      {
        tag: '2ª Fase Específica',
        title: 'Modelos de resposta discursiva rigorosa',
        desc: 'Veja como redigir passo a passo sem perder pontos preciosos por falta de hipóteses iniciais ou justificativas.',
        badge: 'Pontuação Máxima',
      },
    ],
    samplePages: [
      {
        id: 'capa_fuvest',
        label: '1. Capa & Estrutura FUVEST',
        title: 'Guia de Domínio FUVEST',
        category: 'Amostra FUVEST',
        content: {
          headline: 'Preparação com Padrão USP de Rigor',
          description: 'Material projetado para enfrentar a densidade e o filtro exigente das duas fases da FUVEST.',
          highlight: 'Eixos temáticos das obras literárias e matemática avançada',
          tip: 'A 1ª fase exige que você acerte com segurança as questões médias e difíceis para garantir a vaga na 2ª fase.',
          answerKey: 'Índice de aprofundamento por área do conhecimento.',
        },
      },
      {
        id: 'literatura_fuvest',
        label: '2. Obras Obrigatórias FUVEST',
        title: 'Raio-X da Literatura',
        category: 'Leituras Obrigatórias',
        content: {
          headline: 'Como a FUVEST Conecta os Livros da Lista',
          description: 'A banca nunca faz perguntas factuais simples; ela confronta as vozes narrativas e os contextos estéticos.',
          highlight: 'Comparação direta entre os romances do realismo, modernismo e literatura contemporânea',
          tip: 'Foque nos conflitos morais dos personagens e nas inovações de linguagem de cada autor.',
          answerKey: 'Quadro comparativo de temas literários recorrentes.',
        },
      },
      {
        id: 'redacao_fuvest',
        label: '3. Redação Reflexiva FUVEST',
        title: 'Construção da Tese Autoral',
        category: 'Redação de Alta Densidade',
        content: {
          headline: 'Como Fugir do Senso Comum nos Temas da FUVEST',
          description: 'A banca premia a densidade de pensamento e a capacidade de problematizar a realidade além dos clichês.',
          highlight: 'Estruture parágrafos de desenvolvimento articulando causa estrutural e consequência humana',
          tip: 'Evite fórmulas prontas de cursinho que a banca da USP detecta e penaliza de imediato.',
          answerKey: 'Análise de redação nota máxima com elogios da banca corretora.',
        },
      },
      {
        id: 'discursiva_fuvest',
        label: '4. Gabarito 2ª Fase FUVEST',
        title: 'Raciocínio Analítico sem Falhas',
        category: 'Discursiva Específica',
        content: {
          headline: 'Resoluções Completas e Justificativas Claras',
          description: 'Demonstração de como encadear premissas lógicas em física, matemática, história e geografia.',
          highlight: 'Sempre enuncie o teorema ou conceito antes de iniciar o desenvolvimento algébrico',
          tip: 'O corretor da USP avalia o percurso do raciocínio, não apenas a resposta numérica final.',
          answerKey: 'Modelo de pontuação 100% integral em questão discursiva.',
        },
      },
    ],
    products: [
      {
        id: 'produto-fuvest-essencial',
        name: 'ESSENCIAL',
        badge: 'COMECE PELA 1ª FASE',
        badgeColor: 'bg-slate-200 text-slate-800',
        description: 'Preparação focada para quem quer organizar os estudos da 1ª fase da FUVEST.',
        originalPrice: '12,90',
        currentPrice: '12,90',
        installments: 'Pagamento único',
        features: [
          'Material completo da 1ª fase',
          'Conteúdo digital',
          'Acesso conforme o sistema de entrega utilizado',
          'Estude pelo celular, computador ou tablet',
        ],
        ctaText: 'QUERO A 1ª FASE →',
        borderClass: 'border-slate-200 hover:border-slate-300',
        buttonClass: 'bg-slate-900 hover:bg-slate-800 text-white',
        phase: '1',
      },
      {
        id: 'produto-fuvest-fase2',
        name: 'FOCO 2ª FASE',
        badge: 'PARA A ETAPA DISCURSIVA',
        badgeColor: 'bg-teal-100 text-teal-950',
        description: 'Português + Redação e as específicas da área escolhida reunidos em um único pacote.',
        originalPrice: '36,80',
        currentPrice: '22,90',
        installments: 'ECONOMIZE R$ 13,90',
        features: [
          'Português + Redação (R$ 16,90)',
          'Específicas de Exatas, Biológicas/Saúde ou Humanas (R$ 19,90)',
          'Conteúdo voltado à 2ª fase',
          'Material digital',
        ],
        ctaText: 'QUERO MINHA 2ª FASE →',
        borderClass: 'border-teal-200 hover:border-teal-300',
        buttonClass: 'bg-teal-700 hover:bg-teal-800 text-white',
        phase: '2',
      },
      {
        id: 'produto-fuvest-combo',
        name: 'COMBO COMPLETO — FUVEST',
        badge: '⭐ MELHOR CUSTO-BENEFÍCIO',
        badgeColor: 'bg-amber-400 text-slate-950 font-black',
        description: 'Sua preparação da 1ª fase até a 2ª fase, reunida em um único pacote.',
        originalPrice: '49,70',
        currentPrice: '24,90',
        installments: 'ECONOMIZE R$ 24,80',
        popular: true,
        features: [
          '1ª Fase Completa',
          'Português + Redação',
          'Específicas da área escolhida',
          'Preparação para as duas fases da FUVEST',
          'Só R$ 2 a mais que o Foco 2ª Fase',
        ],
        ctaText: 'QUERO A FUVEST COMPLETA DA MINHA ÁREA 🔥',
        borderClass: 'border-2 border-emerald-500 shadow-2xl shadow-emerald-600/15 ring-2 ring-emerald-400/30',
        buttonClass: 'bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-black',
        phase: 'combo',
      },
      {
        id: 'produto-fuvest-total',
        name: 'FUVEST 2027 — COLEÇÃO TOTAL',
        badge: '👑 COLEÇÃO COMPLETA',
        badgeColor: 'bg-amber-400 text-slate-950 font-black',
        description: 'Toda a coleção FUVEST da RegioVest em um único pacote.',
        originalPrice: '89,50',
        currentPrice: '29,90',
        installments: 'ECONOMIZE R$ 59,60',
        features: [
          '1ª Fase Completa',
          'Português + Redação',
          'Específicas de Exatas',
          'Específicas de Biológicas e Saúde',
          'Específicas de Humanas',
          'Apenas + R$ 5 para desbloquear toda a coleção FUVEST',
        ],
        ctaText: 'QUERO A COLEÇÃO FUVEST 👑',
        borderClass: 'border-2 border-emerald-400/80 shadow-2xl shadow-emerald-900/40',
        buttonClass: 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black',
        phase: 'combo',
      },
    ],
    faqs: [
      {
        q: 'O material da FUVEST aborda as obras literárias obrigatórias?',
        a: 'Sim! Há análises completas dos livros da lista obrigatória da FUVEST, com foco nas conexões temáticas e estilos de questões que a banca da USP formula.',
      },
      {
        q: 'Como é tratada a 2ª fase para as diferentes carreiras?',
        a: 'O material traz o padrão geral de correção discursiva da FUVEST (Dia 1 de Português e Redação) e orientações técnicas de resolução para as matérias específicas (Dia 2).',
      },
      {
        q: 'O que diferencia o material da FUVEST do material da UNICAMP e UNESP?',
        a: 'A FUVEST exige maior aprofundamento conceitual e rigor formal nas justificativas. Nossos materiais para FUVEST contêm deduções detalhadas e repertórios mais complexos.',
      },
      {
        q: 'A RegioVest tem vínculo institucional com a USP ou com a FUVEST?',
        a: 'Não. A RegioVest é uma iniciativa educacional independente e não possui vínculo institucional com a Universidade de São Paulo (USP) ou com a FUVEST.',
        highlight: true,
      },
    ],
  },
};
