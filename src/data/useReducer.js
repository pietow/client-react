export default function reducer(state, action) {
    switch (action.type) {
      case 'saved_data': {
        return {
          name: action.nextName,
          nextName: '',
          age: action.nextAge,
          nextAge: '',
          bio: action.nextBio,
          nextBio: ''
        }
      }
      case 'changed_name': {
        return {
          name: state.name,
          nextName: action.nextName,
          age: state.age,
          nextAge: state.nextAge,
          bio: state.bio,
          nextBio: state.nextBio
        }
      }
      case 'changed_age': {
        return {
          name: state.name,
          nextName: state.nextName,
          age: state.age,
          nextAge: action.nextAge,
          bio: state.bio,
          nextBio: state.nextBio
        }
      }
    
      case 'changed_bio': {
        return {
          name: state.name,
          nextName: state.nextName,
          age: state.age,
          nextAge: state.nextAge,
          bio: state.bio,
          nextBio: action.nextBio
        }
      }
    }
    throw Error('Unknown action: ' + action.type);
  }