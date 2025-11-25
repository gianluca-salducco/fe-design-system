import { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Tabs, TabsProps } from "../../../components/Tabs/Tabs";

const tabsMock: TabsProps["tabs"] = [
  { id: "tab-1", label: "Label" },
  { id: "tab-2", label: "Label" },
  { id: "tab-3", label: "Label" },
];

const meta: Meta<typeof Tabs> = {
  title: "Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["pill", "underline"],
    },
  },
  args: {
    tabs: tabsMock,
    selectedTabId: tabsMock[0].id,
    variant: "pill",
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Pill: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(args.selectedTabId);

    return (
      <Tabs
        {...args}
        selectedTabId={selected}
        onChange={(tabId) => setSelected(tabId)}
      />
    );
  },
};

export const Underline: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(args.selectedTabId);

    return (
      <Tabs
        {...args}
        variant="underline"
        selectedTabId={selected}
        onChange={(tabId) => setSelected(tabId)}
      />
    );
  },
  args: {
    selectedTabId: tabsMock[1].id,
  },
};
