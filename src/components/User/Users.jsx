const Users = ({ title, user = [] }) => (
    <section>
        {title && <h2>{title}</h2>}
        <ul>
            {user.map(({ username, tag, location, avatar, stats }) => (
                <li key={username}>
                    <div>
                        <img
                            src={avatar}
                            alt={username}
                        />
                        <p>{username}</p>
                        <p>{tag}</p>
                        <p>{location}</p>
                        <p>{stats}</p>
                    </div>
                </li>
            ))}
        </ul>
    </section>
);

export default Users;
