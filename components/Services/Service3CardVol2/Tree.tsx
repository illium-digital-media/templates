const Tree: React.FC<{ styling: string }> = (props) => {
    return (
        <svg className={props.styling} xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="none">
            <path fill="#229521" d="M48.51 30.18H23.49c-3.54 0-4.77-2.37-2.7-5.25L33.3 7.41c1.47-2.1 3.93-2.1 5.4 0l12.51 17.52c2.07 2.88.84 5.25-2.7 5.25Z" opacity=".4" />
            <path fill="#229521" d="M52.77 54H19.23c-4.74 0-6.36-3.15-3.57-6.99l11.97-16.83h16.74l11.97 16.83c2.79 3.84 1.17 6.99-3.57 6.99ZM38.25 54v12c0 1.23-1.02 2.25-2.25 2.25s-2.25-1.02-2.25-2.25V54h4.5Z" />
        </svg>
    )
}

export default Tree;