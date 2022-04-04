export default function reducer(state, action) {
    switch (action.type) {
      case 'saved_name': {
        return {
          name: action.payload,
          nextName: ''
        };
      }
      case 'changed_target_value': {
        return {
          name: state.name,
          nextName: action.payload
        }
      }
    }
    throw Error('Unknown action: ' + action.type);
  }