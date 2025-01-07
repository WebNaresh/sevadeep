import Image from "next/image";
import LoginForm from "../_components/login-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid  md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="block order-2 md:order-1 relative h-[300px] md:h-[400px]">
            <Image
              src="/images/login.png"
              alt="People donating items illustration"
              width={600}
              height={600}
              className="w-full"
              priority
            />
          </div>
          <div className="w-full max-w-md mx-auto">
            <LoginForm />
          </div>
        </div>
      </main>
    </div>
  );
}
