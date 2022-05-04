<template>
    <div class="footer section">
        <h2>Follow <span>Gomorran</span> on socials</h2>
        <Socials />
        <p>© 2022 Gomorran Media / Contact & booking <a class="mail-to" href="mailto:gomorranmetal@gmail.com">gomorranmetal@gmail.com</a></p>
    </div>
</template>

<script>
import Socials from './Socials';

export default {
    components: {
        Socials,
    },
};
</script>

<style lang="scss" scoped>
.footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    text-align: center;

    h2 {
        color: var(--white);
        margin-bottom: 2rem;

        span {
            color: var(--gold);
        }
    }

    p {
        margin-top: 4rem;
    }

    a {
        text-decoration: none;
        color: var(--gold);
    }
}
</style>