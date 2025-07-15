interface CardProps {
  title: string;
  description: string;
  href: string;
  tags?: string[];
  status?: 'draft' | 'complete' | 'in-progress';
}

export function ConceptCard({ title, description, href, tags = [], status = 'draft' }: CardProps) {
  const statusColors = {
    draft: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300',
    complete: 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-300',
    'in-progress': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-300'
  };

  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
            <a href={href} className="stretched-link">
              {title}
            </a>
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>
        <span className={`ml-4 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColors[status]}`}>
          {status}
        </span>
      </div>
      
      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
