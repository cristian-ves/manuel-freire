import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ children, activeClassName, className, ...props }) => {
  const pathname = usePathname();

  return (
    <Link
      className={pathname == props.href ? activeClassName : className}
      {...props}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
