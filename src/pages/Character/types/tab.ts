import { TABS } from '../constants/tab';

export type Tab = (typeof TABS)[keyof typeof TABS];
