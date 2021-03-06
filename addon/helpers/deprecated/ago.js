import Ember from 'ember';
import helperFactory from '../moment-from-now';

export default function(globalAllowEmpty = false) {
  return function() {
    Ember.deprecate('ember-moment: `ago` helper has been renamed to `moment-from-now`');
    return helperFactory(globalAllowEmpty)(...arguments);
  };
}
