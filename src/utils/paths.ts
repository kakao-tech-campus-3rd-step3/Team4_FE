export const PATHS = {
  diaryDetail: (id: string) => `/diaries/${id}`,
  diaryFeedback: (id: string) => `/diaries/${id}/feedback`,
  diaryNewStep: (step: string) => `/diaries/new/${step}`,
};
