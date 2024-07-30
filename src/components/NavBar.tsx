'use client';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useCallback, useMemo } from 'react';
import slugify from 'slugify';
import { User, FileText, FileCode, MessageSquare, Settings, LogOut, PencilLineIcon } from 'lucide-react';

import { useDarkMode } from '@/context/darkMode-context';
import DarkModeToggle from './DarkMode';

const NavBar = () => {
  const { status, data } = useSession();
  const pathName = usePathname();
  const [dropdownAvatar, setDropdownAvatar] = useState(false);
  const [dropdownBugger, setDropdownBugger] = useState(false);
  const { darkMode } = useDarkMode();

  const navLink = useMemo(
    () => [
      { id: 1, name: 'Trang chủ', url: '/' },
      { id: 2, name: 'Liên hệ', url: '/contact' },
      { id: 3, name: 'Về S-Blog', url: '/about' },
      { id: 4, name: 'Tìm kiếm', url: '/search-articles' },
    ],
    [],
  );

  const LinkAvatar = useMemo(
    () => [
      { id: 1, name: 'Trang cá nhân', url: '#', icon: User },
      { id: 2, name: 'Bài viết của tôi', url: '#', icon: FileText },
      { id: 3, name: 'Nháp của tôi', url: '#', icon: FileCode },
      { id: 4, name: 'ChatRoom', url: '#', icon: MessageSquare },
      { id: 5, name: 'Tùy chỉnh tài khoản', url: '#', icon: Settings },
      { id: 6, name: 'Đăng xuất', url: '#', icon: LogOut },
    ],
    [],
  );

  const toggleDropdownAvatar = useCallback(() => {
    setDropdownAvatar(prev => !prev);
  }, []);

  const toggleDropdownBugger = useCallback(() => {
    setDropdownBugger(prev => !prev);
  }, []);

  const handleSignOut = useCallback(() => {
    signOut();
  }, []);

  const renderNavLink = useCallback(
    (link: any) => (
      <li key={link.id}>
        <Link
          href={link.url}
          className={`${
            pathName === link.url ? 'text-blue-700 dark:text-blue-700' : 'text-gray-900 dark:text-white'
          } block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
        >
          {link.name}
        </Link>
      </li>
    ),
    [pathName],
  );

  const renderAvatarLink = useCallback(
    (link: any) => {
      const Icon = link.icon;
      return (
        <li key={link.id}>
          {link.name === 'Đăng xuất' ? (
            <button
              onClick={handleSignOut}
              className={`w-full text-left flex items-center px-4 py-2 text-sm ${pathName === link.url ? 'text-blue-700 font-medium' : 'text-gray-700 dark:text-gray-200'} hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}
            >
              <Icon className="mr-2 h-4 w-4" />
              {link.name}
            </button>
          ) : (
            <Link href={link.url} className={`flex items-center px-4 py-2 text-sm ${pathName === link.url ? 'text-blue-700 font-medium' : 'text-gray-700 dark:text-gray-200'} hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}>
              <Icon className="mr-2 h-4 w-4" />
              {link.name}
            </Link>
          )}
        </li>
      );
    },
    [pathName, handleSignOut],
  );

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* LOGO */}
        <Link href="/" className="relative items-center space-x-3 rtl:space-x-reverse h-12 w-36">
          <Image
            src={darkMode ? '/whiteLogo.png' : '/blackLogo.png'}
            alt="logo"
            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            fill
            priority={true}
            sizes="( max-width: 768px) 100vw, ( max-width: 1200px) 50vw, 33vw"
          />
        </Link>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse dark:text-white">
          {status === 'unauthenticated' ? (
            <Link href="/auth/login" className={`font-medium ${pathName === '/auth/login' ? 'text-blue-700' : ''} hover:text-blue-500 px-4 py-2 border rounded-full`}>
              Đăng nhập
            </Link>
          ) : (
            <>
              <Link href="/write" className="font-medium md:mr-4 flex items-center justify-center gap-1">
                <PencilLineIcon className="mr-2 h-5 w-5" />
                Viết bài
              </Link>
              <div className="relative">
                {/* AVATAR */}
                <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" onClick={toggleDropdownAvatar}>
                  <span className="sr-only">Open user menu</span>
                  {data?.user?.image ? (
                    <Image className="rounded-full" src={data.user.image} alt="user photo" width={40} height={40} />
                  ) : (
                    <div className="rounded-full bg-gray-100 animate-spin">
                      <Image className="rounded-full" src="/Loading.png" alt="user photo" width={35} height={35} />
                    </div>
                  )}
                </button>
                {/* MENU USER DROPDOWN */}
                {dropdownAvatar && (
                  <div className="absolute whitespace-nowrap right-0 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-600">
                    <div className="px-4 py-3">
                      <span className="block text-sm text-gray-900 dark:text-white">@{slugify(data?.user?.name ?? '', { lower: true, replacement: '_' })}</span>
                      <span className="block text-sm text-gray-500 truncate dark:text-gray-400">{data?.user?.email}</span>
                    </div>
                    <ul className="py-2">{LinkAvatar.map(renderAvatarLink)}</ul>
                  </div>
                )}
              </div>
            </>
          )}
          {/* BURGER */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleDropdownBugger}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        {/* LINK */}
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${dropdownBugger ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navLink.map(renderNavLink)}
            <DarkModeToggle />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
