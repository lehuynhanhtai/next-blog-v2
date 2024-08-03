import React from 'react';
import { Camera, Edit, MoreHorizontal, Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Profile = () => {
  return (
    <div className="w-full bg-white shadow-md max-w-screen-xl mx-auto dark:bg-gray-600">
      <div className="relative">
        {/* Cover Photo */}
        <div className="w-full h-48 md:h-64 lg:h-80 bg-gray-300 overflow-hidden relative">
          <Image src="/book3.jpg" alt="Cover" fill className="object-cover" sizes="(100vw, 100vh)" priority />
        </div>

        {/* Profile Picture */}
        <div className="absolute bottom-0 left-4 transform translate-y-1/2 w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white overflow-hidden">
          <Image src="/book3.jpg" alt="Cover" fill className="object-cover" sizes="(100vw, 100vh)" />
        </div>

        {/* Edit Cover Photo Button */}
        <button className="absolute bottom-4 right-4 bg-white text-gray-700 px-4 py-2 rounded-md flex items-center space-x-2 text-sm">
          <Camera size={16} />
          <span>Edit Cover Photo</span>
        </button>
      </div>

      {/* Profile Info */}
      <div className="pt-20 pb-4 px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold dark:text-white">Lê Huỳnh Anh Tài</h1>
            <p className="dark:text-white">
              <b>Biệt danh:</b> @lehuynhanhtai
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center space-x-2">
              <Plus size={16} />
              <span>Add Friend</span>
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md flex items-center space-x-2">
              <Edit size={16} />
              <span>Edit Profile</span>
            </button>
            <button className="bg-gray-200 text-gray-700 px-3 py-2 rounded-md">
              <MoreHorizontal size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 px-4 md:px-6 lg:px-8 ">
        <div className="col-span-1 mr-4 flex flex-col gap-1 py-3">
          <div className="flex justify-between dark:text-white">
            <div>
              <span className="text-sm font-medium">Folow</span>
              <p>1</p>
            </div>
            <div>
              <span className="text-sm font-medium">Folow</span>
              <p>1</p>
            </div>
            <div>
              <span className="text-sm font-medium">Folow</span>
              <p>1</p>
            </div>
          </div>
          <p className="dark:text-white">
            {' '}
            <b>Slogan:</b> Yêu bao lâu thì cho nắm tay...
          </p>
        </div>
        <div className="col-span-3 border-l border-gray-200 dark:border-gray-700">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
              <li className="me-2">
                <a href="#" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                  <svg className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                  Profile
                </a>
              </li>
              <li className="me-2">
                <a href="#" className="inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group" aria-current="page">
                  <svg className="w-4 h-4 me-2 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>
                  Dashboard
                </a>
              </li>
              <li className="me-2">
                <a href="#" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                  <svg className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 11.424V1a1 1 0 1 0-2 0v10.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.228 3.228 0 0 0 0-6.152ZM19.25 14.5A3.243 3.243 0 0 0 17 11.424V1a1 1 0 0 0-2 0v10.424a3.227 3.227 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.243 3.243 0 0 0 2.25-3.076Zm-6-9A3.243 3.243 0 0 0 11 2.424V1a1 1 0 0 0-2 0v1.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0V8.576A3.243 3.243 0 0 0 13.25 5.5Z" />
                  </svg>
                  Settings
                </a>
              </li>
            </ul>
          </div>
          <div className="mx-auto w-full max-w-screen-xl py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="grid grid-cols-3 sm:grid-cols-1 gap-2 sm:gap-0">
                <div className="relative h-32 sm:h-56">
                  <Image src="/book1.jpg" alt="" fill sizes="(max-width: 600px) 100vw, 33vw" priority className="object-cover" />
                </div>
                <div className="col-span-2 flex flex-col justify-between sm:pt-3 sm:gap-2">
                  <div className="flex justify-between items-center">
                    <span className="uppercase text-sm dark:text-white hover:font-bold">Quan điểm - Xã Hội</span>
                    <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z" />
                    </svg>
                  </div>
                  <div className="text-lg font-bold dark:text-white truncate ...">Sex quá đã ssssssssssssssssssssssssssssssssssssss</div>
                  <Link href="#" className="flex items-center gap-2">
                    <div className="relative w-8 h-8">
                      <Image src="/book1.jpg" alt="" fill sizes="(max-width: 600px) 100vw, 33vw" priority className="object-cover rounded-full" />
                    </div>
                    <div className="text-sm dark:text-white">Lehuynhanhtai</div>
                    <span className="text-[12px] dark:text-white">time</span>
                  </Link>
                </div>
              </div>
              {/*  */}
              <div className="grid grid-cols-3 sm:grid-cols-1 gap-2 sm:gap-0">
                <div className="relative h-32 sm:h-56">
                  <Image src="/book1.jpg" alt="" fill sizes="(max-width: 600px) 100vw, 33vw" priority className="object-cover" />
                </div>
                <div className="col-span-2 flex flex-col justify-between sm:pt-3 sm:gap-2">
                  <div className="flex justify-between items-center">
                    <span className="uppercase text-sm dark:text-white hover:font-bold">Quan điểm - Xã Hội</span>
                    <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z" />
                    </svg>
                  </div>
                  <div className="text-lg font-bold dark:text-white truncate ...">Sex quá đã ssssssssssssssssssssssssssssssssssssss</div>
                  <Link href="#" className="flex items-center gap-2">
                    <div className="relative w-8 h-8">
                      <Image src="/book1.jpg" alt="" fill sizes="(max-width: 600px) 100vw, 33vw" priority className="object-cover rounded-full" />
                    </div>
                    <div className="text-sm dark:text-white">Lehuynhanhtai</div>
                    <span className="text-[12px] dark:text-white">time</span>
                  </Link>
                </div>
              </div>
              {/*  */}
              <div className="grid grid-cols-3 sm:grid-cols-1 gap-2 sm:gap-0">
                <div className="relative h-32 sm:h-56">
                  <Image src="/book1.jpg" alt="" fill sizes="(max-width: 600px) 100vw, 33vw" priority className="object-cover" />
                </div>
                <div className="col-span-2 flex flex-col justify-between sm:pt-3 sm:gap-2">
                  <div className="flex justify-between items-center">
                    <span className="uppercase text-sm dark:text-white hover:font-bold">Quan điểm - Xã Hội</span>
                    <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z" />
                    </svg>
                  </div>
                  <div className="text-lg font-bold dark:text-white truncate ...">Sex quá đã ssssssssssssssssssssssssssssssssssssss</div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                      <div className="relative w-8 h-8">
                        <Image src="/book1.jpg" alt="" fill sizes="(max-width: 600px) 100vw, 33vw" priority className="object-cover rounded-full" />
                      </div>
                      <div className="text-sm dark:text-white">Lehuynhanhtai</div>
                    </div>
                    <span className="text-[12px] dark:text-white">time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
