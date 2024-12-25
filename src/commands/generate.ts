import { Command } from 'commander';
import { generatePassword, IPasswordOptions } from '../utils/generatePassword';
import { styledLog } from '../utils/styledLog';

interface IGenerateOptions {
  numbers: boolean;
  symbols: boolean;
  uppercase: boolean;
}

export const generateCommand = new Command('generate')
  .description('Gera uma senha forte baseada no número de caracteres')
  .argument('<length>', 'Quantidade de caracteres para a senha')
  .option('-nn, --no-numbers', 'Remove números da senha')
  .option('-ns, --no-symbols', 'Remove símbolos da senha')
  .option('-nu, --no-uppercase', 'Remove letras maiúsculas da senha')
  .action((length: string, options: IGenerateOptions) => {
    if (!length) {
      styledLog(
        'Por favor, forneça um número de caracteres para a senha.',
        'warn'
      );
      return;
    }

    if (!generateValidation(length, options)) return;

    const passwordLength = parseInt(length, 10);
    const passwordOptions: IPasswordOptions = {
      useLowercase: true,
      useUppercase: options.uppercase,
      useNumbers: options.numbers,
      useSymbols: options.symbols,
    };

    const password = generatePassword(passwordLength, passwordOptions);
    if (password !== '')
      styledLog(`Sua senha gerada é:\n ${password}`, 'success');
  });

const generateValidation = (
  length: string,
  options: IGenerateOptions
): boolean => {
  const MIN_PASSWORD_LENGTH = 16;
  const MAX_PASSWORD_LENGTH = 256;

  if (!length) {
    styledLog(
      'Por favor, forneça um número de caracteres para a senha.',
      'error'
    );
    return false;
  }

  const passwordLength = parseInt(length, 10);
  if (isNaN(passwordLength) || passwordLength <= 0) {
    styledLog('Por favor, forneça um número válido maior que 0.', 'error');
    return false;
  }

  if (
    passwordLength < MIN_PASSWORD_LENGTH ||
    passwordLength > MAX_PASSWORD_LENGTH
  ) {
    styledLog(
      `Por favor, forneça um número entre ${MIN_PASSWORD_LENGTH} e ${MAX_PASSWORD_LENGTH}`,
      'error'
    );
    return false;
  }

  return true;
};
