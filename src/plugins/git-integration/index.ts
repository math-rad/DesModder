import { PluginController } from "#plugins/PluginController.ts";
import { configList } from "./config";

export default class GitIntegration extends PluginController {
  static id = "git-integration" as const;
  static enabledByDefault = false;
  static config = configList;
}
