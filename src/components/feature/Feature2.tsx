import Image from 'next/image'

export default function Feature2() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-purple-600 mb-12">
        FastVideo Instagram Video Downloader Features
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          title="Photos Downloader"
          description="If you're looking for a way to save images from Instagram posts, then FastVideo's Instagram photo downloader is an excellent tool to consider. With FastVideo, you can download both individual post images and multiple Instagram photos from carousels."
          images={[
            'https://picsum.photos/200/300',
            '/placeholder.svg?height=100&width=200',
          ]}
        />
        <FeatureCard
          title="Story Downloader"
          description="Our Instagram story downloader is the perfect solution to save, view and reuse stories even after the 24-hour limit. Download your favorite stories in just a few clicks - no app required!"
          images={[
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300',
          ]}
        />
        <FeatureCard
          title="Video Downloader"
          description="FastVideo was designed to allow you to download Instagram video for any purpose that suits you. With FastVideo, you can download both individual video and multiple videos from carousels."
          images={['/placeholder.svg?height=150&width=300']}
          hasPlayIcon
        />
        <FeatureCard
          title="Reels Downloader"
          description="Reels is a recently introduced video format on Instagram that mimics the concept of TikTok. FastVideo can assist you in downloading Instagram Reels video through our Instagram Reel downloader, allowing you to save and watch your preferred Reels videos at any time."
          images={[
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300',
          ]}
        />
        <FeatureCard
          title="IGTV Downloader"
          description="IGTV video are typically lengthy, and if you don't have the time to watch them immediately, you can download them using FastVideo's IGTV downloader. This ensures that you can watch the videos later without needing an internet connection or worrying about the video being deleted."
          images={['https://picsum.photos/200/300']}
          hasPlayIcon
        />
        <FeatureCard
          title="Carousel Downloader"
          description="Instagram's Carousel posts, also referred to as Album or Gallery posts, allow users to share multiple photos, videos, or a combination of both. If you want to download multiple photos from an Instagram gallery, FastVideo is an excellent tool to use. Our platform provides the best solution for downloading Instagram galleries."
          images={[
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300',
          ]}
        />
      </div>
    </div>
  )
}

interface FeatureCardProps {
  title: string
  description: string
  images: string[]
  hasPlayIcon?: boolean
}

function FeatureCard({ title, description, images, hasPlayIcon = false }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 space-y-4">
        <div className="relative h-48 bg-gray-200 rounded-md overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`${title} example ${index + 1}`}
                width={100}
                height={100}
                className="object-cover"
              />
            ))}
            {hasPlayIcon && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white bg-opacity-75 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}