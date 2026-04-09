# 海钓潮汐

面向中国海钓玩家的微信小程序 MVP，主打“钓点级潮汐查询 + 出钓决策建议 + 商业化预留”。

## 项目定位

这不是一个只展示潮汐表的工具，而是一个帮助海钓用户快速回答以下问题的决策助手：

- 今天值不值得去
- 去哪个钓点更合适
- 最佳窗口在几点
- 需要注意哪些风浪和安全风险

## 当前已交付

- 竞品分析：[docs/competitive-analysis.md](docs/competitive-analysis.md)
- 产品 PRD：[docs/PRD.md](docs/PRD.md)
- 技术架构：[docs/architecture.md](docs/architecture.md)
- 交互设计：[docs/interaction-design.md](docs/interaction-design.md)
- 高保真规范：[docs/ui-spec.md](docs/ui-spec.md)
- 数据源选型：[docs/data-source-evaluation.md](docs/data-source-evaluation.md)
- 增长与商业化方案：[docs/growth-monetization.md](docs/growth-monetization.md)
- 可直接导入微信开发者工具的原生微信小程序代码

## 小程序能力

### 首页

- 今日海钓指数
- 最佳出钓窗口
- 关键潮时
- 热门钓点推荐
- 今日出钓策略

### 钓点详情

- 钓点概览
- 玩法建议
- 潮汐时间线
- 海况信息
- 装备建议
- 本地服务入口

### 出钓计划

- 未来 48 小时窗口
- 钓点对比
- 出钓策略
- 出钓准备清单

### 我的

- 收藏钓点
- 会员权益
- 商业合作入口

## 技术结构

```text
app.js / app.json / app.wxss
pages/
  home/
  spots/
  planner/
  profile/
services/
  tideService.js
  spotService.js
  liveDataService.js
data/mock/
  home.js
  spots.js
config/
  data-source.js
utils/
  format.js
docs/
  *.md
```

## 本地运行

1. 使用微信开发者工具打开当前目录。
2. 将 [project.config.json](project.config.json) 中的 `appid` 替换成你自己的小程序 AppID。
3. 默认使用 mock 数据，可直接进行页面演示。

## 真实数据接入准备

- 数据源配置：[config/data-source.js](config/data-source.js)
- 请求封装：[services/http.js](services/http.js)
- 实时海况/潮汐适配层：[services/liveDataService.js](services/liveDataService.js)

当前推荐方案：

- 当前主数据源：Open-Meteo Marine

说明：

- 首版优先使用 Open-Meteo Marine 提供波高、风浪、涌浪、水温和海平面趋势。
- 当前页面已支持实时海况优先、mock 数据兜底。

相关说明见：[docs/data-source-evaluation.md](docs/data-source-evaluation.md)

## GitHub 仓库协作建议

推荐分支习惯：

- `main`：稳定可展示版本
- `codex/*`：功能开发或仓库整理分支

推荐提交流程：

```powershell
git add .
git commit -m "feat: your change"
git push
```

## 下一步建议

1. 接入真实潮汐和海况 API。
2. 建立首批 30-50 个精品海钓点数据库。
3. 加入收藏、分享海报和消息提醒。
4. 先在 1 个样板城市验证留存和会员转化。
