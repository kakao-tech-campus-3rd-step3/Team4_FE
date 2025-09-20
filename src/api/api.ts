import type { OwnedItem, StoreItem } from '@/pages/Character/types/Item';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

interface StoreItemsResponse {
  content: StoreItem[];
  last: boolean;
  number: number;
}

const getAuthHeaders = () => ({
  Authorization: `Bearer ${API_TOKEN}`,
  'Content-Type': 'application/json',
});

export const fetchStoreItems = async ({
  pageParam = 1,
}: {
  pageParam?: number;
}): Promise<StoreItemsResponse> => {
  const response = await fetch(`${BASE_URL}/api/items?page=${pageParam}&category=HAT`, {
    method: 'GET',
    headers: getAuthHeaders(),
  });

  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!response.ok) {
    throw new Error('스토어 아이템을 불러오는데 실패했습니다.');
  }

  return await response.json();
};

export const fetchOwnedItems = async (): Promise<OwnedItem[]> => {
  const response = await fetch(`${BASE_URL}/api/me/items`, {
    method: 'GET',
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error('보유 아이템을 불러오는데 실패했습니다.');
  }

  return response.json();
};

export const purchaseItem = async (itemId: number): Promise<void> => {
  const response = await fetch(`${BASE_URL}/api/items/${itemId}`, {
    method: 'POST',
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error('아이템 구매에 실패했습니다.');
  }
};

export const updateItemUsage = async (itemId: number, isUsed: boolean): Promise<void> => {
  const response = await fetch(`${BASE_URL}/api/me/items/${itemId}`, {
    method: 'PATCH',
    headers: getAuthHeaders(),
    body: JSON.stringify({ isUsed }),
  });

  if (!response.ok) {
    throw new Error('아이템 상태 변경에 실패했습니다.');
  }
};
