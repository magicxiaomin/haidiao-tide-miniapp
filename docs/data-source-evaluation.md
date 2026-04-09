# 海钓潮汐数据源选型建议

## 1. 选型目标

这款小程序需要的不是单一“天气接口”，而是一套能支撑海钓决策的数据组合：

- 潮汐高低潮与潮高
- 海浪/风浪/涌浪
- 海表温度
- 月相与日出日落
- 后续可扩展到洋流、风速和预警

## 2. 候选数据源

### Open-Meteo Marine Weather API

官方文档：[Open-Meteo Marine Weather API](https://open-meteo.com/en/docs/marine-weather-api)

我查到的官方能力：

- `/v1/marine` 提供海洋天气预报。
- 支持按经纬度查询。
- 可返回小时级海洋预报。
- 文档显示可返回 `wave_height`、`wind_wave_height`、`swell_wave_height`、`sea_surface_temperature` 等字段。

适合用途：

- 海浪、风浪、涌浪、水温
- 免费起步验证
- 原型期和早期上线阶段

优势：

- 官方文档清晰。
- 无需先采购商业套餐即可验证。
- 对小程序原型和早期 MVP 很友好。

限制：

- 不提供全球潮汐极值主能力。
- 更适合作为海况补充，而不是完整潮汐主源。

### WorldTides API

官方文档：[WorldTides API Docs](https://www.worldtides.info/apidocs)  
官方定价页：[WorldTides Pricing](https://www.worldtides.info/developer/apikey)

我查到的官方能力：

- 提供全球任意位置潮汐信息。
- 支持高潮/低潮极值、潮高、绘图、站点与基准面。
- 官方文档建议使用 `datum=CD`。
- 支持 `extremes`、`heights`、`days`、`localtime` 等参数。

适合用途：

- 全球潮汐主数据源
- 具体钓点潮汐曲线
- 高低潮时刻和潮高展示

优势：

- 潮汐能力完整，正适合本产品核心需求。
- 文档明确，接口组织稳定。

限制：

- 需要 API Key。
- 有按 credit 计费约束。
- 使用时需要按其版权要求展示来源信息。

### Stormglass

官网：[stormglass.io](https://stormglass.io/)  
能力页：[Global Weather API](https://stormglass.io/global-weather/)  
潮汐能力介绍：[Global Tide API](https://stormglass.io/global-tide-api/)

我查到的官方能力：

- 提供 marine weather、tide、astronomy 等能力。
- 免费层显示每天 10 次请求。
- 可统一接入多家海洋气象源。
- 适合做更强的专业海洋环境聚合。

适合用途：

- 商业化之后的专业升级方案
- 需要更强海况、多源融合和企业级稳定性时

优势：

- 海况维度丰富。
- 更接近专业海洋数据平台。

限制：

- 对早期小程序 MVP 来说，成本与复杂度更高。
- 更适合在验证期后再引入。

## 3. 推荐方案

### 阶段一：低成本上线

建议组合：

- **潮汐主源：WorldTides**
- **海况主源：Open-Meteo Marine**

原因：

- 潮汐和海况拆分后，能力更清晰。
- 可以先以较低成本完成产品主能力。
- 适合当前这个微信小程序的 MVP 到首版上线阶段。

### 阶段二：专业升级

当用户规模、会员收入或商家收入稳定后，可评估：

- 将海况能力升级到 Stormglass
- 或保留 WorldTides 做潮汐、Stormglass 做高价值海况

## 4. 当前代码中的接入准备

我已经在仓库里加了以下文件：

- [data-source.js](D:/Projects/海钓潮汐/config/data-source.js)
- [http.js](D:/Projects/海钓潮汐/services/http.js)
- [liveDataService.js](D:/Projects/海钓潮汐/services/liveDataService.js)

目前状态：

- Open-Meteo Marine 已准备好接入路径。
- WorldTides 已预留接口和 Key 配置位。
- 当前页面仍以 mock 数据驱动展示，方便稳定演示。

## 5. 为什么没有直接全量切到真实数据

原因很实际：

- 微信小程序请求域名需要在后台白名单配置。
- WorldTides 需要真实 API Key。
- 真实数据接入后，页面字段映射和城市/钓点经纬度体系也要一起落。

所以当前最稳的方式是：

1. 保留 mock 作为默认演示模式。
2. 把 live data adapter 先搭好。
3. 等你确定 API Key 和钓点坐标库后，再切换上线模式。

## 6. 接下来最推荐的实施顺序

1. 先整理首批 30-50 个目标钓点经纬度。
2. 申请 WorldTides API Key。
3. 在微信小程序后台配置请求域名白名单。
4. 把首页和详情页切到 live data adapter。
5. 再补风速、日出日落、月相和分享海报。
