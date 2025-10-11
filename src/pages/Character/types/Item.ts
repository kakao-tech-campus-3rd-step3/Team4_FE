import type { ITEMS_CATEGORY } from '@/constants/api';

export interface Item {
  id: number;
  category: ItemCategory;
  name: string;
  imageUrl: string;
}

export interface StoreItem extends Item {
  isOwned: boolean;
  price: number;
}

export interface OwnedItem extends Item {
  offsetX: number;
  offsetY: number;
  isUsed: boolean;
}

export type SelectedItem = OwnedItem;

type ItemCategory = (typeof ITEMS_CATEGORY)[keyof typeof ITEMS_CATEGORY];
