interface User {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
}

type UserProfile = Pick<User, 'name' | 'email'>

const displayUserProfile = (user:UserProfile) => {
    console.log(`Name: ${user.name}, Email: ${user.email}`)
}