import Vue from "vue";
import Vuex from 'vuex';
import router from './router';



import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

import App from './App.vue';



Vue.use(Vuex);
const store=new Vuex.Store({
    state:{
            mapList: {},
    },
    mutations:{
        GETALL(state, payload) {
            state.mapList = payload
          
             },
        UPDATEUSER(state,payload){
            for(let i =0;i<Object.keys(state.mapList.results).length;i++){
                if (state.mapList.results[i].id == payload.id){
                    Object.assign(state.mapList.results[i],{...payload})
                }
            }
            

        }
    },
    actions:{
        GETALL({ commit }, payload) {
            Vue.axios.get('/users',{
                params: {
                    page: payload.currentPage || 1,
                    pagesize: payload.pagesize || 10,
                    sortby: payload.sortby || "mobile",
                    sortdirection: payload.sortdirection || 1,
                   
                }
            }).then(res => {
                commit('GETALL', res.data)
  
            });
        },
        UPDATEUSER({commit},payload){
            Vue.axios.patch('/users/' + payload.id,{
                params:{
                    email:payload.email,
                    mobile:payload.mobile,
                    name:payload.name,
                    provicen:payload.provicen,
                    id:payload.id
                }
            }).then(res=>{
                commit("UPDATEUSER",res.data.results)
               
            })
        },
        DELUSER({commit},payload){
            Vue.axios.delete('/users/'+payload)
        }
    }
})

var vm=new Vue({
    el:"#app",
    store,
    router,
    render: h => h(App)
})
window.router = router