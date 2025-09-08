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

export interface SelectedItem extends Item {
  offsetX: number;
  offsetY: number;
  isUsed: boolean;
}

type ItemCategory = 'HAT';
