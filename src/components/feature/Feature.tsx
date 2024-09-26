import { ArrowDown, Monitor, ThumbsUp, Shield } from 'lucide-react'
import { ReactNode } from 'react'

export default function Feature() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-purple-600 text-center">
        Download Instagram Video and Photo
      </h1>
      
      <p className="text-center text-gray-700">
        Downloading videos from Instagram in just two clicks is possible without compromising on quality. Avoid using
        unreliable applications and appreciate the videos, even if they are of lower quality.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FeatureCard 
          icon={<ArrowDown className="w-8 h-8 text-white" />}
          title="Fast download"
          description="Our servers are optimized to provide you with the fastest download speeds."
        />
        <FeatureCard 
          icon={<Monitor className="w-8 h-8 text-white" />}
          title="Support for all devices"
          description="Whether you're on a mobile, tablet, or desktop, FastDl has got you covered."
        />
        <FeatureCard 
          icon={<ThumbsUp className="w-8 h-8 text-white" />}
          title="High quality"
          description="Download Instagram content in its original quality without any loss."
        />
        <FeatureCard 
          icon={<Shield className="w-8 h-8 text-white" />}
          title="Security"
          description="We prioritize your privacy. No login required and all downloads are processed securely."
        />
      </div>
    </div>
  )
}

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-start space-y-2">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
        {icon}
      </div>
      <h2 className="text-2xl font-semibold text-purple-600">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}