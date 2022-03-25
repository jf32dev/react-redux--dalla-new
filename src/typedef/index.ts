import { OpenEntityParams } from '../services/bridge/type/params';

export type EntityType = OpenEntityParams['entityName'];

export enum EHubPlatform {
  IOS = 'Hub for iOS',
  WINDOWS = 'Hub for Windows',
}

export type ActionsContents = {
  id: number;
  entityId: number;
  entityType: EntityType;
  title: string;
  img: string;
};
