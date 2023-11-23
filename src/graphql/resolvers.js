import users from "../database/users.js";

const resolvers = {
    Query: {
        users: () => users,
        user: (_, { id}) => {
            return books.filter(user=> user.id === id)[0];
        },
    },
    Mutation: {
        addUser: (_, { ID, password}) =>{
            if(users.find(user=> user.ID === ID)) return null;
            const newUser = {
                id: users.length +1,
                ID,
                password,
            }
            users.push(newUser)
            return newUser
        }
    }
}
export default resolvers