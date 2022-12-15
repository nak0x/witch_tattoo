<template>
    <div>
        <h3 class="section-title">Nos tatoueurs</h3>
        <div class="profil-container">
            <TatoueurProfileVue
                v-for="(item, idx) in tatoueurs"
                :key="idx" :name="item.name"
                :tattooStyle="item.style"
                :profilImage="item.profilImage"
            />
        </div>
    </div>
</template>

<script>
import TatoueurProfileVue from './TatoueurProfile.vue';
    export default {
        data(){
            return {
                tatoueurs : [
                    {
                        name: "alex",
                        style: "Abstrait",
                        profilImage: "alex.png"
                    },
                    {
                        name: "olympe",
                        style: "Minimaliste",
                        profilImage: "olympe.png"
                    },
                    {
                        name: "bastien",
                        style: "Black Tattoo",
                        profilImage: "bastien.png"
                    }
                ]
            }
        },
        components: {
            TatoueurProfileVue
        }
    }
</script>

<style lang="css" scoped>
@media screen and (min-width: 830px) {
    .profil-container{
        display: flex !important;
        flex-wrap: wrap !important;
    }
}
.section-title {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
}

.profil-container{
    display: grid;
    place-items: center;
    gap: 2rem;
}
</style>