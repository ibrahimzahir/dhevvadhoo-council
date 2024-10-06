'use client';

import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import {
  ArrowPathIcon,
  Bars3Icon,
  CursorArrowRaysIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const navMenus = [
  { dhiName: 'ތާރީޚް', engName: 'memories', href: '/memories' },
  { dhiName: 'އިޢުލާން', engName: 'iulan', href: '/announcements' },
  { dhiName: 'ތަފާތު ހިސާބު', engName: 'statistics', href: '/statistics' },
  { dhiName: 'ޕްރޮޖެކްޓްސް', engName: 'projects', href: '/projects' },
  { dhiName: 'ކައުންސިލް', engName: 'council', href: '/council' },
  { dhiName: 'ދެއްވަދޫ', engName: 'dhevvadhoo', href: '/dhevvadhoo' },
];

const mlists = [
  {
    name: 'ތަރައްޤީގެ ޕްލޭން',
    description:
      'ތައުލީމީ ޚިދުމަތް ތަރައްޤީގެ ޕްލޭނަށް ޢަމަލީ ސިފަ އަންނަމުންދާ ގޮތް',
    href: '/plans',
    icon: ArrowPathIcon,
  },
  {
    name: 'އާމްދަނީ',
    description: 'އިޙްތިސާސްގެ ތެރޭގައިވާ ވަސީލަތްތަކުން ލިބޭ އާމްދަނީ',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: 'ކުރެވުނު ޚަރަދު',
    description: 'ކަރަންޓުގެ ޚިދުމަތް ދެވުނުގޮތް',
    href: '#',
    icon: SquaresPlusIcon,
  },
  {
    name: 'ކައުންސިލްގެ ނިންމުން',
    description: 'ކައުންސިލްގެ ނިންމުން އަދި ރައްޔިތުންނާއި ބައްދަލު ކުރުން',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const NavMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-transparent">
      <nav
        className="
       flex
       items-center
       justify-between
       p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 
            inline-flex 
            items-center 
            justify-center 
            rounded-md 
            p-2.5
             text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group
          className="hidden 
        lg:flex
        lg:gap-x-12"
        >
          <Popover className="relative">
            <Popover.Button
              className="flex 
            items-center
            gap-x-1
            text-lg
            font-semibold
            leading-6
           text-gray-900
            outline-none"
            >
              <ChevronDownIcon
                className="h-5
               w-5
               flex-none
                text-gray-900"
                aria-hidden="true"
              />
              މީޑިއާ ސެންޓަރ
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition
               ease-out 
               duration-200"
              enterFrom="opacity-0
               translate-y-1"
              enterTo="opacity-100 
              translate-y-0"
              leave="transition 
              ease-in 
              duration-150"
              leaveFrom="opacity-100
               translate-y-0"
              leaveTo="opacity-0 
              translate-y-1"
            >
              <Popover.Panel
                className="absolute
               -left-8
               top-full
               z-10
               mt-3
               w-screen
               max-w-md
               overflow-hidden
               rounded-3xl
               bg-white
               shadow-lg
               ring-1
             ring-gray-900/5"
              >
                <div className="p-4">
                  {mlists.map((mlist) => (
                    <div
                      key={mlist.name}
                      className="group
                      relative
                      flex
                      items-center
                      gap-x-6 
                      rounded-lg
                      p-4 
                      text-sm
                      leading-6
                    hover:bg-gray-50
                      text-right"
                    >
                      <div className="flex-auto">
                        <a
                          href={mlist.href}
                          className="block 
                        font-semibold
                         text-gray-900"
                        >
                          {mlist.name}
                          <span
                            className="absolute
                           inset-0"
                          />
                        </a>
                        <p
                          className="mt-1
                         text-gray-600"
                        >
                          {mlist.description}
                        </p>
                      </div>
                      <div
                        className="flex 
                      h-11
                      w-11
                      flex-none
                      items-center
                      justify-center
                      rounded-lg
                     bg-gray-50
                     group-hover:bg-white"
                      >
                        <mlist.icon
                          className="h-6 
                        w-6
                         text-gray-600
                         group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          {navMenus.map((navMenu) => (
            <a
              key={navMenu.engName}
              href={navMenu.href}
              className="
          text-lg
          font-semibold
          leading-6
          text-gray-900
          cursor-pointer"
            >
              {navMenu.dhiName}
            </a>
          ))}
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel
          className="fixed inset-y-0
         right-0 z-10
         w-full
         overflow-y-auto
         bg-white px-6
         py-6 sm:max-w-sm
         sm:ring-1
         sm:ring-gray-900/10"
        >
          <div
            className="flex items-center
          justify-between"
          >
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Dhevvadhoo Council</span>
              <img
                className="h-8 w-auto"
                src="./images/council-logo.jpeg"
                alt="council-logo"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className="flex 
                      w-full items-center
                      justify-between
                      rounded-lg py-2
                      pl-3 pr-3.5
                      text-base
                      font-semibold
                      leading-7
                    hover:bg-gray-50"
                      >
                        ތާރީޚް
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {...mlists.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block 
                            rounded-lg 
                            py-2 pl-6 
                            pr-3 text-sm
                            font-semibold
                            leading-7
                           text-gray-900
                           hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                {navMenus.map((navMenu) => (
                  <a
                    key={navMenu.dhiName}
                    href="#"
                    className="-mx-3 block 
                  rounded-lg px-3 
                  py-2 text-base 
                  font-semibold 
                  cursor-pointer
                  leading-7
                text-gray-900
                 hover:bg-gray-50"
                  >
                    {navMenu.dhiName}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default NavMenu;
