import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog as HeadLessDialog, Transition } from '@headlessui/react'
import Button from '../button'

export default function Modal({
  open = false,
  onClose = () => {},
}) {
  
  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <HeadLessDialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <HeadLessDialog.Panel className="relative transform overflow-hidden rounded-[20px] bg-light text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                {/* BODY */}
                <div className="bg-light px-4 pt-5 pb-4 sm:p-6 sm:pb-4 max-w-[485px] mx-auto">
                  <h1 className='text-center font-gordita font-bold max-w-[333px] mx-auto md:text-[30px] text-[20px]'>Welcome to the new home of Yellow Pages</h1>
                  <p className='my-4 text-center font-gordita font-light text-[14px]'>Take a look around and experience all the awesome features and services offered by Yellow Pages, right here on Yep! Marketplace. </p>
                </div>
                {/* FOOTER */}
                <div className="bg-gray-50 px-4 sm:flex justify-center py-8 sm:px-6">
                  <Button className='mx-2'>Learn More</Button>
                  <Button className='mx-2' variant='secondary'>Continue</Button>
                </div>
              </HeadLessDialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </HeadLessDialog>
    </Transition.Root>
  )
}
