<script lang="ts">
    import { resolve } from '$app/paths';
    import { portfolioContent, type Locale } from '$lib/data/portfolio-content';

    let locale: Locale = $state('en');

    const content = $derived(portfolioContent[locale]);
</script>

<svelte:head>
    <title>{content.metaTitle}</title>
    <meta name="description" content={content.metaDescription} />
</svelte:head>

<main lang={locale}>
    <header class="header">
        <a href={resolve('/')} class="header__logo" aria-label="Home">
            <span class="header__logo-mark">*</span>
            <h6 class="header__logo-label">KATE PORTFOLIO</h6>
        </a>

        <nav class="header__navigation" aria-label="Main navigation">
            <a href="#about">{content.navigation.about}</a>
            <a href="#stack">{content.navigation.stack}</a>
            <a href="#projects">{content.navigation.projects}</a>
            <a href="#contacts">{content.navigation.contacts}</a>
        </nav>

        <section class="header__language" aria-label="Language">
            <button type="button" aria-pressed={locale === 'en'} onclick={() => (locale = 'en')}>
                EN
            </button>

            <span aria-hidden="true">/</span>

            <button type="button" aria-pressed={locale === 'ru'} onclick={() => (locale = 'ru')}>
                RU
            </button>
        </section>
    </header>

    <section class="hero" aria-labelledby="hero-title">
        <section class="hero__content">
            <section class="hero__eyebrow">
                <span class="hero__status-dot"></span>
                <span>{content.hero.eyebrow}</span>
                <span class="hero__index">{content.hero.index}</span>
            </section>

            <h1 id="hero-title">
                {content.hero.title}
                <span class="hero__title-accent">{content.hero.titleAccent}</span>
                <span class="hero__title-sparkle" aria-hidden="true">✳</span>
            </h1>

            <p class="hero__description">
                {content.hero.description}
            </p>

            <a class="hero__link" href="#projects">
                <span>{content.navigation.projects}</span>
                <span aria-hidden="true">↗</span>
            </a>
        </section>

        <section class="hero__visual" aria-label="3D identity card preview">
            <span class="herovisual-coordinate herovisual-coordinate--top">
                FIG. 001 — IDENTITY OBJECT
            </span>

            <section class="hero__object">
                <div class="hero__object-shine"></div>

                <section class="hero__object-header">
                    <span>PERSONAL ID</span>
                    <span>2026 / 001</span>
                </section>

                <div class="hero__object-symbol" aria-hidden="true">✳</div>

                <section class="hero__object-footer">
                    <span>CREATIVE MIND</span>
                    <span>BUILT WITH CODE</span>
                </section>
            </section>

            <span class="herovisual-coordinate herovisual-coordinate--bottom">
                55° / 37° — DIGITAL SPACE
            </span>

            <span class="hero__sticker" aria-hidden="true">made<br />of ideas</span>
        </section>

        <section class="hero__bottom">
            <span>SCROLL TO EXPLORE</span>
            <span class="hero__bottom-line"></span>
            <span>01 — 06</span>
        </section>
    </section>

    <section id="about" class="about section" aria-labelledby="about-title">
        <section class="about__heading">
            <span class="about__index">{content.about.index}</span>

            <h2 id="about-title">
                {content.about.title}
            </h2>

            <span class="about__decoration" aria-hidden="true">✳</span>
        </section>

        <section class="about__body">
            <p class="about__description">
                {content.about.description}
            </p>

            <ul class="about__details">
                {#each content.about.details as detail, index (detail)}
                    <li>
                        <span class="about__detail-index">
                            0{index + 1}
                        </span>
                        <span>{detail}</span>
                    </li>
                {/each}
            </ul>

            <p class="about__note">
                <span aria-hidden="true">“</span>
                {content.about.note}
            </p>
        </section>
    </section>

    <section id="stack" class="stack section" aria-labelledby="stack-title">
        <section class="stack__heading">
            <section>
                <span class="stack__index">{content.stack.index}</span>
                <h2 id="stack-title">{content.stack.title}</h2>
            </section>

            <p class="stack__description">
                {content.stack.description}
            </p>
        </section>

        <section class="stack__groups">
            {#each content.stack.groups as group, index (group.title)}
                <article class="stack__group">
                    <section class="stack__group-meta">
                        <span class="stack__group-index">0{index + 1}</span>
                        <section>
                            <h3>{group.title}</h3>
                            <p>{group.description}</p>
                        </section>
                    </section>

                    <ul class="stack__technologies">
                        {#each group.technologies as technology (technology)}
                            <li>{technology}</li>
                        {/each}
                    </ul>

                    <span class="stack__group-mark" aria-hidden="true">↗</span>
                </article>
            {/each}
        </section>

        <p class="stack__note">
            <span aria-hidden="true">✳</span>
            {content.stack.note}
        </p>
    </section>

    <section id="projects" class="projects section" aria-labelledby="projects-title">
        <section class="projects__heading">
            <section>
                <span class="projects__index">{content.projects.index}</span>
                <h2 id="projects-title">{content.projects.title}</h2>
            </section>

            <p class="projects__description">{content.projects.description}</p>
        </section>

        <section class="projects__list">
            {#each content.projects.items as project, index (project.number)}
                <article
                    class="projects__item"
                    class:projects__item--featured={index === 0}
                    aria-labelledby="project-title-{project.number}"
                >
                    <section class="projects__visual">
                        {#if index === 0}
                            <section class="projects__visual-analytics">
                                <section class="projects__visual-top">
                                    <span>VIDEO INFRASTRUCTURE</span>
                                    <span class="projects__status">
                                        <span></span>
                                        ACTIVE
                                    </span>
                                </section>

                                <section class="projects__stream-display" aria-hidden="true">
                                    <div
                                        class="projectsstream-orbit projectsstream-orbit--outer"
                                    ></div>
                                    <div
                                        class="projectsstream-orbit projectsstream-orbit--inner"
                                    ></div>

                                    <section class="projects__stream-core">
                                        <span>STREAMS</span>
                                        <strong>300</strong>
                                        <span>ONE SERVER</span>
                                    </section>

                                    <span class="projectsstream-point projectsstream-point--one"
                                    ></span>
                                    <span class="projectsstream-point projectsstream-point--two"
                                    ></span>
                                    <span class="projectsstream-point projectsstream-point--three"
                                    ></span>
                                    <span class="projectsstream-point projectsstream-point--four"
                                    ></span>
                                </section>

                                <section class="projects__visual-bottom">
                                    <span>WEBRTC / REAL-TIME</span>
                                    <span>FIG. 01</span>
                                </section>
                            </section>
                        {:else}
                            <secction class="projects__visual-operations">
                                <section class="projects__visual-top">
                                    <span>OPERATION CONTROL</span>
                                    <span class="projects__status">
                                        <span></span>
                                        PRODUCTION
                                    </span>
                                </section>

                                <section class="projects__operation-flow" aria-hidden="true">
                                    <section class="projects__operation-node">
                                        <span>01</span>
                                        <strong>Dispatch</strong>
                                    </section>
                                    <span class="projects__operation-connector"></span>
                                    <section
                                        class="projectsoperation-node projectsoperation-node--active"
                                    >
                                        <span>02</span>
                                        <strong>Response</strong>
                                    </section>
                                    <span class="projects__operation-connector"></span>
                                    <section class="projects__operation-node">
                                        <span>03</span>
                                        <strong>Report</strong>
                                    </section>
                                </section>
                                <section class="projects__operation-timeline" aria-hidden="true">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </section>

                                <section class="projects__visual-bottom">
                                    <span>REAL-TIME OPERATIONS</span>
                                    <span>FIG. 02</span>
                                </section>
                            </secction>
                        {/if}
                    </section>

                    <section class="projects__content">
                        <section class="projects__meta">
                            <span>{project.number} / 02</span>
                            <span>{project.category}</span>
                        </section>

                        <h3 id="project-title-{project.number}">{project.title}</h3>

                        <p class="projects__description-text">{project.description}</p>

                        <p class="projects__role">{project.role}</p>

                        <ul class="projects__technologies" aria-label="Technologies">
                            {#each project.technologies as technology (technology)}
                                <li>{technology}</li>
                            {/each}
                        </ul>

                        <section class="projects__achievements">
                            <h4>Key contributions</h4>

                            <ul>
                                {#each project.achievements as achievement (achievement)}
                                    <li>{achievement}</li>
                                {/each}
                            </ul>
                        </section>

                        <section class="projects__metrics">
                            {#each project.metrics as metric (metric.label)}
                                <section class="projects__metric">
                                    <strong>{metric.value}</strong>
                                    <section>
                                        <span>{metric.label}</span>
                                        <p>{metric.description}</p>
                                    </section>
                                </section>
                            {/each}
                        </section>

                        <p class="projects__note">
                            <span aria-hidden="true">✳</span>
                            {project.note}
                        </p>
                    </section>
                </article>
            {/each}
        </section>

        <p class="projects__disclaimer">{content.projects.disclaimer}</p>
    </section>

    <footer id="contacts" class="footer">
        <h2>{content.sections.contacts}</h2>
    </footer>
</main>
