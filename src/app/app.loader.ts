import { ConfigurationService } from "./services/configuration/configuration.service";

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function initializeApp(configService: ConfigurationService) {
  return (): Promise<any> => {
    return configService.loadInitialData();
  };
}