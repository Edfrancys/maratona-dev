export interface AuthContextData {
    signed: boolean
    user: object | null
    signIn(data: object): Promise<void>
    signOut(): Promise<void>
    signUp(data: object): Promise<void>,
    signInGoogle(data: object): Promise<void>
    load: boolean
}

export interface UserAuthData {
    uid?: string
    name?: string
    email?: string
    avatar?: string
}