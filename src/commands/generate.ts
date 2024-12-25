import { Command } from 'commander';
import { generatePassword, IPasswordOptions } from '../utils/generatePassword';
import { styledLog } from '../utils/styledLog';

const generateCommand = new Command('generate')
  .description('Gera uma senha forte baseada no número de caracteres')
  .argument('<length>', 'Quantidade de caracteres para a senha')
  .option('-nn, --no-numbers', 'Remove números da senha')
  .option('-ns, --no-symbols', 'Remove símbolos da senha')
  .option('-nu, --no-uppercase', 'Remove letras maiúsculas da senha')
  .action((length, options) => {
    if (length) {
      const passwordLength = parseInt(length, 10);
      const passwordOptions: IPasswordOptions = {
        useLowercase: true,
        useUppercase: options.uppercase,
        useNumbers: options.numbers,
        useSymbols: options.symbols,
      };

      if (isNaN(passwordLength) || passwordLength <= 0) {
        styledLog('Por favor, forneça um número válido maior que 0.', 'error');
        return;
      }

      const password = generatePassword(passwordLength, passwordOptions);
      if (password !== '')
        styledLog(`Sua senha gerada é:\n ${password}`, 'success');
    } else
      styledLog(
        'Por favor, forneça um número de caracteres para a senha.',
        'warn'
      );
  });

export { generateCommand };
