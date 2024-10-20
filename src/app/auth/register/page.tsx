import AuthForm from "@/components/auth/AuthForm";

export default function RegisterPage() {
  return (
    <div className=" flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold ">Create your account</h2>
        </div>
        <AuthForm type="register" />
      </div>
    </div>
  );
}
