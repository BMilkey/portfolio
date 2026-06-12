<script lang="ts">
    import { resolve } from '$app/paths';
    import type { Locale } from '$lib/data/portfolio-content';

    type Props = {
        locale: Locale;
        navigation: {
            about: string;
            stack: string;
            projects: string;
            contacts: string;
        };
        onLocaleChange: (locale: Locale) => void;
    };

    let { locale, navigation, onLocaleChange }: Props = $props();
</script>

<header class="header">
    <a href={resolve('/')} class="header__logo" aria-label="Home">
        <span class="header__logo-mark">*</span>
        <span class="header__logo-label">KATE PORTFOLIO</span>
    </a>

    <nav class="header__navigation" aria-label="Main navigation">
        <a href="#about">{navigation.about}</a>
        <a href="#stack">{navigation.stack}</a>
        <a href="#projects">{navigation.projects}</a>
        <a href="#contacts">{navigation.contacts}</a>
    </nav>

    <section class="header__language" aria-label="Language">
        <button type="button" aria-pressed={locale === 'en'} onclick={() => onLocaleChange('en')}>
            EN
        </button>

        <span aria-hidden="true">/</span>

        <button type="button" aria-pressed={locale === 'ru'} onclick={() => onLocaleChange('ru')}>
            RU
        </button>
    </section>
</header>
