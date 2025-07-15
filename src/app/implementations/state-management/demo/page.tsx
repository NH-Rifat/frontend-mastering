import ComingSoonDemo from "@/components/ui/ComingSoonDemo";

export default function StateManagementDemo() {
  return (
    <ComingSoonDemo
      title="State Management"
      emoji="🏗️"
      description="This demo will showcase comprehensive examples using Zustand, Redux Toolkit, and Jotai for different use cases."
      features={[
        {
          title: "Zustand Examples",
          description: "Lightweight state management with minimal boilerplate",
          emoji: "⚡"
        },
        {
          title: "Redux Toolkit",
          description: "Modern Redux patterns with RTK Query integration",
          emoji: "🔄"
        },
        {
          title: "Jotai Patterns",
          description: "Atomic state management for complex applications",
          emoji: "⚛️"
        },
        {
          title: "Performance Comparison",
          description: "Side-by-side comparison of different state solutions",
          emoji: "📊"
        }
      ]}
      conceptSlug="state-management"
    />
  );
}
