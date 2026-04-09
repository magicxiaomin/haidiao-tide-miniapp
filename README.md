# 海钓潮汐

微信小程序 MVP，面向中国海钓玩家，主打“钓点级潮汐查询 + 出钓决策建议 + 商业化预留”。

## 当前交付内容

- 竞品分析：[docs/competitive-analysis.md](docs/competitive-analysis.md)
- 产品 PRD：[docs/PRD.md](docs/PRD.md)
- 技术架构：[docs/architecture.md](docs/architecture.md)
- 交互设计：[docs/interaction-design.md](docs/interaction-design.md)
- 高保真规范：[docs/ui-spec.md](docs/ui-spec.md)
- 数据源选型：[docs/data-source-evaluation.md](docs/data-source-evaluation.md)
- 增长与商业化：[docs/growth-monetization.md](docs/growth-monetization.md)
- 可直接导入微信开发者工具的原生小程序代码

## 小程序页面

- 首页：今日海钓指数、最佳窗口、热门钓点
- 钓点页：钓点详情、潮汐时间轴、玩法建议、服务卡
- 计划页：未来时段、出钓准备清单
- 我的：收藏、会员、商务合作

## 使用方式

1. 使用微信开发者工具打开当前目录。
2. 将 `project.config.json` 中的 `appid` 替换为你自己的小程序 AppID。
3. 如需接入真实数据，可替换 `services/` 中对 mock 数据的读取逻辑。

## 真实数据接入准备

- 数据源配置：[config/data-source.js](config/data-source.js)
- 请求封装：[services/http.js](services/http.js)
- 实时海况/潮汐适配层：[services/liveDataService.js](services/liveDataService.js)

默认仍为 mock 模式，便于稳定演示。
