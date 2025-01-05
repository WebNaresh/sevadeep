import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/placeholder.svg" 
            alt="Sevadeep Logo" 
            width={150} 
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
          <Link href="/how-it-works" className="text-gray-600 hover:text-gray-900">How to Works</Link>
          <Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
          <Link href="/ngo" className="text-gray-600 hover:text-gray-900">NGO</Link>
          <Link href="/login" className="text-gray-600 hover:text-gray-900">Login</Link>
          <Button 
            className="bg-[#E84C3D] hover:bg-[#E84C3D]/90 text-white"
          >
            Sponsor a Meal
          </Button>
        </div>
      </div>
    </nav>
  )
}

