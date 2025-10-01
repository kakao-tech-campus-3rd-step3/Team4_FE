export type CategoryEnum = 'REFRESH' | 'EMPLOYMENT' | 'DAILY';
export type EmotionEnum = 'EXCELLENT' | 'GOOD' | 'SOSO' | 'BAD' | 'TERRIBLE';
export type ItemCategoryEnum = 'HAT';

export type Mission = {
  id: number;
  content: string;
  category: CategoryEnum;
};

export type Plan = {
  id: number;
  content: string;
  category: CategoryEnum;
};

export type Diary = {
  emotion: EmotionEnum;
  content: string;
  feedback: string;
  createdAt: string;
};

export type StoreItem = {
  id: number;
  category: ItemCategoryEnum;
  name: string;
  price: number;
  imageUrl: string;
  isOwned: boolean;
};

export type OwnedItem = {
  id: number;
  category: ItemCategoryEnum;
  name: string;
  imageUrl: string;
  offsetX: number;
  offsetY: number;
  isUsed: boolean;
};

export type Cat = {
  name: string;
  equipped: {
    imageUrl: string;
    offsetX: number;
    offsetY: number;
  };
};

export type OnboardingTest = {
  id: number;
  question: string;
  answers: string[];
  imageUrl: string;
};

export type AnswerType = {
  questionId: number;
  choiceIndex: number;
};

export type LoginRes = { accessToken: string; refreshToken: string };
