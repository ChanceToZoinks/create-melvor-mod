import ModService from "./ModService";
import Data from "../data/data.json";

import "../css/styles.css";
import Icon from "../img/icon.png";
import LargeIcon from "../img/icon_large.png";

export async function setup(ctx: ModContext) {
  await ctx.gameData.addPackage(Data);

  ModService.init(ctx, {
    icon_url: ctx.getResourceUrl(Icon),
    icon_url_large: ctx.getResourceUrl(LargeIcon),
    log_prefix: "mod-template", // set your own prefix
    create_sidebar: true, // if this is true you need to provide sidebar_category_name and sidebar_item_name
    sidebar_category_name: "Mod Template Category",
    sidebar_item_name: "Click me"
  });
}
