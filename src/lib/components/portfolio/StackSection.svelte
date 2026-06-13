<script lang="ts">
    type Props = {
        content: {
            index: string;
            title: string;
            description: string;
            groups: readonly {
                title: string;
                description: string;
                technologies: readonly string[];
            }[];
            note: string;
        };
    };

    let { content }: Props = $props();
</script>

<section id="stack" class="stack section" aria-labelledby="stack-title">
    <section class="stack__heading">
        <section>
            <span class="stack__index">{content.index}</span>
            <h2 id="stack-title">{content.title}</h2>
        </section>

        <p class="stack__description">
            {content.description}
        </p>
    </section>

    <section class="stack__groups">
        {#each content.groups as group, index (group.title)}
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
        {content.note}
    </p>
</section>
