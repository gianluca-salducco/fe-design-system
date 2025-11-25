import classNames from "classnames";
import React from "react";
import type { BadgeProps } from "../Badge/Badge";
import { Badge } from "../Badge/Badge";
import styles from "./Tab.module.css";

export type TabItem = {
  id: string;
  label: string;
  badge?: BadgeProps;
};

export type TabProps = {
  tab: TabItem;
  variant: "pill" | "underline";
  selected: boolean;
  onTabClick: (tabId: string) => void;
};

export const Tab: React.FC<TabProps> = ({
  tab,
  variant = "pill",
  selected = false,
  onTabClick,
}: TabProps) => {
  return (
    <div
      role="tab"
      aria-selected={selected}
      className={classNames(styles.tab, "body-m", {
        [styles.selected]: selected,
        [styles.pill]: variant === "pill",
        [styles.underline]: variant === "underline",
        [styles.withBadge]: Boolean(tab.badge),
      })}
      onClick={() => onTabClick(tab.id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onTabClick(tab.id);
        }
      }}
      tabIndex={0}
    >
      <span className={styles.label}>{tab.label}</span>
      {tab.badge ? (
        <Badge
          label={tab.badge.label}
          variant={tab.badge.variant ?? "neutral"}
        />
      ) : null}
    </div>
  );
};
