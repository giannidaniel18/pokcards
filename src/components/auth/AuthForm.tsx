"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import DividerWithLabel from "../ui/DividerWithLabel";
import { FcGoogle } from "react-icons/fc";

import { useGoogleLogin } from "@react-oauth/google";
import Link from "next/link";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const registerSchema = loginSchema
  .extend({
    confirmPassword: z.string().min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export default function AuthForm({ type }: { type: "login" | "register" }) {
  const [loading, setLoading] = useState(false);
  const isLogin = type === "login";
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(isLogin ? loginSchema : registerSchema),
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      if (isLogin) {
        // Call login API
      } else {
        // Call register API
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Input
          {...register("email")}
          id="email"
          type="email"
          placeholder="Email address"
          // className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
        />
        {errors.email && <span className="text-red-600">{String(errors.email.message)}</span>}
      </div>

      <div>
        <Input
          {...register("password")}
          placeholder="Password"
          id="password"
          type="password"
          // className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
        />
        {errors.password && <span className="text-red-600">{String(errors.password.message)}</span>}
      </div>

      {!isLogin && (
        <div>
          <Input
            {...register("confirmPassword")}
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            // className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
          />
          {errors.confirmPassword && <span className="text-red-600">{String(errors.confirmPassword.message)}</span>}
        </div>
      )}

      <Button
        type="submit"
        variant={"default"}
        className="w-full rounded-md shadow-sm"
        // className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        disabled={loading}
      >
        {loading ? "Submitting..." : isLogin ? "Login" : "Register"}
      </Button>
      {type === "login" && (
        <div className="flex flex-row gap-2 justify-between">
          <Link href="/auth/register" className="text-center text-sm text-primary-500 underline">
            Don&apos;t have an account?
          </Link>

          <Link href="/auth/register" className="text-center text-sm text-primary-500 underline">
            forgot password
          </Link>
        </div>
      )}
      <DividerWithLabel label="Or continue whith" />
      <Button
        type="button"
        variant={"outline"}
        className="w-full rounded-md shadow-sm space-x-4"
        size={"lg"}
        onClick={() => login()}
      >
        <FcGoogle size={30} className="p-1" />
        Gmail
      </Button>
    </form>
  );
}
