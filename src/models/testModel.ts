import login from '@/services/login';

const testModel = {
  namespace: 'testModel',
  state: {
    count: 0,
  },
  reducers: {
    change: (state: { count: number }) => {
      state.count++;
      return state;
    },
  },
  effects: {
    *getToken({ payload }, { call }) {
      console.log('haha I am Work', payload);
      const { access_token } = yield call(login, payload);
      // localStorage.setItem('Token',"test-Token")
    },
  },
};

export default testModel;
