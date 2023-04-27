import nodeCrypto from 'crypto'

export function createRandomUUID() {
  if (crypto && typeof crypto !== undefined) {
    return crypto.randomUUID()
  } 
  return nodeCrypto.randomUUID()
}
