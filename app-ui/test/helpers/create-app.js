

export default function createApp (services, scope) {

  return {

    scope: {
      
      $watch (property, callback) {

        callback();

      },

      $apply: callback => callback()

    },

    directive (name, directiveArr) {
      
      const config = directiveArr[directiveArr.length - 1];
      const link = config.apply(this, services).link;

      this.scope = Object.assign({}, scope, this.scope);

      link(this.scope);

    }

  };

}