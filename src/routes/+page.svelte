<script lang="ts">
    import { portfolioContent, type Locale } from '$lib/data/portfolio-content';

    import Header from '$lib/components/layout/Header.svelte';
    import Footer from '$lib/components/layout/Footer.svelte';

    import HeroSection from '$lib/components/portfolio/HeroSection.svelte';
    import AboutSection from '$lib/components/portfolio/AboutSection.svelte';
    import StackSection from '$lib/components/portfolio/StackSection.svelte';
    import ProjectsSection from '$lib/components/portfolio/ProjectsSection.svelte';
    import ContactsSection from '$lib/components/portfolio/ContactsSection.svelte';

    let locale: Locale = $state('en');

    const content = $derived(portfolioContent[locale]);
</script>

<svelte:head>
    <title>{content.metaTitle}</title>
    <meta name="description" content={content.metaDescription} />
</svelte:head>

<main id="top" lang={locale}>
    <Header
        {locale}
        navigation={content.navigation}
        onLocaleChange={(nextLocale) => (locale = nextLocale)}
    />

    <HeroSection {content} />
    <AboutSection content={content.about} />
    <StackSection content={content.stack} />
    <ProjectsSection content={content.projects} />
    <ContactsSection content={content.contacts} />

    <Footer content={content.footer} />
</main>
