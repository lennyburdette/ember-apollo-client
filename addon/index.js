import ComponentQueryManager from 'ember-apollo-client/mixins/component-query-manager';
import ObjectQueryManager from 'ember-apollo-client/mixins/object-query-manager';
import RouteQueryManager from 'ember-apollo-client/mixins/route-query-manager';

export function getObservable(queryResult) {
  return queryResult._apolloObservable;
}

export let apolloObservableKey = '_apolloObservable';

export { ComponentQueryManager, ObjectQueryManager, RouteQueryManager };
