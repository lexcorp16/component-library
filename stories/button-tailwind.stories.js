import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "../src/components/Button.tailwind";

storiesOf("Button Tailwind", module)
  .add("Default state", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
