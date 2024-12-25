import { Command } from 'commander';
import { generatePassword } from '../utils/generatePassword';
import chalk from 'chalk';

const generateCommand = new Command('generate')
  .description('Gera uma senha forte baseada no número de caracteres')
  .option('-l, --length <number>', 'Quantidade de caracteres para a senha')
  .action((options) => {
    if (options.length) {
      const lengthAsNumber = parseInt(options.length, 10);

      if (isNaN(lengthAsNumber) || lengthAsNumber <= 0) {
        console.error(
          chalk.red('Por favor, forneça um número válido maior que 0.')
        );
        return;
      }

      const password = generatePassword(lengthAsNumber);
      console.log(chalk.green(`Sua senha gerada é: ${password}`));
    } else {
      console.log(
        chalk.yellow(
          'Use "psg generate -l <length>" ou "-l <length>" para gerar uma senha.'
        )
      );
    }
  });

export { generateCommand };
