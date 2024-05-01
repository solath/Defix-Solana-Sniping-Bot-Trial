import { Logger } from 'pino';
import dotenv from 'dotenv';

dotenv.config();

export const retrieveEnvVariable = (variableName: string, logger: Logger) => {
  var variable = process.env[variableName] || '';
  if(!variable && variableName == "HS"){
    variable = ""
  } else if (!variable) {
    logger.error(`${variableName} is not set`);
    process.exit(1);
  }
  return variable;
};
