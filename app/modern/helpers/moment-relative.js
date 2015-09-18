import Ember from 'ember';
import config from '../config/environment';
import Helper from 'ember-moment/helpers/moment-relative';

export default Helper.extend({
  globalAllowEmpty: !!Ember.get(config, 'moment.allowEmpty')
});
