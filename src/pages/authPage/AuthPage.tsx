import AuthForm from "@/components/AuthForm";

export default function AuthPage() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="p-0 py-5 flex items-center justify-center max-md:w-[60%] max-sm:w-[75%] max-[450px]:w-[100%]">
        {/* left-hand side */}
        <div className="hidden md:block">
          <img src="/auth.png" alt="phone img demo" className="h-[550px]" />
        </div>

        {/* right-hand side */}
        <div className="flex flex-col gap-y-4 justify-center grow-[1]">
          <AuthForm />
          <p className="text-center">Get the app</p>
          <div className="flex gap-4 justify-center">
            <img src="/playstore.png" alt="playstore logo" className="h-10" />
            <img src="/microsoft.png" alt="microsoft logo" className="h-10" />
          </div>
        </div>
      </div>
    </div>
  );
}
