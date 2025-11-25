import type { Preview } from "@storybook/react-vite";
import { INITIAL_VIEWPORTS } from "storybook/viewport";
import "../src/styles";

const preview: Preview = {
  parameters: {
    viewport: {
      options: INITIAL_VIEWPORTS,
    },
    initialGlobals: {
      viewport: { value: "mobile1", isRotated: false },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
