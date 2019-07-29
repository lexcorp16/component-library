import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "../src/components/Button";

storiesOf("Button Styled", module)
  .addParameters({ jest: ['Button'] })
  .add("Default", () => (
    <Button className="default" onClick={action("clicked")}>Default Button</Button>
  ))
  .add("Danger", () => <Button className="danger">Danger Button</Button>)
  .add("Success", () => <Button className="success">Success Button</Button>)
  .add("Disabled", () => <Button className="success" disabled={true}>Disabled Button</Button>);
