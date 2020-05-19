import {ActionTree, GetterTree, Module, ModuleTree, MutationTree} from 'vuex';
import {IRootState} from '@/interfaces/IRootState';
import {IExampleState} from '@/interfaces/IExampleState';

const state: IExampleState = {
  example: '',
};

const actions: ActionTree<IExampleState, IRootState> = {
  onResponse({commit}, response: string) {
    commit('setExample', response);
  },
};

const mutations: MutationTree<IExampleState> = {
  setExample(currentState: IExampleState, payload: string) {
    console.log(payload);
    currentState.example = payload;
  },
};

const getters: GetterTree<IExampleState, IRootState> = {
  getExample(currentState: IExampleState) {
    return currentState.example;
  },
};

const namespaced: boolean = true;

export const exampleModelService: Module<IExampleState, IRootState> = {
  namespaced,
  state,
  actions,
  mutations,
  getters,
};
