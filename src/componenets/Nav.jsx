import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useLogOut } from "../hooks/useLogOut";
import avarter from "../assets/avarter.png";
import { MobileView } from "../Mobile/MobileView";
import { NavLinks } from "../Mobile/NavLinks";

const Nav = () => {
  const { auth } = useAuth();
  const { mutate, isPending } = useLogOut();

  return (
    <header className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-semibold cursor-pointer">
          <Link to="/">Workopia</Link>
        </h1>
        {/* Mobile Menu Toggle Button */}
        <MobileView auth={auth} mutate={mutate} isPending={isPending} />
        <nav className="hidden md:flex md:flex-row md:gap-4">
          <NavLinks
            auth={auth} // Navigation Links
            mutate={mutate}
            isPending={isPending}
            avarter={avarter}
          />
        </nav>
      </div>
    </header>
  );
};

export default Nav;
