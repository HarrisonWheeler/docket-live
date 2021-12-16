export function generateCode() {
  let result = ''
  const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  const charactersLength = characters.length
  for (let i = 0; i < 4; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}
