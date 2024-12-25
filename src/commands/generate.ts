import { Command } from 'commander';
import { generatePassword } from '../utils/password';
import chalk from 'chalk';

export const generateCommand = new Command('generate')
  .description('Gera uma senha forte baseada no número de caracteres')
  .argument('<length>', 'Quantidade de caracteres para a senha (ex: 12)')
  .action((length: string) => {
    const lengthAsNumber = parseInt(length, 10);

    if (isNaN(lengthAsNumber) || lengthAsNumber <= 0) {
      console.error(chalk.red('Por favor, forneça um número válido maior que 0.'));
      return;
    }

    const password = generatePassword(lengthAsNumber);
    console.log(chalk.green(`Sua senha gerada é: ${password}`));
  });
