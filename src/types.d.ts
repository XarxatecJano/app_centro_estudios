export interface School{
    id:number,
    name: string,
    createdAt: Date,
    updatedAts: Date
};

export type SchoolName = Pick<School, 'name'>;

export type SchoolPartial = Pick<School, 'id', 'name'>

export interface User{
    id: number,
    username: string, 
    password: string,
    name: string,
    first_surname: string,
    second_surname: string | null,
    phone: string | null,
    mail: string | null,
    createdAt: Date,
    updatedAt: Date,
    role: string,
    password_reset_token: string | null,
    status: string,
    avatar: string | null,
    info_file_url: string | null,
}

export type UserPartial = Pick<User, 'username', 'password', 'name', 'first_surname', 'second_surname', 'phone', 'mail', 'role', 'status'>;

export type UserPasswordPartial = Pick<User, 'username', 'password'>;

export interface jwUserToken {
    id: number,
    user: string,
    role: string
}