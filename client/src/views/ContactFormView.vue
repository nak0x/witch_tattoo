<template>
    <div>
        <div class="contact-form-container">
            <h1 class="contact-form-title">Contactez nous</h1>
            <form @submit.prevent="handleSubmit" class="form-container" v-if="formState == 'pending' || formState == 'sending'">
                <div>
                    <label for="name">Nom</label>
                    <input type="text" name="name" placeholder="Nom" v-model="formdata.name" required>
                </div>
                <div>
                    <label for="email">Email</label>
                    <input type="email" name="email" placeholder="jeandupond@email.com" v-model="formdata.email" required>
                </div>
                <div>
                    <label for="message">Votre message</label>
                    <textarea name="message" placeholder="Bonjour, je vous contacte pour..." v-model="formdata.message" required></textarea>
                </div>
                <button type="submit" class="cta">Envoyer</button>
            </form>
            <div class="loading-overlay" v-if="formState == 'sending'">
                <div class="loader"></div>
            </div>
            <div class="success-message" v-if="formState == 'send'">
                <h3 class="greatings-title">Merci</h3>
                <p class="greatings-message">Votre message a bien été envoyé !<br>Nous vous répondrons au plus vite.</p>
                <RouterLink to="/"><button class="cta">Retourer a l'accueil</button></RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return {
                formdata: {
                    name: null,
                    email: null,
                    message: null
                },
                formState: 'pending'
            }
        },
        methods: {
            async handleSubmit(){
                this.formState = "sending"
                const res = await axios.post('/email', {...this.formdata})
                console.info(res.data)
                this.formState = "send"
            }
        }
    }
</script>

<style lang="css" scoped>
@media screen and (min-width: 830px){
    .form-container input, .form-container textarea{
        width: 800px !important;
    }
}

.contact-form-title{
    color: var(--white);
}

.success-message{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.greatings-message{
    font-size: 1.3rem;
    color: var(--white);
    text-align: center;
    margin-bottom: 5rem;
}

.greatings-title{
    font-size: 3.5rem;
    color: var(--white);
    font-family: 'Cinzel';
    text-align: center;
    margin-bottom: 1.5rem;
}

.loader{
    background-image: url('/src/assets/images/loader-logo.png');
    background-size: cover;
    height: 7rem;
    aspect-ratio: 1;
    animation: load 2s linear infinite;
}

@keyframes load {
    from{
        transform: rotate(0deg);
    }to{
        transform: rotate(360deg);
    }
}

.loading-overlay{
    position: fixed;
    inset: 0;
    background-color: var(--dark-glass);
    display: grid;
    place-items: center;
}

.form-container button {
    place-self: center;
    min-width: 15rem;
}
.form-container textarea{
    height: 8rem;
}

.form-container input, .form-container textarea {
    width: calc(100vw - 4rem);
    min-height: 3rem;
    padding: 10px;
    font-family: 'Bhavuka';
    border: none;
    border-bottom: 1px solid var(--white);
    background-color: var(--glass);
    border-radius: .5rem;
    color: var(--white);
    font-size: 1.2rem;
}

.form-container input::placeholder, .form-container textarea::placeholder{
    color: var(--dark);
}

.form-container label {
    font-size: 1.5rem;
    color: var(--white);
}

.form-container{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 800px;
}

.contact-form-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    min-height: calc(100vh - 70px);
    top: 70px;
    left: 0;
    right: 0;
}
</style>