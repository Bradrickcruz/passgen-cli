import { IGenerateOptions } from '../commands/generate.d';
import { styledLog } from './styledLog';
import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH } from '../constants';

export const generateValidation = (
  length: number,
  options: IGenerateOptions
): boolean => {
  if (!length) {
    styledLog(
      'Por favor, forneça um número de caracteres para a senha.',
      'error'
    );
    return false;
  }

  if (isNaN(length) || length <= 0) {
    styledLog('Por favor, forneça um número válido maior que 0.', 'error');
    return false;
  }

  if (length < MIN_PASSWORD_LENGTH || length > MAX_PASSWORD_LENGTH) {
    styledLog(
      `Por favor, forneça um número entre ${MIN_PASSWORD_LENGTH} e ${MAX_PASSWORD_LENGTH}`,
      'error'
    );
    return false;
  }

  return true;
};
