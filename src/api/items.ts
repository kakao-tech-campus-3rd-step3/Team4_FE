import { http } from '@/lib/http';
import type { OwnedItem, StoreItem } from './types';

interface StoreItemsResponse {
  content: StoreItem[];
  last: boolean;
  number: number;
}

export const ItemsAPI = {
  listStore: async ({ pageParam = 1 }: { pageParam?: number }) => {
    const res = await http.get<StoreItemsResponse>('/api/items', {
      params: { page: pageParam, category: 'HAT' },
    });
    return res.data;
  },
  buy: async (itemId: number) => {
    return http.post<StoreItem>(`/api/items/${itemId}`).then((r) => r.data);
  },
  listOwned: async () => {
    return http.get<OwnedItem[]>('/api/me/items').then((r) => r.data);
  },
  equip: async (itemId: number, payload: { isUsed: boolean }) => {
    return http.patch<OwnedItem>(`/api/me/items/${itemId}`, payload).then((r) => r.data);
  },
};
