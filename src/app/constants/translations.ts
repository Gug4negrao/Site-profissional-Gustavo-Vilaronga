import { Language } from '../models/language.model';

export type TranslationKey =
  | 'links'
  | 'aboutMe'
  | 'skills'
  | 'developerFullStack'
  | 'textParagraph1'
  | 'textParagraph2'
  | 'textParagraph3'
  | 'projects'
  | 'umaCausaDescription'
  | 'portfolioDescription'
  | 'entendendoSuaMenteDescription'
  | 'static'
  | 'portfolio'
  | 'send'
  | 'yourName'
  | 'yourEmail'
  | 'yourMessage'
  | 'contact'
  | 'start'
  | 'allRightsReserved'
  | 'home'
  | 'heroTagline'
  | 'scrollDown'
  | 'mySkills'
  | 'myProjects'
  | 'viewCode'
  | 'liveDemo'
  | 'getInTouch'
  | 'contactSubtitle'
  | 'backToTop'
  | 'aboutSubtitle'
  | 'skillsSubtitle'
  | 'projectsSubtitle'
  | 'heroGreeting'
  | 'visitProject'
  | 'previewUnavailable'
  | 'yourSubject'
  | 'fieldRequired'
  | 'invalidEmail'
  | 'minChars'
  | 'sending'
  | 'messageSent'
  | 'messageSentDescription'
  | 'sendError'
  | 'newMessage';

