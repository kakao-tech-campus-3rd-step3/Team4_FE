const mocks: any = {
  data: {
    characterStoreItemsMock: null,
    isOwnedItemsMock: null,
  },
};

if (import.meta.env.VITE_ENABLE_MOCK === '1') {
  const characterStoreItemsMock = await import('../mocks/data/characterStoreItemsMock');
  const isOwnedItemsMock = await import('../mocks/data/isOwnedItemsMock');
  mocks.data.characterStoreItemsMock = characterStoreItemsMock.characterStoreItemsMock;
  mocks.data.isOwnedItemsMock = isOwnedItemsMock.isOwnedItemsMock;
}

export default mocks;
