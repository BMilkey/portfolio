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
        stack: {
            index: '03 / TOOLKIT',
            title: 'Tools I work with.',
            description:
                'A combination of technologies for building reliable interfaces, handling real-time data and exploring interactive experiences.',
            groups: [
                {
                    title: 'Frontend Engineering',
                    description: 'Application development',
                    technologies: ['Angular', 'TypeScript', 'JavaScript', 'RxJS', 'SCSS']
                },
                {
                    title: 'Real-time & Media',
                    description: 'Communication and data processing',
                    technologies: ['WebRTC', 'WebSocket', 'REST API', 'Electron', 'OpenLayers']
                },
                {
                    title: 'Creative Development',
                    description: 'Interactive web experiences',
                    technologies: ['Svelte 5', 'Three.js', 'Vite', 'Tailwind CSS']
                }
            ],
            note: 'Always learning. Always building.'
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
        stack: {
            index: '03 / ИНСТРУМЕНТЫ',
            title: 'Технологии в работе.',
            description:
                'Набор инструментов для создания надёжных интерфейсов, обработки данных в реальном времени и разработки интерактивных проектов.',
            groups: [
                {
                    title: 'Frontend-разработка',
                    description: 'Разработка приложений',
                    technologies: ['Angular', 'TypeScript', 'JavaScript', 'RxJS', 'SCSS']
                },
                {
                    title: 'Real-time и медиа',
                    description: 'Коммуникация и обработка данных',
                    technologies: ['WebRTC', 'WebSocket', 'REST API', 'Electron', 'OpenLayers']
                },
                {
                    title: 'Creative Development',
                    description: 'Интерактивные веб-проекты',
                    technologies: ['Svelte 5', 'Three.js', 'Vite', 'Tailwind CSS']
                }
            ],
            note: 'Постоянно изучаю новое и создаю.'
        },
        sections: {
            about: 'Обо мне',
            stack: 'Технологии',
            projects: 'Избранные проекты',
            contacts: 'Давайте знакомиться.'
        }
    }
} as const;
