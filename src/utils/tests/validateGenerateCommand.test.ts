import { generateValidation } from '../validateGenerateCommand';
import { styledLog } from '../styledLog';
import { IGenerateOptions } from '../../commands/generate.d';
import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH } from '../../constants';

jest.mock('../styledLog');

describe('generateValidation', () => {
  const mockStyledLog = styledLog as jest.MockedFunction<typeof styledLog>;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return false and log an error message if length is zero or lesser', () => {
    const mockOptions: IGenerateOptions = {
      numbers: true,
      symbols: true,
      uppercase: true,
    };

    const resultZero = generateValidation(0, mockOptions);
    expect(resultZero).toBe(false);
    expect(mockStyledLog).toHaveBeenCalledWith(
      'Por favor, forneça um número válido maior que 0.',
      'error'
    );

    const resultNegative = generateValidation(-1, mockOptions);
    expect(resultNegative).toBe(false);
    expect(mockStyledLog).toHaveBeenCalledWith(
      'Por favor, forneça um número válido maior que 0.',
      'error'
    );
  });

  it('should return false and log an error message if length is less than MIN_PASSWORD_LENGTH', () => {
    const options: IGenerateOptions = {
      numbers: true,
      symbols: true,
      uppercase: true,
    };

    const result = generateValidation(MIN_PASSWORD_LENGTH - 1, options);
    expect(result).toBe(false);
    expect(mockStyledLog).toHaveBeenCalledWith(
      `Por favor, forneça um número entre ${MIN_PASSWORD_LENGTH} e ${MAX_PASSWORD_LENGTH}`,
      'error'
    );
  });

  it('should return false and log an error message if length is greater than MAX_PASSWORD_LENGTH', () => {
    const options: IGenerateOptions = {
      numbers: true,
      symbols: true,
      uppercase: true,
    };

    const result = generateValidation(MAX_PASSWORD_LENGTH + 1, options);
    expect(result).toBe(false);
    expect(mockStyledLog).toHaveBeenCalledWith(
      `Por favor, forneça um número entre ${MIN_PASSWORD_LENGTH} e ${MAX_PASSWORD_LENGTH}`,
      'error'
    );
  });

  it('should return true if all validations pass', () => {
    const options: IGenerateOptions = {
      numbers: true,
      uppercase: true,
      symbols: true,
    };

    const result = generateValidation(20, options);
    expect(result).toBe(true);
    expect(mockStyledLog).not.toHaveBeenCalled();
  });
});
