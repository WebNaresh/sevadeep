"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { JSX, useState } from "react";

interface DonationFormProps {
  initialAmount: number;
  buttonComp: JSX.Element;
}

export default function DonationForm({
  initialAmount,
  buttonComp,
}: DonationFormProps) {
  const [amount, setAmount] = useState(initialAmount.toString());
  const [wantReceipt, setWantReceipt] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [tipPercentage, setTipPercentage] = useState("16");

  const tipAmount =
    (parseInt(amount.replace(",", "")) * parseInt(tipPercentage)) / 100;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted", {
      amount,
      wantReceipt,
      isAnonymous,
      tipPercentage,
    });
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>{buttonComp}</DialogTrigger>
        <DialogContent>
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Make a secure donation
            </h2>
            <div className="space-y-6">
              {/* Amount Section */}
              <div className="bg-[#8E354A] text-white p-4 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-white/70 mb-1 block">Currency</Label>
                    <Select defaultValue="INR">
                      <SelectTrigger className="border-white/20 bg-transparent text-white">
                        <SelectValue placeholder="₹ INR" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="INR">₹ INR</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-white/70 mb-1 block">Amount</Label>
                    <Input
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="border-white/20 bg-transparent text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Tax Benefit Notice */}
              <div className="bg-yellow-50 p-3 rounded-md text-sm">
                For this contribution, you will be eligible for tax exemption
                benefit.
              </div>

              {/* Tip Section */}
              <div className="bg-gray-50 p-4 rounded-md space-y-3">
                <p className="text-sm text-gray-600">
                  Sevadeep Foundation charges NO fees. We rely on donors like
                  you to cover for our expenses. Kindly consider a tip. Thank
                  you 🙏
                </p>
                <Select value={tipPercentage} onValueChange={setTipPercentage}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select tip percentage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="16">16% (₹ {tipAmount}.00)</SelectItem>
                    <SelectItem value="12">
                      12% (₹ {(parseInt(amount.replace(",", "")) * 12) / 100}
                      .00)
                    </SelectItem>
                    <SelectItem value="8">
                      8% (₹ {(parseInt(amount.replace(",", "")) * 8) / 100}
                      .00)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Personal Information */}
              <div className="space-y-4">
                <div>
                  <Label>Name</Label>
                  <Input placeholder="Enter your name" />
                </div>

                <div className="grid grid-cols-[80px_1fr] gap-2">
                  <Select defaultValue="+91">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="+91">+91</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input placeholder="Phone number" />
                </div>

                <div>
                  <Label>Email id</Label>
                  <Input type="email" placeholder="Enter your email" />
                </div>
              </div>

              {/* Tax Receipt Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Do you want to receive tax exemption receipt?</Label>
                  <Switch
                    checked={wantReceipt}
                    onCheckedChange={setWantReceipt}
                  />
                </div>

                {wantReceipt && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="PAN Number" />
                      <Input placeholder="Address" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="City" />
                      <Input placeholder="State" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="Pincode" />
                      <Input value="India" disabled />
                    </div>
                  </div>
                )}
              </div>

              {/* Anonymous Donation */}
              <div className="flex items-center justify-between">
                <Label>Donate anonymously</Label>
                <Switch
                  checked={isAnonymous}
                  onCheckedChange={setIsAnonymous}
                />
              </div>
            </div>
            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full mt-6 bg-[#8E354A] hover:bg-[#8E354A]/90"
            >
              Continue to pay ₹ {parseInt(amount.replace(",", "")) + tipAmount}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
