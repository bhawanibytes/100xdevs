interface User {
    id: number;
    name: string;
    age: number;
    email: string;
    password: string;
}

type updateProps = Pick<User, 'name' | 'age' |'email'>

type updatePropsOptional = Partial<updateProps>

function updateUser (user: updatePropsOptional) {
    //updation logic
}

updateUser({})