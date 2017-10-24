
const DummyReducer = (state = [], action) => {
  switch (action.type) {
    case 'dummyType':
      return [
        ...state,
        {
          text: action.text,
        }
      ]

    default:
      return state
  }
}

export default DummyReducer;
