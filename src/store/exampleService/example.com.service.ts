import {ActionTree} from 'vuex';
import axios, {AxiosResponse} from 'axios';
import {Module} from 'vuex';
import {IExampleState} from '@/interfaces/IExampleState';
import {IRootState} from '@/interfaces/IRootState';

const proxyCORS = 'https://cors-anywhere.herokuapp.com/';

const actions: ActionTree<IExampleState, IRootState> = {
  loadResponse({dispatch}, question: string) {
    axios({
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      url: `${proxyCORS}https://openwhyd.org/${question}?format=json`,
    }).then((response: AxiosResponse) => {
      const videoId = response.data[0].eId.replace('/yt/', '');
      dispatch('exampleModelService/onResponse', videoId, {root: true});
    });
  },
};

const namespaced: boolean = true;

export const exampleComService: Module<IExampleState, IRootState> = {
  namespaced,
  actions,
};

