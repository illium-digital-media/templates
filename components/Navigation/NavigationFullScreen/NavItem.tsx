import Link from "next/link";
import { useRouter } from "next/router";

const NavItem: React.FC<{
    pageLink: string;
    handleClick: () => void;
    copy: string;
}> = (props) => {
    const router = useRouter();
    const isActive = router.pathname === props.pageLink;
    return (
        <div className={`${isActive ? 'max-sm:font-bold sm:border-b-2 border-black' : ''} sm:border-b-2 hover:border-black text-black sm:h-full sm:flex items-center`}>
            <Link href={props.pageLink} onClick={props.handleClick}>
                <span className={`px-5 max-sm:py-5 m-auto duration-200 max-sm:flex`}>
                    {props.copy}
                </span>
            </Link>

        </div>
    );
};

export default NavItem;