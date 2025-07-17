interface StatusIconProps {
  status: string;
}

interface StatusConfig {
  icon: string;
  label: string;
  color: string;
  bg: string;
  iconBg: string;
}

export const StatusIcon = ({ status }: StatusIconProps) => {
  const statusConfig: Record<string, StatusConfig> = {
    complete: {
      icon: '✅',
      label: 'Complete',
      color: 'text-green-700',
      bg: 'bg-green-100',
      iconBg: '#22c55e',
    },
    'in-progress': {
      icon: '🔄',
      label: 'In Progress',
      color: 'text-orange-700',
      bg: 'bg-orange-100',
      iconBg: '#f97316',
    },
    draft: {
      icon: '📝',
      label: 'Coming Soon',
      color: 'text-gray-700',
      bg: 'bg-gray-100',
      iconBg: '#6b7280',
    },
  };

  const config = statusConfig[status as keyof typeof statusConfig];

  return {
    badge: (
      <div
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${config.bg} ${config.color}`}
      >
        <span>{config.icon}</span>
        <span>{config.label}</span>
      </div>
    ),
    iconBg: config.iconBg,
    icon: config.icon,
  };
};
