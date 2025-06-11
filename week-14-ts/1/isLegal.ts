function isLegal (user: userType): boolean {
    if (user.age<18){
        return false
    } else {
        return true
    }
}

interface userType {
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