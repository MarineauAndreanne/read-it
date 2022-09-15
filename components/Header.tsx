import React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronDownIcon,
  HomeIcon,
  SearchIcon,
  MenuIcon,
} from "@heroicons/react/solid"
import {
  BellIcon,
  ChatIcon,
  GlobeIcon,
  PlusIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline"
import { signIn, signOut, useSession } from "next-auth/react"

const Header = () => {
  const { data: session } = useSession()

  return (
    <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm items-center">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Link href="/">
          <Image
            src="https://recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/000/004/762/resized/Greenhouse_Reddit_Logo.png?1610398267"
            objectFit="contain"
            layout="fill"
          />
        </Link>
      </div>

      <Link href="/">
        <div className="flex items-center mx-7 xl:min-w-[300px] hover:cursor-pointer">
          <HomeIcon className="h-5 w-5" />
          <p className="flex-1 ml-2 hidden lg:inline">Home</p>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </Link>

      <form className="flex flex-1 items-center space-x-2 border bordere-gray-200 rounded-sm bg-gray-100 px-3 py-1">
        <SearchIcon className="h-6 w-6 text-gray-400" />
        <input
          type="text"
          placeholder="Search Reddit"
          className="flex-1 bg-transparent outline-none"
        />
        <button type="submit" hidden />
      </form>

      <div className="text-gray-500 space-x-2 items-center mx-5 lg:inline-flex hidden">
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <MenuIcon className="icon" />
      </div>

      {session ? (
        <div
          onClick={() => signOut()}
          className="hidden items-center space-x-2 border border-gray-100 p-2 lg:flex"
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image
              objectFit="contain"
              src="https://cdn-icons-png.flaticon.com/512/52/52053.png"
              layout="fill"
              alt="logo"
            />
          </div>

          <div className="flex-1 text-xs">
            <p className="truncate">{session?.user?.name}</p>
            <p className="text-gray-400">1 Karma</p>
          </div>

          <ChevronDownIcon className="h-5 flex-shrink-0 text-gray-400" />
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="hidden items-center space-x-2 border border-gray-100 p-2 lg:flex"
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image
              objectFit="contain"
              src="https://cdn-icons-png.flaticon.com/512/52/52053.png"
              layout="fill"
              alt="logo"
            />
          </div>
          <p className="text-gray-400">Sign In</p>
        </div>
      )}
    </div>
  )
}

export default Header
