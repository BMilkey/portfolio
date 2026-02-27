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

    <section id="stack" class="section">
        <h2>{content.sections.stack}</h2>
    </section>

    <section id="projects" class="section">
        <h2>{content.sections.projects}</h2>
    </section>

    <footer id="contacts" class="footer">
        <h2>{content.sections.contacts}</h2>
    </footer>
</main>
