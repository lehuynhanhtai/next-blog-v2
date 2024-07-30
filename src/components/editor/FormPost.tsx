'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import Cover from './Cover';

const FormPost = () => {
  const Editor = useMemo(() => dynamic(() => import('@/components/editor/Editor'), { ssr: false }), []);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {};

  return (
    <form onSubmit={handleSubmit}>
      {/* Image */}
      <Cover />
      {/* Category */}
      <select
        id="countries"
        className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-400 focus:border-slate-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
      >
        <option defaultValue="AS">Chọn thể loại bài viết</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
      {/* Title */}
      <div className="mb-6">
        <input
          type="text"
          id="large-input"
          className="block text-4xl font-bold w-full p-4 text-gray-500 border border-gray-300 rounded-lg bg-gray-50  focus:ring-slate-400 focus:border-slate-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
          placeholder="Tiêu đề bài viết"
        />
      </div>
      {/* Editor */}
      <Editor />
      <div className="flex justify-end pt-3">
        <button
          type="submit"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Đăng bài viết
        </button>
      </div>
    </form>
  );
};

export default FormPost;
