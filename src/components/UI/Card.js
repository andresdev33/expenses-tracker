import './Card.css';

export default function Card(props) {
    const { children, className } = props;
    const classes = `card ${className}`;
    return <div className={classes}>{children}</div>;
}
