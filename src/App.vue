<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link to="/"
          ><a class="navbar-brand" href="#">Hermes</a></router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/about"
                ><a class="nav-link">Acerca de</a></router-link
              >
            </li>
            <li class="nav-item">
              <router-link v-if="$auth.isAuthenticated" to="/profile"
                ><a class="nav-link">Perfil</a></router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/external-api"
                ><a class="nav-link">Pedidos</a></router-link
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" v-if="!$auth.isAuthenticated" @click="login"
                >Iniciar sesión</a
              >
              <a class="nav-link" v-if="$auth.isAuthenticated" @click="logout"
                >Cerrar sesión</a
              >
            </li>
          </ul>

          <ul class="navbar-nav d-flex flex-row">
            <!-- Icons -->
            <li class="nav-item me-3 me-lg-0">
              <a
                class="nav-link"
                href="https://github.com/presi11/domicilios_alexa"
                target="_blank"
              >
                <i class="fab fa-github"></i>
              </a>
            </li>
            <!-- Icon dropdown -->
            <li class="nav-item me-3 me-lg-0 dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fas fa-user"></i>
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end dropdown-menu-lg-end"
                aria-labelledby="navbarDropdown"
              >
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li>
                  <a class="dropdown-item" href="#">Another action</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>
<script>
// .. imports removed for brevity

export default {
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
  },
};
</script>
<style lang="scss">
@import '~mdb-ui-kit/css/mdb.min.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
