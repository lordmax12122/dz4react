const Stats = ({ title, stats }) => (
    <section>
        {title && <h2>{title}</h2>}
        <ul className="stat-list">
            {stats.map(({ id, label, percentage }) => (
                <li className="item" key={id}>
                    <span className="label"> {label}</span>
                    <span className="percentage">{percentage}%</span>
                </li>
            ))}
        </ul>
    </section>
);


export default Stats