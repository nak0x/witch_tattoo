<template>
    <div class="tattoo-maker-container">
        <TatoueurPresVue v-if="urlTatoueur == 'alex'" :tatoueur="tatoueurs[0]"/>
        <TatoueurPresVue v-if="urlTatoueur == 'olympe'" :tatoueur="tatoueurs[1]"/>
        <TatoueurPresVue v-if="urlTatoueur == 'bastien'" :tatoueur="tatoueurs[2]"/>
    </div>
</template>

<script>
import TatoueurPresVue from '../components/TatoueurPres.vue'
    export default {
        data(){
            return {
                tatoueurs : [
                    {
                        name: "alex",
                        style: "Farfelu",
                        profilImage: "alex.png",
                        description: "Alex de son nom d’enfant Alexandra, ne se sentait pas être une fille mais elle ne se sentait pas un garçon non plus. Iel a eu une enfance très compliquée, harcelée à l’école et détestée par son père Alex c’est réfugié dans le dessin. A l’âge de 20 ans iel a compris qu’iel était non-binaire. Alex devient graphiste jusqu’à ce qu’iel change de patron, celui-ci avait des propos discriminants et violents, ce qui lui rappelait son passé et a décidé de démissionner. Alex crée son salon de tatouage afin d’être libre d’exprimer qui iel est et ainsi avoir un côté humain et non robot qu’iel ressentait dans le graphisme.",
                        flashs: [
                            "04_alex.png",
                            "05_alex.png"
                        ]
                    },
                    {
                        name: "olympe",
                        style: "Minimaliste",
                        profilImage: "olympe.png",
                        description: "Olympe veut faire sourire les gens, être marquante. Elle a toujours aimé se démarquer, sortir du lot même si on la trouvait bizarre à cause de ça. Le tatouage l’attirait depuis petite mais elle n’a jamais trouvé que ces dessins étaient beaux pour se lancer puis un jour sa sœur fut victime d’un accident de voiture et ne survit pas. Olympe a décidé de se lancer et de dessiner le tatouage qu’elle se ferait faire en honneur de sa sœur. Elle rencontre Alex à ce moment et décide d’en faire son métier.",
                        flashs: [
                            "02_olympe.png",
                            "07_olympe.png"
                        ]
                    },
                    {
                        name: "bastien",
                        style: "Black Tattoo",
                        profilImage: "bastien.png",
                        description: "Bastien dessinait souvent en cours lorsqu’il s’ennuyait et continuait chez lui. Il a d’abord commencé par reproduire des dessins pris au hasard sur internet puis des mangas avant de laisser son imagination le guider. Travailler dans le dessin était devenu une évidence. Il a essayé d’entrer dans une école d’art mais n’a pas été accepté, il a testé d’améliorer ses dessins grâce à l’ordinateur ça lui a tout de suite plus. Il a cherché dans quel secteur il pouvait mélanger le dessin et l’ordinateur mais aucun ne lui convenait parce que le dessin n’était pas en avant. Il a ensuite trouvé le tatouage et l’idée lui a tout de suite plus, il pouvait garder le dessin en avant et s’aider de l’ordinateur pour la mise en forme.",
                        flashs: [
                            "01_bastien.png",
                            "03_bastien.png",
                            "06_bastien.png"
                        ]
                    }
                ],
                urlTatoueur: null
            }
        },
        mounted(){
            this.urlTatoueur = this.$route.query.name
        },
        updated(){
            this.urlTatoueur = this.$route.query.name
        },
        components: {
            TatoueurPresVue
        }
    }
</script>

<style lang="css" scoped>

</style>