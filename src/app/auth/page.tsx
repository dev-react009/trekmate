// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Input, Button, Checkbox } from "@heroui/react";
// import { useRouter } from "next/navigation";
// import { createClientComponentClient } from "@/utils/supabase";

// export default function AuthPage() {
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();
//   const supabase = createClientComponentClient();

//   const handleAuth = async () => {
//     if (isSignUp) {
//       const { error } = await supabase.auth.signUp({ email, password });
//       if (error) return alert(error.message);
//       alert("Check your email to confirm your account.");
//       setIsSignUp(false);
//     } else {
//       const { error } = await supabase.auth.signInWithPassword({ email, password });
//       if (error) return alert(error.message);
//       router.push("/dashboard");
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gradient-to-br from-[#0f0f1a] to-[#1c1c2a] text-white">
//       {/* Left Panel */}
//       <div className="hidden md:flex flex-1 flex-col items-center justify-center p-10 bg-gradient-to-br from-purple-800/50 to-indigo-800/50 rounded-r-2xl">
//         <h1 className="text-4xl font-bold mb-4">Capturing Moments, Creating Memories</h1>
//         <p className="text-gray-300 text-lg">Your journey starts here. Sign in or create an account to continue.</p>
//       </div>

//       {/* Right Panel */}
//       <motion.div
//         key={isSignUp ? "signup" : "signin"}
//         initial={{ x: 100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         exit={{ x: -100, opacity: 0 }}
//         transition={{ duration: 0.4 }}
//         className="flex-1 flex items-center justify-center p-8"
//       >
//         <div className="w-full max-w-md space-y-6 bg-[#1c1c2a]/70 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-gray-700">
//           <h2 className="text-2xl font-semibold text-center">
//             {isSignUp ? "Create an account" : "Welcome back"}
//           </h2>

//           <Input
//             type="email"
//             variant="bordered"
//             label="Email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <Input
//             type="password"
//             variant="bordered"
//             label="Password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           {isSignUp && (
//             <Checkbox defaultSelected>
//               I agree to the <span className="text-indigo-400">Terms & Conditions</span>
//             </Checkbox>
//           )}

//           <Button
//             onClick={handleAuth}
//             className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl py-2"
//           >
//             {isSignUp ? "Create Account" : "Sign In"}
//           </Button>

//           {/* Toggle link */}
//           <p className="text-center text-gray-400 text-sm">
//             {isSignUp ? "Already have an account?" : "Don’t have an account?"}{" "}
//             <button
//               onClick={() => setIsSignUp(!isSignUp)}
//               className="text-indigo-400 hover:underline"
//             >
//               {isSignUp ? "Sign In" : "Sign Up"}
//             </button>
//           </p>

//           {/* Social login */}
//           <div className="flex gap-4">
//             <Button variant="bordered" className="flex-1">
//               Google
//             </Button>
//             <Button variant="bordered" className="flex-1">
//               Apple
//             </Button>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }


import { redirect } from "next/navigation";

export default function AuthIndexPage() {
  redirect("/auth/signin");
}

