// import { X } from "lucide-react";
import Link from "next/link";

export default function NoContactsCard() {
  return (
    <div className="flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-md mx-4 bg-[#212121] rounded-xl overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-teal-500"></div>
        {/* <button className="absolute top-4 right-4 text-white hover:text-gray-300">
          <X className="w-6 h-6" />
        </button> */}

        <div className="p-6">
          <div className="flex justify-center mb-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-pink-500"
            >
              <path
                d="M12 3L14.5 8.5L20 9.5L16 13.5L17 19L12 16.5L7 19L8 13.5L4 9.5L9.5 8.5L12 3Z"
                fill="currentColor"
              />
              <path
                d="M12 3L14.5 8.5L20 9.5L16 13.5L17 19L12 16.5L7 19L8 13.5L4 9.5L9.5 8.5L12 3Z"
                fill="currentColor"
                filter="url(#filter0_f)"
              />
              <defs>
                <filter
                  id="filter0_f"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="2"
                    result="effect1_foregroundBlur"
                  />
                </filter>
              </defs>
            </svg>
          </div>

          <h2 className="mb-2 text-2xl font-bold text-center text-white">
            ¿No contacts?
          </h2>

          <p className="mb-6 text-sm text-center text-gray-400">
            Start building your personal network and keep your important
            contacts always within reach.
          </p>

          <div className="flex justify-center">
            <Link href="/create">
              <button className="px-4 py-2 text-sm font-medium text-white bg-[#303030] rounded-md hover:bg-[#3f3f3f] transition-colors">
                Create a Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
