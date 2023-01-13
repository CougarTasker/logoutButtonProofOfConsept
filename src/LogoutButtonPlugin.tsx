import React from "react";
import * as Flex from "@twilio/flex-ui";
import { FlexPlugin } from "@twilio/flex-plugin";

import CustomTaskList from "./components/CustomTaskList/CustomTaskList";
import { ParasiteButton } from "./components/parasiteButton";

const PLUGIN_NAME = "LogoutButtonPlugin";

export default class LogoutButtonPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof Flex }
   */
  async init(flex: typeof Flex, manager: Flex.Manager): Promise<void> {
    flex.MainHeader.Content.add(<ParasiteButton key="abc" />,{
      align:"end",
      sortOrder:-1,
    });
  }
}
