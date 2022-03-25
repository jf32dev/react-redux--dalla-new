import LEARNING from '../assets/images/learning.svg';
import ANNOUNCEMENTS from '../assets/images/announcements.svg';
import HR from '../assets/images/hr.svg';
import TECH from '../assets/images/tech.svg';
import EVENTS from '../assets/images/events.svg';
import NDB_CARES from '../assets/images/ndb-cares.svg';

export const MAIN_ACTIONS = [
  {
    id: 1,
    entityId: 652232,
    entityType: 'tab',
    title: 'Learning & Development',
    img: LEARNING,
  },
  {
    id: 2,
    entityId: 541084,
    entityType: 'channel',
    title: 'Announcements',
    img: ANNOUNCEMENTS,
  },
  {
    id: 3,
    entityId: 429564,
    entityType: 'tab',
    title: 'Human Resources',
    img: HR,
  },
  {
    id: 4,
    entityId: 393468,
    entityType: 'channel',
    title: 'Tech Corner',
    img: TECH,
  },
  {
    id: 5,
    entityId: 384281,
    entityType: 'tab',
    title: 'Events',
    img: EVENTS,
  },
  {
    id: 6,
    entityId: 377814,
    entityType: 'tab',
    title: 'NDB Cares',
    img: NDB_CARES,
  },
] as const;

export const CHANNEL_ID = 468830;
export const STORY_ID = 1057316769;
