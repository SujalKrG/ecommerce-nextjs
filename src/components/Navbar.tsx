import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between">
            {/*LEFT*/}
            <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="E-Store" width={36} height={36} className="w-6 h-6 md:w-9 md:h-9" />
            <p className="text-md font-medium tracking-wider">E-STORE</p>
            </Link>
            {/*RIGHT*/}
            <div className="">RIGHT</div>
        </nav>
    )
}


export default Navbar