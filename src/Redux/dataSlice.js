import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: 'messages',
    initialState: [
        {
            id: 1,
            name: "Anubhav Sharma",
            profilePic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3",
            lastText: "Hey Man",
            lastTextTime: "12:58 PM",
            messagesList: [
                {
                    id: 1,
                    messageType: "TEXT",
                    text: "hello",
                    senderID: 0,
                    addedOn: "12:00 PM",
                },
                {
                    id: 2,
                    messageType: "TEXT",
                    text: "What's up?",
                    senderID: 1,
                    addedOn: "12:01 PM",
                },
                {
                    id: 3,
                    messageType: "TEXT",
                    text: "All Good, What about you?",
                    senderID: 0,
                    addedOn: "12:03 PM",
                },
                {
                    id: 4,
                    messageType: "TEXT",
                    text: "I'm good as well",
                    senderID: 1,
                    addedOn: "12:07 PM",
                },
                {
                    id: 5,
                    messageType: "TEXT",
                    text: "Great 😁",
                    senderID: 0,
                    addedOn: "12:09 PM",
                },
                {
                    id: 6,
                    messageType: "TEXT",
                    text: "Great",
                    senderID: 1,
                    addedOn: "12:12 PM",
                },
            ],
        },
        {
            id: 2,
            name: "Mayank",
            profilePic: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
            lastText: `what going on bro`,
            lastTextTime: "12:45 PM",
        },
        {
            id: 3,
            name: "Anjali",
            profilePic: "https://www.freecodecamp.org/news/content/images/2020/12/DSC08166-2.jpg",
            lastText: "baba lets go out?",
            lastTextTime: "12:30 PM",
        },
        {
            id: 4,
            name: "Kaushal",
            profilePic: "https://static.toiimg.com/imagenext/toiblogs/photo/blogs/wp-content/uploads/2021/05/edit-Kiran-Jonnalagadda.jpg",
            lastText: "no broo",
            lastTextTime: "12:00 PM",
        },
    ],
    reducers: {
        setData(state, action) {
            state.push(action.payload);
        }
    }
})

export const { setData } = dataSlice.actions
export default dataSlice.reducer
