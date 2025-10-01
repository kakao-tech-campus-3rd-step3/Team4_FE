const mocks: any = {
  data: {
    characterStoreItemsMock: null,
    isOwnedItemsMock: null,
    missionsMock: null,
    onboardingTestMock: null,
  },
};

if (import.meta.env.VITE_ENABLE_MOCK === '1') {
  const characterStoreItemsMock = await import('../mocks/data/characterStoreItemsMock');
  const isOwnedItemsMock = await import('../mocks/data/isOwnedItemsMock');
  const missionsMock = await import('../mocks/data/missionsMock');
  const onboardingTestMock = await import('../mocks/data/onboardingTestMock');
  mocks.data.characterStoreItemsMock = characterStoreItemsMock.characterStoreItemsMock;
  mocks.data.isOwnedItemsMock = isOwnedItemsMock.isOwnedItemsMock;
  mocks.data.missionsMock = missionsMock.missionsMock;
  mocks.data.onboardingTestMock = onboardingTestMock.onboardingTestMock;
}

export default mocks;
