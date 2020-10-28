require('./bootstrap');

import router from "./routes";
import VueRouter from "vue-router";
import Index from "./Index";
import moment from "moment";
import Vuex from "vuex";
import StarRating from "./shared/components/StarRating"
import FatalError from "./shared/components/FatalError"
import ValidationErrors from "./shared/components/ValidationErrors"
import Success from "./shared/components/Success"
import storeDefinition from "./store"


window.Vue = require('vue');
Vue.use(VueRouter);
Vue.use(Vuex);

Vue.filter("fromNow", value => moment(value).fromNow());

Vue.component("star-rating", StarRating);
Vue.component("fatal-error", FatalError);
Vue.component("v-errors", ValidationErrors);
Vue.component("success", Success);

const store = new Vuex.Store(storeDefinition);

window.axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if(401 === error.response.status) {
            store.dispatch("logout");
        }
        return Promise.reject(error);
    }
);

const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
        "index": Index
    },
    async beforeCreate() {
        this.$store.dispatch("loadStoredState");
        this.$store.dispatch("loadUser");
    },
});
