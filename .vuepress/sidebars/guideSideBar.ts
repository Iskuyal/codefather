export default [
  "",
  {
    title: "📋 攻略导航",
    collapsable: false,
    children: [
      "行前须知.md",
      "每日行程.md",
      "预算汇总.md",
      "热门打卡.md",
      "避坑提醒.md",
      "图片来源.md",
    ],
  },
  {
    title: "🏨 住宿推荐",
    collapsable: true,
    sidebarDepth: 2,
    children: [
      "住宿推荐.md",
    ],
  },
  {
    title: "🏠 住宿详情",
    collapsable: true,
    sidebarDepth: 1,
    children: [
      {
        title: "Night 1：潮州古城（1晚）",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          "住宿推荐/night-1-潮州古城/潮州古城住宿指南.md",
        ],
      },
      {
        title: "Night 2–3：汕头市区（2晚）",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          "住宿推荐/night-2-3-汕头市区/维也纳酒店-详情.md",
        ],
      },
      {
        title: "Night 4–5：南澳岛（2晚）",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          "住宿推荐/night-4-5-南澳岛/南澳岛住宿指南.md",
        ],
      },
    ],
  },
  {
    title: "📎 备选住宿",
    collapsable: true,
    sidebarDepth: 1,
    children: [
      {
        title: "Night 1：潮州古城（1晚）",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          "住宿推荐/night-1-潮州古城/耀和别院·清代庭院.md",
          "住宿推荐/night-1-潮州古城/潮·颂居-Guesthouse.md",
          "住宿推荐/night-1-潮州古城/绿洲庭院民宿.md",
        ],
      },
      {
        title: "Night 2–3：汕头市区（2晚）",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          "住宿推荐/night-2-3-汕头市区/维也纳酒店.md",
        ],
      },
      {
        title: "Night 4–5：南澳岛（2晚）",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          "住宿推荐/night-4-5-南澳岛/海棠里·观海民宿.md",
          "住宿推荐/night-4-5-南澳岛/MUMU泊木·拾陸間.md",
          "住宿推荐/night-4-5-南澳岛/书野家辰夕海景民宿.md",
          "住宿推荐/night-4-5-南澳岛/后宅镇经济型客栈.md",
        ],
      },
    ],
  },
];
