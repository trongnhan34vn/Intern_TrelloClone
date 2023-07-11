export interface User {
    id: number,
    email: string,
    password: string,
    fullName: string,
    imageUrl: string,
}

export interface UserLogin {
    email: string,
    password: string
}