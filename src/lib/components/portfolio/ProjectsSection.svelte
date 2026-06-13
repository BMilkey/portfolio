<script lang="ts">
    type Props = {
        content: {
            index: string;
            title: string;
            description: string;
            disclaimer: string;
            items: readonly {
                number: string;
                category: string;
                title: string;
                description: string;
                role: string;
                technologies: readonly string[];
                achievements: readonly string[];
                metrics: readonly {
                    value: string;
                    label: string;
                    description: string;
                }[];
                note: string;
            }[];
        };
    };

    let { content }: Props = $props();
</script>

<section id="projects" class="projects section" aria-labelledby="projects-title">
    <section class="projects__heading">
        <section>
            <span class="projects__index">{content.index}</span>
            <h2 id="projects-title">{content.title}</h2>
        </section>

        <p class="projects__description">{content.description}</p>
    </section>

    <section class="projects__list">
        {#each content.items as project, index (project.number)}
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
                                    class="projects__stream-orbit projects__stream-orbit--outer"
                                ></div>
                                <div
                                    class="projects__stream-orbit projects__stream-orbit--inner"
                                ></div>

                                <section class="projects__stream-core">
                                    <span>STREAMS</span>
                                    <strong>300</strong>
                                    <span>ONE SERVER</span>
                                </section>

                                <span class="projects__stream-point projects__stream-point--one"
                                ></span>
                                <span class="projects__stream-point projects__stream-point--two"
                                ></span>
                                <span class="projects__stream-point projects__stream-point--three"
                                ></span>
                                <span class="projects__stream-point projects__stream-point--four"
                                ></span>
                            </section>

                            <section class="projects__visual-bottom">
                                <span>WEBRTC / REAL-TIME</span>
                                <span>FIG. 01</span>
                            </section>
                        </section>
                    {:else}
                        <section class="projects__visual-operations">
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
                                    class="projects__operation-node projects__operation-node--active"
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
                        </section>
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

    <p class="projects__disclaimer">{content.disclaimer}</p>
</section>
