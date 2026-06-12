<script lang="ts">
    type Props = {
        content: {
            message: string;
            backToTop: string;
            credit: string;
        };
    };

    let { content }: Props = $props();
</script>

<footer class="footer">
    <section class="footer__main">
        <a class="footer__brand" href="#top" aria-label="Back to top">
            <span aria-hidden="true">✳️</span>
            <span>BM.</span>
        </a>

        <p class="footer__message">
            {content.message}
        </p>

        <a class="footer__top" href="#top">
            <span>{content.backToTop}</span>
            <span aria-hidden="true">↑</span>
        </a>
    </section>

    <section class="footer__bottom">
        <span>© {new Date().getFullYear()} BM</span>

        <span>{content.credit}</span>

        <span class="footer__location">
            MADE WITH CURIOSITY <span aria-hidden="true">✳️</span>
        </span>
    </section>
</footer>
