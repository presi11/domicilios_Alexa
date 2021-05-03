import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext} from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { Auth0Plugin, getInstance} from "./auth";
// Import the Auth0 configuration
import { domain, clientId, audience } from "../auth_config.json";
import { from } from 'apollo-link'
import * as mdb from 'mdb-ui-kit'; // lib

Vue.use(mdb);
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
const getHeaders = async () => {
  const headers = {};
  const authService = getInstance();

  const getToken = async () => {
    if (authService.isAuthenticated) {
      const token = await authService.getTokenSilently();
      headers.authorization = token ? `Bearer ${token}` : '';
      const result = token ? `Bearer ${token}` : '';
      return result;
    }
  };

  // If loading has already finished, check our auth state using getToken()
  if (!authService.loading) {
      return getToken();
  }

  // Watch for the loading property to change before we check isAuthenticated
  authService.$watch('loading', loading => {
      if (loading === false) {
          return getToken();
      }
  });
};

const authMiddleware = setContext(() =>
  getHeaders().then(token => {
      return {
          headers: {
              authorization: token || null,
          },
      };
  })
);

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://domivo.herokuapp.com/graphql',
  
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link:  from([authMiddleware, httpLink]),
  cache,
})

//Install the plugin into Vue
Vue.use(VueApollo);
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
