import { styledLog } from '../styledLog';
import chalk from 'chalk';

jest.mock('chalk', () => ({
  blue: jest.fn(() => 'blue'),
  red: jest.fn(() => 'red'),
  green: jest.fn(() => 'green'),
  yellow: jest.fn(() => 'yellow'),
}));

describe('styledLog', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(global.console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
    jest.clearAllMocks();
  });

  it('should log an info message if no style be passed', () => {
    const message = 'Test message';

    styledLog(message);
    expect(chalk.blue).toHaveBeenCalledWith(message);
    expect(chalk.blue).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith(chalk.blue(message));
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should log a success message', () => {
    const message = 'Test message';

    styledLog(message, 'success');
    expect(chalk.green).toHaveBeenCalledWith(message);
    expect(chalk.green).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith(chalk.green(message));
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should log a warning message', () => {
    const message = 'Test message';

    styledLog(message, 'warn');
    expect(chalk.yellow).toHaveBeenCalledWith(message);
    expect(chalk.yellow).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith(chalk.yellow(message));
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should log an error message', () => {
    const message = 'Test message';

    styledLog(message, 'error');
    expect(chalk.red).toHaveBeenCalledWith(message);
    expect(chalk.red).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith(chalk.red(message));
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should log an info message', () => {
    const message = 'Test message';

    styledLog(message, 'info');
    expect(chalk.blue).toHaveBeenCalledWith(message);
    expect(chalk.blue).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith(chalk.blue(message));
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
});
