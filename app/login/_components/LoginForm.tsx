"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function LoginForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [isOtpRequested, setIsOtpRequested] = useState(false);

  const handleRequestOtp = () => {
    if (phoneNumber.length === 10) {
      setIsOtpRequested(true);
      // Add OTP request logic here
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add login logic here
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl">NGO Login</CardTitle>
        <p className="text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="text-primary hover:underline">
            Sign Up
          </Link>
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Input
              type="tel"
              placeholder="10 Digit Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              maxLength={10}
              className="pr-24"
            />
            <Button
              type="button"
              variant="link"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-primary"
              onClick={handleRequestOtp}
              disabled={phoneNumber.length !== 10}
            >
              Request OTP
            </Button>
          </div>

          <div className="relative">
            <Input
              type={showOtp ? "text" : "password"}
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              disabled={!isOtpRequested}
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2"
              onClick={() => setShowOtp(!showOtp)}
            >
              {showOtp ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </Button>
          </div>

          <Link
            href="/forgot-password"
            className="block text-sm text-primary hover:underline"
          >
            Forgot password?
          </Link>

          <Button type="submit" className="w-full bg-primary" size="lg">
            Sign In
          </Button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-background px-2 text-muted-foreground">
                or
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full">
              NGO Sign up
            </Button>
            <Button variant="outline" className="w-full">
              About us
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            Protected by reCAPTCHA and subject to the Sevadeep{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="text-primary hover:underline">
              Terms of Service
            </Link>
            .
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
