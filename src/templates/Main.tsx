import Link from 'next/link';
import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full bg-black px-1 text-white antialiased">
    {props.meta}

    <div className="mx-auto max-w-screen-md">
      <div className="border-b border-gray-300">
        <div className="pt-16 pb-8">
          <div className="flex items-center text-3xl font-bold text-white">
            <img src={`/favicon-32x32.png`} alt="Nextjs starter banner" />
            <div>{AppConfig.title}</div>
          </div>
          <div className="text-xl">{AppConfig.description}</div>
        </div>
        <div>
          <ul className="flex flex-wrap text-xl">
            <li className="mr-6">
              <Link
                href="/"
                className="border-none text-white hover:text-gray-900"
              >
                Home
              </Link>
            </li>
            <li className="mr-6">
              <Link
                href="/about/"
                className="border-none text-white hover:text-gray-900"
              >
                About
              </Link>
            </li>
            <li className="mr-6">
              <a
                className="border-none text-white hover:text-gray-900"
                href="https://github.com/atsuzu/atsuzu-website"
              >
                GitHub
              </a>
            </li>
            {/* <li className="mr-6">
              <Link
                href="/blog/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Blog
              </Link>
            </li> */}
            <li className="mr-6">
              <Link
                href="/privacy-policy/"
                className="border-none text-white hover:text-gray-900"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="content py-5 text-xl">{props.children}</div>

      <div className="border-t border-gray-300 py-8 text-center text-sm">
        © Copyright 2023 atsuzu. {AppConfig.title}. Made with{' '}
        <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>.
        {/*
         * PLEASE READ THIS SECTION
         * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
         * The link doesn't need to appear on every pages, one link on one page is enough.
         * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
         */}
      </div>
    </div>
  </div>
);

export { Main };
