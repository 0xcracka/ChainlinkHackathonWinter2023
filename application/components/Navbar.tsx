import { WhitebitNetwork } from "@thirdweb-dev/chains";
import { ConnectWallet } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";

export function Nav() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" passHref>
          <span className="font-bold text-xl text-blue-600 cursor-pointer">
            DataLynk
          </span>
        </Link>
        <div className="flex items-center">
          <div className="hidden md:flex space-x-4">
            <Link href="/" passHref>
              <span className="text-gray-800 hover:text-blue-600 cursor-pointer">
                Home
              </span>
            </Link>
            <Link href="/marketplace" passHref>
              <span className="text-gray-800 hover:text-blue-600 cursor-pointer">
                Marketplace
              </span>
            </Link>
            <Link href="/about" passHref>
              <span className="text-gray-800 hover:text-blue-600 cursor-pointer">
                About
              </span>
            </Link>
            {/* <Link href="/pricing" passHref>
              <span className="text-gray-800 hover:text-blue-600 cursor-pointer">
                Pricing
              </span>
            </Link> */}
          </div>
          <div className="md:ml-4 relative">
            <input
              type="search"
              className="h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
              placeholder="Search for anything"
            />
            <button className="absolute right-0 top-0 mt-3 mr-2">
              {/* Insert search icon here */}
            </button>
          </div>
          <ConnectWallet className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-700 ml-4 hover:text-white" />
        </div>
      </div>
    </nav>
  );
}
