import firebase from 'firebase'

class Fire{
    constructor(){
        this.init()
        this.checkAuth()
    }

    init = () => {
        if(!firebase.apps.length){
            firebase.initializeApp({
                apiKey: "AIzaSyA5S6PBwGbn0M8WoRv1VqrROTP3HqZ9BFg",
                authDomain: "chat-app-f94f1.firebaseapp.com",
                databaseURL: "https://chat-app-f94f1.firebaseio.com",
                projectId: "chat-app-f94f1",
                storageBucket: "chat-app-f94f1.appspot.com",
                messagingSenderId: "47041547766",
                appId: "1:47041547766:web:9c8d7ebe802cbebccf4bd7",
                measurementId: "G-65F80BGN3Y"
            });
        }
    }

    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if(!user){
                firebase.auth().signInAnonymously();
            }
        })
    }

    send = messages => {
        messages.forEach(item => {
            const message = {
                text : item.text,
                timestamp : firebase.database.ServerValue.TIMESTAMP,
                user : item.user
            }

            this.db.push(message)
        })
    }

    parse = message => {
        const {user, text, timestamp} = message.val()
        const {key: _id} = message
        const createdAt = new Date(timestamp);

        return {
            _id, 
            createdAt,
            text,
            user
        }
    }

    get = callback => {
        this.db.on('child_added', snapshot => callback(this.parse(snapshot)));
    }

    off() {
        this.db.off()
    }

    get db(){
        return firebase.database().ref("messages")
    }

    get uid(){
        return (firebase.auth().currentUser || {}).uid
    }
}

export default new Fire();