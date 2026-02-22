export type Locale = 'en' | 'ru';

export const portfolioContent = {
    en: {
        metaTitle: 'Frontend Developer — Portfolio',
        metaDescription:
            'Frontend developer portfolio. Selected projects, technologies and experience.',

        navigation: {
            about: 'About',
            stack: 'Stack',
            projects: 'Projects',
            contacts: 'Contacts'
        },

        hero: {
            index: '01 / FRONTEND ENGINEERING',
            eyebrow: 'Frontend Developer',
            title: 'Engineering interfaces',
            titleAccent: 'for complex systems.',
            description:
                'I build frontend applications with a focus on architecture, performance and real-time data processing.'
        },

        sections: {
            about: 'About',
            stack: 'Tech Stack',
            projects: 'Selected Projects',
            contacts: "Let's connect."
        }
    },

    ru: {
        metaTitle: 'Frontend-разработчик — Портфолио',
        metaDescription:
            'Портфолио frontend-разработчика. Проекты, технологии и профессиональный опыт.',

        navigation: {
            about: 'Обо мне',
            stack: 'Технологии',
            projects: 'Проекты',
            contacts: 'Контакты'
        },

        hero: {
            index: '01 / FRONTEND ENGINEERING',
            eyebrow: 'Frontend-разработчик',
            title: 'Интерфейсы',
            titleAccent: 'для сложных систем.',
            description:
                'Разрабатываю frontend сложных веб-приложений с акцентом на архитектуру, производительность и обработку данных в реальном времени.'
        },

        sections: {
            about: 'Обо мне',
            stack: 'Технологии',
            projects: 'Избранные проекты',
            contacts: 'Давайте знакомиться.'
        }
    }
} as const;
