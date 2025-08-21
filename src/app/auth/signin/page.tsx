// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { createClientComponentClient } from "@/utils/supabase";
// import { Input } from "@heroui/react";

// interface Props {
//   onSwitch: () => void;
// }

// export default function SignInPage({ onSwitch }: Props) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();
//   const supabase = createClientComponentClient();

//   const handleSignin = async () => {
//     const { error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });
//     if (error) {
//       alert(error.message);
//     } else {
//       router.push("/dashboard");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black">
//       <div className="w-full max-w-sm space-y-6 p-8 rounded-2xl shadow-2xl bg-zinc-950/80 backdrop-blur-xl border border-zinc-800">
//         {/* Title */}
//         <h2 className="text-3xl font-bold text-center text-white">
//           Welcome Back 👋
//         </h2>
//         <p className="text-sm text-zinc-400 text-center">
//           Sign in to continue your journey
//         </p>

//         {/* Inputs */}
//         <Input
//           type="email"
//           placeholder="Email"
//           variant="bordered"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="text-white"
//         />
//         <Input
//           type="password"
//           placeholder="Password"
//           variant="bordered"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="text-white"
//         />

//         {/* Sliding Button */}
//         <button
//           onClick={handleSignin}
//           className="relative w-full py-3 rounded-xl overflow-hidden font-semibold text-white group"
//         >
//           <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
//           <span className="relative z-10">Sign In</span>
//         </button>

//         {/* Switch to Signup */}
//         <p className="text-sm text-center text-zinc-400">
//           Don&apos;t have an account?{" "}
//           <button
//             onClick={onSwitch}
//             className="text-indigo-400 hover:underline transition"
//           >
//             Sign up
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }


import AuthContainer from "../components/AuthContainer";
import AuthForm from "../components/AuthForm";

export default function SignInPage() {
  return (
    <AuthContainer mode="signin">
      <AuthForm mode="signin" />
    </AuthContainer>
  );
}
