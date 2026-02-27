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
        about: {
            index: '02 / ABOUT ME',
            title: 'I build more than interfaces.',
            description:
                'I am a frontend developer focused on complex web applications, real-time data and thoughtful architecture.',
            details: [
                'Commercial experience with Angular and TypeScript',
                'Building interfaces for video analytics systems',
                'Working with real-time data, RxJS and WebRTC',
                'Taking ownership of frontend architecture and development'
            ],
            note: 'Curiosity turns complexity into something understandable.'
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
        about: {
            index: '02 / ОБО МНЕ',
            title: 'Создаю больше, чем интерфейсы.',
            description:
                'Я frontend-разработчик, специализируюсь на сложных веб-приложениях, данных в реальном времени и продуманной архитектуре.',
            details: [
                'Коммерческий опыт разработки на Angular и TypeScript',
                'Создание интерфейсов для систем видеоаналитики',
                'Работа с данными в реальном времени, RxJS и WebRTC',
                'Самостоятельное проектирование и развитие frontend-архитектуры'
            ],
            note: 'Любопытство помогает превращать сложное в понятное.'
        },
        sections: {
            about: 'Обо мне',
            stack: 'Технологии',
            projects: 'Избранные проекты',
            contacts: 'Давайте знакомиться.'
        }
    }
} as const;
