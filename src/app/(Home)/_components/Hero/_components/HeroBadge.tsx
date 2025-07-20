import { heroData } from '@/app/(Home)/_components/Hero/utils/data';
import { Badge } from '@/components/common';
import { motion } from 'framer-motion';

interface HeroBadgeProps {}

export const HeroBadge = ({}: HeroBadgeProps) => {
  const { badge } = heroData.content;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <span className="flex item-center justify-center">
        <Badge
          text={badge.text}
          icon={
            <motion.div
              className="w-2 h-2 bg-cyan-500 rounded-full"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
          }
          className="py-3"
        />
      </span>
    </motion.div>
  );
};
