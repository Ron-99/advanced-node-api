type FacebookData = {
  name: string
  email: string
  facebookId: string
}

type AccountData = {
  id?: string
  name?: string
}
export class FacebookAccount {
  email: string
  id?: string
  name: string
  facebookId: string

  constructor (fbData: FacebookData, accountData?: AccountData) {
    this.id = accountData?.id
    this.name = accountData?.name ?? fbData.name
    this.facebookId = fbData.facebookId
    this.email = fbData.email
  }
}
