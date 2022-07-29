/* eslint-disable react/jsx-no-bind */
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Appbar from '@components/common/Appbar'
import Sidebar from '@components/common/sidebar/Sidebar'

function AppbarandSidebar() {
  const [open, setOpen] = useState(false)

  const onOpen = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Appbar open={onOpen} />
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10 md:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* Overlay */}
            <div className="fixed inset-0 bg-gray-700 bg-opacity-80 tansition-opacity" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="fixed inset-y-0 left-0 flex max-w-full">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-700"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel>
                    <Sidebar close={onClose} />
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default AppbarandSidebar
