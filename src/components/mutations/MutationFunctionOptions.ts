import {
  Context,
  OperationVariables,
  RefetchQueriesFunction,
} from '@apollo/react-common/lib/types/types';
import { MutationUpdaterFn, PureQueryOptions, WatchQueryFetchPolicy } from 'apollo-client';

export interface MutationFunctionOptions<TData = any, TVariables = OperationVariables> {
  variables?: TVariables;
  optimisticResponse?: TData | ((vars: TVariables | {}) => TData);
  refetchQueries?: Array<string | PureQueryOptions> | RefetchQueriesFunction;
  awaitRefetchQueries?: boolean;
  update?: MutationUpdaterFn<TData>;
  context?: Context;
  fetchPolicy?: WatchQueryFetchPolicy;
}
