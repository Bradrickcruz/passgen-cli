import chalk from 'chalk';

export type StyleType = 'info' | 'success' | 'warn' | 'error';

export const styledLog = (message: string, style: StyleType = 'info'): void => {
  const styles = {
    info: chalk.blue,
    success: chalk.green,
    warn: chalk.yellow,
    error: chalk.red,
  };

  console.log(styles[style](message));
};
