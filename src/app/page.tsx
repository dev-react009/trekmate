'use client'

import React from "react";
import Hero from "@/components/Hero";

import { EnhancedFeatures } from "@/components/Features";
import {Navigation}  from "@/components/Navigation";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQ";
import { TestimonialCarousel } from "@/components/Testimonial";
import Footer from "@/components/Footer";



// function FeaturesSection() {
//   const features = [
//     {
//       icon: MapPin,
//       title: "Trail Discovery",
//       description:
//         "Find and explore thousands of verified hiking trails worldwide",
//     },
//     {
//       icon: Compass,
//       title: "Smart Navigation",
//       description:
//         "GPS-powered navigation with offline maps and real-time tracking",
//     },
//     {
//       icon: Users,
//       title: "Community",
//       description:
//         "Connect with fellow hikers and share your adventures",
//     },
//     {
//       icon: Mountain,
//       title: "Peak Tracking",
//       description:
//         "Log your summits and track your mountaineering progress",
//     },
//   ];

//   return (
//     <section className="py-20 px-4 bg-white">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <Badge variant="outline" className="mb-4">
//             Features
//           </Badge>
//           <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
//             Everything you need for your next adventure
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Trekmate combines cutting-edge technology with
//             outdoor expertise to enhance your hiking experience
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => (
//             <Card
//               key={index}
//               className="p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-md"
//             >
//               <div className="w-16 h-16 bg-[#38e078]/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <feature.icon className="h-8 w-8 text-[#38e078]" />
//               </div>
//               <h3 className="text-xl mb-3 text-gray-900">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-600 leading-relaxed">
//                 {feature.description}
//               </p>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function TestimonialSection() {
//   return (
//     <section className="py-20 px-4 bg-gray-50">
//       <div className="max-w-4xl mx-auto text-center">
//         <Badge variant="outline" className="mb-4">
//           Testimonials
//         </Badge>
//         <h2 className="text-3xl md:text-4xl mb-8 text-gray-900">
//           Loved by adventurers worldwide
//         </h2>

//         <Card className="p-8 border-0 shadow-lg">
//           <div className="flex justify-center mb-4">
//             {[...Array(5)].map((_, i) => (
//               <Star
//                 key={i}
//                 className="h-5 w-5 text-yellow-400 fill-current"
//               />
//             ))}
//           </div>
//           <blockquote className="text-xl text-gray-700 mb-6 italic">
//             "Trekmate transformed my hiking experience. The
//             trail recommendations are spot-on, and the community
//             features helped me find amazing hiking buddies!"
//           </blockquote>
//           <div className="flex items-center justify-center">
//             <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
//             <div className="text-left">
//               <div className="text-gray-900">Sarah Johnson</div>
//               <div className="text-gray-500 text-sm">
//                 Mountain Guide
//               </div>
//             </div>
//           </div>
//         </Card>
//       </div>
//     </section>
//   );
// }

// function CTASection() {
//   return (
//     <section className="py-20 px-4 bg-gradient-to-r from-[#38e078] to-[#32c96d]">
//       <div className="max-w-4xl mx-auto text-center text-white">
//         <h2 className="text-3xl md:text-4xl mb-4">
//           Ready to start your adventure?
//         </h2>
//         <p className="text-xl mb-8 opacity-90">
//           Join thousands of hikers who trust Trekmate for their
//           outdoor adventures
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <Button
//             size="lg"
//             variant="secondary"
//             className="bg-white text-[#38e078] hover:bg-gray-100 px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
//           >
//             Download for iOS
//           </Button>
//           <Button
//             size="lg"
//             variant="outline"
//             className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl transition-all duration-300"
//           >
//             Download for Android
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation/>
      <Hero />
      <EnhancedFeatures/>
      <TestimonialCarousel />
      <PricingSection/>
      <FAQSection/>
      <Footer />
    </div>
  );
}

