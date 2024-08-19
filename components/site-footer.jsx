import siteLogo from '@/assets/acu-learn-logo.png';
import appstore from '@/assets/app-store.svg';
import playstore from '@/assets/google-play.svg';
import payment from '@/assets/payments.jpg';
import msstore from '@/assets/win-store.svg';
import { cn } from "@/lib/utils";
import { Mail, MapPinned } from 'lucide-react';
import Image from "next/image";
import Link from 'next/link';

export function SiteFooter({ className }) {
  return (
    <footer className={cn(className)}>
      <div className='container py-7'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className='col-1'>
            <Image
              src={siteLogo}
              alt="logo"
              className='w-28'
            />
            <p className='mt-2'>Online live skill <br /> development platform.</p>
            <h4 className='font-medium text-xl mt-4 mb-1'>Download ACU App</h4>
            <div className="grid grid-cols-3 gap-4">
              <a href='#' className="bg-gray-900 flex justify-center items-center py-2 rounded-sm">
                <Image
                  src={appstore}
                  alt="logo"
                />
              </a>
              <a href='#' className="bg-gray-900 flex justify-center items-center py-2 rounded-sm">
                <Image
                  src={msstore}
                  alt="logo"
                />
              </a>
              <a href='#' className="bg-gray-900 flex justify-center items-center py-2 rounded-sm">
                <Image
                  src={playstore}
                  alt="logo"
                />
              </a>
            </div>
          </div>
          <div className="col-2">
            <h3 className='text-xl font-semibold'>Quick link</h3>
            <ul className='mt-3'>
              <li className='mb-2'>
                <Link href="/about">About</Link>
              </li>
              <li className='mb-2'>
                <Link href="/courses">Courses</Link>
              </li>
              <li className='mb-2'>
                <Link href="/freecourses">Free Course</Link>
              </li>
              <li className='mb-2'>
                <Link href="/documentation">Documentation</Link>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h3 className='text-xl font-semibold'>Company</h3>
            <ul className='mt-3'>
              <li className='mb-2'>
                <Link href="/about">About</Link>
              </li>
              <li className='mb-2'>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li className='mb-2'>
                <Link href="#">Cookie</Link>
              </li>
              <li className='mb-2'>
                <Link href="#">Refound Policy</Link>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <h3 className='text-xl font-semibold'>Contact Us</h3>
            <ul className='mt-3'>
              <li className='mb-2'>
                <Link href="#" className='flex gap-x-2'>
                  <Mail />
                  <span>support@acu.app</span>
                </Link>
              </li>
              <li className='mb-2'>
                <Link href="#" className='flex gap-x-2'>
                  <MapPinned />
                  <span>Kha-3/4, Sabita Babhan, B-Bari Road,<br /> Gulshan-1, Dhaka-1212</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <div className='container'>
        <Image
          src={payment}
          alt="logo"
          className='w-full'
        />
      </div>
    </footer>
  );
}
