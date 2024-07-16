export function UserInput({ children, tagx='input', id, label="undefined", ...res }) {
    const Tag = tagx;
    return (
            <label>
                {label}
                <Tag id={id} {...res}>
                    {children}
                </Tag>
            </label>
    )
}