export const Translations: Record<TranslationKey, Record<Language, string>> = {
  links: {
    'pt-br': 'Links',
    'en-us': 'Links',
    'es-es': 'Enlaces'
  },
  home: {
    'pt-br': 'Início',
    'en-us': 'Home',
    'es-es': 'Inicio'
  },
  aboutMe: {
    'pt-br': 'Sobre mim',
    'en-us': 'About me',
    'es-es': 'Sobre mí'
  },
  aboutSubtitle: {
    'pt-br': 'Conheça um pouco da minha trajetória',
    'en-us': 'Get to know a bit of my journey',
    'es-es': 'Conoce un poco de mi trayectoria'
  },
  skills: {
    'pt-br': 'Habilidades',
    'en-us': 'Skills',
    'es-es': 'Competencias'
  },
  mySkills: {
    'pt-br': 'Minhas Habilidades',
    'en-us': 'My Skills',
    'es-es': 'Mis Competencias'
  },
  skillsSubtitle: {
    'pt-br': 'Tecnologias que utilizo no dia a dia',
    'en-us': 'Technologies I use daily',
    'es-es': 'Tecnologías que uso a diario'
  },
  developerFullStack: {
    'pt-br': 'Desenvolvedor Full-Stack',
    'en-us': 'Full-Stack Developer',
    'es-es': 'Desarrollador Full-Stack'
  },
  heroTagline: {
    'pt-br': 'Transformando ideias em experiências digitais',
    'en-us': 'Turning ideas into digital experiences',
    'es-es': 'Convirtiendo ideas en experiencias digitales'
  },
  scrollDown: {
    'pt-br': 'Role para baixo',
    'en-us': 'Scroll down',
    'es-es': 'Desplázate hacia abajo'
  },
  textParagraph1: {
    'pt-br': 'Sou Gustavo Negrão Vilalonga, desenvolvedor e apaixonado por tecnologia desde cedo. Natural de Santos-SP, comecei minha jornada na programação aos 15 anos e, desde então, venho transformando estudo, prática e curiosidade em projetos cada vez mais completos.',
    'en-us': "I'm Gustavo Negrão Vilalonga, a developer passionate about technology from an early age. Born in Santos-SP, I started my programming journey at 15 and, since then, I have been turning study, practice, and curiosity into increasingly complete projects.",
    'es-es': 'Soy Gustavo Negrão Vilalonga, desarrollador y apasionado por la tecnología desde muy joven. Nacido en Santos-SP, comencé mi camino en la programación a los 15 años y, desde entonces, vengo transformando estudio, práctica y curiosidad en proyectos cada vez más completos.'
  },
  textParagraph2: {
    'pt-br': 'Além da tecnologia, o esporte e a música também fazem parte da minha trajetória. Treinei tênis de mesa por 8 anos, experiência que fortaleceu minha disciplina, foco e constância. Na música, encontrei no canto uma forma de expressar criatividade e sensibilidade.',
    'en-us': 'Beyond technology, sports and music are also part of my journey. I trained table tennis for 8 years — an experience that strengthened my discipline, focus, and consistency. In music, I found in singing a way to express creativity and sensitivity.',
    'es-es': 'Además de la tecnología, el deporte y la música también forman parte de mi trayectoria. Entrené tenis de mesa durante 8 años, una experiencia que fortaleció mi disciplina, foco y constancia. En la música, encontré en el canto una forma de expresar creatividad y sensibilidad.'
  },
  textParagraph3: {
    'pt-br': 'Hoje, sigo evoluindo como desenvolvedor, buscando criar soluções funcionais, bem estruturadas e com atenção aos detalhes. Gosto de aprender, resolver problemas e participar de projetos que unam tecnologia, criatividade e propósito.',
    'en-us': 'Today, I keep evolving as a developer, aiming to build functional, well-structured solutions with attention to detail. I enjoy learning, solving problems, and joining projects that combine technology, creativity, and purpose.',
    'es-es': 'Hoy sigo evolucionando como desarrollador, buscando crear soluciones funcionales, bien estructuradas y con atención a los detalles. Me gusta aprender, resolver problemas y participar en proyectos que unan tecnología, creatividad y propósito.'
  },
  projects: {
    'pt-br': 'Projetos',
    'en-us': 'Projects',
    'es-es': 'Proyectos'
  },
  myProjects: {
    'pt-br': 'Meus Projetos',
    'en-us': 'My Projects',
    'es-es': 'Mis Proyectos'
  },
  projectsSubtitle: {
    'pt-br': 'Alguns dos trabalhos que já desenvolvi',
    'en-us': 'Some of the work I have already developed',
    'es-es': 'Algunos de los trabajos que he desarrollado'
  },
  umaCausaDescription: {
    'pt-br': 'Plataforma web desenvolvida como Trabalho de Conclusão de Curso (TCC) do ensino técnico. Permite a descoberta de ONGs, realização de doações e acompanhamento de metas de instituições sociais, com foco na integração entre usuários e causas sociais.',
    'en-us': 'A web platform developed as a Course Conclusion Paper (TCC) for technical education. It allows NGOs to be discovered, donations to be made and the goals of ongoing social institutions to be monitored, with a focus on integration between users and social causes.',
    'es-es': 'Plataforma web desarrollada como proyecto de finalización de curso (TCC) en educación técnica. Permite descubrir ONG, hacer donaciones y seguir los objetivos de las instituciones sociales en curso, con un enfoque de integración entre usuarios y causas sociales.'
  },
  portfolioDescription: {
    'pt-br': 'Este site foi criado para apresentar minhas informações profissionais, habilidades, projetos e formas de contato. Aqui você encontra um pouco da minha trajetória e como podemos nos conectar.',
    'en-us': 'This website was created to present my professional information, skills, projects and ways of contacting me. Here you will find a little of my background and how we can connect.',
    'es-es': 'Este sitio web fue creado para presentar mi información profesional, habilidades, proyectos y formas de contactar conmigo. Aquí encontrarás un poco de mi trayectoria y cómo podemos conectar.'
  },
  entendendoSuaMenteDescription: {
    'pt-br': 'Site profissional desenvolvido para uma psicóloga, com foco em apresentar seus serviços, especialidades, conteúdos informativos e facilitar o contato com pacientes. A plataforma oferece uma navegação clara e acolhedora, com design pensado para transmitir confiança e bem-estar.',
    'en-us': 'A professional website developed for a psychologist, focused on presenting her services, specialties, informative content and facilitating contact with patients. The platform offers clear and welcoming navigation, with a design designed to convey trust and well-being.',
    'es-es': 'Sitio web profesional desarrollado para una psicóloga, centrado en presentar sus servicios, especialidades, contenidos informativos y facilitar el contacto con los pacientes. La plataforma ofrece una navegación clara y acogedora, con un diseño pensado para transmitir confianza y bienestar.'
  },
  static: {
    'pt-br': 'Acessar',
    'en-us': 'Visit',
    'es-es': 'Acceder'
  },
  portfolio: {
    'pt-br': 'Portfólio',
    'en-us': 'Portfolio',
    'es-es': 'Cartera'
  },
  viewCode: {
    'pt-br': 'Ver código',
    'en-us': 'View code',
    'es-es': 'Ver código'
  },
  liveDemo: {
    'pt-br': 'Demo',
    'en-us': 'Live demo',
    'es-es': 'Demo'
  },
  send: {
    'pt-br': 'Enviar mensagem',
    'en-us': 'Send message',
    'es-es': 'Enviar mensaje'
  },
  yourName: {
    'pt-br': 'Seu nome',
    'en-us': 'Your name',
    'es-es': 'Tu nombre'
  },
  yourEmail: {
    'pt-br': 'Seu email',
    'en-us': 'Your email',
    'es-es': 'Tu email'
  },
  yourMessage: {
    'pt-br': 'Sua mensagem',
    'en-us': 'Your message',
    'es-es': 'Tu mensaje'
  },
  contact: {
    'pt-br': 'Contato',
    'en-us': 'Contact',
    'es-es': 'Contacto'
  },
  getInTouch: {
    'pt-br': 'Entre em contato',
    'en-us': 'Get in touch',
    'es-es': 'Ponte en contacto'
  },
  contactSubtitle: {
    'pt-br': 'Vamos conversar sobre seu próximo projeto',
    'en-us': "Let's talk about your next project",
    'es-es': 'Hablemos de tu próximo proyecto'
  },
  start: {
    'pt-br': 'Início',
    'en-us': 'Start',
    'es-es': 'Principio'
  },
  allRightsReserved: {
    'pt-br': 'Todos os direitos reservados.',
    'en-us': 'All rights reserved.',
    'es-es': 'Reservados todos los derechos.'
  },
  backToTop: {
    'pt-br': 'Voltar ao topo',
    'en-us': 'Back to top',
    'es-es': 'Volver arriba'
  },
  heroGreeting: {
    'pt-br': 'Olá, eu sou',
    'en-us': "Hi, I'm",
    'es-es': 'Hola, soy'
  },
  visitProject: {
    'pt-br': 'Visitar',
    'en-us': 'Visit',
    'es-es': 'Visitar'
  },
  previewUnavailable: {
    'pt-br': 'Preview indisponível',
    'en-us': 'Preview unavailable',
    'es-es': 'Vista previa no disponible'
  },
  yourSubject: {
    'pt-br': 'Assunto',
    'en-us': 'Subject',
    'es-es': 'Asunto'
  },
  fieldRequired: {
    'pt-br': 'Campo obrigatório',
    'en-us': 'Required field',
    'es-es': 'Campo obligatorio'
  },
  invalidEmail: {
    'pt-br': 'Email inválido',
    'en-us': 'Invalid email',
    'es-es': 'Email inválido'
  },
  minChars: {
    'pt-br': 'Mínimo de caracteres não atingido',
    'en-us': 'Minimum characters not reached',
    'es-es': 'Mínimo de caracteres no alcanzado'
  },
  sending: {
    'pt-br': 'Enviando...',
    'en-us': 'Sending...',
    'es-es': 'Enviando...'
  },
  messageSent: {
    'pt-br': 'Mensagem enviada!',
    'en-us': 'Message sent!',
    'es-es': '¡Mensaje enviado!'
  },
  messageSentDescription: {
    'pt-br': 'Obrigado pelo contato. Responderei o mais breve possível.',
    'en-us': 'Thanks for reaching out. I will reply as soon as possible.',
    'es-es': 'Gracias por escribir. Responderé lo antes posible.'
  },
  sendError: {
    'pt-br': 'Não foi possível enviar agora. Tente novamente em instantes.',
    'en-us': 'Could not send right now. Please try again shortly.',
    'es-es': 'No se pudo enviar ahora. Inténtalo de nuevo en breve.'
  },
  newMessage: {
    'pt-br': 'Enviar outra',
    'en-us': 'Send another',
    'es-es': 'Enviar otro'
  }
};
