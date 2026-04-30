import {  FaTruck } from 'react-icons/fa'
import { FaShield } from 'react-icons/fa6'
import { FiRefreshCw } from 'react-icons/fi'
import { RiCustomerServiceFill } from 'react-icons/ri'

export default function CardsFooter() {
  return <>
   <div className="bg-[#F9FAFB] py-8">
          <div className="mx-auto w-full lg:w-[90%] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4 items-center ">
            <div className="flex items-center gap-3 bg-white p-4 rounded-[12px]">
              <div className="size-12 bg-[#DCFCE7] flex justify-center items-center rounded-[12px]">
                <FaTruck className="text-[22.5px] text-[#16A34A]" />
              </div>
              <div>
                <p className="text-[#1E2939] font-['Font_1'] font-semibold text-[14px] leading-5 tracking-[0] align-middle">
                  Free Shipping
                </p>
                <span className="text-[#6A7282] font-['Font_1'] font-medium text-[12px] leading-4 tracking-[0] align-middle">
                  On orders over 500 EGP
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-[12px]">
              <div className="size-12  bg-[#DCFCE7] flex justify-center items-center rounded-[12px]">
                <FiRefreshCw className="text-[22.5px] text-[#16A34A]" />
              </div>
              <div>
                <p className="text-[#1E2939] font-['Font_1'] font-semibold text-[14px] leading-5 tracking-[0] align-middle">
                  Secure Payment
                </p>
                <span className="text-[#6A7282] font-['Font_1'] font-medium text-[12px] leading-4 tracking-[0] align-middle">
                  100% secure transactions
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-[12px]">
              <div className="size-12 bg-[#DCFCE7] flex justify-center items-center  rounded-[12px]">
                <FaShield className="text-[22.5px] text-[#16A34A]" />
              </div>
              <div>
                <p className="text-[#1E2939] font-['Font_1'] font-semibold text-[14px] leading-5 tracking-[0] align-middle">
                  Easy Returns
                </p>
                <span className="text-[#6A7282] font-['Font_1'] font-medium text-[12px] leading-4 tracking-[0] align-middle">
                  14-day return policy
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-[12px]">
              <div className="size-12 bg-[#DCFCE7] flex justify-center items-center  rounded-[12px]">
                <RiCustomerServiceFill  className="text-[22.5px] text-[#16A34A]" />
              </div>
              <div>
                <p className="text-[#1E2939] font-['Font_1'] font-semibold text-[14px] leading-5 tracking-[0] align-middle">
                  24/7 Support
                </p>
                <span className="text-[#6A7282] font-['Font_1'] font-medium text-[12px] leading-4 tracking-[0] align-middle">
                  Dedicated support team
                </span>
              </div>
            </div>
          </div>
        </div>
  
  
  </>
}
