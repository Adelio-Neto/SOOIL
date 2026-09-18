// =========================================================
// LANGUAGE TOGGLE — EN ⇄ PT
// =========================================================

const langBtn = document.getElementById("langBtn");

const enToPt = {
  "Primary navigation": "Navegação principal",
  "Open menu": "Abrir menu",
  "Translate to Portuguese": "Traduzir para português",
  "Back to top": "Voltar ao topo",
  "Play video": "Reproduzir vídeo",
  "Video": "Vídeo",
  "Video thumbnail": "Miniatura do vídeo",

  "About Us": "Sobre nós",
  "What We Do": "O que fazemos",
  "Sustainability": "Sustentabilidade",
  "Investors": "Investidores",
  "News & Media": "Notícias e mídia",
  "Careers": "Carreiras",

  "Professional working at an industrial facility":
    "Profissional a trabalhar numa instalação industrial",
  "Operations and business": "Operações e negócio",
  "Investor relations": "Relações com investidores",
  "Our company": "Nossa empresa",
  "Our Company": "Nossa empresa",
  "Learn more": "Leia mais",
  "A team of professionals driving safe and efficient operations across Angola.": "Uma equipa de profissionais a conduzir operações seguras e eficientes em Angola.",
  "Long-term value built on disciplined capital and strategic partnerships.": "Valor de longo prazo construído com capital disciplinado e parcerias estratégicas.",
  "Supporting infrastructure that empowers communities and industry.": "Apoio a infraestruturas que potenciam comunidades e indústria.",
  "New financial solutions for the next generation of energy projects.": "Novas soluções financeiras para a próxima geração de projetos de energia.",
  "What we do": "O que fazemos",
  "Investor Relations": "Relações com investidores",

  "Strategic investments driving<br>the strength of Angola's oil sector":
    "Investimentos estratégicos que impulsionam<br>a força do setor petrolífero angolano",
  "The way we<br>create value at every<br>stage of the production chain":
    "A nossa forma de<br>criar valor em cada<br>etapa da cadeia produtiva",
  "Committed to a more<br>sustainable future<br>for everyone":
    "Compromisso com um<br>futuro mais<br>sustentável para todos",
  "Clear information for<br>those investing in<br>our future":
    "Informação clara para<br>quem investe no<br>nosso futuro",

  "Sooil Services, Lda is an Angolan company specialized in Private Equity for producing oil fields in the Angolan Oil & Gas sector.":
    "A Sooil Services, Lda é uma empresa angolana especializada em Private Equity para campos de produção de petróleo no setor de Oil & Gas angolano.",
  "Team of professionals at an industrial facility":
    "Equipa de profissionais numa instalação industrial",
  "We are working to reduce emissions and support the energy transition.":
    "Estamos a trabalhar para reduzir as emissões e apoiar a transição energética.",
  "From structured financing to exploration and production projects.":
    "Do financiamento estruturado aos projetos de exploração e produção.",
  "We offer professional opportunities in finance, energy and management.":
    "Oferecemos oportunidades profissionais em finanças, energia e gestão.",
  "Committed to sustainable value for shareholders and communities.":
    "Empenhados em criar valor sustentável para acionistas e comunidades.",
  "We believe in the power of energy to help build human progress.":
    "Acreditamos no poder da energia para ajudar a construir o progresso humano.",
  "Our workforce": "A nossa força de trabalho",
  "Our future": "O nosso futuro",
  "Development": "Desenvolvimento",
  "Innovation": "Inovação",
  "Learn more →": "Saber mais →",
  "At a glance": "Em resumo",
  "Years of business experience": "Anos de experiência empresarial",
  "Years of banking experience": "Anos de experiência bancária",
  "Executive directors": "Dirigentes na equipa executiva",
  "Environmental protection": "Proteção ambiental",
  "Our approach seeks to create lasting value while protecting natural resources and ecosystems.":
    "A nossa abordagem procura criar valor duradouro enquanto protege os recursos e os ecossistemas naturais.",
  "Our sustainability": "A nossa sustentabilidade",
  "Climate and energy": "Clima e energia",
  "People and safety": "Pessoas e segurança",
  "Biodiversity initiatives": "Iniciativas de biodiversidade",
  "New strategies to reduce emissions and support the energy transition.":
    "Novas estratégias para reduzir emissões e apoiar a transição energética.",
  "An ongoing commitment to our people and our communities.":
    "Um compromisso permanente com as pessoas e as comunidades.",
  "Preserving and restoring ecosystems where we operate.":
    "Preservar e restaurar os ecossistemas onde operamos.",
  "See more →": "Ver mais →",
  "News from the oil & gas sector": "Notícias do setor de petróleo e gás",
  "Explore news": "Explorar notícias",
  "News · 23 September": "Notícia · 23 de setembro",
  "News · 25 September": "Notícia · 25 de setembro",
  "News · 18 September": "Notícia · 18 de setembro",
  "News · 12 September": "Notícia · 12 de setembro",
  "News · 11 September": "Notícia · 11 de setembro",
  "News · 6 September": "Notícia · 6 de setembro",
  "News · 4 September": "Notícia · 4 de setembro",
  "News · Sooil": "Notícia · Sooil",
  "Angola Stock Exchange opens with BFA leading the way":
    "Bolsa de Valores de Angola abre com a BFA a liderar as ações",
  "Luele expects to produce eight million carats":
    "Luele prevê produzir oito milhões de quilates",
  "Huíla collects 17 billion in tax revenue in nine months":
    "Huíla arrecada 17 mil milhões em receitas fiscais em nove meses",
  "Follow the latest developments in Angola's oil industry":
    "Acompanhe os últimos desenvolvimentos da indústria petrolífera angolana",
  "View more news": "Ver mais notícias",
  "Our story": "A nossa história",
  "Helping drive progress across Angola":
    "A ajudarmos a impulsionar o progresso em Angola",
  "Explore the story": "Explorar a história",
  "Knowledge": "Conhecimento",
  "Community": "Comunidade",
  "Perspectives": "Perspetivas",
  "An energy that transforms": "Uma energia que transforma",
  "Team": "Equipa",
  "Our Team": "A nossa equipa",
  "Leadership": "Liderança",
  "Open": "Abrir",
  "Building the future": "Construindo o futuro",
  "Ideas for tomorrow": "Ideias para o amanhã",
  "Get in touch": "Entre em contacto",
  "Our terms": "Os nossos termos",
  "Relations": "Relações",
  "Investor news": "Notícias do investidor",
  "Send us a message": "Envie-nos uma mensagem",
  "Responsibility": "Responsabilidade",
  "Legal information": "Informação legal",
  "Terms & conditions": "Termos e condições",
  "Press room": "Sala de imprensa",
  "Corporate reports": "Relatórios corporativos",
  "Business ethics": "Ética empresarial",
  "Presentations": "Apresentações",
  "Financial information": "Informação financeira",
  "Share prices": "Preços das ações",
  "Privacy policy": "Política de privacidade",
  "Terms and conditions": "Termos e condições",
  "Sooil Services logo": "Logótipo Sooil Services",
  "© Copyright 2026 Sooil Services, Lda. All Rights Reserved.":
    "© Copyright 2026 Sooil Services, Lda. Todos os direitos reservados.",
  "Privacy center": "Centro de privacidade",
  "Close": "Fechar",
  "In order to improve your experience on our website, we use cookies - small files stored on your device. They help us understand how the site is used and allow certain features to work correctly. By continuing to browse, you agree to their use. You can disable cookies at any time in your browser settings.":
    "Para melhorar a sua experiência no nosso website, utilizamos cookies - pequenos ficheiros armazenados no seu dispositivo. Eles ajudam-nos a compreender como o site é utilizado e permitem que algumas funcionalidades funcionem corretamente. Ao continuar a navegar, aceita a sua utilização. Pode desativar os cookies em qualquer altura nas definições do seu navegador.",
  "Your privacy matters to us. Sooil Services, Lda only collects the personal information you choose to share with us, for example when you send an email or a message. We use it solely to respond to you and to fulfil legal obligations, and we never sell it to third parties. You can request access to, correction of, or deletion of your data by contacting ama@sooilservices.com.":
    "A sua privacidade é importante para nós. A Sooil Services, Lda apenas recolhe as informações pessoais que decidir partilhar connosco, por exemplo quando envia um email ou uma mensagem. Utilizamo-las apenas para lhe responder e para cumprir obrigações legais, e nunca as vendemos a terceiros. Pode solicitar o acesso, a correção ou a eliminação dos seus dados contactando ama@sooilservices.com.",
  "The content on this website is for general information only and does not constitute investment, financial or legal advice. Sooil Services, Lda owns the content and reserves the right to update these terms at any time. Using this website implies acceptance of these terms.":
    "O conteúdo deste website tem caráter meramente informativo e não constitui aconselhamento de investimento, financeiro ou jurídico. A Sooil Services, Lda é proprietária do conteúdo e reserva-se o direito de atualizar estes termos em qualquer altura. A utilização deste website implica a aceitação destes termos.",

  "About us": "Sobre nós",
  "Private Equity in Angola's<br />Oil & Gas sector":
    "Private Equity no setor de<br />Oil & Gas angolano",
  "Industrial facility in the oil sector":
    "Instalação industrial do setor petrolífero",
  "Contact us": "Fale connosco",
  "Our commitment is to generate sustainable value for shareholders and to contribute to improving the quality of life for future generations, through strategic investments in the most vital sector of the Angolan economy.":
    "O nosso compromisso é gerar valor sustentável para os acionistas e contribuir para melhorar a qualidade de vida das futuras gerações, através de investimentos estratégicos no setor mais vital da economia angolana.",
  "Visit our website": "Visitar o nosso site",
  "Vision": "Visão",
  "To be a leading strategic partner in the Angolan oil sector, driving value creation and supporting industry growth through innovative financial solutions.":
    "Ser um parceiro estratégico de referência no setor petrolífero angolano, impulsionando a criação de valor e apoiando o crescimento do setor através de soluções financeiras inovadoras.",
  "Mission": "Missão",
  "To provide investment capital and structured financing solutions.":
    "Fornecer capital de investimento e soluções de financiamento estruturado.",
  "We leverage our extensive experience in banking, finance and asset management to strengthen and consolidate exploration and production projects in the Angolan Oil & Gas industry.":
    "Alavancamos a nossa vasta experiência em banca, finanças e gestão de ativos para fortalecer e consolidar projetos de exploração e produção no setor de Oil & Gas angolano.",
  "Value proposition": "Proposta de valor",
  "Strategic financing in the form of equity value":
    "Financiamento estratégico na forma de capital próprio (equity)",
  "Consolidated expertise in banking and financial services":
    "Experiência consolidada em banca e serviços financeiros",
  "Strong commitment to the sustainable growth of the oil industry":
    "Forte compromisso com o crescimento sustentável da indústria petrolífera",
  "Focus on value creation for the sector and for society":
    "Foco na criação de valor para o setor e para a sociedade",
  "Location and contacts": "Localização e contactos",
  "2nd floor, Luanda — Angola": "2º andar, Luanda — Angola",
  "Open in Google Maps": "Abrir no Google Maps",
  "Leadership": "Liderança",
  "Executive team": "Direção executiva",
  "Chairman · Board of Directors": "Presidente · Conselho de Administração",
  "More than 30 years of business career. He began as a commodities trader, graduated in Business Management from NYU (1991) and spent the last 15 years in banking and private equity, holding board roles at Banco Caixa Angola and Capital Group (Geneva).":
    "Mais de 30 anos de carreira empresarial. Começou como trader de commodities, licenciou-se em Gestão Empresarial pela NYU (1991) e dedicou os últimos 15 anos à banca e ao private equity, com cargos de administração no Banco Caixa Angola e na Capital Group (Genebra).",
  "Director": "Diretor",
  "Graduated in Global Hospitality Management from Les Roches (Switzerland), he supports projects in Oil & Gas, Agribusiness, Mining, Aviation and Infrastructure, with a focus on acquisitions, strategic partnerships and due diligence.":
    "Formado em Gestão Hoteleira Global pela Les Roches (Suíça), assessora projetos em Oil & Gas, Agronegócio, Mineração, Aviação e Infraestrutura, com foco em aquisições, parcerias estratégicas e due diligence.",
  "Senior executive with 26 years of banking experience at leading institutions such as Standard Bank Angola and Caixa Angola. Currently Director of Operations at GAM and Director of Corporate Strategy at BROO.":
    "Executivo sénior com 26 anos de experiência bancária em instituições de referência como o Standard Bank Angola e a Caixa Angola. Atualmente Diretor de Operações na GAM e de Estratégia Corporativa na BROO.",
  "Executive with extensive experience in banking and finance, dedicated to organizational transformation, risk management and the development of innovative corporate banking solutions.":
    "Executivo com vasta experiência em banca e finanças, dedicado à transformação organizacional, à gestão de riscos e ao desenvolvimento de soluções inovadoras no corporate banking.",
  "Accountant specialized in Controllership and Finance from Fundação Dom Cabral, with more than 25 years in projects, accounting and finance. University professor and volunteer leader at Vinha Angola.":
    "Contabilista com especialização em Controladoria e Finanças pela Fundação Dom Cabral, com mais de 25 anos em projetos, contabilidade e finanças. Professora universitária e líder voluntária na Vinha Angola.",
  "Helping drive progress in Angola": "A ajudarmos a impulsionar o progresso em Angola",
  "Sector news": "Notícias do setor",
  "Location": "Localização",

  "Sooil Services — Private Equity in Angola's Oil & Gas":
    "Sooil Services — Private Equity no setor de Oil & Gas em Angola",
  "About Us — Sooil Services": "Sobre nós — Sooil Services",
  "What We Do — Sooil Services": "O que fazemos — Sooil Services",
  "Sustainability — Sooil Services": "Sustentabilidade — Sooil Services",
  "Investors — Sooil Services": "Investidores — Sooil Services",
  "News & Media — Sooil Services": "Notícias e mídia — Sooil Services",
  "Careers — Sooil Services": "Carreiras — Sooil Services",

  "Back to news": "Voltar às notícias",
  "Read article": "Ler artigo",
  "23 September 2025 · Capital Markets":
    "23 de setembro de 2025 · Mercados de capitais",
  "Angola Stock Exchange opens with BFA leading the way — Sooil Services":
    "Bolsa de Valores de Angola abre com a BFA a liderar as ações — Sooil Services",
  "The Luanda Stock Exchange opened with Banco de Fomento Angola (BFA) leading the way among listed shares, marking a new chapter for Angola's capital market.":
    "A Bolsa de Valores de Luanda abriu com o Banco de Fomento Angola (BFA) a liderar as ações cotadas, marcando um novo capítulo para o mercado de capitais angolano.",
  "The listing reinforces the confidence of international investors in Angola's financial market. For a Private Equity firm specialized in the oil & gas sector, the development of the capital market opens new doors for financing exploration and production projects.":
    "A cotação reforça a confiança dos investidores internacionais no mercado financeiro angolano. Para uma empresa de Private Equity especializada no setor de petróleo e gás, o desenvolvimento do mercado de capitais abre novas portas ao financiamento de projetos de exploração e produção.",
  "Sooil Services welcomes this milestone as further evidence of Angola's commitment to attracting investment into its most vital industry, where diversified access to capital is essential for the sustainable growth of the sector.":
    "A Sooil Services saúda este marco como mais uma prova do compromisso de Angola em atrair investimento para o setor mais vital da economia, onde o acesso diversificado ao capital é essencial para o crescimento sustentável do setor.",
  "A deeper capital market also benefits the communities that depend on the energy industry, enabling long-term projects in infrastructure, training and social development.":
    "Um mercado de capitais mais profundo beneficia também as comunidades que dependem da indústria energética, permitindo projetos de longo prazo em infraestruturas, formação e desenvolvimento social.",
  "The development of Angola's capital market is key to financing the future of our oil industry.":
    "O desenvolvimento do mercado de capitais angolano é essencial para financiar o futuro da nossa indústria petrolífera.",
  "The Luanda Stock Exchange trading floor.":
    "A sala de negociação da Bolsa de Valores de Luanda.",
  "Angola Stock Exchange opens with":
    "A Bolsa de Valores de Angola abre com",
  "BFA leading the way": "a BFA a liderar as ações",
  "Capital markets and the energy sector":
    "Mercados de capitais e o setor de energia",
  "More from the sector": "Mais do setor",
  "All news": "Todas as notícias",
  "Related news": "Notícias relacionadas",
  "View more news": "Ver mais notícias",
  "Search news…": "Pesquisar notícias…",
  "No results": "Sem resultados",
  "Deep-water block tender attracts international majors":
    "Licitação de blocos em águas profundas atrai as grandes operadoras internacionais",
  "Angola expands refining capacity at Lobito":
    "Angola expande a capacidade de refinação no Lobito",
  "Natural gas takes centre stage in Angola's energy transition":
    "O gás natural ganha destaque na transição energética de Angola",
  "Cabinda leads new investment cycle in oil infrastructure":
    "Cabinda lidera novo ciclo de investimento em infraestrutura petrolífera",
  "25 September 2025 · Licensing": "25 de setembro de 2025 · Licenciamento",
  "18 September 2025 · Energy": "18 de setembro de 2025 · Energia",
  "12 September 2025 · Gas": "12 de setembro de 2025 · Gás",
  "6 September 2025 · Infrastructure": "6 de setembro de 2025 · Infraestrutura",

  "Strategic investments driving": "Investimentos estratégicos que impulsionam",
  "the strength of Angola's oil sector": "a força do setor petrolífero angolano",
  "create value at every": "criar valor em cada",
  "stage of the production chain": "etapa da cadeia produtiva",
  "for everyone": "para todos",
  "those investing in": "quem investe no",
  "our future": "o nosso futuro",
  "Clear information for": "Informação clara para",
  "Focus: Angola's Oil & Gas": "Foco: Oil & Gas de Angola",
  "Production": "Produção",
  "We believe in transparent relationships, sustainable returns and disciplined capital allocation in the oil & gas sector.": "Acreditamos em relações transparentes, retornos sustentáveis e alocação disciplinada de capital no setor de petróleo e gás.",
  "A new chapter for Angola's capital market, opening doors to financing the energy sector.": "Um novo capítulo para o mercado de capitais angolano, abrindo portas ao financiamento do setor de energia.",
  "The largest diamond mine in the world delivering significant volumes for the country.": "A maior mina de diamantes do mundo a entregar volumes significativos para o país.",
  "Tax revenue growth strengthening the province and its public services.": "O crescimento das receitas fiscais a fortalecer a província e os seus serviços públicos.",
  "Follow the latest developments in Angola's oil industry.": "Acompanhe os últimos desenvolvimentos da indústria petrolífera angolana.",

  "Dr. António Mbakassy Jr. began his business career more than 30 years ago as a commodities trader, working with sugar, rice, and frozen meats.": "Dr. António Mbakassy Jr. iniciou a sua carreira empresarial há mais de 30 anos como trader de commodities, trabalhando com açúcar, arroz e carnes congeladas.",
  "After spending over 15 years in Canada and the United States, he graduated in Business Management from New York University (NYU) in 1991. For the past 15 years he has dedicated his career to banking and private equity, serving at board level with Banco Caixa Angola and Capital Group (Geneva), with extensive expertise in structured financing, project finance, and debt raising.": "Após mais de 15 anos no Canadá e nos Estados Unidos, licenciou-se em Gestão Empresarial pela Universidade de Nova Iorque (NYU) em 1991. Nos últimos 15 anos dedicou a carreira à banca e ao private equity, com cargos de administração no Banco Caixa Angola e na Capital Group (Genebra), com vasta experiência em financiamento estruturado, project finance e captação de dívida.",
  "Geographic experience: Africa — Angola, Democratic Republic of Congo, Uganda, Kenya; Europe — Portugal, Switzerland; Americas — United States, Canada, Brazil, Ecuador, Colombia.": "Experiência geográfica: África — Angola, República Democrática do Congo, Uganda, Quénia; Europa — Portugal, Suíça; Américas — Estados Unidos, Canadá, Brasil, Equador, Colômbia.",
  "His career has positioned him as a global executive with deep expertise in emerging markets, infrastructure, energy, and natural resources.": "A sua carreira posicionou-o como executivo global com profunda experiência em mercados emergentes, infraestrutura, energia e recursos naturais.",
  "Dr. Benjamin Mosquito holds a Bachelor's degree in Global Hospitality Management from Les Roches, a Swiss institution ranked as the 2nd best in the world by QS World University Rankings, completing international internships in Europe and the United States.": "O Dr. Benjamin Mosquito é licenciado em Gestão Hoteleira Global pela Les Roches, instituição suíça considerada a 2.ª melhor do mundo pelo QS World University Rankings, com estágios internacionais na Europa e nos Estados Unidos.",
  "With a strong background in corporate strategy, investment analysis, and business development, he has supported projects across Oil & Gas, Agribusiness, Mining, Aviation, and Infrastructure, evaluating high-value acquisitions, structuring strategic partnerships, and conducting due diligence.": "Com forte formação em estratégia corporativa, análise de investimentos e desenvolvimento de negócios, apoiou projetos em Oil & Gas, Agronegócio, Mineração, Aviação e Infraestrutura, avaliando aquisições de alto valor, estruturando parcerias estratégicas e conduzindo due diligence.",
  "Since his return to Angola in 2024, he has been a Board Member of Broo Investimentos e Gestão de Ativos, Sooil Services, and GOPM.": "Desde o regresso a Angola em 2024, é membro do Conselho de Administração da Broo Investimentos e Gestão de Ativos, da Sooil Services e da GOPM.",
  "Luís Filipe Maio is a senior executive with 26 years of experience in the banking sector, distinguished by strategic management, organizational transformation, and leadership of complex operations.": "Luís Filipe Maio é um executivo sénior com 26 anos de experiência no setor bancário, distinguido pela gestão estratégica, transformação organizacional e liderança de operações complexas.",
  "He began his career in Portugal, held management roles at Banco Comercial do Huambo as Commercial Director and at Standard Bank Angola, and in 2023 joined Caixa Angola as Deputy Director of Corporate Banking (until April 2025).": "Iniciou a carreira em Portugal, desempenhou funções de gestão no Banco Comercial do Huambo como Diretor Comercial e no Standard Bank Angola, e em 2023 ingressou na Caixa Angola como Diretor-Adjunto de Corporate Banking (até abril de 2025).",
  "Currently he serves as Director of Operations at GAM (since June 2025) and Director of Corporate Strategy at BROO (since July 2025). Fluent in Portuguese, English, Spanish, French, and Italian.": "Atualmente é Diretor de Operações na GAM (desde junho de 2025) e Diretor de Estratégia Corporativa na BROO (desde julho de 2025). Fala português, inglês, espanhol, francês e italiano.",
  "Alba Gonçalves, an accountant specialized in Controllership and Finance from Fundação Dom Cabral, brings more than 25 years of experience in strategic positions across Projects, Accounting, Controllership, and Finance, excelling in cost analysis, economic and financial feasibility studies, and project implementation.": "Alba Gonçalves, contabilista especializada em Controladoria e Finanças pela Fundação Dom Cabral, acumula mais de 25 anos de experiência em posições estratégicas em Projetos, Contabilidade, Controladoria e Finanças, destacando-se na análise de custos, estudos de viabilidade económica e financeira e implementação de projetos.",
  "A graduate of Universidade Católica, she is also a teacher by vocation, having served as a university professor in Brazil and currently teaching in Angola.": "Licenciada pela Universidade Católica, é também professora por vocação, tendo lecionado no Brasil e atualmente ensinando em Angola.",
  "She plays an active role in the third sector as a volunteer leader at Vinha Angola, and currently serves on the Executive Board of BROO – Investimentos e Gestão de Ativos, a spinoff of Grupo Antônio Mosquito.": "Desempenha um papel ativo no terceiro setor como líder voluntária na Vinha Angola e integra o Conselho Executivo da BROO – Investimentos e Gestão de Ativos, uma spin-off do Grupo Antônio Mosquito.",

  "The largest diamond mine in the world is delivering significant volumes for the country, confirming Angola as a leading producer of high-quality diamonds.": "A maior mina de diamantes do mundo está a entregar volumes significativos para o país, confirmando Angola como produtora de referência de diamantes de alta qualidade.",
  "Production at the Luele mine continues to ramp up, with expectations of reaching eight million carats per year. The results reinforce the strength of Angola's mining sector beyond oil and gas.": "A produção na mina do Luele continua a crescer, com perspetivas de atingir oito milhões de quilates por ano. Os resultados reforçam a força do setor de mineração angolano para além do petróleo e do gás.",
  "The Luele diamond mine": "A mina de diamantes do Luele",
  "The Luele mine continues to ramp up production.": "A mina do Luele continua a aumentar a produção.",
  "A diversified economy": "Uma economia diversificada",
  "For investors, the growth of the diamond industry offers new opportunities to participate in Angola's economic transformation, complementing the energy sector.": "Para os investidores, o crescimento da indústria do diamante oferece novas oportunidades de participação na transformação económica de Angola, complementando o setor de energia.",
  "Mining and energy together are the pillars of Angola's economic future.": "A mineração e a energia juntas são os pilares do futuro económico de Angola.",
  "Sooil Services follows these developments closely, building a portfolio that reflects the growing diversity of the country's economy.": "A Sooil Services acompanha estes desenvolvimentos de perto, construindo uma carteira que reflete a crescente diversidade da economia do país.",

  "In the first nine months of the year, the province of Huíla collected close to 17 billion in tax revenue, a result that confirms the growth of its economic activity.": "Nos primeiros nove meses do ano, a província da Huíla arrecadou quase 17 mil milhões em receitas fiscais, um resultado que confirma o crescimento da sua atividade económica.",
  "The province of Huíla": "A província da Huíla",
  "The province of Huíla continues to see strong economic growth.": "A província da Huíla continua a registar um forte crescimento económico.",
  "Investment in public services": "Investimento em serviços públicos",
  "Higher revenue allows the province to invest in health, education and infrastructure, creating better conditions for families and for business.": "O aumento das receitas permite à província investir na saúde, educação e infraestruturas, criando melhores condições para as famílias e para as empresas.",
  "Sustainable public finances are the foundation of regional development.": "Finanças públicas sustentáveis são a base do desenvolvimento regional.",
  "The result reflects the continued dynamism of Angola's regions and the work of local institutions to broaden the tax base.": "O resultado reflete o dinamismo contínuo das regiões de Angola e o trabalho das instituições locais para alargar a base tributária.",

  "Angola's oil and gas sector continues to attract international investment, with producing fields, refining projects and new opportunities on the horizon.": "O setor de petróleo e gás de Angola continua a atrair investimento internacional, com campos em produção, projetos de refinação e novas oportunidades no horizonte.",
  "Angola's oil and gas sector": "O setor de petróleo e gás de Angola",
  "Exploration and production remain central to Angola's economy.": "A exploração e a produção continuam centrais para a economia angolana.",
  "Opportunities in producing fields": "Oportunidades em campos em produção",
  "For Private Equity investors, producing fields offer predictable cash flows and the chance to increase recovery rates with modern technology.": "Para os investidores de Private Equity, os campos em produção oferecem fluxos de caixa previsíveis e a oportunidade de aumentar as taxas de recuperação com tecnologia moderna.",
  "The most reliable opportunities are in the fields that are already producing.": "As oportunidades mais fiáveis estão nos campos que já estão em produção.",
  "Stay tuned for regular updates on projects, results and market developments across the Angolan energy landscape.": "Fique atento às atualizações regulares sobre projetos, resultados e evolução do mercado no panorama energético angolano.",

  "International oil companies are lining up ahead of Angola's upcoming deep-water block licensing round, a sign of sustained confidence in the country's offshore potential.": "As grandes petrolíferas internacionais preparam-se para a ronda de licitação de blocos em águas profundas de Angola, um sinal de confiança sustentada no potencial offshore do país.",
  "The licensing round covers several deep-water blocks with significant untapped potential. The level of interest from international operators confirms the competitive strength of Angola's offshore basins.": "A ronda de licitação abrange vários blocos de águas profundas com potencial significativo ainda por explorar. O nível de interesse dos operadores internacionais confirma a força competitiva das bacias offshore angolanas.",
  "Offshore platform on the horizon": "Plataforma offshore no horizonte",
  "Deep-water blocks continue to attract international operators.": "Os blocos de águas profundas continuam a atrair operadores internacionais.",
  "A new cycle of exploration": "Um novo ciclo de exploração",
  "For private investors, a cycle of new drilling and appraisal activity opens doors for structured financing across the exploration value chain.": "Para os investidores privados, um ciclo de novas perfurações e avaliações abre portas ao financiamento estruturado ao longo da cadeia de valor da exploração.",
  "Renewed exploration today builds the producing fields of tomorrow.": "A exploração renovada de hoje constrói os campos em produção de amanhã.",
  "Sooil Services follows the licensing calendar closely, mapping opportunities for investment capital in the country's most strategic assets.": "A Sooil Services acompanha de perto o calendário de licitação, mapeando oportunidades de capital de investimento nos ativos mais estratégicos do país.",

  "Angola is moving ahead with refining projects around Lobito, strengthening fuel security and diversifying downstream revenues.": "Angola avança com projetos de refinação em torno do Lobito, reforçando a segurança energética e diversificando as receitas a jusante.",
  "The expansion of refining capacity reduces dependence on imported fuels and creates new industrial activity along the coast, from construction to logistics.": "A expansão da capacidade de refinação reduz a dependência de combustíveis importados e cria nova atividade industrial ao longo da costa, da construção à logística.",
  "Refining plant under construction": "Refinaria em construção",
  "Refining projects strengthen the downstream value chain.": "Os projetos de refinação fortalecem a cadeia de valor a jusante.",
  "Beyond crude exports": "Para além das exportações de crude",
  "Downstream projects represent a growing segment for structured financing, with long-term contracts and predictable cash flows.": "Os projetos a jusante representam um segmento crescente para o financiamento estruturado, com contratos de longo prazo e fluxos de caixa previsíveis.",
  "Adding value at home multiplies the benefit of every barrel produced.": "Agregar valor em casa multiplica o benefício de cada barril produzido.",
  "Sooil Services tracks these investments as part of a broader view of Angola's energy value chain.": "A Sooil Services acompanha estes investimentos como parte de uma visão mais ampla da cadeia de valor energética de Angola.",

  "Natural gas is taking centre stage in Angola's energy transition, supporting cleaner power generation and opening new revenue streams.": "O gás natural ganha centralidade na transição energética de Angola, apoiando uma geração de energia mais limpa e abrindo novas fontes de receita.",
  "Associated gas and non-associated gas projects are gaining momentum, with new infrastructure connecting production to power plants and export markets.": "Os projetos de gás associado e de gás não associado ganham dinamismo, com novas infraestruturas a ligar a produção às centrais elétricas e aos mercados de exportação.",
  "Gas processing infrastructure": "Infraestrutura de processamento de gás",
  "Gas infrastructure supports cleaner energy and new exports.": "A infraestrutura de gás apoia uma energia mais limpa e novas exportações.",
  "A bridge to a cleaner mix": "Uma ponte para uma matriz mais limpa",
  "Gas offers a lower-emission path for power generation while LNG exports bring new revenue to the country, attracting international capital.": "O gás oferece um caminho de menor emissão para a geração de energia, enquanto as exportações de GNL trazem novas receitas ao país e atraem capital internacional.",
  "Gas is the bridge between today's energy realities and tomorrow's cleaner mix.": "O gás é a ponte entre as realidades energéticas de hoje e a matriz mais limpa de amanhã.",
  "Sooil Services sees the gas agenda as one of the most promising fronts for private capital in the coming years.": "A Sooil Services encara a agenda do gás como uma das frentes mais promissoras para o capital privado nos próximos anos.",

  "Cabinda is leading a new investment cycle in oil infrastructure, reinforcing its position at the heart of Angola's oil production.": "Cabinda lidera um novo ciclo de investimento em infraestrutura petrolífera, reforçando a sua posição no centro da produção de petróleo de Angola.",
  "Upgrades to pipelines, storage and supporting facilities are extending the life of mature fields and preparing the province for new developments.": "As renovações de oleodutos, armazenamento e instalações de apoio estão a prolongar a vida dos campos maduros e a preparar a província para novos desenvolvimentos.",
  "Oil infrastructure in Cabinda": "Infraestrutura petrolífera em Cabinda",
  "Infrastructure investment supports mature fields and local jobs.": "O investimento em infraestruturas apoia campos maduros e emprego local.",
  "Local value and jobs": "Valor local e emprego",
  "Beyond production volumes, the investment cycle brings local contracts, training and services that benefit surrounding communities.": "Para além dos volumes de produção, o ciclo de investimento traz contratos locais, formação e serviços que beneficiam as comunidades envolventes.",
  "Infrastructure investment is investment in people.": "Investir em infraestruturas é investir nas pessoas.",
  "Sooil Services continues to assess opportunities in the province, where infrastructure and production go hand in hand.": "A Sooil Services continua a avaliar oportunidades na província, onde infraestrutura e produção caminham lado a lado.",

  "Structured financing for": "Financiamento estruturado para",
  "Angola's oil & gas projects": "os projetos de petróleo e gás de Angola",
  "Our expertise": "A nossa experiência",
  "We combine banking expertise, private equity and a deep knowledge of Angola's energy sector to finance exploration and production.":
    "Combinamos experiência bancária, private equity e um profundo conhecimento do setor energético angolano para financiar a exploração e a produção.",
  "From opportunity analysis to structured capital, we support each stage of producing oil fields in the Angolan Oil & Gas industry.":
    "Da análise de oportunidades ao capital estruturado, apoiamos cada etapa dos campos de produção no setor de Oil & Gas angolano.",
  "Meet the team": "Conheça a equipa",
  "Private Equity": "Private Equity",
  "Investment capital for producing oil fields.":
    "Capital de investimento para campos petrolíferos em produção.",
  "We invest equity value in assets with proven reserves and a clear path to production.":
    "Investimos capital próprio em ativos com reservas comprovadas e um caminho claro para a produção.",
  "Structured Financing": "Financiamento estruturado",
  "Customized capital structures.": "Estruturas de capital personalizadas.",
  "Equity and quasi-equity solutions": "Soluções de capital próprio e quase-capital",
  "Debt raising and project finance": "Captação de dívida e financiamento de projetos",
  "Syndication with international partners": "Sindicação com parceiros internacionais",
  "Project Finance": "Financiamento de projetos",
  "Long-term financing aligned with each asset.":
    "Financiamento de longo prazo alinhado com cada ativo.",
  "Tailored structures for exploration, drilling and production operations, designed around cash flow and risk.":
    "Estruturas à medida para operações de exploração, perfuração e produção, desenhadas em torno do fluxo de caixa e do risco.",
  "Asset Management": "Gestão de ativos",
  "Banking and financial experience for value creation.":
    "Experiência bancária e financeira para a criação de valor.",
  "From analysis to follow-up, turning assets into lasting value.":
    "Da análise ao acompanhamento, transformando ativos em valor duradouro.",
  "Oil & Gas value chain": "Cadeia de valor de petróleo e gás",
  "Creating value at every stage of the production chain":
    "Criar valor em cada etapa da cadeia de produção",
  "Talk to us": "Fale connosco",
  "Exploration": "Exploração",
  "Financing the discovery and appraisal of new fields.":
    "Financiamento da descoberta e avaliação de novos campos.",
  "Structured capital for bringing fields into production.":
    "Capital estruturado para colocar os campos em produção.",
  "Value creation through assets in full operation.":
    "Criação de valor através de ativos em plena operação.",

  "Committed to a more": "Comprometidos com um",
  "sustainable future": "futuro mais sustentável",
  "Our commitment": "O nosso compromisso",
  "Supporting the energy transition": "Apoiar a transição energética",
  "New strategies to reduce emissions and support the transition to a cleaner energy mix.":
    "Novas estratégias para reduzir emissões e apoiar a transição para uma matriz energética mais limpa.",
  "An ongoing commitment to our people":
    "Um compromisso contínuo com as nossas pessoas",
  "Safety, training and development for our teams and the communities where we operate.":
    "Segurança, formação e desenvolvimento para as nossas equipas e para as comunidades onde operamos.",
  "Preserving natural ecosystems": "Preservar os ecossistemas naturais",
  "Initiatives to preserve and restore ecosystems in the areas surrounding our projects.":
    "Iniciativas para preservar e restaurar os ecossistemas nas áreas envolventes dos nossos projetos.",
  "Responsible governance": "Governação responsável",
  "Ethics and transparency": "Ética e transparência",
  "Solid governance, business ethics and alignment with international best practices.":
    "Governação sólida, ética empresarial e alinhamento com as melhores práticas internacionais.",
  "Sustainable value means generating returns for shareholders while improving the quality of life of future generations.":
    "Valor sustentável significa gerar retorno para os acionistas enquanto melhora a qualidade de vida das futuras gerações.",
  "Our responsibility": "A nossa responsabilidade",
  "Every investment carries a long-term view":
    "Cada investimento carrega uma visão de longo prazo",
  "Communities": "Comunidades",
  "Social investment in education, health and local development.":
    "Investimento social em educação, saúde e desenvolvimento local.",
  "Environment": "Ambiente",
  "Action to minimize impact and protect biodiversity.":
    "Ação para minimizar o impacto e proteger a biodiversidade.",
  "Governance": "Governação",
  "Transparent decisions guided by ethics and accountability.":
    "Decisões transparentes guiadas pela ética e pela responsabilidade.",

  "those investing in our future": "quem investe no nosso futuro",
  "A clear vision creates a solid basis for investment.":
    "Uma visão clara cria uma base sólida para o investimento.",
  "Read our reports": "Leia os nossos relatórios",
  "Potential": "Potencial",
  "A well-defined strategy": "Uma estratégia bem definida",
  "Focus on producing fields with proven reserves and strong growth potential.":
    "Foco em campos de produção com reservas comprovadas e forte potencial de crescimento.",
  "Consolidated financial discipline": "Disciplina financeira consolidada",
  "Capital structures designed to create value while protecting investors.":
    "Estruturas de capital criadas para gerar valor enquanto protegem os investidores.",
  "Ethics above all": "A ética acima de tudo",
  "Transparent decision-making aligned with international best practices.":
    "Tomada de decisão transparente, alinhada com as melhores práticas internacionais.",
  "Reports": "Relatórios",
  "Full transparency": "Transparência total",
  "Annual reports and shareholder communications, available on request.":
    "Relatórios anuais e comunicações aos acionistas, disponíveis mediante pedido.",

  "Sector and company news": "Notícias do setor e da empresa",

  "Build your career in finance and energy":
    "Construa a sua carreira em finanças e energia",
  "Come and grow with us": "Venha crescer connosco",
  "We are looking for talented professionals to help shape the future of finance and energy in Angola.":
    "Procuramos profissionais talentosos para ajudar a moldar o futuro das finanças e da energia em Angola.",
  "Our culture": "A nossa cultura",
  "Why work with us": "Porquê trabalhar connosco",
  "Purpose-driven projects": "Projetos com propósito",
  "Work on projects that generate value for Angola and for society.":
    "Trabalhe em projetos que geram valor para Angola e para a sociedade.",
  "Growth & training": "Crescimento e formação",
  "We invest in your development": "Investimos no seu desenvolvimento",
  "Continuous training and clear career paths.":
    "Formação contínua e percursos de carreira claros.",
  "Benefits": "Benefícios",
  "Support at every stage": "Apoio em todas as fases",
  "Competitive conditions and an environment focused on well-being.":
    "Condições competitivas e um ambiente focado no bem-estar.",
  "Culture": "Cultura",
  "Welcome to Sooil": "Bem-vindo à Sooil",
  "A diverse team, respect and collaboration at the centre.":
    "Uma equipa diversa, com respeito e colaboração no centro.",
  "Open positions": "Vagas em aberto",
  "Investment Analyst": "Analista de investimento",
  "Project Finance Manager": "Gestor de financiamento de projetos",
  "Finance Controller": "Controlador financeiro",
  "Full-time": "Tempo integral",
  "Apply": "Candidatar-se",
  "Don't see a role that fits?":
    "Não encontra uma vaga que se ajuste a si?",
  "Send us your CV and tell us how you can make a difference.":
    "Envie-nos o seu CV e diga-nos como pode fazer a diferença.",
  "Send your CV": "Envie o seu CV",

  "Luanda, Angola · Full-time": "Luanda, Angola · Tempo integral",
  "The latest from the oil & gas sector":
    "As últimas do setor de petróleo e gás",
  "Follow the latest developments": "Acompanhe os últimos desenvolvimentos",
  "News from the oil and gas sector": "Notícias do setor de petróleo e gás",
  "Oil and gas infrastructure": "Infraestrutura de petróleo e gás",
  "Energy professionals reviewing a project":
    "Profissionais de energia a analisar um projeto",
  "Sustainable oil and gas operations":
    "Operações sustentáveis de petróleo e gás",
  "Natural landscape near energy operations":
    "Paisagem natural junto a operações de energia",
  "Financial sector professionals": "Profissionais do setor financeiro",
  "Financial charts and analysis": "Gráficos financeiros e análise",
  "Oil and gas sector imagery": "Imagens do setor de petróleo e gás",
  "Professionals collaborating in an office":
    "Profissionais a colaborar num escritório",
  "Team working together": "Equipa a trabalhar em conjunto"
};

