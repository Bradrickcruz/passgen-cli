import chalk from 'chalk';

type Style = 'info' | 'success' | 'warn' | 'error';

export const styledLog = (message: string, style: Style = 'info'): void => {
  const styles = {
    info: chalk.blue,
    success: chalk.green,
    warn: chalk.yellow,
    error: chalk.red,
  };

  console.log(styles[style](message));
};
