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
};

export default testModel;
