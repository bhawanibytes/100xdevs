function isLegal (user: UserType): boolean {
    if (user.age<18){
        return false
    } else {
        return true
    }
}

interface UserType {
    firstName: string,
    lastName: string,
    email: string,
    age: number
}

const user = {
    firstName: "Bhawani",
	lastName: "Singh",
	email: "email@gmail.com",
	age: 21,
}

isLegal(user)