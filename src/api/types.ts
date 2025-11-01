import type { ITEMS_CATEGORY } from '@/constants/api';
import type { IconType } from 'react-icons';

export type CategoryEnum = 'REFRESH' | 'EMPLOYMENT' | 'DAILY';

export type EmotionEnum = 'EXCELLENT' | 'GOOD' | 'SOSO' | 'BAD' | 'TERRIBLE' | 'NONE';

export type Emotion = {
  key: EmotionEnum;
  label: string;
  icon: IconType;
};

export type ItemCategoryEnum = (typeof ITEMS_CATEGORY)[keyof typeof ITEMS_CATEGORY];

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
  id: number;
  emotion: EmotionEnum;
  content: string;
  feedback: string;
  createdAt: string;
};

export type MonthlyDiary = {
  id: number;
  emotion: EmotionEnum;
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

// 이전 채팅 불러오기
export type ChatLog = {
  chatId: number;
  role: 'user' | 'assistant';
  message: string;
  reply: string;
  createdAt: string;
};

// 채팅 히스토리 페이지 응답
export type ChatHistoryPage = {
  content: ChatLog[];
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
};

// 채팅 응답
export type ChatResponse = {
  message: string;
};

export type CatExist = {
  exist: boolean;
};
