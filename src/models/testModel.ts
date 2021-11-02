const testModel = {
  namespace: 'testModel',
  state: {
    count: 0,
  },
  reducers: {
    change: (state: any) => {
      state.count++;
      return state;
    },
  },
  effects: {},
};

export default testModel;
