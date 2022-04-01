export class AccessToken {
  constructor (private readonly value: string) {}

  static get expirationInMs (): number {
    const minutes = 30
    return minutes * 60 * 1000
  }
}
