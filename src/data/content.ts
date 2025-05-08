// src/data/content.ts
export interface ExperienceItem {
  company: string;
  role: string;
  dates: string;
  description: string | string[]; // Can be a single string or an array of bullet points
}

export interface SkillCategory {
  categoryName: string;
  skills: string[];
}

export const content = {
  pt: {
    profile: {
      name: 'Felipe Biava Cataneo',
      address: 'Rua Teixeira de Freitas, 43 - Ap 45',
      city: 'Santos - SP',
      role: 'Engenheiro Mecânico | Especialista em Perfuração e Completação',
    },
    sections: {
      about: {
        title: 'Sobre Mim', // Changed from 'Sobre' for clarity as it's the main about
        details:
          'Engenheiro Mecânico com sólida experiência no setor de Óleo & Gás, especializado em perfuração e completação de poços. Atuei em grandes empresas como Halliburton e Infotec, coordenando projetos, liderando equipes e aplicando tecnologia de ponta para otimização de operações. Apaixonado por inovação, busco integrar inteligência artificial, automação e simulações avançadas para agregar valor técnico e eficiência aos projetos.',
      },
      experience: {
        title: 'Experiência Profissional', // Changed from 'Empresas'
        details: [
          {
            company: 'INFOTEC',
            role: 'Projetista Especialista em Perfuração',
            dates: '01/2025 – Presente',
            description: [
              'Elaboração e desenvolvimento de projetos de perfuração: trajetória direcional de poços principais, poços piloto, poços de alívio e interceptação.',
              'Projeto de brocas, análise de torque e arraste, hidráulica, desgaste de revestimento, configuração de BHA e projetos de alargamento.',
              'Suporte à engenharia por meio de simulações avançadas em softwares de engenharia de poços.',
              'Análise técnica, suporte, revisão e elaboração de documentos técnicos (notas, pareceres e relatórios).',
              'Levantamento e consolidação de dados para suporte técnico e gestão de perfuração em poços marítimos.',
              'Participação ativa na condução e governança de grupos temáticos técnicos.',
            ],
          },
          {
            company: 'HALLIBURTON',
            role: 'Coordenador de Desenvolvimento de Performance & Coordenador de Qualidade de Serviço',
            dates: '01/2024 – 12/2024',
            description: [
              'Planejamento e implementação de estratégias de desenvolvimento técnico de equipes.',
              'Garantia da qualidade operacional e conformidade com padrões de segurança.',
            ],
          },
          {
            company: 'HALLIBURTON',
            role: 'Líder Técnico de Perfuração e Completação',
            dates: '12/2022 – 01/2024',
            description: [
              'Coordenação de equipe de consultores na área de perfuração.',
              'Desenvolvimento de treinamentos e mapeamento de competências técnicas.',
              'Representação da empresa em propostas técnicas, garantindo alinhamento entre cliente e equipe operacional.',
            ],
          },
          {
            company: 'HALLIBURTON',
            role: 'Consultor de Aplicações',
            dates: '12/2021 – 12/2022',
            description: [
              'Análise de riscos e estimativa de duração de operações para Petrobras.',
              'Monitoramento de perfuração, completação e abandono de poços.',
              'Estudos de performance para otimização de operações.',
            ],
          },
          {
            company: 'HALLIBURTON',
            role: 'Consultor de Engenharia',
            dates: '12/2016 – 12/2021',
            description: [
              'Consultor Landmark e referência técnica em engenharia de perfuração.',
              'Simulações avançadas para otimização de operações.',
            ],
          },
          {
            company: 'HALLIBURTON',
            role: 'Engenheiro de Campo (Completação de Poços)',
            dates: '04/2013 – 11/2016',
            description: [
              'Montagem e operação de equipamentos de completação e controle de areia para Petrobras, Shell, Statoil e outras operadoras.',
              'Atuação em operações onshore e offshore.',
            ],
          },
        ] as ExperienceItem[],
      },
      education: {
        title: 'Formação Acadêmica', // Changed from 'Formação'
        details: [ // Changed to array for consistency, can be joined by \n if needed or rendered as list
          'Engenharia Mecânica – UNESP (2005 – 2010)',
          'Pós-Graduação em Engenharia de Equipamentos Onshore e Offshore – UCP (2013 – 2014)',
          'MBA em Gestão de Projetos – FGV (2017 – 2019)',
        ],
      },
      skills: {
        title: 'Habilidades Técnicas e Profissionais',
        details: [
          {
            categoryName: 'Engenharia de Perfuração e Completação',
            skills: [
              'Elaboração de projetos de perfuração: trajetória direcional, poços principais, poços piloto, poços de alívio e interceptação.',
              'Planejamento e otimização de BHA e alargamento de poços.',
              'Realização de simulações avançadas para análise de torque e arraste, hidráulica e desgaste de revestimento.',
              'Especialista em softwares de engenharia de poços, incluindo Compass, Wellcat, Wellplan e CasingWear.',
              'Análise, suporte e elaboração de documentos técnicos, incluindo relatórios, pareceres e notas técnicas.',
            ],
          },
          {
            categoryName: 'Gestão de Projetos e Processos',
            skills: [
              'Coordenação de equipes multidisciplinares e alocação de recursos técnicos.',
              'Gestão de performance e qualidade operacional (Field Service Quality).',
              'Aplicação de Lean Manufacturing e Six Sigma para melhoria contínua.',
              'Atuação como auditor interno em conformidade com ISO 9001, ISO 14001 e ISO 45001.',
              'Experiência em operações offshore com montagem e operação de equipamentos de controle de areia e completação inteligente.',
              'Gestão técnica e governança de grupos temáticos nas disciplinas de perfuração.',
            ],
          },
          {
            categoryName: 'Tecnologia, Programação e Inteligência Artificial',
            skills: [
              'Desenvolvimento de scripts em Python para análise de dados, automação de processos e suporte a simulações.',
              'Experiência em JavaScript para desenvolvimento web e criação de aplicações interativas.',
              'Conhecimento na aplicação de Machine Learning e Inteligência Artificial, incluindo LLMs (Large Language Models) e soluções de RAG (Retrieval-Augmented Generation).',
              'Experiência com Transformers.js para desenvolvimento de chatbots e integração com AWS Bedrock.',
              'Automação de processos utilizando n8n.',
              'Desenvolvimento de aplicações utilizando OpenCV para visão computacional e análise de imagens técnicas.',
            ],
          },
        ] as SkillCategory[],
      },
      certifications: {
        title: 'Certificações e Cursos',
        details: [
          'Lean Six Sigma Green Belt – Werkema Group',
          'Auditor Interno ISO 9001, 14001 e 45001',
          'API Q2 Internal Auditor Course',
          'Python e Django Full Stack Web Developer Bootcamp',
          'The Complete JavaScript Course – Jonas Schmedtmann',
          'Exploração de Petróleo e Gás – Curso Internacional no México',
        ],
      },
      languages: {
        title: 'Idiomas',
        details: [
          'Inglês – Avançado (Leitura, escrita e conversação)',
          'Espanhol – Básico',
        ],
      },
    },
    footer: {
      contact: 'Contato',
      email: 'felipecataneo@hotmail.com',
      phone: '+55 (18) 98116-8691',
      downloadResume: 'Baixar Currículo',
      language: 'Idioma',
    },
  },
  en: {
    profile: {
      name: 'Felipe Biava Cataneo',
      address: 'Rua Teixeira de Freitas, 43 - Ap 45',
      city: 'Santos - SP',
      role: 'Mechanical Engineer | Drilling & Completions Specialist',
    },
    sections: {
      about: {
        title: 'About Me',
        details:
          'Mechanical Engineer with solid experience in the Oil & Gas sector, specialized in drilling and well completion. I’ve worked at leading companies such as Halliburton and Infotec, managing projects, leading technical teams, and applying cutting-edge technology to optimize operations. Passionate about innovation, I integrate AI, automation, and advanced simulations to enhance technical value and efficiency.',
      },
      experience: {
        title: 'Professional Experience',
        details: [
          {
            company: 'INFOTEC',
            role: 'Drilling Project Specialist',
            dates: '01/2025 – Present',
            description: [
                'Development and design of drilling projects: directional trajectory of main wells, pilot wells, relief wells, and interception wells.',
                'Bit design, torque and drag analysis, hydraulics, casing wear, BHA configuration, and hole enlargement projects.',
                'Engineering support through advanced simulations in well engineering software.',
                'Technical analysis, support, review, and preparation of technical documents (notes, opinions, and reports).',
                'Data collection and consolidation for technical support and drilling management in offshore wells.',
                'Active participation in leading and governing technical thematic groups.',
            ],
          },
          {
            company: 'HALLIBURTON',
            role: 'Performance Development Coordinator & Field Service Quality Coordinator',
            dates: '01/2024 – 12/2024',
            description: [
              'Planning and implementation of technical team development strategies.',
              'Ensuring operational quality and compliance with safety standards.',
            ],
          },
          {
            company: 'HALLIBURTON',
            role: 'Technical Leader for Drilling and Completions',
            dates: '12/2022 – 01/2024',
            description: [
                'Coordination of a team of consultants in the drilling area.',
                'Development of training programs and mapping of technical competencies.',
                'Company representation in technical proposals, ensuring alignment between client and operational team.',
            ],
          },
          {
            company: 'HALLIBURTON',
            role: 'Application Consultant',
            dates: '12/2021 – 12/2022',
            description: [
              'Risk analysis and duration estimation of operations for Petrobras.',
              'Monitoring of drilling, completion, and well abandonment operations.',
              'Performance studies for operations optimization.',
            ],
          },
          {
            company: 'HALLIBURTON',
            role: 'Engineering Consultant',
            dates: '12/2016 – 12/2021',
            description: [
                'Landmark consultant and technical reference in drilling engineering.',
                'Advanced simulations for operations optimization.',
            ],
          },
          {
            company: 'HALLIBURTON',
            role: 'Field Engineer (Well Completions)',
            dates: '04/2013 – 11/2016',
            description: [
              'Assembly and operation of completion and sand control equipment for Petrobras, Shell, Statoil, and other operators.',
              'Performed in onshore and offshore operations.',
            ],
          },
        ] as ExperienceItem[],
      },
      education: {
        title: 'Education',
        details: [
          'Mechanical Engineering – UNESP (2005 – 2010)',
          'Postgraduate in Onshore and Offshore Equipment Engineering – UCP (2013 – 2014)',
          'MBA in Project Management – FGV (2017 – 2019)',
        ],
      },
      skills: {
        title: 'Technical and Professional Skills',
        details: [
          {
            categoryName: 'Drilling and Completion Engineering',
            skills: [
              'Elaboration of drilling projects: directional trajectory, principal wells, pilot wells, relief wells, and interception.',
              'BHA planning and optimization, and hole enlargement.',
              'Execution of advanced simulations for torque and drag analysis, hydraulics, and casing wear.',
              'Specialist in well engineering software, including Compass, Wellcat, Wellplan, and CasingWear.',
              'Analysis, support, and elaboration of technical documents, including reports, opinions, and technical notes.',
            ],
          },
          {
            categoryName: 'Project and Process Management',
            skills: [
              'Coordination of multidisciplinary teams and allocation of technical resources.',
              'Performance and operational quality management (Field Service Quality).',
              'Application of Lean Manufacturing and Six Sigma for continuous improvement.',
              'Internal auditor in compliance with ISO 9001, ISO 14001, and ISO 45001.',
              'Experience in offshore operations with assembly and operation of sand control equipment and intelligent completion.',
              'Technical management and governance of thematic groups in drilling disciplines.',
            ],
          },
          {
            categoryName: 'Technology, Programming, and Artificial Intelligence',
            skills: [
              'Development of Python scripts for data analysis, process automation, and simulation support.',
              'Experience in JavaScript for web development and creation of interactive applications.',
              'Knowledge in the application of Machine Learning and Artificial Intelligence, including LLMs (Large Language Models) and RAG (Retrieval-Augmented Generation) solutions.',
              'Experience with Transformers.js for chatbot development and integration with AWS Bedrock.',
              'Process automation using n8n.',
              'Development of applications using OpenCV for computer vision and technical image analysis.',
            ],
          },
        ] as SkillCategory[],
      },
      certifications: {
        title: 'Certifications and Courses',
        details: [
          'Lean Six Sigma Green Belt – Werkema Group',
          'Internal Auditor ISO 9001, 14001, and 45001',
          'API Q2 Internal Auditor Course',
          'Python and Django Full Stack Web Developer Bootcamp',
          'The Complete JavaScript Course – Jonas Schmedtmann',
          'Oil and Gas Exploration – International Course in Mexico',
        ],
      },
      languages: {
        title: 'Languages',
        details: [
          'English – Advanced (Reading, writing, and conversation)',
          'Spanish – Basic',
        ],
      },
    },
    footer: {
      contact: 'Contact',
      email: 'felipecataneo@hotmail.com',
      phone: '+55 (18) 98116-8691',
      downloadResume: 'Download Resume',
      language: 'Language',
    },
  },
};

export type SectionKey = keyof typeof content.pt.sections;