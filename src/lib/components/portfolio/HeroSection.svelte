<script lang="ts">
    type Props = {
        content: {
            hero: {
                eyebrow: string;
                index: string;
                title: string;
                titleAccent: string;
                description: string;
            };
            navigation: {
                projects: string;
            };
        };
    };

    let { content }: Props = $props();
</script>

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
        <span class="hero__visual-coordinate hero__visual-coordinate--top">
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

        <span class="hero__visual-coordinate hero__visual-coordinate--bottom">
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
