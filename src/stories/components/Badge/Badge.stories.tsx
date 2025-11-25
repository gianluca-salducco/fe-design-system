import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge, BadgeProps } from "../../../components/Badge/Badge";

const meta: Meta<BadgeProps> = {
  title: "Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["neutral", "positive", "negative"],
    },
    label: { control: "text" },
  },
  args: {
    label: "Badge",
    variant: "neutral",
  },
};

export default meta;
type Story = StoryObj<BadgeProps>;

export const Neutral: Story = {};

export const Positive: Story = {
  args: {
    variant: "positive",
    label: "Badge",
  },
};

export const Negative: Story = {
  args: {
    variant: "negative",
    label: "Badge",
  },
};
