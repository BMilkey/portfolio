<script lang="ts">
    type Props = {
        content: {
            index: string;
            title: string;
            description: string;
            details: readonly string[];
            note: string;
        };
    };

    let { content }: Props = $props();
</script>

<section id="about" class="about section" aria-labelledby="about-title">
    <section class="about__heading">
        <span class="about__index">{content.index}</span>

        <h2 id="about-title">
            {content.title}
        </h2>

        <span class="about__decoration" aria-hidden="true">✳️</span>
    </section>

    <section class="about__body">
        <p class="about__description">
            {content.description}
        </p>

        <ul class="about__details">
            {#each content.details as detail, index (detail)}
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
            {content.note}
        </p>
    </section>
</section>
