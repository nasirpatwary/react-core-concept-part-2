const Friend = ({friend}) => {
    const {username, email} = friend
    return (
        <div className="box">
            <h3>Name: {username}</h3>
            <span>Email: {email}</span>
        </div>
    );
};

export default Friend;