import { useRouter } from "next/router";
import Link from "next/link";

function ActiveLink({ children, href }) {
  const router = useRouter();
  const style = {
    marginRight: 10,
    textDecoration: "none",
    padding: 15,
    borderBottom:
      router.pathname === href ? "2px solid #ffa959" : "2px solid #1e1b1b",
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Link href={href}>
      <a onClick={handleClick} style={style}>
        {children}
      </a>
    </Link>
  );
}

export default ActiveLink;
