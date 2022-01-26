<template>
    <div class="footer section">
        <h1>Follow <span>Gomorran</span> on socials</h1>
        <Socials />
        <p>© 2022 Olli Lappalainen / Contact gomorranmetal@gmail.com</p>
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

    h1 {
        color: var(--white);
        margin-bottom: 2rem;

        span {
            color: var(--gold);
        }
    }

    p {
        margin-top: 4rem;
    }
}
</style>