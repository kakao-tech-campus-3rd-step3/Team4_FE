export type MissionTagKey = 'refresh' | 'job' | 'daily';

export const MISSION_TAGS: Array<{ key: MissionTagKey; label: string; icon: string }> = [
  { key: 'refresh', label: '리프레시', icon: '⟳' },
  { key: 'job', label: '취업', icon: '📂' },
  { key: 'daily', label: '일상', icon: '☀️' },
];
