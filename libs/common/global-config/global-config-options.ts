import { globalConfigLoader } from './global-config-loader';
import { globalEnvSchema } from './global-env-schema';

export const configOptions = {
  load: [globalConfigLoader],
  validationSchema: globalEnvSchema,
};
