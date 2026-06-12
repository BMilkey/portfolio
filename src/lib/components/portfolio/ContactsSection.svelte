<script lang="ts">
    type Props = {
        content: {
            index: string;
            availability: string;
            title: string;
            description: string;
            note: string;
            links: readonly {
                label: string;
                href: string;
                value: string;
                external: boolean;
            }[];
        };
    };

    let { content }: Props = $props();
</script>

<section id="contacts" class="contacts section" aria-labelledby="contacts-title">
    <section class="contacts__main">
        <section class="contacts__heading">
            <span class="contacts__index">{content.index}</span>

            <span class="contacts__availability">
                <span></span>
                {content.availability}
            </span>
        </section>

        <h2 id="contacts-title">
            {content.title}
            <span class="contacts__decoration" aria-hidden="true">✳️</span>
        </h2>

        <p class="contacts__description">{content.description}</p>

        <p class="contacts__note">
            <span aria-hidden="true">↳</span>
            {content.note}
        </p>
    </section>

    <section class="contacts__links" aria-label="Contact links">
        {#each content.links as link (link.label)}
            <a
                class="contacts__link"
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
            >
                <span class="contacts__link-label">{link.label}</span>
                <span class="contacts__link-value">{link.value}</span>
                <span class="contacts__link-arrow" aria-hidden="true">↗️</span>
            </a>
        {/each}
    </section>
</section>