const ptToEn = Object.fromEntries(
  Object.entries(enToPt).map(([en, pt]) => [pt, en])
);

let currentLang = "pt";
try {
  // Por predefinição as páginas abrem em português. Só se respeita a escolha
  // feita na sessão/tab atual; uma nova sessão volta a PT.
  const sessionLang = sessionStorage.getItem("sooil-lang");
  if (sessionLang) currentLang = sessionLang;
} catch (e) {}

function translateWith(map, doc) {
  doc = doc || document;

  const attrs = ["aria-label", "alt", "data-eyebrow", "data-title"];
  doc
    .querySelectorAll("[aria-label],[alt],[data-eyebrow],[data-title]")
    .forEach((el) => {
      attrs.forEach((a) => {
        const value = el.getAttribute(a);
        if (value && map[value]) el.setAttribute(a, map[value]);
      });
    });

  const walker = doc.createTreeWalker(doc.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      if (node.parentElement.closest("script, style, noscript"))
        return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    const value = node.nodeValue;
    const normalized = value.replace(/\s+/g, " ").trim();
    if (normalized && map[normalized]) {
      const leading = (value.match(/^\s*/) || [""])[0];
      const trailing = (value.match(/\s*$/) || [""])[0];
      node.nodeValue = leading + map[normalized] + trailing;
    }
  });

  const aboutTitle = doc.querySelector(".page-hero h1");
  if (
    aboutTitle &&
    aboutTitle.textContent.includes("Private Equity in Angola") &&
    map["Private Equity in Angola's<br />Oil & Gas sector"]
  ) {
    aboutTitle.innerHTML = map["Private Equity in Angola's<br />Oil & Gas sector"];
  }

  const activeTab = doc.querySelector(".hero-tabs a.active");
  const eyebrowEl = doc.getElementById("heroEyebrow");
  const titleEl = doc.getElementById("heroTitle");
  const linkEl = doc.getElementById("heroLink");
  if (activeTab && eyebrowEl && titleEl && linkEl) {
    eyebrowEl.textContent = activeTab.dataset.eyebrow;
    titleEl.innerHTML = activeTab.dataset.title;
    linkEl.setAttribute("href", activeTab.dataset.href);
  }

  if (typeof doc.title === "string" && map[doc.title]) doc.title = map[doc.title];

  doc.documentElement.lang = currentLang === "pt" ? "pt" : "en";
}

function setLanguage(lang) {
  if (lang !== "pt") lang = "en";
  currentLang = lang;
  try {
    sessionStorage.setItem("sooil-lang", lang);
  } catch (e) {}

  translateWith(lang === "pt" ? enToPt : ptToEn);

  if (langBtn) langBtn.textContent = lang === "pt" ? "EN" : "PT";
}

if (langBtn) {
  langBtn.addEventListener("click", () => {
    setLanguage(currentLang === "en" ? "pt" : "en");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLang);
});