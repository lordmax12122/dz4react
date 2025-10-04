const Stats = ({ title, stats }) => (
    <section>
        {title && <h2>{title}</h2>}
        <ul>
            {stats.map(({ id, label, percentage }) => (
                <li key={id}>
                    <span>{label}</span>
                    <span>{percentage}%</span>
                </li>
            ))}
        </ul>
    </section>
);


export default Stats