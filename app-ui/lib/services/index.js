

import people from './people';
import otherPeople from './other-people';
import navigation from './navigation';
import schemas from './schemas';


export default (base) => ({

  people: people(base),
  otherPeople: otherPeople(base),
  navigation: navigation(base),
  schemas: schemas(base)

});