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
        projects: {
            index: '04 / SELECTED WORK',
            title: 'Things I helped bring to life.',
            description:
                'Production applications built around real-time data, complex workflows and demanding engineering challenges.',
            items: [
                {
                    number: '01',
                    title: 'Intelligent Video Analytics Platform',
                    category: 'Video surveillance · Real-time analytics',
                    description:
                        'A commercial platform for intelligent video surveillance and AI-powered analytics, designed for industrial and security environments.',
                    role: 'Frontend Developer · Frontend Lead',
                    technologies: ['Angular', 'TypeScript', 'RxJS', 'WebRTC', 'Electron'],
                    achievements: [
                        'Designed and implemented the frontend architecture from scratch.',
                        'Built a WebRTC client for real-time video streaming.',
                        'Implemented connection management using RTCPeerConnection, ICE, SDP and reconnection logic.',
                        'Handled up to 300 simultaneously active video streams on a single server.',
                        'Developed an offline Electron desktop application for isolated networks.',
                        'Optimized Angular performance using OnPush, RxJS and virtual scrolling.',
                        'Contributed to API design, code reviews and developer mentoring.'
                    ],
                    metrics: [
                        {
                            value: '300',
                            label: 'Simultaneous video streams',
                            description: 'On a single server'
                        }
                    ],
                    note: 'Frontend architecture and real-time streaming infrastructure built from scratch.'
                },
                {
                    number: '02',
                    title: 'Rapid Response Management System',
                    category: 'Operations · Real-time management',
                    description:
                        'A production system for coordinating rapid response teams, managing operational workflows and visualizing field activity.',
                    role: 'Frontend Developer · Frontend Lead',
                    technologies: [
                        'Angular',
                        'TypeScript',
                        'RxJS',
                        'Chart.js',
                        'OpenLayers',
                        'REST / RPC API'
                    ],
                    achievements: [
                        'Designed and developed the frontend application from scratch.',
                        'Built a real-time Kanban system for managing response operations.',
                        'Implemented multi-step reporting workflows with nested data structures.',
                        'Developed shift handover management with timelines and live updates.',
                        'Created a calendar planner with day, week and month views.',
                        'Built analytical dashboards and data visualizations using Chart.js.',
                        'Integrated geospatial services and route visualization with OpenLayers.',
                        'Worked with REST / RPC APIs and backend architecture migration.'
                    ],
                    metrics: [
                        {
                            value: '130K+',
                            label: 'Operational events processed',
                            description: 'Cumulative total as of June 2026'
                        }
                    ],
                    note: 'Production system supporting complex operational workflows.'
                }
            ],
            disclaimer: 'Project descriptions are generalized due to confidentiality.'
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
        projects: {
            index: '04 / ИЗБРАННЫЕ ПРОЕКТЫ',
            title: 'От идеи до работающего продукта.',
            description:
                'Production-системы со сложными бизнес-процессами, данными в реальном времени и серьёзными инженерными задачами.',
            items: [
                {
                    number: '01',
                    title: 'Платформа интеллектуальной видеоаналитики',
                    category: 'Видеонаблюдение · Аналитика в реальном времени',
                    description:
                        'Коммерческая платформа интеллектуального видеонаблюдения и видеоаналитики для промышленных и охранных предприятий.',
                    role: 'Frontend-разработчик · Frontend Lead',
                    technologies: ['Angular', 'TypeScript', 'RxJS', 'WebRTC', 'Electron'],
                    achievements: [
                        'Спроектировала и реализовала frontend-архитектуру приложения с нуля.',
                        'Разработала WebRTC-клиент для работы с видеопотоками в реальном времени.',
                        'Реализовала управление соединениями через RTCPeerConnection, ICE, SDP и механизмы переподключения.',
                        'Обеспечила работу до 300 одновременно активных видеопотоков на одном сервере.',
                        'Создала автономную desktop-версию на Electron для закрытых сетей.',
                        'Оптимизировала производительность Angular с помощью OnPush, RxJS и виртуализации списков.',
                        'Участвовала в проектировании API, проводила code review и занималась наставничеством.'
                    ],
                    metrics: [
                        {
                            value: '300',
                            label: 'Одновременно работающих видеопотоков',
                            description: 'На одном сервере'
                        }
                    ],
                    note: 'Frontend-архитектура и инфраструктура обработки видеопотоков созданы с нуля.'
                },
                {
                    number: '02',
                    title: 'Система диспетчеризации групп быстрого реагирования',
                    category: 'Операционные процессы · Real-time',
                    description:
                        'Production-система для координации групп быстрого реагирования, управления операционными процессами и визуализации деятельности выездных подразделений.',
                    role: 'Frontend-разработчик · Frontend Lead',
                    technologies: [
                        'Angular',
                        'TypeScript',
                        'RxJS',
                        'Chart.js',
                        'OpenLayers',
                        'REST / RPC API'
                    ],
                    achievements: [
                        'Спроектировала и разработала frontend-систему с нуля.',
                        'Создала Kanban-систему управления выездами с обновлением данных в реальном времени.',
                        'Реализовала многошаговую систему отчётности со сложными вложенными структурами данных.',
                        'Разработала систему пересменок с временной шкалой и live-обновлениями.',
                        'Создала календарный планировщик с режимами дня, недели и месяца.',
                        'Разработала аналитические панели и визуализацию данных на Chart.js.',
                        'Интегрировала геосервисы и отображение маршрутов с OpenLayers.',
                        'Работала с REST / RPC API и участвовала в миграции backend-архитектуры.'
                    ],
                    metrics: [
                        {
                            value: '130 000+',
                            label: 'Обработанных операционных событий',
                            description: 'Накопленный показатель на июнь 2026'
                        }
                    ],
                    note: 'Production-система для поддержки сложных операционных процессов.'
                }
            ],
            disclaimer: 'Описание проектов обобщено в связи с конфиденциальностью.'
        },
        sections: {
            about: 'Обо мне',
            stack: 'Технологии',
            projects: 'Избранные проекты',
            contacts: 'Давайте знакомиться.'
        }
    }
} as const;
