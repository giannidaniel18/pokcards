import AuthForm from "@/components/auth/AuthForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className=" flex flex-col items-center justify-center gap-5">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold ">Sign in to your account</h2>
        </div>

        <AuthForm type="login" />
      </div>
    </div>
  );
}
