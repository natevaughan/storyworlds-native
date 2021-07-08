export default interface World {
    id: string
    userId: string
    name: string
    description: string
    backgroundColor: string
    foregroundColor: string
    published: boolean
}

interface User {
    id: number
    name: string
}
function getUser(): User {
    return JSON.parse('{ "id": "abc", "another": "prop"}');
}
let myUser = getUser();
let roundedId = Math.round(myUser.id + 1); // I expect a number, this will be NaN
let foo = myUser.name