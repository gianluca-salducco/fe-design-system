import classNames from "classnames";
import React from "react";
import { Tab, type TabItem } from "../Tab/Tab";
import styles from "./Tabs.module.css";

export type TabsVariant = "pill" | "underline";

export type TabsProps = {
  tabs: TabItem[];
  variant?: TabsVariant;
  selectedTabId: string;
  onChange: (tabId: string) => void;
  className?: string;
  "aria-label"?: string;
};

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  variant = "pill",
  selectedTabId,
  onChange,
  className,
  "aria-label": ariaLabel = "Tabs",
}) => {
  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className={classNames(styles.tabs, styles[variant], className)}
    >
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          tab={tab}
          variant={variant}
          selected={tab.id === selectedTabId}
          onTabClick={onChange}
        />
      ))}
    </div>
  );
};
