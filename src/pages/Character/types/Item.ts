export interface Item {
  id: number;
  category: ItemCategory;
  name: string;
  price: number;
  imageUrl: string;
}

export interface StoreItem extends Item {
  isOwned: boolean;
}

export interface OwnedItem extends Item {
  offsetX: number;
  offsetY: number;
  isUsed: boolean;
}

export type SelectedItem = OwnedItem;

type ItemCategory = 'HAT';
