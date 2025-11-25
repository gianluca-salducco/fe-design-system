import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tab, TabProps } from "../../../components/Tab/Tab";

const meta: Meta<TabProps> = {
  title: "Tab",
  component: Tab,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Tab component with pill or underline variants, optionally showing a badge.",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["pill", "underline"],
    },
    selected: { control: "boolean" },
    onTabClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<TabProps>;

export const PillDefaultSelected: Story = {
  args: {
    variant: "pill",
    selected: true,
    tab: { id: "1", label: "Label" },
  },
};

export const PillDefaultNotSelected: Story = {
  args: {
    variant: "pill",
    selected: false,
    tab: { id: "1", label: "Label" },
  },
};

export const UnderlineDefaultSelected: Story = {
  args: {
    variant: "underline",
    selected: true,
    tab: { id: "1", label: "Label" },
  },
};

export const UnderlineDefaultNotSelected: Story = {
  args: {
    variant: "underline",
    selected: false,
    tab: { id: "1", label: "Label" },
  },
};

export const PillWithBadge: Story = {
  args: {
    variant: "pill",
    selected: true,
    tab: {
      id: "1",
      label: "With badge",
      badge: { label: "New", variant: "positive" },
    },
  },
};

export const UnderlineWithBadge: Story = {
  args: {
    variant: "underline",
    selected: false,
    tab: {
      id: "1",
      label: "Updates",
      badge: { label: "Warning", variant: "negative" },
    },
  },
};
