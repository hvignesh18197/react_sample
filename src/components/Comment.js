import UserInfo from "./UserInfo";


function formatDate(date) {
    return date.toLocaleDateString();
}

function Comment({comment}) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <UserInfo user={comment.author} />
            </div>
            <div className="Comment-text">{comment.text}</div>
            <div className="Comment-date">
                {formatDate(comment.date)}
            </div>
        </div>
    );
}

export default Comment;