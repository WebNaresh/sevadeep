'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Eye, EyeOff } from 'lucide-react'

export default function LoginForm() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [otp, setOtp] = useState('')
  const [showOtp, setShowOtp] = useState(false)
  const [otpRequested, setOtpRequested] = useState(false)

  const handleRequestOtp = () => {
    // Here you would typically make an API call to request OTP
    setOtpRequested(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically make an API call to verify OTP
    console.log('Login attempt with:', { phoneNumber, otp })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">NGO Login</h1>
        <p className="text-sm text-gray-500">
          Don't have an account?{' '}
          <Link href="/signup" className="text-[#E84C3D] hover:underline">
            Sign Up
          </Link>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <div className="relative">
            <Input
              type="tel"
              placeholder="10 Digit Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="pr-24"
              maxLength={10}
              pattern="[0-9]{10}"
              required
            />
            <Button
              type="button"
              variant="link"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-[#E84C3D]"
              onClick={handleRequestOtp}
            >
              Request OTP
            </Button>
          </div>
        </div>

        {otpRequested && (
          <div className="space-y-2">
            <div className="relative">
              <Input
                type={showOtp ? 'text' : 'password'}
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowOtp(!showOtp)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showOtp ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
            <div className="text-right">
              <Button
                type="button"
                variant="link"
                className="text-[#E84C3D] text-sm p-0"
              >
                Forgot password?
              </Button>
            </div>
          </div>
        )}

        <Button 
          type="submit"
          className="w-full bg-[#E84C3D] hover:bg-[#E84C3D]/90"
        >
          Sign In
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">or</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button
            type="button"
            variant="outline"
            className="w-full"
          >
            NGO Sign up
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full"
          >
            About us
          </Button>
        </div>
      </form>

      <p className="text-xs text-gray-500 text-center">
        Protected by reCAPTCHA and subject to the Sevadeep{' '}
        <Link href="/privacy" className="text-[#E84C3D] hover:underline">
          Privacy Policy
        </Link>
        {' '}and{' '}
        <Link href="/terms" className="text-[#E84C3D] hover:underline">
          Terms of Service
        </Link>
        .
      </p>
    </div>
  )
}

