import { Command } from 'commander';
import { generatePassword, IPasswordOptions } from '../utils/generatePassword';
import { styledLog } from '../utils/styledLog';
import { IGenerateOptions } from './generate.d';
import { generateValidation } from '../utils/validateGenerateCommand';

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

    const passwordLength = parseInt(length, 10);
    if (!generateValidation(passwordLength, options)) return;

    const passwordOptions: IPasswordOptions = {
      useLowercase: true,
      useUppercase: options.uppercase,
      useNumbers: options.numbers,
      useSymbols: options.symbols,
    };

    const password = generatePassword(passwordLength, passwordOptions);
    if (password !== '') styledLog(password, 'success');
  });
