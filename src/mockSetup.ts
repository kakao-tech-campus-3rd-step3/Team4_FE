let mocks: any = null;

if (import.meta.env.VITE_ENABLE_MOCK === '1') {
  mocks = await import('../mocks/data/characterStoreItemsMock');
}

export default mocks;
