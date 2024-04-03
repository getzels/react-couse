export default function TabButton({children, onSelect, selected}) {

    return (
        <li>
            <button className={selected ? 'active' : undefined}
                    onClick={onSelect}>
                {children}
            </button>
        </li>
    );
}