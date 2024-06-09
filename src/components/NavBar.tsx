'use client';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import slugify from 'slugify';

const NavBar = () => {
  const { status, data } = useSession();
  const pathName = usePathname();
  const [dropdownAvatar, setDropdownAvatar] = useState(false);
  const [dropdownBugger, setDropdownBugger] = useState(false);
  const navLink = [
    { id: 1, name: 'Trang chủ', url: '/' },
    { id: 2, name: 'Liên hệ', url: '/contact' },
    { id: 3, name: 'Về S-Blog', url: '/about' },
    { id: 4, name: 'Tìm kiếm', url: '/search' },
  ];
  const LinkAvatar = [
    { id: 1, name: 'Trang cá nhân', url: '#' },
    { id: 2, name: 'Bài viết của tôi', url: '#' },
    { id: 3, name: 'Nháp của tôi', url: '#' },
    { id: 4, name: 'ChatRoom', url: '#' },
    { id: 5, name: 'Tùy chỉnh tài khoản', url: '#' },
    { id: 6, name: 'Đăng xuất', url: '#' },
  ];
  const handleLogout = () => {
    signOut();
  };
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* LOGO */}
        <Link href="/" className="relative items-center space-x-3 rtl:space-x-reverse h-12 w-36">
          <Image src="/blackLogo.png" alt="" className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white" fill priority={true} sizes="( max-width: 768px) 100vw, ( max-width: 1200px) 50vw, 33vw" />
        </Link>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {status === 'unauthenticated' ? (
            <>
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z" />
              </svg>
              <Link href="/auth/login" className={pathName === '/auth/login' ? 'text-blue-700 font-medium' : 'font-medium'}>
                Đăng nhập
              </Link>
            </>
          ) : (
            <>
              <Link href={'/write'} className="font-medium md:mr-4">
                Viết bài
              </Link>
              <div className="relative">
                {/* AVARTAR */}
                <button
                  type="button"
                  className="flex text-sm  bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  id="user-menu-button"
                  aria-expanded="true"
                  data-dropdown-toggle="user-dropdown"
                  data-dropdown-placement="bottom"
                  onClick={() => setDropdownAvatar(!dropdownAvatar)}
                >
                  <span className="sr-only">Open user menu</span>
                  <Image className="rounded-full" src="/avatar.svg" alt="user photo" width={40} height={40} />
                </button>
                {/* MENU USER DOPDOWN */}
                <div
                  className={`absolute right-0 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600
                    ${dropdownAvatar ? 'block' : 'hidden'}`}
                  id="user-dropdown"
                >
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      @
                      {slugify(data?.user?.name ?? '', {
                        lower: true,
                        replacement: '_',
                      })}
                    </span>
                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{data?.user?.email}</span>
                  </div>
                  {/* USER MENU */}
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    {LinkAvatar.map(({ id, name, url }) => (
                      <li key={id}>
                        {name === 'Đăng xuất' ? (
                          <Link
                            href={url}
                            onClick={handleLogout}
                            className={`${
                              pathName === url
                                ? 'text-blue-700 font-medium block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                                : 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                            }`}
                          >
                            {name}
                          </Link>
                        ) : (
                          <Link
                            href={url}
                            className={`${
                              pathName === url
                                ? 'text-blue-700 font-medium block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                                : 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                            }`}
                          >
                            {name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}

          {/* BUGGER */}
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
            onClick={() => setDropdownBugger(!dropdownBugger)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        {/* LINK */}
        <div
          className={`items-center justify-between  w-full md:flex md:w-auto md:order-1
            ${dropdownBugger ? 'block' : 'hidden'}`}
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navLink.map(link => (
              <li key={link.id}>
                <Link
                  href={link.url}
                  className={`${
                    pathName === link.url
                      ? 'text-blue-700 block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                      : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
