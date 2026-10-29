export const log = (product: string, msg: string): void =>
  console.log(`[${new Date().toISOString()}] [${product}] ${msg}`);
