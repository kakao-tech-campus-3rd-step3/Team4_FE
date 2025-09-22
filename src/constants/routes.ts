export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  ONBOARDING: '/onboarding',
  ONBOARDING_TEST: 'test',
  ONBOARDING_STEP: ':step',

  CHARACTER: '/character',
  CHARACTER_CHAT: 'chat',

  DIARIES: '/diaries',
  DIARIES_NEW: 'new',
  DIARIES_NEW_STEP: ':step',
  DIARIES_DETAIL: ':id',
  DIARIES_FEEDBACK: ':id/feedback',

  MISSIONS: '/missions',
  NOT_FOUND: '*',
} as const;

export const BASE_URL = import.meta.env.BASE_URL;
