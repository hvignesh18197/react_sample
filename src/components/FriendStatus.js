// import React from "react";
// import ChatAPI from "../services/ChatAPI";
// export default class FriendStatus extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isOnline: null };
//     this.handleStatusChange = this.handleStatusChange.bind(this);
//   }

//   componentDidMount() {
//     ChatAPI.subscribeToFriendStatus(
//       1,
//       this.handleStatusChange
//     );
//   }
//   componentWillUnmount() {
//     ChatAPI.unsubscribeFromFriendStatus(
//       2,
//       this.handleStatusChange
//     );
//   }
//   handleStatusChange(status) {
//     this.setState({ isOnline: status.isOnline });
//   }
//   render() {
//     if (this.state.isOnline === null) {
//       return "Loading...";
//     }
//     return this.state.isOnline ? "Online" : `"Offline"`;
//   }
// }

import React, { useState, useEffect } from "react";
import ChatAPI from "../services/ChatAPI";

export default function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(1, handleStatusChange);

    return function () {
      ChatAPI.unsubscribeFromFriendStatus(2, handleStatusChange);
    };

  },[isOnline]);


  if (isOnline === null) {
    return "Loading...";
  }
  return isOnline ? "Online" : "Offline";

}
