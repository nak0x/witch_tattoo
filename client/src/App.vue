<template>
  <div class="app-inner-container">
    <div id="app-navbar">

      <nav class="navbar">
        <h2 class="logotype" v-if="deviceType == 'desktop'" :data-device="deviceType"><RouterLink to="/">WITCH TATToo</RouterLink></h2>
        <h2 class="logotype" v-if="deviceType != 'desktop'" :data-device="deviceType"><RouterLink to="/">WT</RouterLink></h2>
        <div class="logo-container"><RouterLink to="/"><img src="@/assets/images/logo.png" alt="witch logo"></RouterLink></div>
        <button :class="`menu ${mobileMenuState}`" v-if="deviceType == 'mobile' || deviceType == 'tablet'" @click="toggleMenu">
          <div class="links-container">
            <RouterLink to="/">Accueil</RouterLink>
            <RouterLink to="/tattoo-maker?name=alex">Alex</RouterLink>
            <RouterLink to="/tattoo-maker?name=olympe">Olympe</RouterLink>
            <RouterLink to="/tattoo-maker?name=bastien">Bastien</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
          </div>
        </button>
        <div class="nav-links-container" v-if="deviceType == 'desktop'">
          <RouterLink to="/">Accueil</RouterLink>
          <RouterLink to="/tattoo-maker?name=alex">Alex</RouterLink>
          <RouterLink to="/tattoo-maker?name=olympe">Olympe</RouterLink>
          <RouterLink to="/tattoo-maker?name=bastien">Bastien</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </div>
      </nav>
    </div>
    <div id="app-content">
      <RouterView />
    </div>
    <div id="app-footer">
      Copyrights Witch Tattoo<br><RouterLink to="/contact">Contactez nous</RouterLink>
    </div>
  </div>
</template>

<script>
  import { RouterLink, RouterView } from "vue-router";

  const getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    }
    if (
      /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return "mobile";
    }
    return "desktop";
  };
  export default {
    data(){
      return {
        deviceType: getDeviceType(),
        mobileMenuState: 'close'
      }
    },
    methods: {
      toggleMenu(){
        if(this.mobileMenuState == 'close') return this.mobileMenuState = 'open'
        this.mobileMenuState = 'close'
      }
    }
  }
</script>

<style lang="css" scoped>
@media screen and (min-width: 830px) {
  .logo-container{
    justify-self: center;
    align-self: center;
  }

  .nav-links-container{
    display: flex;
    gap: 2rem;
    padding: 2rem;
  }

  .nav-links-container > a {
    font-size: 1.5rem;
    color: var(--dark)
  }

  .nav-links-container > a:hover{
    color: var(--accent);
  }
}

#app-footer > a {
  color: var(--white);
  text-decoration: underline;
}

#app-footer{
  min-height: 6rem;
  background-color: var(--dark);
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  flex-direction: column;
  font-size: 1.2rem;
}

#app-navbar{
  z-index: 500;
}
#app-content{
  min-height: 100vh;
}
.app-inner-container{
  min-height: 100vh;
}
.menu.open::before{
  transform: rotate(-45deg);
}
.menu.open::after{
  transform: rotate(45deg);
}

.menu.open::after, .menu.open::before{
  --offset: 2rem;
  content: "";
  position: fixed;
  top: var(--offset);
  right: var(--offset);
  height: 5px;
  width: 30px;
  background-color: var(--white);
  z-index: 2;
  border-radius: 5px;
}

.links-container > a {
  color: var(--white);
  font-size: 2rem;
  font-family: 'Bhavuka';
  width: 100%;
  border-bottom: 2px var(--white) solid;
  padding: .7rem 0;
  border-radius: 2px;
}

.links-container > a:hover{
  background-color: var(--glass);
}

.menu.open > .links-container{
  position: fixed;
  inset: 0;
  background-color: var(--background);
  color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  padding: 5rem 2rem;
}

.menu.open{
  border: none
}

.menu.close{
  height: 5px;
  width: 30px;
  background-color: var(--background);
  position: relative;
  border-radius: 10px;
  border: none;
}

.menu.close::after{
  bottom: -10px;
}

.menu.close::before{
  top: -10px;
}

.menu.close::after, .menu.close::before{
  content: "";
  display: block;
  position: absolute;
  height: 5px;
  width: 30px;
  background-color: var(--background);
  border-radius: 10px;
  border: none;
}

.menu.close > .links-container {
  display: none;
}

.navbar{
  display: flex;
  height: 70px;
  background-color: var(--white);
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  position: fixed;
  inset: 0 0 auto 0;
}

.logo-container img {
  height: 63px;
}

.logotype[data-device = "mobile"]{
  letter-spacing: -10px;
}

</style>