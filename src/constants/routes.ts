export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  OAUTH_REDIRECT: '/oauth-redirect',

  ONBOARDING: '/onboarding',
  ONBOARDING_TEST: 'test',
  ONBOARDING_STEP: ':step',
  ONBOARDING_STEP_RESULT: 'result',
  ONBOARDING_STEP_INTRO: 'intro',
  ONBOARDING_STEP_NAME: 'name',
  ONBOARDING_STEP_START: 'start',

  CHARACTER: '/character',
  CHARACTER_CHAT: 'chat',

  DIARIES: '/diaries',
  DIARIES_NEW: 'new',
  DIARIES_NEW_STEP: ':step',
  DIARIES_NEW_WRITE: 'write',
  DIARIES_DETAIL: ':id',
  DIARIES_FEEDBACK: ':id/feedback',

  MISSIONS: '/missions',
  NOT_FOUND: '*',
} as const;

export const BASE_URL = import.meta.env.BASE_URL;
