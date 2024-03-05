export const isValidEmail = (email: string) => {
  // Biểu thức chính quy kiểm tra định dạng của email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
