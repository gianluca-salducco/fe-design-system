import classNames from "classnames";
import styles from "./Badge.module.css";

export type BadgeProps = {
  label: string;
  variant: "neutral" | "positive" | "negative";
};

export const Badge: React.FC<BadgeProps> = ({ label, variant }: BadgeProps) => {
  const isMobile = window.innerWidth <= 768;
  return (
    <div
      className={classNames(styles.badge, isMobile ? "body-s" : "body-m", {
        [styles.neutral]: variant === "neutral",
        [styles.positive]: variant === "positive",
        [styles.negative]: variant === "negative",
      })}
    >
      {label}
    </div>
  );
};
