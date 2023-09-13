const User: React.FC<{ styling: string }> = (props) => {
    return (
        <svg className={props.styling} xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="none">
            <path fill="#229521" d="M63.24 25.74v20.52c0 3.36-1.8 6.48-4.71 8.19L40.71 64.74a9.49 9.49 0 0 1-9.45 0L13.44 54.45a9.449 9.449 0 0 1-4.71-8.19V25.74c0-3.36 1.8-6.48 4.71-8.19L31.26 7.26a9.49 9.49 0 0 1 9.45 0l17.82 10.29c2.91 1.71 4.71 4.8 4.71 8.19Z" opacity=".4" />
            <path fill="#229521" d="M36 36a6.99 6.99 0 1 0 0-13.98A6.99 6.99 0 0 0 36 36ZM44.04 49.98c2.43 0 3.84-2.7 2.49-4.71-2.04-3.03-6-5.07-10.53-5.07-4.53 0-8.49 2.04-10.53 5.07-1.35 2.01.06 4.71 2.49 4.71h16.08Z" />
        </svg>
    )
}

export default User;