import { EntityPropertyDefinition } from './EntityPropertyDefinition';

export type EntityDefinition<TEntityNames = string> = {
  name: TEntityNames;
  properties: EntityPropertyDefinition[];
};
