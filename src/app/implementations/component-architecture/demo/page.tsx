import ComingSoonDemo from "@/components/ui/ComingSoonDemo";

export default function ComponentArchitectureDemo() {
  return (
    <ComingSoonDemo
      title="Component Architecture"
      emoji="🧩"
      description="This demo will showcase scalable component patterns, composition strategies, and design system implementations."
      features={[
        {
          title: "Design System",
          description: "Complete design system with tokens, components, and patterns",
          emoji: "🎨"
        },
        {
          title: "Composition Patterns",
          description: "Advanced React composition patterns and HOCs",
          emoji: "🔗"
        },
        {
          title: "TypeScript Integration",
          description: "Type-safe component APIs and advanced TypeScript patterns",
          emoji: "📝"
        },
        {
          title: "Testing Strategies",
          description: "Component testing best practices and tools",
          emoji: "🧪"
        }
      ]}
      conceptSlug="component-architecture"
    />
  );
}
