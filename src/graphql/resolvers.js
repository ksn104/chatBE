import users from "../database/users.js";
import {PubSub} from "graphql-subscriptions";
import chats from "../database/chats.js";
import messages from "../database/messages.js";


const pubsub = new PubSub();
const resolvers = {
    Query: {
        users: () => users,
        user: (_, { index}) => {
            return users.filter(user=> user.index === index)[0];
        },
        chats: () => chats,
        messages: () => messages,
    },
    Mutation: {
        addUser: (_, { ID, password}) =>{
            if(users.find(user=> user.ID === ID)) return null;
            const newUser = {
                index: users.length +1,
                ID,
                password,
            }
            users.push(newUser)
            return newUser
        },
        addChat: (_, { owner, visitant}) =>{
            const newChat = {
                index: chats.length +1,
                owner,
                visitant,
                creatAt: new Date(),
            }
            chats.push(newChat)
            return newChat
        },
        addMessage: (_, { 
            chatIndex,
            text
            }) =>{
            const newMessage = {
                index: messages.length +1,
                chatIndex,
                creatAt: new Date(), 
                text, 
                readIt:false, 
            }
            messages.push(newMessage)
            return newMessage
        },
    },
    Subscription: {
        messageSubscribe: {
            subscribe: ()=> pubsub.asyncIterator(['POST_CREATED'])
        }
    }
}

function sendMessage() {
    pubsub.publish('NUMBER_INCREMENTED', {messageSubscribe: ''}).then(r => {}); 
    setTimeout(sendMessage, 1000);
}
export default resolvers