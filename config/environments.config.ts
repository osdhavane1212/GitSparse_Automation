// Strongly typed environment definitions shared by all products.
export type EnvName = 'dev' | 'prod';

export interface ProductEnv {
  baseUrl: string;
  sshHost: string;
}

export const environments: Record<string, Record<EnvName, ProductEnv>> = {
  cm:   { dev: { baseUrl: 'https://cm-dev.example.com',   sshHost: 'cm-dev' },   prod: { baseUrl: 'https://cm.example.com',   sshHost: 'cm' } },
  cms:  { dev: { baseUrl: 'https://cms-dev.example.com',  sshHost: 'cms-dev' },  prod: { baseUrl: 'https://cms.example.com',  sshHost: 'cms' } },
  smgr: { dev: { baseUrl: 'https://smgr-dev.example.com', sshHost: 'smgr-dev' }, prod: { baseUrl: 'https://smgr.example.com', sshHost: 'smgr' } },
};

export function getEnv(product: string, env: EnvName = 'dev'): ProductEnv {
  const e = environments[product]?.[env];
  if (!e) throw new Error(`No environment for ${product}/${env}`);
  return e;
}
