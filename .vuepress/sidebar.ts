import {SidebarConfig4Multiple} from "vuepress/config";

import guideSideBar from "./sidebars/guideSideBar";
// @ts-ignore
export default {
    "/攻略/": guideSideBar,
    // 降级，默认根据文章标题渲染侧边栏
    "/": "auto",
} as SidebarConfig4Multiple;
