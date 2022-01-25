export default {

    subscribeToFriendStatus(id,callback){
        console.log(id)
        callback({isOnline: null})
    },

    unsubscribeFromFriendStatus(id,callback){
        console.log(id)
        callback({isOnline: false})
    }
}