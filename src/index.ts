#! /usr/bin/env node

import { Command } from 'commander';
import { generateCommand } from "./commands/generate";

const program = new Command();

program
  .name('psg: PassGen CLI')
  .description('Gerador de senhas fortes')
  .version('1.0.0')

program.addCommand(generateCommand, { isDefault: true });

program.parse(process.argv);
