import { http } from '@/lib/http';
import type { OwnedItem, StoreItem } from './types';

export const ItemsAPI = {
  listStore(page = 1, size = 20, category?: string) {
    return http
      .get<StoreItem>('/api/items', { params: { page, size, category } })
      .then((r) => r.data);
  },
  buy(itemId: string) {
    return http.post<StoreItem>(`/api/items/${itemId}`).then((r) => r.data);
  },
  listOwned(page = 1, size = 20) {
    return http.get<OwnedItem>('/api/me/items', { params: { page, size } }).then((r) => r.data);
  },
  equip(itemId: string, payload: { equipped: boolean }) {
    return http.patch<OwnedItem>(`/api/me/items/${itemId}`, payload).then((r) => r.data);
  },
};
