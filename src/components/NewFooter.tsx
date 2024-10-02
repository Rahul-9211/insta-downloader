import Link from 'next/link'

export default function NewFooter() {
  return (
    <footer className="bg-gradient-to-b from-pink-500 to-purple-600 text-white py-8 ">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              {/* <li><Link href="/about" className="hover:underline">About Us</Link></li> */}
              {/* <li><Link href="/contact" className="hover:underline">Contact</Link></li> */}
              <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="/terms-of-srvice" className="hover:underline">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="hover:underline">blogs</Link></li>
              {/* <li><Link href="/photo" className="hover:underline">Photo Downloader</Link></li>
              <li><Link href="/story" className="hover:underline">Story Downloader</Link></li>
              <li><Link href="/reels" className="hover:underline">Reels Downloader</Link></li>
              <li><Link href="/igtv" className="hover:underline">IGTV Downloader</Link></li> */}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Disclaimer</Link></li>
              <li><Link href="#" className="hover:underline">Copyright Notice</Link></li>
              <li><Link href="#" className="hover:underline">Cookie Policy</Link></li>
              {/* <li><Link href="#" className="hover:underline">GDPR Compliance</Link></li> */}
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Fast Blogs. All rights reserved.</p>
          {/* <p className="mt-2">We are not affiliated with Instagram or Meta</p> */}
        </div>
      </div>
    </footer>
  )
}