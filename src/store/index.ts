import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import {IRootState} from '@/interfaces/IRootState';
import {exampleComService} from '@/store/exampleService/example.com.service';
import {exampleModelService} from '@/store/exampleService/example.model.service';


Vue.use(Vuex);

const store: StoreOptions<IRootState> = {
  modules: {
    exampleComService,
    exampleModelService,
  },
};

export default new Vuex.Store<IRootState>(store);
