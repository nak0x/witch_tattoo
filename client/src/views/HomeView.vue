<template>
    <div class="landing-container">
        <div class="background-container">
            <iframe src='https://my.spline.design/untitled-a337bc3125b7ff4257906056149e8732/' frameborder='0' width='100%' height='100%'></iframe>
        </div>
        <div class="page-content-container">
            <h1 class="page-title">WITCH<br><strong>TATToo</strong></h1>
            <div class="glass-container">
                <section class="about-container">
                    <div class="text-container">
                        <h3 class="content-title">Salon de tattoo</h3>
                        <hr class="subtitle">
                        <p class="description">Le salon de tatouage Witch Tattoo ouvre ses portes à Grenoble. Dans notre shop, vous trouverez 3 tatoueurs de talents avec des styles différents pour satisfaire le plus de clients possibles. Vous trouverez aussi une boutique ésotérique dans laquelle vous trouverez toute sorte de pierres, de plantes, mais aussi des goodies pour la sorcellerie, lithothérapie et médecine sauvage.<br>Bastien a toujours voulu travailler dans le dessin, il a essayé de rentrer dans une école d’art mais il n’a pas été accepter alors il c’est redirigé vers le tatouage. Quant à Olympe, elle voulait marqué la vie des personnes autour d’elle et c’est ce qu’elle fait… Alex à toujours eu du mal à se sentir à sa place mais grâce au tatouage iel a pu l’accepter. Olympe et Bastien se sont rencontrés lors d’une conférence sur le tatouage, ils ont sympathisé et ont commencé à parler de l’ouverture d’un salon. Olympe l’ancienne apprentie d’Alex lui en parle et ils décident ainsi de monter leur salon de tatouage ensemble.</p>
                    </div>
                    <div class="cta-container">
                        <a href="https://www.instagram.com/witch_tattoo" target="_blank"><button class="cta">Découvrir nos tattoos</button></a>
                    </div>
                </section>
                <section class="tatoueurs-container">
                    <TatoueurContainerVue />
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import TatoueurContainerVue from '../components/TatoueurContainer.vue';
    export default {
        components: {
            TatoueurContainerVue
        }
    }
</script>

<style lang="css" scoped>
@media screen and (min-width: 830px) {
    .page-title{
        font-size: 6rem !important;
        line-height: 7rem !important;
        margin-top: 7rem !important;
    }

    .page-title > strong {
        font-size: 8rem !important;
    }

    .glass-container{
        max-width: 60rem;
    }

    .description{
        max-width: 80%;
        margin-bottom: 3rem;
    }
}

.cta-container{
    padding: 2rem 0;
    display: grid;
    place-items: center;
    width: 100%;
}
.description{
    font-size: 1.2rem;
    font-weight: 600;
}
.text-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.subtitle{
    width: 55%;
    border: none;
    height: 1.5px;
    background-color: var(--dark);
    border-radius: 2rem;
    margin-bottom: 1rem;
}
.content-title{
    font-size: 2rem;
    text-align: center;
    color: var(--dark);
}

.glass-container{
    background-color: var(--glass);
    backdrop-filter: blur(20px);
    padding: 2rem;
    border-radius: 3rem;
    border: solid 1px var(--white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    padding-bottom: 10rem;
}

.page-title{
    font-size: 3rem;
    color: var(--white);
    line-height: 4.5rem;
    margin-top: 6rem;
    margin-bottom: 5rem;
}

.page-title > strong {
    font-size: 5rem;
}

.page-content-container{
    padding-top: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1.5rem;
}

.background-container{
    z-index: 0;
    position: fixed;
    height: 100vh;
    width: 100vw;
}
</style>