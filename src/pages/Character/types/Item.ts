export interface Item {
  id: number;
  category: ItemCategory;
  name: string;
  price: number;
  imageUrl: string;
  isOwned: boolean;
}

type ItemCategory = 'HAT';
