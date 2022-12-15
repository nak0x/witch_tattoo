<template>
    <div class="profil-pict-container">
        <div class="image-container">
            <img :src="`/src/assets/images/${profilImage}`" :alt="`image de la tête de ${name}`">
        </div>
        <div class="info-container">
            <RouterLink :to="`/tattoo-maker?name=${name}`">{{name}} - {{tattooStyle}}</RouterLink>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

    export default {
    props: ["profilImage", "name", "tattooStyle"],
    components: { RouterLink }
}
</script>

<style lang="css" scoped>
.profil-pict-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.info-container > a {
    background-color: var(--white);
    padding: .7rem 1.5rem;
    text-transform: capitalize;
    border-radius: 2rem;
    width: 200px;
    font-size: 1.3rem;
}

.image-container > img{
    height: 200px;
}

.image-container{
    background-color: var(--glass);
    border-radius: 100%;
    aspect-ratio: 1;
    overflow: hidden;
    border: 1px solid var(--white);
}
</style>