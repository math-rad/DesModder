import { PluginController } from "#plugins/PluginController.ts";
import { configList } from "./config";
import git from "isomorphic-git";
import LightningFS from "@isomorphic-git/lightning-fs";

export default class GitIntegration extends PluginController {
  static id = "git-integration" as const;
  static enabledByDefault = false;
  static config = configList;
}
