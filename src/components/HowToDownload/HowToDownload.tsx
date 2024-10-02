import { Copy, ClipboardPaste, Download } from "lucide-react";
import Image from "next/image";

export default function InstagramDownloadGuide() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 p-2 md:p-6">
      <h1 className="mb-12 text-center text-4xl font-bold text-purple-600">
        HOW TO DOWNLOAD VIDEO FROM INSTAGRAM?
      </h1>

      <div className="relative space-y-16">
        <div className="absolute bottom-0 left-5 top-0 w-0.5 bg-pink-200" />

        <Step
          number={1}
          title="Copy the URL"
          description="To get started, access either the Instagram app or website and retrieve the link to the specific video, reels, carousel, or IGTV content that you want to copy."
          icon={<Copy className="h-6 w-6" />}
        >
          <div className="relative rounded-lg bg-white p-4 shadow-md">
            <div className="absolute -right-3 -top-3 rounded-full bg-purple-600 p-2 text-white">
              <Copy className="h-4 w-4" />
            </div>
            <Image
              src="/images/copylink.png"
              alt="Instagram post example"
              width={300} // default size for larger screens
              height={150}
              className="h-24 w-48 rounded-md md:h-36 md:w-72" // Dynamic sizes
            />
          </div>
        </Step>

        <Step
          number={2}
          title="Paste the link"
          description='Return to the Instagram website, paste the link into the input field at the top of the screen and click the "Download" button.'
          icon={<ClipboardPaste className="h-6 w-6" />}
        >
          <div className="rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 p-4 text-white">
            <h3 className="mb-4 text-xl font-semibold">Instagram Downloader</h3>
            <div className="flex flex-col overflow-hidden rounded-md bg-white md:flex-row">
              <input
                type="text"
                placeholder="https://www.instagram.com/photo_..."
                className="flex-grow p-2 text-gray-800"
              />
              <button className="bg-blue-500 px-4 py-2 text-white">
                Download
              </button>
            </div>
          </div>
        </Step>

        <Step
          number={3}
          title="Download"
          description="In no time at all, you'll receive a list of results that offer various quality options. Choose the option that best suits your requirements and download it."
          icon={<Download className="h-6 w-6" />}
          isLast={true}
        >
          <div className="flex  items-center space-x-2 md:flex-row">
            <Image
              src="/images/copylink.png"
              alt="Thumbnail 1"
              width={100}
              height={100}
              className="rounded-md"
            />
            <Image
              src="/images/copylink.png"
              alt="Thumbnail 2"
              width={100}
              height={100}
              className="rounded-md"
            />
            <Image
              src="/images/copylink.png"
              alt="Thumbnail 3"
              width={100}
              height={100}
              className="rounded-md"
            />
          </div>
          <button className="mt-4 rounded-md bg-blue-500 px-6 py-2 text-white">
            Download
          </button>
        </Step>
      </div>
    </div>
  );
}

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  isLast?: boolean;
}

function Step({
  number,
  title,
  description,
  icon,
  children,
  isLast = false,
}: StepProps) {
  return (
    <div
      className={`flex flex-col items-start space-x-8 md:flex-row ${
        isLast ? "pb-0" : "pb-16"
      }`}
    >
      <div className="relative mb-4 flex-shrink-0 md:mb-0">
        <div className="relative z-10 flex h-10 w-10  md:h-16 md:w-16 items-center justify-center rounded-full bg-pink-400 text-2xl font-bold text-white">
          {number}
        </div>
        {isLast && (
          <div
            className="absolute bottom-0 left-1/2 top-full w-0.5 bg-white"
            style={{ transform: "translateX(-50%)" }}
          />
        )}
      </div>
      <div className="flex-grow space-y-4">
        <h2 className="flex items-center space-x-2 text-2xl font-semibold">
          <span>{title}</span>
          {icon}
        </h2>
        <p className="text-gray-600">{description}</p>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}
