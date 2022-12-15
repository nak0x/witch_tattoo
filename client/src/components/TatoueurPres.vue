<template>
    <div>
        <div class="global-info-container">
            <div class="img-container">
                <img :src="`/src/assets/images/${tatoueur.profilImage}`" :alt="tatoueur.name">
            </div>
            <div class="infos-container">
                <h2 class="name">{{tatoueur.name}}</h2>
                <p class="description">{{tatoueur.description}}</p>
                <button class="cta">Voir son Instagram</button>
            </div>
        </div>
        <div class="flash-container">
            <div class="flash" v-for="(item, idx) in tatoueur.flashs" :key="idx">
                <img :src="`/src/assets/images/${item}`" :alt="`flash ${tatoueur.name}`" class="flash-image">
                <p class="flash-id">Planche de flash n°{{idx+1}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['tatoueur']
    }
</script>

<style lang="css" scoped>
@media screen and (min-width: 830px){
    .flash img {
        height: 40rem;
        width: auto !important;
    }

    .flash {
        width: auto !important;

    }

    .flash-container{
        margin-top: 5rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .global-info-container{
        display: flex;
        padding-top: 70px;
    }
    .img-container{
        width: fit-content;
    }
    .img-container > img {
        height: calc(100vh - 70px);
        width: auto !important;
        border-right: 2px solid var(--accent);
    }
}



.flash-id{
    color: var(--white);
    font-size: 1.1rem;
}

.flash{
    padding: 2rem;
    width: 100vw;
}

.flash-image{
    width: 100%;
}

.infos-container .cta{
    margin-top: 2rem;
}

.description{
    font-size: 1.15rem;
}
.name{
    font-size: 3rem;
    text-transform: capitalize;
    text-align: center;
}

.infos-container{
    display: grid;
    place-items: center;
    grid-auto-rows: auto;
    color: var(--white);
    padding: 3rem;
}
.img-container{
    background-color: var(--glass);
    border-bottom: solid 2px var(--accent);
    display: grid;
    place-items: center;
}

.img-container > img {
    width: 100vw;
}

</style>