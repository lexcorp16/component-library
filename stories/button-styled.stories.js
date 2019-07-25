import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "../src/components/Button.styled";

storiesOf("Button Styled", module)
  .add("Default state", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("Disabled", () => <Button disabled={true}>Hello Button</Button>);
