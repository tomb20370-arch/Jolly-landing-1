import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        courses: "Courses",
        aiPartner: "AI Partner",
        about: "About",
        contact: "Contact",
        enrollNow: "Enroll Now",
        promo: "Limited Time: Enroll 1, Get 1 Free for Family/Friends!",
        whatsappMessage: "I'm interested in the 2-for-1 offer. Can you tell me more?"
      },
      hero: {
        badge: "Global Online English School",
        title: "Speak English Naturally with",
        titleAccent: "Native Experts",
        titleSuffix: "",
        desc: "The only school that combines live classes with certified native teachers and a 24/7 AI practice partner. Bring a family member for FREE!",
        cta: "Book My Free Demo Class",
        secondaryCta: "View Courses",
        demoNote: "No credit card required. 15 minutes to change your future.",
        stats: "2,000+ Students & Native Experts",
        familyBadge: "Family & Friend Promo",
        familyDesc: "2 for 1: Enroll and bring a partner for free!"
      },
      courses: {
        title: "Online",
        titleSuffix: "Courses",
        subtitle: "Each course is delivered live via our digital campus by certified native instructors. Register today and bring a family member for free!",
        tagPopular: "Most Popular for Families",
        tagCareer: "Best for Careers",
        tagKids: "Recommended for Kids",
        promo2for1: "Family & Friend Promo: 2 for 1",
        outcomesTitle: "Course Outcomes:",
        advantageTitle: "Methodology:",
        advantageList: [
          "Certified Native Teacher (Live)",
          "AI Practice Companion",
          "24/7 Practice Access"
        ],
        ctaDemo: "Book My Free Demo Class",
        ctaNote: "No credit card required. 15 minutes to change your future.",
        included: {
          title: "What's",
          titleSuffix: "Included?",
          subtitle: "More than just a class. A complete ecosystem for fluency.",
          items: {
            ai: {
              title: "Unlimited AI Practice",
              desc: "Our AI never sleeps. Practice what you learned at 2:00 AM if you want."
            },
            experts: {
              title: "Certified Native Experts",
              desc: "No 'fake' accents. Learn the real English used in the US, UK, and Canada."
            },
            promise: {
              title: "The 2-for-1 Promise",
              desc: "Learning is a team sport. Bring a partner for free and stay motivated together."
            }
          }
        },
        methodology: {
          title: "Our Success",
          titleSuffix: "Methodology",
          desc: "We focus on \"Active Acquisition.\" Instead of reading from textbooks, you engage in real-world scenarios designed to trigger natural language processing.",
          items: {
            interaction: {
              title: "Live Interaction",
              desc: "Real-time feedback from native speakers."
            },
            contextual: {
              title: "Contextual Learning",
              desc: "Grammar through conversation, not rules."
            }
          },
          successRate: "Success Rate",
          successDesc: "Our students report immediate improvement in their ability to communicate in both social and professional settings."
        },
        list: {
          general: {
            title: "General English",
            desc: "Master everyday communication for travel, social life, and professional growth. Gain the confidence to handle any situation, from airports to business networking.",
            outcomes: ["Natural conversation flow", "Essential grammar mastery", "Vocabulary for daily life & work"],
            level: "All Levels",
            duration: "12 Weeks"
          },
          business: {
            title: "Business Pro",
            desc: "Lead international meetings and negotiate in English. Our AI analyzes your specific industry vocabulary after every class.",
            outcomes: ["Presentation skills", "Email & report writing", "Negotiation tactics"],
            level: "Intermediate+",
            duration: "10 Weeks"
          },
          kids: {
            title: "English for Kids",
            desc: "Help your child speak naturally while they play. Includes 24/7 AI games to reinforce school lessons.",
            outcomes: ["Phonics & pronunciation", "Basic sentence structures", "Confidence building"],
            level: "Ages 6-12",
            duration: "Ongoing"
          },
          exam: {
            title: "Exam Preparation",
            desc: "Targeted strategies and practice for IELTS, TOEFL, and Cambridge exams with AI-powered mock tests.",
            outcomes: ["Exam-specific techniques", "Time management", "Mock test practice"],
            level: "Intermediate+",
            duration: "8 Weeks"
          }
        }
      },
      aiPartner: {
        badge: "24/7 Practice Partner",
        title: "Practice",
        titleSuffix: "Partner",
        subtitle: "Enhance your learning with our 24/7 AI tutor. Get instant explanations, usage examples, and practice your English in context.",
        chat: {
          title: "Jolly AI Tutor",
          status: "Online & Ready",
          placeholder: "Type your message here...",
          welcome: "Hello! I'm your Jolly English AI Partner. How can I help you practice your English today? We can chat about anything, or I can explain idioms and grammar to you!",
          error: "I'm sorry, I'm having trouble responding right now. Let's try again!",
          connectionError: "Oops! My connection to the language hub was interrupted. Please try again in a moment.",
          systemInstruction: "You are a friendly, encouraging English tutor for Jolly English Academy. Help the user practice their English conversation skills. If they make a mistake, gently correct it and explain why. Keep responses concise and engaging."
        },
        howItWorks: {
          title: "How it works",
          desc: "Our AI Practice Partner uses advanced language models trained on educational materials. It's designed to provide helpful, safe, and accurate linguistic assistance for learners.",
          items: {
            feedback: "Instant Feedback",
            availability: "24/7 Availability",
            adaptive: "Adaptive Learning"
          },
          note: "Remember that AI is a tool to complement your regular classes at Jolly English Hub!"
        },
        proTip: {
          title: "Pro Tip",
          desc: "Try asking: \"Can you explain the difference between 'make' and 'do'?\" or \"Let's practice a job interview.\""
        }
      },
      about: {
        hero: {
          title: "Expert Online",
          titleSuffix: "English Education",
          subtitle: "Jolly English Academy is a global online school dedicated to bringing world-class language instruction directly to your home."
        },
        values: {
          title: "Our Core Values",
          items: {
            success: {
              title: "Student Success",
              desc: "We measure our success by your ability to communicate confidently in the real world."
            },
            community: {
              title: "Global Community",
              desc: "Bringing together learners and teachers from every corner of the globe."
            },
            innovation: {
              title: "Innovation",
              desc: "Using the latest technology to enhance, not replace, human-to-human learning."
            },
            integrity: {
              title: "Integrity",
              desc: "Honest feedback, transparent pricing, and a commitment to quality education."
            }
          }
        },
        method: {
          title: "The Jolly",
          titleSuffix: "Online Method",
          desc: "Our unique approach focuses on immersive digital interaction. We don't just teach English; we build confidence through real-time communication with native speakers, supported by cutting-edge AI for out-of-class practice.",
          items: {
            tech: {
              title: "Immersive Tech",
              desc: "Our virtual campus is designed for active participation."
            },
            native: {
              title: "Native Only",
              desc: "100% of our teachers are certified native speakers."
            },
            ai: {
              title: "AI Support",
              desc: "24/7 practice with our AI partner for continuous growth."
            }
          }
        }
      },
      contact: {
        hero: {
          title: "Start Your",
          titleSuffix: "Journey",
          subtitle: "Register today and secure your spot. Remember, your enrollment includes 2 Months Free for a family member or friend!"
        },
        info: {
          items: {
            campus: {
              title: "Global Online Campus",
              desc: "Learn from anywhere with native experts from USA, UK, and Canada."
            },
            family: {
              title: "Family & Friends First",
              desc: "We believe families that learn together grow together. Get 2 for 1 today."
            },
            support: {
              title: "Support Team",
              desc: "hello@jollyenglishacademy.site | Available 24/5"
            }
          }
        },
        promo: {
          title: "The 2-for-1 Promo",
          desc: "When you enroll, we grant a free second license for 2 months to a family member or friend. They can choose any course!",
          note: "No extra cost"
        },
        form: {
          title: "Registration Form",
          subtitle: "Fill out the details below to claim your 2-for-1 family promotion. This secures the free license for your child or adult friend.",
          fields: {
            name: {
              label: "Full Name",
              placeholder: "John Doe"
            },
            email: {
              label: "Email Address",
              placeholder: "john@example.com"
            },
            course: {
              label: "Preferred Course"
            },
            family: {
              label: "Family Member Name",
              placeholder: "Jane Doe (Optional)"
            },
            message: {
              label: "Message (Optional)",
              placeholder: "Tell us about your learning goals..."
            }
          },
          submit: {
            default: "Submit Registration",
            loading: "Processing..."
          }
        },
        success: {
          title: "Registration Received!",
          desc: "Thank you for joining Jolly English. One of our advisors will contact you within 24 hours to finalize your enrollment and activate your family license.",
          button: "Register Another Student"
        }
      },
      privacy: {
        title: "Privacy",
        titleSuffix: "Policy",
        sections: [
          {
            title: "1. Information We Collect",
            content: "We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, and any other information you choose to provide."
          },
          {
            title: "2. How We Use Your Information",
            content: "We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to personalize your experience at Jolly English Academy."
          },
          {
            title: "3. Data Security",
            content: "We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction."
          },
          {
            title: "4. Contact Us",
            content: "If you have any questions about this Privacy Policy, please contact us at hello@jollyenglishacademy.site."
          }
        ]
      },
      terms: {
        title: "Terms of",
        titleSuffix: "Service",
        sections: [
          {
            title: "1. Acceptance of Terms",
            content: "By accessing or using Jolly English Academy's services, you agree to be bound by these Terms of Service and all applicable laws and regulations."
          },
          {
            title: "2. Use of Services",
            content: "You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the services."
          },
          {
            title: "3. Intellectual Property",
            content: "All content provided through our services, including text, graphics, logos, and software, is the property of Jolly English Academy or its licensors and is protected by copyright and other intellectual property laws."
          },
          {
            title: "4. Limitation of Liability",
            content: "Jolly English Academy shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services."
          },
          {
            title: "5. Contact Us",
            content: "If you have any questions about these Terms of Service, please contact us at hello@jollyenglishacademy.site."
          }
        ]
      },
      home: {
        method: {
          title: "The 'Best of Both Worlds' Method",
          subtitle: "Human trust meets AI reinforcement. The only way to master English 2x faster.",
          human: {
            tag: "Human Trust",
            title: "Certified Natives",
            benefit: "Real Accent & Culture",
            desc: "Learn from human experts who understand nuance, emotion, and real-world context."
          },
          ai: {
            tag: "Never Forget",
            title: "AI Reinforcement",
            benefit: "24/7 Progress Tracking",
            desc: "Our AI 'remembers' your classes and helps you practice exactly what you learned 10 minutes ago."
          },
          promo: {
            tag: "Family Special",
            title: "2-for-1 Promo",
            benefit: "Save 50% Instantly",
            desc: "Bring a family member or friend for free. Learning is better (and cheaper) together."
          }
        },
        comparison: {
          title: "Why most English courses fail you",
          subtitle: "'I've been studying for years but still can't speak fluently.' — Sound familiar?",
          oldWay: {
            title: "The Old Way",
            items: [
              "Boring grammar drills & textbooks",
              "Passive listening without speaking",
              "Non-native teachers with accents",
              "Learning in isolation (solo)",
              "Fear of making mistakes"
            ]
          },
          jollyWay: {
            title: "The Jolly Way",
            items: [
              "100% Immersive conversations",
              "Certified Native Instructors only",
              "AI Partner for 24/7 practice",
              "Family & Friend shared learning",
              "Guaranteed fluency results"
            ]
          }
        },
        promoSection: {
          tag: "Family Exclusive",
          title: "Families that learn together,",
          titleAccent: "grow together.",
          desc: "Register today and your family member or friend gets 2 MONTHS FREE! 2 for the price of 1. Available for children or adults.",
          benefit1: "Double the Progress",
          benefit2: "Available for kids & adults",
          card: {
            badge: "Limited Time Offer",
            title: "2-for-1",
            subtitle: "Family License",
            items: ["2 Students", "Native Teachers", "AI Partner", "Mobile App"],
            cta: "Claim Offer"
          }
        },
        advantage: {
          title: "Why Jolly English?",
          subtitle: "Our ecosystem combines native human expertise with AI tools to deliver guaranteed results.",
          items: [
            {
              title: "Native Teachers",
              desc: "Learn from certified instructors from the UK, USA, and Canada. No accents, just pure fluency."
            },
            {
              title: "Active Immersion",
              desc: "Our methodology forces you to think and speak in English from day one. No translation allowed."
            },
            {
              title: "AI Practice Partner",
              desc: "Practice 24/7 with our advanced AI that adapts to your level and provides instant feedback."
            }
          ]
        },
        faq: {
          title: "Frequently Asked",
          titleSuffix: "Questions",
          subtitle: "Everything you need to know about our method and the 2-for-1 family promo.",
          items: [
            {
              question: "How does the 2-for-1 promo work?",
              answer: "When you enroll in any of our courses, you can bring a family member or a close friend to study with you at no extra cost. Both students get full access to live classes and the AI Practice Partner."
            },
            {
              question: "Are the teachers really native speakers?",
              answer: "Yes, 100%. All our instructors are certified native speakers from the UK, USA, or Canada. We believe that to speak naturally, you must learn from those who speak the language naturally."
            },
            {
              question: "How does the AI Practice Partner help me?",
              answer: "Our AI is available 24/7. It remembers what you learned in your live classes and helps you practice those specific topics. It provides instant feedback on grammar and pronunciation."
            },
            {
              question: "Do I need a high level of English to start?",
              answer: "Not at all! We have courses for all levels, from absolute beginners to advanced business professionals. Our methodology is designed to get you speaking from day one, regardless of your starting point."
            },
            {
              question: "Can I bring my child to the same class?",
              answer: "Yes! If you enroll in an adult course, you can bring your child to our 'English for Kids' course for free. If you enroll your child, they can bring a sibling or friend to the same or another kids' class at no extra cost. The 2-for-1 applies across our entire ecosystem."
            },
            {
              question: "How much does the course cost after the demo?",
              answer: "Our mission is to make fluency accessible. After your free demo, the 2-for-1 family plan starts at just R$ 97/month in Brazil. For other regions, we offer competitive local pricing—ask your advisor during the demo!"
            }
          ]
        },
        finalCta: {
          title: "Ready to Speak?",
          subtitle: "Join 2,000+ happy families. Your journey to fluency starts with a single conversation.",
          cta: "Start My 2-for-1 Journey",
          footer: ["7-Day Free Trial", "Cancel Anytime"]
        }
      },
      footer: {
        desc: "Empowering families to master English together through innovative AI-powered learning and immersive experiences.",
        quickLinks: "Quick Links",
        contactUs: "Contact Us",
        supportHours: "Support Hours",
        monFri: "Mon - Fri",
        sat: "Saturday",
        closed: "* Closed on Public Holidays",
        rights: "All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service"
      }
    }
  },
  pt: {
    translation: {
      nav: {
        courses: "Cursos",
        aiPartner: "Parceiro IA",
        about: "Sobre",
        contact: "Contato",
        enrollNow: "Matricule-se Agora",
        promo: "Tempo Limitado: Matricule 1, Ganhe 1 Grátis para Família/Amigos!",
        whatsappMessage: "Olá! Tenho interesse na oferta 2 por 1. Pode me dar mais informações?"
      },
      hero: {
        badge: "Escola Global de Inglês Online",
        title: "Fale Inglês Naturalmente com",
        titleAccent: "Especialistas Nativos",
        titleSuffix: "",
        desc: "A única escola que combina aulas ao vivo com professores nativos certificados e um parceiro de prática de IA 24/7. Traga um membro da família GRATUITAMENTE!",
        cta: "Agendar Minha Aula Demo Grátis",
        secondaryCta: "Ver Cursos",
        demoNote: "Sem cartão de crédito. 15 minutos para mudar seu futuro.",
        stats: "Mais de 2.000 Alunos e Especialistas Nativos",
        familyBadge: "Promoção Família e Amigos",
        familyDesc: "2 por 1: Matricule-se e traga um parceiro grátis!"
      },
      courses: {
        title: "Cursos",
        titleSuffix: "Online",
        subtitle: "Cada curso é entregue ao vivo através do nosso campus digital por instrutores nativos certificados. Registre-se hoje e traga um membro da família gratuitamente!",
        tagPopular: "Mais Popular para Famílias",
        tagCareer: "Melhor para Carreiras",
        tagKids: "Recomendado para Crianças",
        promo2for1: "Promoção Família e Amigos: 2 por 1",
        outcomesTitle: "Resultados do Curso:",
        advantageTitle: "Metodologia:",
        advantageList: [
          "Professor Nativo Certificado (Ao Vivo)",
          "Parceiro de Prática de IA",
          "Acesso à Prática 24/7"
        ],
        ctaDemo: "Agendar Minha Aula Demo Grátis",
        ctaNote: "Sem cartão de crédito. 15 minutos para mudar seu futuro.",
        included: {
          title: "O Que Está",
          titleSuffix: "Incluído?",
          subtitle: "Mais do que apenas uma aula. Um ecossistema completo para a fluência.",
          items: {
            ai: {
              title: "Prática de IA Ilimitada",
              desc: "Nossa IA nunca dorme. Pratique o que aprendeu às 2 da manhã se quiser."
            },
            experts: {
              title: "Especialistas Nativos Certificados",
              desc: "Sem sotaques 'falsos'. Aprenda o inglês real usado nos EUA, Reino Unido e Canadá."
            },
            promise: {
              title: "A Promessa 2 por 1",
              desc: "Aprender é um esporte de equipe. Traga um parceiro gratuitamente e mantenham-se motivados juntos."
            }
          }
        },
        methodology: {
          title: "Nossa Metodologia",
          titleSuffix: "de Sucesso",
          desc: "Focamos na \"Aquisição Ativa\". Em vez de ler livros didáticos, você se envolve em cenários do mundo real projetados para ativar o processamento de linguagem natural.",
          items: {
            interaction: {
              title: "Interação ao Vivo",
              desc: "Feedback em tempo real de falantes nativos."
            },
            contextual: {
              title: "Aprendizado Contextual",
              desc: "Gramática através da conversação, não de regras."
            }
          },
          successRate: "Taxa de Sucesso",
          successDesc: "Nossos alunos relatam melhora imediata em sua capacidade de se comunicar em ambientes sociais e profissionais."
        },
        list: {
          general: {
            title: "Inglês Geral",
            desc: "Domine a comunicação cotidiana para viagens, vida social e crescimento profissional. Ganhe confiança para lidar com qualquer situação, de aeroportos a networking de negócios.",
            outcomes: ["Fluxo de conversa natural", "Domínio da gramática essencial", "Vocabulário para a vida diária e trabalho"],
            level: "Todos os Níveis",
            duration: "12 Semanas"
          },
          business: {
            title: "Business Pro",
            desc: "Lidere reuniões internacionais e negocie em inglês. Nossa IA analisa seu vocabulário específico da indústria após cada aula.",
            outcomes: ["Habilidades de apresentação", "Escrita de e-mails e relatórios", "Táticas de negociação"],
            level: "Intermediário+",
            duration: "10 Semanas"
          },
          kids: {
            title: "Inglês para Crianças",
            desc: "Ajude seu filho a falar naturalmente enquanto brinca. Inclui jogos de IA 24/7 para reforçar as lições escolares.",
            outcomes: ["Fonética e pronúncia", "Estruturas de frases básicas", "Construção de confiança"],
            level: "Idades 6-12",
            duration: "Contínuo"
          },
          exam: {
            title: "Preparação para Exames",
            desc: "Estratégias direcionadas e prática para exames IELTS, TOEFL e Cambridge com testes simulados baseados em IA.",
            outcomes: ["Técnicas específicas para exames", "Gestão de tempo", "Prática de testes simulados"],
            level: "Intermediário+",
            duration: "8 Semanas"
          }
        }
      },
      aiPartner: {
        badge: "Parceiro de Prática 24/7",
        title: "Parceiro de",
        titleSuffix: "Prática",
        subtitle: "Melhore seu aprendizado com nosso tutor de IA 24/7. Obtenha explicações instantâneas, exemplos de uso e pratique seu inglês em contexto.",
        chat: {
          title: "Tutor de IA Jolly",
          status: "Online e Pronto",
          placeholder: "Digite sua mensagem aqui...",
          welcome: "Olá! Eu sou seu Parceiro de IA da Jolly English. Como posso ajudá-lo a praticar seu inglês hoje? Podemos conversar sobre qualquer coisa, ou posso explicar expressões e gramática para você!",
          error: "Sinto muito, estou com problemas para responder agora. Vamos tentar novamente!",
          connectionError: "Ops! Minha conexão com o centro de idiomas foi interrompida. Por favor, tente novamente em um momento.",
          systemInstruction: "Você é um tutor de inglês amigável e encorajador da Jolly English Academy. Ajude o usuário a praticar suas habilidades de conversação em inglês. Se eles cometerem um erro, corrija-o gentilmente e explique o porquê. Mantenha as respostas concisas e envolventes."
        },
        howItWorks: {
          title: "Como funciona",
          desc: "Nosso Parceiro de Prática de IA usa modelos de linguagem avançados treinados em materiais educacionais. Ele foi projetado para fornecer assistência linguística útil, segura e precisa para os alunos.",
          items: {
            feedback: "Feedback Instantâneo",
            availability: "Disponibilidade 24/7",
            adaptive: "Aprendizado Adaptativo"
          },
          note: "Lembre-se que a IA é uma ferramenta para complementar suas aulas regulares no Jolly English Hub!"
        },
        proTip: {
          title: "Dica Pro",
          desc: "Tente perguntar: \"Pode explicar a diferença entre 'make' and 'do'?\" ou \"Vamos praticar uma entrevista de emprego.\""
        }
      },
      about: {
        hero: {
          title: "Educação Especializada",
          titleSuffix: "em Inglês Online",
          subtitle: "A Jolly English Academy é uma escola online global dedicada a levar instrução de idiomas de classe mundial diretamente para sua casa."
        },
        values: {
          title: "Nossos Valores Fundamentais",
          items: {
            success: {
              title: "Sucesso do Aluno",
              desc: "Medimos nosso sucesso pela sua capacidade de se comunicar com confiança no mundo real."
            },
            community: {
              title: "Comunidade Global",
              desc: "Reunindo alunos e professores de todos os cantos do globo."
            },
            innovation: {
              title: "Inovação",
              desc: "Usando a tecnologia mais recente para aprimorar, não substituir, o aprendizado de humano para humano."
            },
            integrity: {
              title: "Integridade",
              desc: "Feedback honesto, preços transparentes e um compromisso com a educação de qualidade."
            }
          }
        },
        method: {
          title: "O Método",
          titleSuffix: "Online Jolly",
          desc: "Nossa abordagem única foca na interação digital imersiva. Não apenas ensinamos inglês; construímos confiança através da comunicação em tempo real com falantes nativos, apoiada por IA de ponta para prática fora da aula.",
          items: {
            tech: {
              title: "Tecnologia Imersiva",
              desc: "Nosso campus virtual foi projetado para participação ativa."
            },
            native: {
              title: "Apenas Nativos",
              desc: "100% dos nossos professores são falantes nativos certificados."
            },
            ai: {
              title: "Suporte de IA",
              desc: "Prática 24/7 com nosso parceiro de IA para crescimento contínuo."
            }
          }
        }
      },
      contact: {
        hero: {
          title: "Comece Sua",
          titleSuffix: "Jornada",
          subtitle: "Registre-se hoje e garanta sua vaga. Lembre-se, sua matrícula inclui 2 meses grátis para um membro da família ou amigo!"
        },
        info: {
          items: {
            campus: {
              title: "Campus Online Global",
              desc: "Aprenda de qualquer lugar com especialistas nativos dos EUA, Reino Unido e Canadá."
            },
            family: {
              title: "Família e Amigos Primeiro",
              desc: "Acreditamos que famílias que aprendem juntas, crescem juntas. Obtenha 2 por 1 hoje."
            },
            support: {
              title: "Equipe de Suporte",
              desc: "hello@jollyenglishacademy.site | Disponível 24/5"
            }
          }
        },
        promo: {
          title: "A Promoção 2 por 1",
          desc: "Quando você se matricula, concedemos uma segunda licença gratuita por 2 meses para um membro da família ou amigo. Eles podem escolher qualquer curso!",
          note: "Sem custo extra"
        },
        form: {
          title: "Formulário de Registro",
          subtitle: "Preencha os detalhes abaixo para reivindicar sua promoção familiar 2 por 1. Isso garante a licença gratuita para seu filho ou amigo adulto.",
          fields: {
            name: {
              label: "Nome Completo",
              placeholder: "João Silva"
            },
            email: {
              label: "Endereço de E-mail",
              placeholder: "joao@exemplo.com"
            },
            course: {
              label: "Curso Preferido"
            },
            family: {
              label: "Nome do Familiar",
              placeholder: "Maria Silva (Opcional)"
            },
            message: {
              label: "Mensagem (Opcional)",
              placeholder: "Conte-nos sobre seus objetivos de aprendizado..."
            }
          },
          submit: {
            default: "Enviar Registro",
            loading: "Processando..."
          }
        },
        success: {
          title: "Registro Recebido!",
          desc: "Obrigado por se juntar à Jolly English. Um de nossos consultores entrará em contato em até 24 horas para finalizar sua matrícula e ativar sua licença familiar.",
          button: "Registrar Outro Aluno"
        }
      },
      privacy: {
        title: "Política de",
        titleSuffix: "Privacidade",
        sections: [
          {
            title: "1. Informações que Coletamos",
            content: "Coletamos informações que você nos fornece diretamente, como quando você cria uma conta, assina nossa newsletter ou nos contata para suporte. Isso pode incluir seu nome, endereço de e-mail e qualquer outra informação que você escolher fornecer."
          },
          {
            title: "2. Como Usamos Suas Informações",
            content: "Usamos as informações que coletamos para fornecer, manter e melhorar nossos serviços, para nos comunicarmos com você e para personalizar sua experiência na Jolly English Academy."
          },
          {
            title: "3. Segurança de Dados",
            content: "Tomamos medidas razoáveis para ajudar a proteger as informações sobre você contra perda, roubo, mau uso e acesso não autorizado, divulgação, alteração e destruição."
          },
          {
            title: "4. Contate-nos",
            content: "Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco em hello@jollyenglishacademy.site."
          }
        ]
      },
      terms: {
        title: "Termos de",
        titleSuffix: "Serviço",
        sections: [
          {
            title: "1. Aceitação dos Termos",
            content: "Ao acessar ou usar os serviços da Jolly English Academy, você concorda em cumprir estes Termos de Serviço e todas as leis e regulamentos aplicáveis."
          },
          {
            title: "2. Uso dos Serviços",
            content: "Você concorda em usar nossos serviços apenas para fins lícitos e de uma forma que não infrinja os direitos de, restrinja ou iniba o uso e aproveitamento dos serviços por qualquer outra pessoa."
          },
          {
            title: "3. Propriedade Intelectual",
            content: "Todo o conteúdo fornecido através de nossos serviços, incluindo texto, gráficos, logotipos e software, é de propriedade da Jolly English Academy ou de seus licenciadores e é protegido por direitos autorais e outras leis de propriedade intelectual."
          },
          {
            title: "4. Limitação de Responsabilidade",
            content: "A Jolly English Academy não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais resultantes do uso ou da incapacidade de usar nossos serviços."
          },
          {
            title: "5. Contate-nos",
            content: "Se você tiver alguma dúvida sobre estes Termos de Serviço, entre em contato conosco em hello@jollyenglishacademy.site."
          }
        ]
      },
      home: {
        method: {
          title: "O Método 'Melhor dos Dois Mundos'",
          subtitle: "Confiança humana encontra reforço de IA. A única maneira de dominar o inglês 2x mais rápido.",
          human: {
            tag: "Confiança Humana",
            title: "Nativos Certificados",
            benefit: "Sotaque e Cultura Reais",
            desc: "Aprenda com especialistas humanos que entendem nuances, emoções e contexto do mundo real."
          },
          ai: {
            tag: "Nunca Esqueça",
            title: "Reforço de IA",
            benefit: "Acompanhamento 24/7",
            desc: "Nossa IA 'lembra' de suas aulas e ajuda você a praticar exatamente o que aprendeu há 10 minutos."
          },
          promo: {
            tag: "Especial Família",
            title: "Promoção 2 por 1",
            benefit: "Economize 50% Instantaneamente",
            desc: "Traga um familiar ou amigo gratuitamente. Aprender é melhor (e mais barato) juntos."
          }
        },
        comparison: {
          title: "Por que a maioria dos cursos de inglês falha",
          subtitle: "'Estudo há anos, mas ainda não falo fluentemente.' — Parece familiar?",
          oldWay: {
            title: "O Jeito Antigo",
            items: [
              "Exercícios de gramática e livros chatos",
              "Audição passiva sem conversação",
              "Professores não nativos com sotaque",
              "Aprendizado isolado (sozinho)",
              "Medo de cometer erros"
            ]
          },
          jollyWay: {
            title: "O Jeito Jolly",
            items: [
              "Conversas 100% imersivas",
              "Apenas instrutores nativos certificados",
              "Parceiro de IA para prática 24/7",
              "Aprendizado compartilhado com família e amigos",
              "Resultados de fluência garantidos"
            ]
          }
        },
        promoSection: {
          tag: "Exclusivo para Família",
          title: "Famílias que aprendem juntas,",
          titleAccent: "crescem juntas.",
          desc: "Registre-se hoje e seu familiar ou amigo ganha 2 MESES GRÁTIS! 2 pelo preço de 1. Disponível para crianças ou adultos.",
          benefit1: "Dobro de Progresso",
          benefit2: "Disponível para crianças e adultos",
          card: {
            badge: "Oferta por Tempo Limitado",
            title: "2 por 1",
            subtitle: "Licença Familiar",
            items: ["2 Alunos", "Professores Nativos", "Parceiro IA", "App Mobile"],
            cta: "Resgatar Oferta"
          }
        },
        advantage: {
          title: "Por que Jolly English?",
          subtitle: "Nosso ecossistema combina especialidade humana nativa com ferramentas de IA para entregar resultados garantidos.",
          items: [
            {
              title: "Professores Nativos",
              desc: "Aprenda com instrutores certificados do Reino Unido, EUA e Canadá. Sem sotaques, apenas fluência pura."
            },
            {
              title: "Imersão Ativa",
              desc: "Nossa metodologia força você a pensar e falar em inglês desde o primeiro dia. Tradução não permitida."
            },
            {
              title: "Parceiro de Prática IA",
              desc: "Pratique 24/7 com nossa IA avançada que se adapta ao seu nível e fornece feedback instantâneo."
            }
          ]
        },
        faq: {
          title: "Perguntas",
          titleSuffix: "Frequentes",
          subtitle: "Tudo o que você precisa saber sobre nosso método e a promoção familiar 2 por 1.",
          items: [
            {
              question: "Como funciona a promoção 2 por 1?",
              answer: "Ao se matricular em qualquer um de nossos cursos, você pode trazer um membro da família ou um amigo próximo para estudar com você sem custo adicional. Ambos os alunos têm acesso total às aulas ao vivo e ao Parceiro de Prática de IA."
            },
            {
              question: "Os professores são realmente nativos?",
              answer: "Sim, 100%. Todos os nossos instrutores são falantes nativos certificados do Reino Unido, EUA ou Canadá. Acreditamos que para falar naturalmente, você deve aprender com quem fala a língua naturalmente."
            },
            {
              question: "Como o Parceiro de Prática de IA me ajuda?",
              answer: "Nossa IA está disponível 24 horas por dia, 7 dias por semana. Ela lembra o que você aprendeu em suas aulas ao vivo e ajuda você a praticar esses tópicos específicos. Ela fornece feedback instantâneo sobre gramática e pronúncia."
            },
            {
              question: "Preciso de um nível alto de inglês para começar?",
              answer: "De jeito nenhum! Temos cursos para todos os níveis, desde iniciantes absolutos até profissionais de negócios avançados. Nossa metodologia foi projetada para fazer você falar desde o primeiro dia, independentemente do seu ponto de partida."
            },
            {
              question: "Posso trazer meu filho para a mesma aula?",
              answer: "Sim! Se você se matricular em um curso para adultos, poderá trazer seu filho para o nosso curso 'Inglês para Crianças' gratuitamente. Se você matricular seu filho, ele poderá trazer um irmão ou amigo para a mesma ou outra aula infantil sem custo extra. O 2 por 1 se aplica a todo o nosso ecossistema."
            },
            {
              question: "Quanto custa o curso após a aula experimental?",
              answer: "Nossa missão é tornar a fluência acessível. Após sua aula gratuita, o plano familiar 2 por 1 começa em apenas R$ 97/mês no Brasil. Para outras regiões, oferecemos preços locais competitivos — pergunte ao seu consultor durante a aula!"
            }
          ]
        },
        finalCta: {
          subtitle: "Junte-se a mais de 2.000 famílias felizes. Sua jornada para a fluência começa com uma única conversa.",
          cta: "Começar Minha Jornada 2 por 1",
          footer: ["Teste Grátis de 7 Dias", "Cancele a Qualquer Momento"]
        }
      },
      footer: {
        desc: "Capacitando famílias a dominar o inglês juntas através de aprendizado inovador com IA e experiências imersivas.",
        quickLinks: "Links Rápidos",
        contactUs: "Contate-nos",
        supportHours: "Horário de Suporte",
        monFri: "Seg - Sex",
        sat: "Sábado",
        closed: "* Fechado em Feriados Públicos",
        rights: "Todos os direitos reservados.",
        privacy: "Política de Privacidade",
        terms: "Termos de Serviço"
      }
    }
  },
  es: {
    translation: {
      nav: {
        courses: "Cursos",
        aiPartner: "Socio IA",
        about: "Sobre",
        contact: "Contacto",
        enrollNow: "Inscríbete Ahora",
        promo: "Tiempo Limitado: ¡Inscribe 1, Obtén 1 Gratis para Familia/Amigos!",
        whatsappMessage: "¡Hola! Me interesa la oferta 2 por 1. ¿Me pueden dar más información?"
      },
      hero: {
        badge: "Escuela Global de Inglés Online",
        title: "Habla Inglés Naturalmente con",
        titleAccent: "Expertos Nativos",
        titleSuffix: "",
        desc: "La única escuela que combina clases en vivo con profesores nativos certificados y un compañero de práctica de IA 24/7. ¡Trae a un familiar GRATIS!",
        cta: "Reservar Mi Clase Demo Gratis",
        secondaryCta: "Ver Cursos",
        demoNote: "Sin tarjeta de crédito. 15 minutos para cambiar tu futuro.",
        stats: "Más de 2,000 Estudiantes y Expertos Nativos",
        familyBadge: "Promoción Familia y Amigos",
        familyDesc: "2 por 1: ¡Inscríbete y trae a un compañero gratis!"
      },
      courses: {
        title: "Cursos",
        titleSuffix: "Online",
        subtitle: "Cada curso se imparte en vivo a través de nuestro campus digital por instructores nativos certificados. ¡Regístrate hoy y trae a un familiar gratis!",
        tagPopular: "Más Popular para Familias",
        tagCareer: "Mejor para Carreras",
        tagKids: "Recomendado para Niños",
        promo2for1: "Promoción Familia y Amigos: 2 por 1",
        outcomesTitle: "Resultados del Curso:",
        advantageTitle: "Metodología:",
        advantageList: [
          "Profesor Nativo Certificado (En Vivo)",
          "Compañero de Práctica de IA",
          "Acceso a Práctica 24/7"
        ],
        ctaDemo: "Reservar Mi Clase Demo Gratis",
        ctaNote: "Sin tarjeta de crédito. 15 minutos para cambiar tu futuro.",
        included: {
          title: "¿Qué Está",
          titleSuffix: "Incluido?",
          subtitle: "Más que solo una clase. Un ecosistema completo para la fluidez.",
          items: {
            ai: {
              title: "Práctica de IA Ilimitada",
              desc: "Nuestra IA nunca duerme. Practica lo que aprendiste a las 2:00 AM si quieres."
            },
            experts: {
              title: "Expertos Nativos Certificados",
              desc: "Sin acentos 'falsos'. Aprende el inglés real usado en EE. UU., Reino Unido y Canadá."
            },
            promise: {
              title: "La Promesa 2 por 1",
              desc: "Aprender es un deporte de equipo. Trae a un compañero gratis y manténganse motivados juntos."
            }
          }
        },
        methodology: {
          title: "Nuestra Metodología",
          titleSuffix: "de Éxito",
          desc: "Nos enfocamos en la \"Adquisición Activa\". En lugar de leer libros de texto, te involucras en escenarios del mundo real diseñados para activar el procesamiento del lenguaje natural.",
          items: {
            interaction: {
              title: "Interacción en Vivo",
              desc: "Comentarios en tiempo real de hablantes nativos."
            },
            contextual: {
              title: "Aprendizaje Contextual",
              desc: "Gramática a través de la conversación, no de reglas."
            }
          },
          successRate: "Tasa de Éxito",
          successDesc: "Nuestros estudiantes reportan una mejora inmediata en su capacidad para comunicarse en entornos sociales y profesionales."
        },
        list: {
          general: {
            title: "Inglés General",
            desc: "Domina la comunicación cotidiana para viajes, vida social y crecimiento profesional. Gana confianza para manejar cualquier situación, desde aeropuertos hasta networking de negocios.",
            outcomes: ["Flujo de conversación natural", "Dominio de la gramática esencial", "Vocabulario para la vida diaria y el trabajo"],
            level: "Todos los Niveles",
            duration: "12 Semanas"
          },
          business: {
            title: "Business Pro",
            desc: "Lidera reuniones internacionales y negocia en inglés. Nuestra IA analiza tu vocabulario específico de la industria después de cada clase.",
            outcomes: ["Habilidades de presentación", "Escritura de correos y informes", "Tácticas de negociación"],
            level: "Intermedio+",
            duration: "10 Semanas"
          },
          kids: {
            title: "Inglés para Niños",
            desc: "Ayuda a tu hijo a hablar de forma natural mientras juega. Incluye juegos de IA 24/7 para reforzar las lecciones escolares.",
            outcomes: ["Fonética y pronunciación", "Estructuras de oraciones básicas", "Construcción de confianza"],
            level: "Edades 6-12",
            duration: "Continuo"
          },
          exam: {
            title: "Preparación para Exámenes",
            desc: "Estrategias dirigidas y práctica para exámenes IELTS, TOEFL y Cambridge con simulacros basados en IA.",
            outcomes: ["Técnicas específicas para exámenes", "Gestión del tiempo", "Práctica de exámenes simulados"],
            level: "Intermedio+",
            duration: "8 Semanas"
          }
        }
      },
      aiPartner: {
        badge: "Compañero de Práctica 24/7",
        title: "Compañero de",
        titleSuffix: "Práctica",
        subtitle: "Mejora tu aprendizaje con nuestro tutor de IA 24/7. Obtén explicaciones instantáneas, ejemplos de uso y practica tu inglés en contexto.",
        chat: {
          title: "Tutor de IA Jolly",
          status: "Online y Listo",
          placeholder: "Escribe tu mensaje aquí...",
          welcome: "¡Hola! Soy tu Compañero de IA de Jolly English. ¿Cómo puedo ayudarte a practicar tu inglés hoy? ¡Podemos charlar sobre cualquier cosa, o puedo explicarte modismos y gramática!",
          error: "Lo siento, tengo problemas para responder en este momento. ¡Intentémoslo de nuevo!",
          connectionError: "¡Ups! Mi conexión con el centro de idiomas se interrumpió. Por favor, inténtalo de nuevo en un momento.",
          systemInstruction: "Eres un tutor de inglés amable y alentador de Jolly English Academy. Ayuda al usuario a practicar sus habilidades de conversación en inglés. Si comete un error, corrígelo amablemente y explica por qué. Mantén las respuestas concisas y atractivas."
        },
        howItWorks: {
          title: "Cómo funciona",
          desc: "Nuestro Compañero de Práctica de IA utiliza modelos de lenguaje avanzados entrenados en materiales educativos. Está diseñado para proporcionar asistencia lingüística útil, segura y precisa para los estudiantes.",
          items: {
            feedback: "Comentarios Instantáneos",
            availability: "Disponibilidad 24/7",
            adaptive: "Aprendizaje Adaptativo"
          },
          note: "¡Recuerda que la IA es una herramienta para complementar tus clases regulares en Jolly English Hub!"
        },
        proTip: {
          title: "Consejo Pro",
          desc: "Prueba preguntando: \"¿Puedes explicar la diferencia entre 'make' y 'do'?\" o \"Practiquemos para una entrevista de trabajo.\""
        }
      },
      about: {
        hero: {
          title: "Educación de Inglés",
          titleSuffix: "Online Experta",
          subtitle: "Jolly English Academy es una escuela online global dedicada a llevar instrucción de idiomas de clase mundial directamente a tu hogar."
        },
        values: {
          title: "Nuestros Valores Fundamentales",
          items: {
            success: {
              title: "Éxito del Estudiante",
              desc: "Medimos nuestro éxito por tu capacidad para comunicarte con confianza en el mundo real."
            },
            community: {
              title: "Comunidad Global",
              desc: "Reuniendo a estudiantes y profesores de todos los rincones del mundo."
            },
            innovation: {
              title: "Innovación",
              desc: "Usando la última tecnología para mejorar, no reemplazar, el aprendizaje de humano a humano."
            },
            integrity: {
              title: "Integridad",
              desc: "Comentarios honestos, precios transparentes y un compromiso con la educación de calidad."
            }
          }
        },
        method: {
          title: "El Método",
          titleSuffix: "Online Jolly",
          desc: "Nuestro enfoque único se centra en la interacción digital inmersiva. No solo enseñamos inglés; construimos confianza a través de la comunicación en tiempo real con hablantes nativos, con el apoyo de IA de vanguardia para la práctica fuera de clase.",
          items: {
            tech: {
              title: "Tecnología Inmersiva",
              desc: "Nuestro campus virtual está diseñado para la participación activa."
            },
            native: {
              title: "Solo Nativos",
              desc: "El 100% de nuestros profesores son hablantes nativos certificados."
            },
            ai: {
              title: "Soporte de IA",
              desc: "Práctica 24/7 con nuestro compañero de IA para un crecimiento continuo."
            }
          }
        }
      },
      privacy: {
        title: "Política de",
        titleSuffix: "Privacidad",
        sections: [
          {
            title: "1. Información que Recopilamos",
            content: "Recopilamos información que nos proporcionas directamente, como cuando creas una cuenta, te suscribes a nuestro boletín o te pones en contacto con nosotros para recibir asistencia. Esto puede incluir tu nombre, dirección de correo electrónico y cualquier otra información que elijas proporcionar."
          },
          {
            title: "2. Cómo Utilizamos Tu Información",
            content: "Utilizamos la información que recopilamos para proporcionar, mantener y mejorar nuestros servicios, para comunicarnos contigo y para personalizar tu experiencia en Jolly English Academy."
          },
          {
            title: "3. Seguridad de los Datos",
            content: "Tomamos medidas razonables para ayudar a proteger la información sobre ti contra pérdida, robo, mal uso y acceso no autorizado, divulgación, alteración y destrucción."
          },
          {
            title: "4. Contáctanos",
            content: "Si tienes alguna pregunta sobre esta Política de Privacidad, ponte en contacto con nosotros en hello@jollyenglishacademy.site."
          }
        ]
      },
      terms: {
        title: "Términos de",
        titleSuffix: "Servicio",
        sections: [
          {
            title: "1. Aceptación de los Términos",
            content: "Al acceder o utilizar los servicios de Jolly English Academy, aceptas estar sujeto a estos Términos de Servicio y a todas las leyes y regulaciones aplicables."
          },
          {
            title: "2. Uso de los Servicios",
            content: "Aceptas utilizar nuestros servicios solo para fines lícitos y de una manera que no infrinja los derechos de, restrinja o inhiba el uso y disfrute de los servicios por parte de cualquier otra persona."
          },
          {
            title: "3. Propiedad Intelectual",
            content: "Todo el contenido proporcionado a través de nuestros servicios, incluidos textos, gráficos, logotipos y software, es propiedad de Jolly English Academy o de sus licenciantes y está protegido por las leyes de derechos de autor y otras leyes de propiedad intelectual."
          },
          {
            title: "4. Limitación de Responsabilidad",
            content: "Jolly English Academy no será responsable de ningún daño directo, indirecto, incidental, especial o consecuente que resulte del uso o la incapacidad de usar nuestros servicios."
          },
          {
            title: "5. Contáctanos",
            content: "Si tienes alguna pregunta sobre estos Términos de Servicio, ponte en contacto con nosotros en hello@jollyenglishacademy.site."
          }
        ]
      },
      contact: {
        hero: {
          title: "Comienza Tu",
          titleSuffix: "Viaje",
          subtitle: "Regístrate hoy y asegura tu lugar. ¡Recuerda, tu inscripción incluye 2 meses gratis para un familiar o amigo!"
        },
        info: {
          items: {
            campus: {
              title: "Campus Online Global",
              desc: "Aprende desde cualquier lugar con expertos nativos de EE. UU., Reino Unido y Canadá."
            },
            family: {
              title: "Familia y Amigos Primero",
              desc: "Creemos que las familias que aprenden juntas, crecen juntas. Obtén 2 por 1 hoy."
            },
            support: {
              title: "Equipo de Soporte",
              desc: "hello@jollyenglishacademy.site | Disponible 24/5"
            }
          }
        },
        promo: {
          title: "La Promoción 2 por 1",
          desc: "Cuando te inscribes, otorgamos una segunda licencia gratuita por 2 meses a un familiar o amigo. ¡Pueden elegir cualquier curso!",
          note: "Sin costo adicional"
        },
        form: {
          title: "Formulario de Registro",
          subtitle: "Completa los detalles a continuación para reclamar tu promoción familiar 2 por 1. Esto asegura la licencia gratuita para tu hijo o amigo adulto.",
          fields: {
            name: {
              label: "Nombre Completo",
              placeholder: "Juan Pérez"
            },
            email: {
              label: "Correo Electrónico",
              placeholder: "juan@ejemplo.com"
            },
            course: {
              label: "Curso Preferido"
            },
            family: {
              label: "Nombre del Familiar",
              placeholder: "Juana Pérez (Opcional)"
            },
            message: {
              label: "Mensaje (Opcional)",
              placeholder: "Cuéntanos sobre tus objetivos de aprendizaje..."
            }
          },
          submit: {
            default: "Enviar Registro",
            loading: "Procesando..."
          }
        },
        success: {
          title: "¡Registro Recibido!",
          desc: "Gracias por unirte a Jolly English. Uno de nuestros asesores te contactará en un plazo de 24 horas para finalizar tu inscripción y activarte tu licencia familiar.",
          button: "Registrar a Otro Estudiante"
        },
        courses: {
          general: "Inglés General",
          business: "Inglés de Negocios",
          kids: "Inglés para Niños",
          exam: "Preparación para Exámenes"
        }
      },
      home: {
        method: {
          title: "El Método 'Lo Mejor de Ambos Mundos'",
          subtitle: "La confianza humana se une al refuerzo de la IA. La única forma de dominar el inglés 2 veces más rápido.",
          human: {
            tag: "Confianza Humana",
            title: "Nativos Certificados",
            benefit: "Acento y Cultura Reales",
            desc: "Aprende de expertos humanos que entienden los matices, las emociones y el contexto del mundo real."
          },
          ai: {
            tag: "Nunca Olvides",
            title: "Refuerzo de IA",
            benefit: "Seguimiento 24/7",
            desc: "Nuestra IA 'recuerda' tus clases y te ayuda a practicar exactamente lo que aprendiste hace 10 minutos."
          },
          promo: {
            tag: "Especial Familiar",
            title: "Promoción 2 por 1",
            benefit: "Ahorra 50% al Instante",
            desc: "Trae a un familiar o amigo gratis. Aprender es mejor (y más barato) juntos."
          }
        },
        comparison: {
          title: "Por qué la mayoría de los cursos de inglés te fallan",
          subtitle: "'He estado estudiando durante años pero todavía no puedo hablar con fluidez.' —¿Te suena familiar?",
          oldWay: {
            title: "La Vieja Manera",
            items: [
              "Aburridos ejercicios de gramática y libros de texto",
              "Escucha pasiva sin hablar",
              "Profesores no nativos con acento",
              "Aprendizaje aislado (solo)",
              "Miedo a cometer errores"
            ]
          },
          jollyWay: {
            title: "La Manera Jolly",
            items: [
              "Conversaciones 100% inmersivas",
              "Solo instructores nativos certificados",
              "Socio de IA para práctica 24/7",
              "Aprendizaje compartido con familia y amigos",
              "Resultados de fluidez garantizados"
            ]
          }
        },
        promoSection: {
          tag: "Exclusivo para Familias",
          title: "Las familias que aprenden juntas,",
          titleAccent: "crecen juntas.",
          desc: "¡Regístrate hoy y tu familiar o amigo obtiene 2 MESES GRATIS! 2 por el precio de 1. Disponible para niños o adultos.",
          benefit1: "Doble Progreso",
          benefit2: "Disponible para niños y adultos",
          card: {
            badge: "Oferta por Tiempo Limitado",
            title: "2 por 1",
            subtitle: "Licencia Familiar",
            items: ["2 Estudiantes", "Profesores Nativos", "Socio IA", "App Móvil"],
            cta: "Reclamar Oferta"
          }
        },
        advantage: {
          title: "¿Por qué Jolly English?",
          subtitle: "Nuestro ecosistema combina la experiencia humana nativa con herramientas de IA para ofrecer resultados garantizados.",
          items: [
            {
              title: "Profesores Nativos",
              desc: "Aprende de instructores certificados de Reino Unido, EE. UU. y Canadá. Sin acentos, solo fluidez pura."
            },
            {
              title: "Inmersión Activa",
              desc: "Nuestra metodología te obliga a pensar y hablar en inglés desde el primer día. No se permite traducción."
            },
            {
              title: "Socio de Práctica IA",
              desc: "Practica 24/7 con nuestra IA avanzada que se adapta a tu nivel y proporciona comentarios instantáneos."
            }
          ]
        },
        faq: {
          title: "Preguntas",
          titleSuffix: "Frecuentes",
          subtitle: "Todo lo que necesitas saber sobre nuestro método y la promoción familiar 2 por 1.",
          items: [
            {
              question: "¿Cómo funciona la promoción 2 por 1?",
              answer: "Al inscribirte en cualquiera de nuestros cursos, puedes traer a un familiar o amigo cercano para estudiar contigo sin costo adicional. Ambos estudiantes tienen acceso total a las clases en vivo y al Compañero de Práctica de IA."
            },
            {
              question: "¿Los profesores son realmente nativos?",
              answer: "Sí, 100%. Todos nuestros instructores son hablantes nativos certificados del Reino Unido, EE. UU. o Canadá. Creemos que para hablar con naturalidad, debes aprender de quienes hablan el idioma con naturalidad."
            },
            {
              question: "¿Cómo me ayuda el Compañero de Práctica de IA?",
              answer: "Nuestra IA está disponible las 24 horas, los 7 días de la semana. Recuerda lo que aprendiste en tus clases en vivo y te ayuda a practicar esos temas específicos. Proporciona comentarios instantáneos sobre gramática y pronunciación."
            },
            {
              question: "¿Necesito un nivel alto de inglés para empezar?",
              answer: "¡Para nada! Tenemos cursos para todos los niveles, desde principiantes absolutos hasta profesionales de negocios avanzados. Nuestra metodología está diseñada para que hables desde el primer día, independientemente de tu punto de partida."
            },
            {
              question: "¿Puedo traer a mi hijo a la misma clase?",
              answer: "¡Sí! Si te inscribes en un curso para adultos, puedes traer a tu hijo a nuestro curso 'Inglés para Niños' gratis. Si inscribes a tu hijo, puede traer a un hermano o amigo a la misma u otra clase para niños sin costo adicional. El 2 por 1 se aplica en todo nuestro ecosistema."
            },
            {
              question: "¿Cuánto cuesta el curso después de la clase de demostración?",
              answer: "Nuestra misión es hacer que la fluidez sea accesible. Después de tu demostración gratuita, ofrecemos precios locales competitivos y planes familiares 2 por 1. ¡Consulta con tu asesor durante la clase para conocer la mejor oferta en tu moneda local!"
            }
          ]
        },
        finalCta: {
          title: "¿Listo para Hablar?",
          subtitle: "Únete a más de 2,000 familias felices. Tu viaje hacia la fluidez comienza con una sola conversación.",
          cta: "Empezar mi Viaje 2 por 1",
          footer: ["Prueba Gratuita de 7 Días", "Cancela en Cualquier Momento"]
        }
      },
      footer: {
        desc: "Empoderando a las familias para dominar el inglés juntas a través del aprendizaje innovador impulsado por IA y experiencias inmersivas.",
        quickLinks: "Enlaces Rápidos",
        contactUs: "Contáctenos",
        supportHours: "Horario de Soporte",
        monFri: "Lun - Vie",
        sat: "Sábado",
        closed: "* Cerrado en Días Festivos",
        rights: "Todos los derechos reservados.",
        privacy: "Política de Privacidad",
        terms: "Términos de Servicio"
      }
    }
  },
  ja: {
    translation: {
      nav: {
        courses: "コース",
        aiPartner: "AIパートナー",
        about: "私たちについて",
        contact: "お問い合わせ",
        enrollNow: "今すぐ登録",
        promo: "期間限定：1人分の料金で家族や友人も無料！",
        whatsappMessage: "こんにちは！2対1のオファーに興味があります。詳細を教えていただけますか？"
      },
      hero: {
        badge: "グローバル・オンライン英会話スクール",
        title: "ネイティブ講師と",
        titleAccent: "自然な英語を話そう",
        titleSuffix: "",
        desc: "認定ネイティブ講師によるライブ授業と、24時間365日利用可能なAI練習パートナーを組み合わせた唯一のスクール。ご家族1名様を無料で招待できます！",
        cta: "無料デモレッスンを予約する",
        secondaryCta: "コースを見る",
        demoNote: "クレジットカード不要。あなたの未来を変える15分間。",
        stats: "2,000人以上の生徒とネイティブエキスパート",
        familyBadge: "家族・友人紹介プロモーション",
        familyDesc: "2 for 1：登録するとパートナー1名が無料！"
      },
      courses: {
        title: "オンライン",
        titleSuffix: "コース",
        subtitle: "すべてのコースは、認定ネイティブ講師によってデジタルキャンパスからライブで提供されます。今日登録して、家族1名を無料で招待しましょう！",
        tagPopular: "家族に一番人気",
        tagCareer: "キャリアアップに最適",
        tagKids: "お子様におすすめ",
        promo2for1: "家族・友人プロモーション：2 for 1",
        outcomesTitle: "学習成果：",
        advantageTitle: "学習メソッド：",
        advantageList: [
          "認定ネイティブ講師（ライブ）",
          "AI練習パートナー",
          "24時間365日の練習アクセス"
        ],
        ctaDemo: "無料デモレッスンを予約する",
        ctaNote: "クレジットカード不要。あなたの未来を変える15分間。",
        included: {
          title: "何が",
          titleSuffix: "含まれていますか？",
          subtitle: "単なる授業ではありません。流暢さを実現するための完全なエコシステムです。",
          items: {
            ai: {
              title: "無制限のAI練習",
              desc: "私たちのAIは眠りません。午前2時でも、好きな時に学んだことを練習できます。"
            },
            experts: {
              title: "認定ネイティブエキスパート",
              desc: "「偽物」のアクセントはありません。アメリカ、イギリス、カナダで使われている本物の英語を学びます。"
            },
            promise: {
              title: "2-for-1の約束",
              desc: "学習はチームスポーツです。パートナーを無料で招待して、一緒にモチベーションを維持しましょう。"
            }
          }
        },
        methodology: {
          title: "成功のための",
          titleSuffix: "メソッド",
          desc: "私たちは「アクティブ・アクイジション（能動的習得）」に焦点を当てています。教科書を読むのではなく、自然言語処理を促すように設計された現実世界のシナリオに参加します。",
          items: {
            interaction: {
              title: "ライブ・インタラクション",
              desc: "ネイティブスピーカーからのリアルタイム・フィードバック。"
            },
            contextual: {
              title: "コンテクスチュアル・ラーニング",
              desc: "ルールではなく、会話を通じて学ぶ文法。"
            }
          },
          successRate: "成功率",
          successDesc: "受講生は、社会的および専門的な場面でのコミュニケーション能力が即座に向上したと報告しています。"
        },
        list: {
          general: {
            title: "一般英語",
            desc: "旅行、社交、キャリアアップのための日常会話をマスター。空港からビジネスネットワーキングまで、あらゆる状況に自信を持って対応できるようになります。",
            outcomes: ["自然な会話の流れ", "必須文法の習得", "日常生活と仕事のための語彙"],
            level: "全レベル対応",
            duration: "12週間"
          },
          business: {
            title: "ビジネス・プロ",
            desc: "国際会議をリードし、英語で交渉。私たちのAIは、毎回の授業後にあなたの業界固有の語彙を分析します。",
            outcomes: ["プレゼンテーションスキル", "メール・レポート作成", "交渉術"],
            level: "中級以上",
            duration: "10週間"
          },
          kids: {
            title: "キッズ英語",
            desc: "遊びながら自然に話せるようにサポート。学校のレッスンを補強する24時間365日のAIゲームが含まれています。",
            outcomes: ["フォニックスと発音", "基本的な文章構造", "自信の構築"],
            level: "6歳〜12歳",
            duration: "継続的"
          },
          exam: {
            title: "試験対策",
            desc: "IELTS、TOEFL、ケンブリッジ検定のための戦略的な対策と、AIを活用した模擬テストによる練習。",
            outcomes: ["試験特有のテクニック", "タイムマネジメント", "模擬テスト練習"],
            level: "中級以上",
            duration: "8週間"
          }
        }
      },
      aiPartner: {
        badge: "24時間365日の練習パートナー",
        title: "練習",
        titleSuffix: "パートナー",
        subtitle: "24時間365日利用可能なAIチューターで学習を強化。即座の解説、使用例を入手し、文脈の中で英語を練習しましょう。",
        chat: {
          title: "Jolly AIチューター",
          status: "オンライン・準備完了",
          placeholder: "メッセージを入力...",
          welcome: "こんにちは！Jolly EnglishのAIパートナーです。今日はどのように英語の練習をお手伝いしましょうか？何でもお話しできますし、慣用句や文法の説明もできますよ！",
          error: "申し訳ありません。現在応答に問題が発生しています。もう一度お試しください！",
          connectionError: "おっと！言語ハブへの接続が中断されました。しばらくしてからもう一度お試しください。",
          systemInstruction: "あなたはJolly English Academyのフレンドリーで励みになる英語チューターです。ユーザーの英語会話スキルの練習を助けてください。間違いがあれば、優しく訂正し、その理由を説明してください。回答は簡潔で魅力的なものにしてください。"
        },
        howItWorks: {
          title: "仕組み",
          desc: "私たちのAI練習パートナーは、教育資料でトレーニングされた高度な言語モデルを使用しています。学習者に役立つ、安全で正確な言語支援を提供するように設計されています。",
          items: {
            feedback: "即時フィードバック",
            availability: "24時間365日利用可能",
            adaptive: "適応型学習"
          },
          note: "AIはJolly English Hubでの通常の授業を補完するためのツールであることを忘れないでください！"
        },
        proTip: {
          title: "プロのヒント",
          desc: "「'make'と'do'の違いを教えてくれますか？」や「採用面接の練習をしましょう」と聞いてみてください。"
        }
      },
      about: {
        hero: {
          title: "エキスパートによる",
          titleSuffix: "オンライン英語教育",
          subtitle: "Jolly English Academyは、世界クラスの語学教育をあなたのご自宅に直接お届けすることに専念しているグローバル・オンラインスクールです。"
        },
        values: {
          title: "私たちのコアバリュー",
          items: {
            success: {
              title: "受講生の成功",
              desc: "私たちは、あなたが現実世界で自信を持ってコミュニケーションできる能力によって成功を測ります。"
            },
            community: {
              title: "グローバル・コミュニティ",
              desc: "世界中のあらゆる場所から学習者と講師が集まります。"
            },
            innovation: {
              title: "イノベーション",
              desc: "人間同士の学習を置き換えるのではなく、強化するために最新のテクノロジーを活用します。"
            },
            integrity: {
              title: "誠実さ",
              desc: "正直なフィードバック、透明性のある価格設定、そして質の高い教育へのコミットメント。"
            }
          }
        },
        method: {
          title: "Jolly",
          titleSuffix: "オンライン・メソッド",
          desc: "私たちの独自のアプローチは、没入型のデジタル・インタラクションに焦点を当てています。単に英語を教えるだけでなく、ネイティブスピーカーとのリアルタイムのコミュニケーションを通じて自信を構築し、授業外の練習のために最先端のAIがサポートします。",
          items: {
            tech: {
              title: "没入型テック",
              desc: "私たちのバーチャルキャンパスは、能動的な参加のために設計されています。"
            },
            native: {
              title: "ネイティブのみ",
              desc: "講師の100%が認定ネイティブスピーカーです。"
            },
            ai: {
              title: "AIサポート",
              desc: "継続的な成長のために、AIパートナーと24時間365日練習できます。"
            }
          }
        }
      },
      contact: {
        hero: {
          title: "あなたの旅を",
          titleSuffix: "始めよう",
          subtitle: "今日登録して席を確保しましょう。登録には、家族や友人のための2ヶ月間無料特典が含まれています！"
        },
        info: {
          items: {
            campus: {
              title: "グローバル・オンラインキャンパス",
              desc: "アメリカ、イギリス、カナダのネイティブエキスパートからどこからでも学べます。"
            },
            family: {
              title: "家族と友人を第一に",
              desc: "私たちは、共に学ぶ家族は共に成長すると信じています。今日、2 for 1の特典を手に入れましょう。"
            },
            support: {
              title: "サポートチーム",
              desc: "hello@jollyenglishacademy.site | 週5日24時間対応"
            }
          }
        },
        promo: {
          title: "2-for-1プロモーション",
          desc: "登録すると、家族や友人に2ヶ月間の無料ライセンスを付与します。どのコースでも選べます！",
          note: "追加費用なし"
        },
        form: {
          title: "登録フォーム",
          subtitle: "以下の詳細を入力して、2-for-1ファミリープロモーションを申請してください。これにより、お子様や大人の友人のための無料ライセンスが確保されます。",
          fields: {
            name: {
              label: "氏名",
              placeholder: "山田 太郎"
            },
            email: {
              label: "メールアドレス",
              placeholder: "yamada@example.com"
            },
            course: {
              label: "希望コース"
            },
            family: {
              label: "ご家族のお名前",
              placeholder: "山田 花子（任意）"
            },
            message: {
              label: "メッセージ（任意）",
              placeholder: "学習目標について教えてください..."
            }
          },
          submit: {
            default: "登録を送信する",
            loading: "処理中..."
          }
        },
        success: {
          title: "登録を受け付けました！",
          desc: "Jolly Englishにご入会いただきありがとうございます。24時間以内にアドバイザーからご連絡し、登録の完了とファミリーライセンスの有効化についてご案内いたします。",
          button: "別の受講生を登録する"
        },
        courses: {
          general: "一般英語",
          business: "ビジネス英語",
          kids: "キッズ英語",
          exam: "試験対策"
        }
      },
      privacy: {
        title: "プライバシー",
        titleSuffix: "ポリシー",
        sections: [
          {
            title: "1. 収集する情報",
            content: "アカウントの作成、ニュースレターへの登録、サポートへのお問い合わせなど、お客様が直接提供する情報を収集します。これには、氏名、メールアドレス、その他提供を選択された情報が含まれます。"
          },
          {
            title: "2. 情報の利用目的",
            content: "収集した情報は、サービスの提供、維持、改善、お客様への連絡、およびJolly English Academyでの体験のパーソナライズのために利用します。"
          },
          {
            title: "3. データのセキュリティ",
            content: "紛失、盗難、悪用、不正アクセス、開示、改ざん、破壊からお客様の情報を保護するために、合理的な措置を講じています。"
          },
          {
            title: "4. お問い合わせ",
            content: "本プライバシーポリシーについてご質問がある場合は、hello@jollyenglishacademy.site までご連絡ください。"
          }
        ]
      },
      terms: {
        title: "利用",
        titleSuffix: "規約",
        sections: [
          {
            title: "1. 規約への同意",
            content: "Jolly English Academyのサービスにアクセスまたは利用することで、お客様は本利用規約および適用されるすべての法律および規制に拘束されることに同意したものとみなされます。"
          },
          {
            title: "2. サービスの利用",
            content: "お客様は、合法的な目的のためにのみサービスを利用し、他者の権利を侵害したり、他者のサービス利用を制限または妨げたりしない方法で利用することに同意するものとします。"
          },
          {
            title: "3. 知的財産権",
            content: "テキスト、グラフィック、ロゴ、ソフトウェアなど、当サービスを通じて提供されるすべてのコンテンツは、Jolly English Academyまたはそのライセンサーに帰属し、著作権法およびその他の知的財産権法によって保護されています。"
          },
          {
            title: "4. 免責事項",
            content: "Jolly English Academyは、当サービスの利用または利用不能から生じるいかなる直接的、間接的、付随的、特別、または結果的な損害についても責任を負わないものとします。"
          },
          {
            title: "5. お問い合わせ",
            content: "本利用規約についてご質問がある場合は、hello@jollyenglishacademy.site までご連絡ください。"
          }
        ]
      },
      home: {
        method: {
          title: "「両方の長所」を活かすメソッド",
          subtitle: "人間の信頼とAIの補強が融合。英語を2倍速くマスターする唯一の方法。",
          human: {
            tag: "人間の信頼",
            title: "認定ネイティブ",
            benefit: "本物のアクセントと文化",
            desc: "ニュアンス、感情、現実世界の文脈を理解する人間の専門家から学びます。"
          },
          ai: {
            tag: "忘れない学習",
            title: "AI補強",
            benefit: "24時間365日の進捗追跡",
            desc: "私たちのAIはあなたのクラスを「記憶」し、10分前に学んだことを正確に練習するのを助けます。"
          },
          promo: {
            tag: "ファミリースペシャル",
            title: "2-for-1プロモ",
            benefit: "即座に50%節約",
            desc: "家族や友人を無料で招待しましょう。一緒に学ぶ方が楽しく、安上がりです。"
          }
        },
        comparison: {
          title: "なぜほとんどの英語コースは失敗するのか",
          subtitle: "「何年も勉強しているのに、まだ流暢に話せない」— 心当たりはありませんか？",
          oldWay: {
            title: "古いやり方",
            items: [
              "退屈な文法練習と教科書",
              "話すことのない受動的なリスニング",
              "アクセントのある非ネイティブ講師",
              "孤立した学習（一人）",
              "間違いを恐れる"
            ]
          },
          jollyWay: {
            title: "Jollyのやり方",
            items: [
              "100%没入型会話",
              "認定ネイティブ講師のみ",
              "24時間365日練習できるAIパートナー",
              "家族や友人と共有する学習",
              "流暢な結果を保証"
            ]
          }
        },
        promoSection: {
          tag: "家族限定",
          title: "共に学ぶ家族は、",
          titleAccent: "共に成長する。",
          desc: "今日登録すると、家族や友人が2ヶ月間無料になります！1人分の料金で2人。子供から大人まで利用可能です。",
          benefit1: "2倍の進歩",
          benefit2: "子供から大人まで対応",
          card: {
            badge: "期間限定オファー",
            title: "2-for-1",
            subtitle: "ファミリーライセンス",
            items: ["学生2名", "ネイティブ講師", "AIパートナー", "モバイルアプリ"],
            cta: "特典を受け取る"
          }
        },
        advantage: {
          title: "なぜJolly Englishなのか？",
          subtitle: "私たちのエコシステムは、ネイティブの人間の専門知識とAIツールを組み合わせて、保証された結果を提供します。",
          items: [
            {
              title: "ネイティブ講師",
              desc: "イギリス、アメリカ、カナダの認定講師から学びます。アクセントはなく、純粋に流暢です。"
            },
            {
              title: "アクティブ・イマージョン",
              desc: "私たちのメソッドは、初日から英語で考え、話すことを強制します。翻訳は禁止です。"
            },
            {
              title: "AI練習パートナー",
              desc: "あなたのレベルに適応し、即座にフィードバックを提供する高度なAIと24時間365日練習できます。"
            }
          ]
        },
        faq: {
          title: "よくある",
          titleSuffix: "ご質問",
          subtitle: "私たちのメソッドと2対1のファミリープロモーションについて知っておくべきすべてのこと。",
          items: [
            {
              question: "2対1のプロモーションはどのように機能しますか？",
              answer: "どのコースに入学しても、家族や親しい友人を追加料金なしで一緒に勉強に招待できます。両方の学生がライブクラスとAI練習パートナーにフルアクセスできます。"
            },
            {
              question: "講師は本当にネイティブスピーカーですか？",
              answer: "はい、100％そうです。すべての講師は、英国、米国、またはカナダ出身の認定ネイティブスピーカーです。自然に話すためには、その言語を自然に話す人々から学ぶ必要があると私たちは信じています。"
            },
            {
              question: "AI練習パートナーはどのように役立ちますか？",
              answer: "当社のAIは24時間年中無休で利用可能です。ライブクラスで学んだ内容を記憶し、それらの特定のトピックの練習を支援します。文法や発音に関する即時のフィードバックを提供します。"
            },
            {
              question: "始めるのに高い英語レベルが必要ですか？",
              answer: "全く必要ありません！完全な初心者から高度なビジネスプロフェッショナルまで、あらゆるレベルのコースを用意しています。私たちのメソッドは、開始点に関係なく、初日から話せるように設計されています。"
            },
            {
              question: "子供を同じクラスに連れて行くことはできますか？",
              answer: "はい！大人のコースに入学すると、お子様を「子供向け英語」コースに無料で招待できます。お子様を入学させた場合は、兄弟や友人を同じまたは別の子供向けクラスに追加料金なしで招待できます。2対1のプロモーションは、私たちのエコシステム全体に適用されます。"
            },
            {
              question: "デモクラス後のコース料金はいくらですか？",
              answer: "私たちの使命は、流暢さを身近なものにすることです。無料デモの後、ブラジルでは2対1のファミリープランが月額わずか97レアルから始まります。その他の地域でも競争力のある現地価格を提供しています。デモ中にアドバイザーにお尋ねください！"
            }
          ]
        },
        finalCta: {
          subtitle: "2,000以上の幸せな家族に加わりましょう。流暢さへの旅は、たった一つの会話から始まります。",
          cta: "2-for-1の旅を始める",
          footer: ["7日間の無料トライアル", "いつでもキャンセル可能"]
        }
      },
      footer: {
        desc: "革新的なAI搭載学習と没入型体験を通じて、家族が一緒に英語をマスターできるように支援します。",
        quickLinks: "クイックリンク",
        contactUs: "お問い合わせ",
        supportHours: "サポート時間",
        monFri: "月曜 - 金曜",
        sat: "土曜日",
        closed: "* 祝日は休業",
        rights: "All rights reserved.",
        privacy: "プライバシーポリシー",
        terms: "利用規約"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'pt', 'es', 'ja'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['querystring', 'navigator', 'localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
      lookupQuerystring: 'lng',
      caches: ['localStorage', 'cookie'],
    },
    load: 'languageOnly', // Ensures en-US or en-GB maps to en
  });

export default i18n;
