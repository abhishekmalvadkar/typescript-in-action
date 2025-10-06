import { ApiMetadata } from './api-metadata.interface';

export function Api(meta: ApiMetadata) {
  return (description: string, testFn: jasmine.ImplementationCallback) => {
    const fullDesc = `[${meta.type}.${meta.method}] ${description}`;
    it(fullDesc, testFn);
  };
}
