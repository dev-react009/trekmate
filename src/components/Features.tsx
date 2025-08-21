import { Card, Badge, Button, Tabs, Tab } from "@heroui/react";
import {
  MapPin,
  Compass,
  Users,
  Mountain,
  Camera,
  Trophy,
  Smartphone,
  Globe,
  Shield,
  Zap,
} from "lucide-react";

export function EnhancedFeatures() {
  const featureCategories = {
    navigation: {
      icon: Compass,
      features: [
        {
          icon: MapPin,
          title: "Offline Maps",
          desc: "Download detailed topographic maps for offline use",
        },
        {
          icon: Compass,
          title: "GPS Tracking",
          desc: "Real-time location tracking with breadcrumb trails",
        },
        {
          icon: Zap,
          title: "Route Planning",
          desc: "AI-powered route suggestions based on difficulty and weather",
        },
        {
          icon: Shield,
          title: "Safety Features",
          desc: "Emergency SOS and location sharing with contacts",
        },
      ],
    },
    social: {
      icon: Users,
      features: [
        {
          icon: Users,
          title: "Hiking Groups",
          desc: "Find and join local hiking communities",
        },
        {
          icon: Camera,
          title: "Photo Sharing",
          desc: "Share your adventure photos with geotagging",
        },
        {
          icon: Trophy,
          title: "Achievements",
          desc: "Earn badges for completing trails and challenges",
        },
        {
          icon: Globe,
          title: "Global Community",
          desc: "Connect with hikers worldwide",
        },
      ],
    },
    tracking: {
      icon: Mountain,
      features: [
        {
          icon: Mountain,
          title: "Peak Logging",
          desc: "Track and log all your summit achievements",
        },
        {
          icon: Smartphone,
          title: "Fitness Metrics",
          desc: "Monitor elevation gain, distance, and calories",
        },
        {
          icon: Trophy,
          title: "Personal Records",
          desc: "Set and track your hiking personal bests",
        },
        {
          icon: Shield,
          title: "Progress Analytics",
          desc: "Detailed insights into your hiking progress",
        },
      ],
    },
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="shadow" className="mb-4">
            Features
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            Everything you need for epic adventures
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tools and features designed by hikers, for hikers.
            From planning to tracking, we've got you covered.
          </p>
        </div>

        {/* Tabs */}
        <Tabs
          aria-label="Feature categories"
          variant="underlined"
          color="primary"
          className="w-full"
        >
          {Object.entries(featureCategories).map(([key, category]) => (
            <Tab
              key={key}
              title={
                <div className="flex items-center gap-2">
                  <category.icon className="h-4 w-4  text-[#38e078]" />
                  <span className="capitalize">{key}</span>
                </div>
              }
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                {category.features.map((feature, index) => (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 shadow-md"
                  >
                    <div className="w-12 h-12 bg-[#38e078]/10 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-[#38e078]" />
                    </div>
                    <h3 className="text-lg mb-2 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </Card>
                ))}
              </div>
            </Tab>
          ))}
        </Tabs>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-[#38e078] hover:bg-[#32c96d] text-white">
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  );
}
