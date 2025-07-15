import ComingSoonDemo from "@/components/ui/ComingSoonDemo";

export default function PerformanceDemo() {
  return (
    <ComingSoonDemo
      title="Performance Optimization"
      emoji="⚡"
      description="This demo will showcase bundle analysis, code splitting, and Core Web Vitals optimization techniques."
      features={[
        {
          title: "Bundle Analysis",
          description: "Interactive bundle size analysis and optimization tools",
          emoji: "📦"
        },
        {
          title: "Code Splitting",
          description: "Dynamic imports and route-based code splitting examples",
          emoji: "✂️"
        },
        {
          title: "Core Web Vitals",
          description: "Real-time monitoring and optimization of web vitals metrics",
          emoji: "📊"
        },
        {
          title: "Performance Monitoring",
          description: "Tools and techniques for continuous performance monitoring",
          emoji: "🔍"
        }
      ]}
      conceptSlug="performance"
    />
  );
}
