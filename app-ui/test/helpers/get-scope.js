

import createApp from './create-app';


export default function getScope (component, store, services, scope) {

  const app = createApp(services, scope);

  component(app, store);

  return app.scope;

}