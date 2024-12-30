import { BrandLogo } from "@/components/BrandLogo";
import Link from "next/link";

export function NavBar() {
  return (
    <header>
      <nav className="flex items-center gap-10 container font-semibold">
        <Link href="/">
          <BrandLogo />
        </Link>
      </nav>
    </header>
  );
}
