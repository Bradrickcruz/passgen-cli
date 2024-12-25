import { styledLog } from './styledLog';

export interface IPasswordOptions {
  useLowercase?: boolean;
  useUppercase?: boolean;
  useNumbers?: boolean;
  useSymbols?: boolean;
}

export const generatePassword = (
  length: number,
  options: IPasswordOptions = {}
): string => {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const symbolChars = '!@#%^*()-_=+[]{}|;:,.<>?';

  let characters = '';
  if (options?.useLowercase) characters += lowercaseChars;
  if (options?.useUppercase) characters += uppercaseChars;
  if (options?.useNumbers) characters += numberChars;
  if (options?.useSymbols) characters += symbolChars;

  if (characters.length === 0) {
    styledLog(
      'Por favor, forneça ao menos um tipo de caractere para a senha.',
      'error'
    );
    return '';
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
};
