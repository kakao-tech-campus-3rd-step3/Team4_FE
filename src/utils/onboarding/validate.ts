export const validateCatName = (name: string): { isValid: boolean; errorMessage?: string } => {
  if (!name) {
    return { isValid: false, errorMessage: '이름을 입력해주세요' };
  }

  if (name.length > 20) {
    return { isValid: false, errorMessage: '이름은 20자 이하로 입력해주세요' };
  }

  return { isValid: true };
};
