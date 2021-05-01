import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'


// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://domivo.herokuapp.com/graphql',
})

// Cache implementation
const cache = new InMemoryCache()


// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
  request: operation =>{
    operation.setContext(context => ({
      headers: {
        ...context.headers,
        authorization: `Bearer ${$auth.getTokenSilently()}`,
      }
    })
    )
  }
})



// Import the Auth0 configuration
import { domain, clientId, audience } from "../auth_config.json";

// Import the plugin here
import { Auth0Plugin } from "./auth";
//Install the plugin into Vue
Vue.use(VueApollo);
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  audience,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
