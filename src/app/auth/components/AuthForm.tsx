"use client";

import { useState } from "react";
import { Input, Button, Checkbox,addToast, } from "@heroui/react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@/utils/supabase";
import { Eye, EyeOff } from "lucide-react";

export default function AuthForm({ mode }: { mode: "signin" | "signup" }) {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleAuth = async () => {
    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) return alert(error.message);
      // alert("Check your email to confirm your account.");
       addToast({
            title: "Alert",
            description: "Check your email to confirm your account.",
            timeout: 3000,
            shouldShowTimeoutProgress: true,
          });
      router.push("/auth/signin");
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) return alert(error.message);
      router.push("/dashboard");
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center">
        {mode === "signup" ? "Create an account" : "Welcome back"}
      </h2>

      <Input
        type="email"
        variant="bordered"
        // label="Email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className=" bg-[#0c1025]/100   rounded"
        classNames={{
            input: " pl-5 h-10"
        }}
      />

     <div className="relative w-full"> 
       <Input
        type={showPassword?"text":"password"}
        variant="bordered"
        // label="Password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
         className=" bg-[#0c1025]/100   rounded"
        classNames={{
            input: " pl-5 h-10"
        }}
      />
       <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white"
      >
        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>

      </div>

      {mode === "signup" && (
        <div className="flex items-center space-x-2  justify-content-center">
          <Checkbox
            classNames={{
              base: "appearance-none",
              wrapper:"border border-red-700 flex items-center mr-3",
              icon:"flex items-center justify-content-center"
              
            }}
            className=" flex items-center justify-content-center "
            id="terms"
            size="sm"
          >
            
            I agree to the
            <a href="#" className="text-indigo-400 hover:underline">
              Terms & Conditions
            </a>
          </Checkbox>
        </div>
      )}

      <Button
        onPress={handleAuth}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl py-2"
      >
        {mode === "signup" ? "Create Account" : "Sign In"}
      </Button>

      <p className="text-center text-gray-400 text-sm">
        {mode === "signup"
          ? "Already have an account?"
          : "Dont&apos;have an account?"}{" "}
        <a
          href={mode === "signup" ? "/auth/signin" : "/auth/signup"}
          className="text-indigo-400 hover:underline"
        >
          {mode === "signup" ? "Sign In" : "Sign Up"}
        </a>
      </p>

      <div className="flex gap-4">
        <Button variant="bordered" className="flex-1">
          Google
        </Button>
        <Button variant="bordered" className="flex-1">
          Apple
        </Button>
      </div>
    </div>
  );
}
