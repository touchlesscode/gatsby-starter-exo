
export function createRandomUUID() {
  if (crypto && typeof crypto !== undefined) {
    return crypto.randomUUID()
  } 
  return '00000000-0000-0000-0000-000000000000'
}
