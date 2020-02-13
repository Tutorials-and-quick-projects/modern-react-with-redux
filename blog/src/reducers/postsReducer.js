// reducers are 'pure'. Only looks at previous state value and action to decide whata to return. Don't make api call, dont reach into DOM, etc.
// must not mutate first state argument (ie dont change object values manually)
// strings and numbers are immutable. cannot name[0] = 'x'
// can actually mutate state, but want to return a new state object
export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  }
};
