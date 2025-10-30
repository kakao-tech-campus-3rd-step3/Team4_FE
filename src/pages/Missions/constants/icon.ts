export type MissionTagKey = 'REFRESH' | 'EMPLOYMENT' | 'DAILY';

export const MISSION_TAGS: Array<{ key: MissionTagKey; label: string; icon: string }> = [
  { key: 'REFRESH', label: '리프레시', icon: '⟳' },
  { key: 'EMPLOYMENT', label: '취업', icon: '📂' },
  { key: 'DAILY', label: '일상', icon: '☀️' },
];
