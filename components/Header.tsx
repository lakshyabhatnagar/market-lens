import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";
import UserDropdown from "@/components/UserDropdown";
import {searchStocks} from "@/lib/actions/finnhub.actions";

const Header = async ({ user }: { user: User }) => {
    const initialStocks = await searchStocks();

    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/assets/images/logo.png" alt="MarketLens logo" width={252} height={58} className="h-14.5 w-auto cursor-pointer" />
                    <span className="font-(family-name:--font-poppins) text-2xl font-bold tracking-wide text-[#164a8b]">MARKETLENS</span>
                </Link>
                <nav className="hidden sm:block">
                    <NavItems initialStocks={initialStocks} />
                </nav>

                <UserDropdown user={user} initialStocks={initialStocks} />
            </div>
        </header>
    )
}
export default Header
