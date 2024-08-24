"use client"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ClipboardIcon, ShareIcon } from '@heroicons/react/24/outline'
import { FacebookIcon, FacebookMessengerShareButton, FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from 'next-share';
import React from 'react'

interface ShareButtonProps {
  title: string;
  url: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ title, url }) => {
  return (
    <div className='pr-5'>
      <Menu>
        <MenuButton>
          <div className='group relative'>
            <div className='absolute bottom-[110%] hidden -translate-x-4 animate-fade-in-2 group-hover:flex bg-black/70 rounded-lg px-3 py-1'>
              <span className='text-white text-xs'>Share</span>
            </div>
            <ShareIcon className='cursor-pointer' width={20} height={20} />
          </div>
        </MenuButton>
        <MenuItems anchor="bottom end" className={"origin-top-left flex flex-col bg-white drop-shadow-2xl border rounded-md min-w-[200px] transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"} transition>
          <MenuItem>
            <div onClick={() => navigator.clipboard.writeText(url)} className="border-b cursor-pointer gap-3 flex items-center px-5 py-3 data-[focus]:bg-blue-100">
              <ClipboardIcon className='' width={20} height={20} />
              <p className='text-sm'>
                Copy Link
              </p>
            </div>
          </MenuItem>

          <MenuItem>
            <WhatsappShareButton
              url={url}
              title={title}
              separator=":: ">
              <div className='cursor-pointer gap-3 flex items-center px-5 py-3 data-[focus]:bg-blue-100'>
                <div className='w-[24px] h-[24px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                    <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"></path>
                  </svg>
                </div>
                <p className='text-sm'>Share on Whatsapp</p>
              </div>
            </WhatsappShareButton>
          </MenuItem>

          <MenuItem>
            <FacebookShareButton
              url={url}
              quote={title}
            >
              <div className='cursor-pointer gap-3 flex items-center px-5 py-3 data-[focus]:bg-blue-100'>
                <div className='w-[24px] h-[24px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
                  </svg>
                </div>
                <p className='text-sm'>Share on Facebook</p>
              </div>
            </FacebookShareButton>
          </MenuItem>
          <MenuItem>
            <TwitterShareButton
              url={url}
              title={title}>
              <div className='cursor-pointer gap-3 flex items-center px-5 py-3 data-[focus]:bg-blue-100'>
                <div className='w-[24px] h-[24px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                    <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
                  </svg>
                </div>
                <p className='text-sm'>Share on X</p>
              </div>
            </TwitterShareButton>
          </MenuItem>
          <MenuItem>
            <LinkedinShareButton
              url={url}>
              <div className='cursor-pointer gap-3 flex items-center px-5 py-3 data-[focus]:bg-blue-100'>
                <div className='w-[24px] h-[24px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z"></path>
                  </svg>
                </div>
                <p className='text-sm'>Share on LinkedIn</p>
              </div>
            </LinkedinShareButton>
          </MenuItem>

        </MenuItems>
      </Menu >
    </div >
  )
}

export default ShareButton