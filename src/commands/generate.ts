import { Command } from 'commander';
import { generatePassword } from '../utils/generatePassword';
import { styledLog } from '../utils/styledLog';

const generateCommand = new Command('generate')
  .description('Gera uma senha forte baseada no número de caracteres')
  .option('-l, --length <number>', 'Quantidade de caracteres para a senha')
  .action((options) => {
    if (options.length) {
      const lengthAsNumber = parseInt(options.length, 10);

      if (isNaN(lengthAsNumber) || lengthAsNumber <= 0) {
        styledLog('Por favor, forneça um número válido maior que 0.', 'error');
        return;
      }

      const password = generatePassword(lengthAsNumber);
      styledLog(`Sua senha gerada é:\n ${password}`, 'success');
    } else
      styledLog('Por favor, forneça um número de caracteres para a senha.', 'warn');
  });

export { generateCommand };
