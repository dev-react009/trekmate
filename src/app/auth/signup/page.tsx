// "use client";

// import { useState } from "react";
// import { createClientComponentClient } from "@/utils/supabase";
// import { Input, Button, Card, CardBody } from "@heroui/react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";

// interface props{
//     onSwitch:() => void
// }

// export default function SignUpPage({onSwitch}: props) {
//   const supabase = createClientComponentClient();
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignup = async () => {
//     const { error } = await supabase.auth.signUp({ email, password });
//     if (error) {
//       alert(error.message);
//     } else {
//       alert("Check your email to confirm your account.");
//       router.push("/signin");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black">
//       <motion.div
//         initial={{ y: -40, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="w-full max-w-md px-6"
//       >
//         <Card className="rounded-2xl shadow-2xl bg-zinc-950/80 backdrop-blur-xl border border-zinc-800">
//           <CardBody className="p-8 space-y-6">
//             {/* Header */}
//             <div className="text-center">
//               <h2 className="text-2xl font-bold text-white">Create Account</h2>
//               <p className="text-sm text-zinc-400 mt-2">
//                 Sign up to access your dashboard
//               </p>
//             </div>

//             {/* Email */}
//             <Input
//               placeholder="Email address"
//               type="email"
//               variant="bordered"
//               className="text-white"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             {/* Password */}
//             <Input
//               placeholder="Password"
//               type="password"
//               variant="bordered"
//               className="text-white"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />

//             {/* Button */}
//             <Button
//               onClick={handleSignup}
//               className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:opacity-90 transition"
//             >
//               Sign Up
//             </Button>

//             {/* Link to login */}
//             <p className="text-sm text-zinc-400 text-center">
//               Already have an account?{" "}
//               <button
//                  onClick={onSwitch}
//                 className="text-indigo-400 hover:underline"
//               >
//                 Sign in
//               </button>
//             </p>
//           </CardBody>
//         </Card>
//       </motion.div>
//     </div>
//   );
// }


import AuthContainer from "../components/AuthContainer";
import AuthForm from "../components/AuthForm";

export default function SignUpPage() {
  return (
    <AuthContainer mode="signup">
      <AuthForm mode="signup" />
    </AuthContainer>
  );
}
