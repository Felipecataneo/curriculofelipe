export const content = {
    pt: {
      profile: {
        name: 'Felipe Biava Cataneo',
        address: 'Santos, SP',
        city: 'Santos - SP',
        role: 'Engenheiro Mecânico | Especialista em Perfuração e Completação',
      },
      sections: {
        about: {
          title: 'Sobre',
          details:
            'Engenheiro Mecânico com sólida experiência no setor de Óleo & Gás, especializado em perfuração e completação de poços. Atuei em grandes empresas como Halliburton e Infotec, coordenando projetos, liderando equipes e aplicando tecnologia de ponta para otimização de operações. Apaixonado por inovação, busco integrar inteligência artificial, automação e simulações avançadas para agregar valor técnico e eficiência aos projetos.',
        },
        education: {
          title: 'Formação',
          details:
            '- Engenharia Mecânica – UNESP (2005 – 2010)\n' +
            '- Pós-Graduação em Engenharia de Equipamentos Onshore e Offshore – UCP (2013 – 2014)\n' +
            '- MBA em Gestão de Projetos – FGV (2017 – 2019)',
        },
        experience: {
          title: 'Empresas',
          details:
            '- INFOTEC, Projetista Especialista em Perfuração (01/2025 – Presente)\n' +
            '  - Projetos de poços principais, piloto, alívio e interceptação. Simulações e análise técnica com softwares de engenharia.\n' +
            '- Halliburton, Performance Development & Field Service Quality Coordinator (01/2024 – 12/2024)\n' +
            '  - Desenvolvimento técnico de equipes e garantia de qualidade operacional.\n' +
            '- Halliburton, Technical Leader for Drilling and Completions (12/2022 – 01/2024)\n' +
            '  - Coordenação técnica, treinamentos e interface com cliente.\n' +
            '- Halliburton, Application Consultant (12/2021 – 12/2022)\n' +
            '  - Monitoramento de operações e análises de risco.\n' +
            '- Halliburton, Engineering Consultant (12/2016 – 12/2021)\n' +
            '  - Referência em simulações avançadas para engenharia de perfuração.\n' +
            '- Halliburton, Field Engineer (04/2013 – 11/2016)\n' +
            '  - Montagem e operação de equipamentos de completação em plataformas offshore.',
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
        address: 'Santos, SP',
        city: 'Santos - SP',
        role: 'Mechanical Engineer | Drilling & Completions Specialist',
      },
      sections: {
        about: {
          title: 'About',
          details:
            'Mechanical Engineer with solid experience in the Oil & Gas sector, specialized in drilling and well completion. I’ve worked at leading companies such as Halliburton and Infotec, managing projects, leading technical teams, and applying cutting-edge technology to optimize operations. Passionate about innovation, I integrate AI, automation, and advanced simulations to enhance technical value and efficiency.',
        },
        education: {
          title: 'Education',
          details:
            '- Mechanical Engineering – UNESP (2005 – 2010)\n' +
            '- Postgraduate in Onshore and Offshore Equipment Engineering – UCP (2013 – 2014)\n' +
            '- MBA in Project Management – FGV (2017 – 2019)',
        },
        experience: {
          title: 'Experience',
          details:
            '- INFOTEC, Drilling Project Specialist (01/2025 – Present)\n' +
            '  - Design of main, pilot, relief, and intercept wells. Simulations and technical analysis with engineering software.\n' +
            '- Halliburton, Performance Development & Field Service Quality Coordinator (01/2024 – 12/2024)\n' +
            '  - Technical team development and operational quality assurance.\n' +
            '- Halliburton, Technical Leader for Drilling and Completions (12/2022 – 01/2024)\n' +
            '  - Technical coordination, training, and client interface.\n' +
            '- Halliburton, Application Consultant (12/2021 – 12/2022)\n' +
            '  - Operations monitoring and risk analysis.\n' +
            '- Halliburton, Engineering Consultant (12/2016 – 12/2021)\n' +
            '  - Expert in advanced simulations for drilling engineering.\n' +
            '- Halliburton, Field Engineer (04/2013 – 11/2016)\n' +
            '  - Assembly and operation of sand control and completion equipment in offshore platforms.',
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
  