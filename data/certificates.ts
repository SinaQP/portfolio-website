export interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  image: string
  credentialId?: string
  verifyUrl?: string
  description?: string
  skills?: string[]
}

export const certificates: Certificate[] = []
