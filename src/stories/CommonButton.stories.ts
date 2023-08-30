import type { Meta, StoryObj } from "@storybook/react";
import CommonButton from "../components/buttons/CommonButton";
import { APP_ROUTES } from "../utils";

const meta: Meta<typeof CommonButton> = {
  title: "CommonButton",
  component: CommonButton,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "cliecked" },
  },
};

export default meta;
type Story = StoryObj<typeof CommonButton>;

export const LinkButton: Story = {
  args: {
    label: "Sign up",
    type: "button",
    props: { onClick: () => console.log("CLICKING...") },
  },
};
