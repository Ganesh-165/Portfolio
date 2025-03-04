import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements } from "../constants";

const AchievementCard = ({
  index,
  category,
  details,
  link,
  linkText,
  logo,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <div className="mt-1">
      <div className="flex items-center gap-4">
        <img
          src={logo}
          alt={`${category} logo`}
          className="w-12 h-12 object-contain"
        />
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-medium text-[16px] hover:text-blue-400 transition-colors"
        >
          <span className="blue-text-gradient">@</span> {category}
        </a>
      </div>

      <p className="mt-4 text-secondary text-[14px]">{details}</p>
    </div>
  </motion.div>
);

const Achievements = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My accomplishments</p>
          <h2 className={styles.sectionHeadText}>Achievements.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={achievement.category}
            index={index}
            {...achievement}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Achievements, "");
