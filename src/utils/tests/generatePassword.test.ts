import { generatePassword } from '../generatePassword';
import { styledLog } from '../styledLog';

jest.mock('../styledLog');

describe('generatePassword', () => {
  const mockStyledLog = styledLog as jest.MockedFunction<typeof styledLog>;

  beforeEach(() => {
    mockStyledLog.mockClear();
  });

  it('should generate a password of the specified length', () => {
    const password = generatePassword(10, { useLowercase: true });
    expect(password).toHaveLength(10);
  });

  it('should include lowercase characters if specified', () => {
    const password = generatePassword(10, { useLowercase: true });
    expect(password).toMatch(/[a-z]/);
  });

  it('should include uppercase characters if specified', () => {
    const password = generatePassword(10, { useUppercase: true });
    expect(password).toMatch(/[A-Z]/);
  });

  it('should include numbers if specified', () => {
    const password = generatePassword(10, { useNumbers: true });
    expect(password).toMatch(/[0-9]/);
  });

  it('should include symbols if specified', () => {
    const password = generatePassword(10, { useSymbols: true });
    expect(password).toMatch(/[!@#\$%\^&*\(\)-_=\+\[\]\{\}\|;:,.<>\?]/g);
  });

  it('should show error message and return empty string if no character types are specified', () => {
    const passwordEmptyCharTypes = generatePassword(10, {});
    expect(passwordEmptyCharTypes).toBe('');
    expect(mockStyledLog).toHaveBeenCalledTimes(1);
    expect(mockStyledLog).toHaveBeenCalledWith(
      'Por favor, forneça ao menos um tipo de caractere para a senha.',
      'error'
    );

    mockStyledLog.mockClear();

    const passwordNoCharTypes = generatePassword(10);
    expect(passwordNoCharTypes).toBe('');
    expect(mockStyledLog).toHaveBeenCalledTimes(1);
    expect(mockStyledLog).toHaveBeenCalledWith(
      'Por favor, forneça ao menos um tipo de caractere para a senha.',
      'error'
    );
  });
});
