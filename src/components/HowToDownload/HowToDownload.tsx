import { Copy, ClipboardPaste, Download } from 'lucide-react'
import Image from 'next/image'

export default function InstagramDownloadGuide() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-purple-600 text-center mb-12">
        HOW TO DOWNLOAD VIDEO FROM INSTAGRAM?
      </h1>
      
      <div className="space-y-16 relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-pink-200" />
        
        <Step
          number={1}
          title="Copy the URL"
          description="To get started, access either the Instagram app or website and retrieve the link to the specific video, reels, carousel, or IGTV content that you want to copy."
          icon={<Copy className="w-6 h-6" />}
        >
          <div className="relative bg-white rounded-lg shadow-md p-4">
            <div className="absolute -top-3 -right-3 bg-purple-600 text-white rounded-full p-2">
              <Copy className="w-4 h-4" />
            </div>
            <Image
              src="/images/copylink.png"
              alt="Instagram post example"
              width={300}
              height={150}
              className="rounded-md"
            />
          </div>
        </Step>
        
        <Step
          number={2}
          title="Paste the link"
          description='Return to the Igram website, paste the link into the input field at the top of the screen and click the "Download" button.'
          icon={<ClipboardPaste className="w-6 h-6" />}
        >
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg p-4 text-white">
            <h3 className="text-xl font-semibold mb-4">Instagram Downloader</h3>
            <div className="flex bg-white rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="https://www.instagram.com/photo_..."
                className="flex-grow p-2 text-gray-800"
              />
              <button className="bg-blue-500 text-white px-4 py-2">
                Download
              </button>
            </div>
          </div>
        </Step>
        
        <Step
          number={3}
          title="Download"
          description="In no time at all, you'll receive a list of results that offer various quality options. Choose the option that best suits your requirements and download it."
          icon={<Download className="w-6 h-6" />}
          isLast={true}
        >
          <div className="flex space-x-2 items-center">
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
          <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md">
            Download
          </button>
        </Step>
      </div>
    </div>
  )
}

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  isLast?: boolean;
}

function Step({ number, title, description, icon, children, isLast = false }: StepProps) {
  return (
    <div className={`flex items-start space-x-8 ${isLast ? 'pb-0' : 'pb-16'}`}>
      <div className="relative flex-shrink-0">
        <div className="w-16 h-16 rounded-full bg-pink-400 flex items-center justify-center text-white text-2xl font-bold z-10 relative">
          {number}
        </div>
        {isLast && (
          <div className="absolute left-1/2 top-full bottom-0 w-0.5 bg-white" style={{ transform: 'translateX(-50%)' }} />
        )}
      </div>
      <div className="space-y-4 flex-grow">
        <h2 className="text-2xl font-semibold flex items-center space-x-2">
          <span>{title}</span>
          {icon}
        </h2>
        <p className="text-gray-600">{description}</p>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  )
}