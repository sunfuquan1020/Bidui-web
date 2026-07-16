# 图片配置指南 / Image Placement Guide

> 把图片按下表的**路径 + 文件名**放入即可，页面会自动显示。
> 图片缺失时会**自动回退**到原有 SVG 占位图标，页面不会出现破图。

## 英文版图片（可选）

任何一张卡片图都支持英文版本：在同目录放一张 **同名 + `-en`** 的图即可。
例如 `images/products/mems-sensor.jpg` 的英文版是 `images/products/mems-sensor-en.jpg`。

- 切换到 EN 时自动改用 `-en` 图；没有 `-en` 图的卡片继续显示中文图。
- 切回中文自动换回原图。适用于产品服务、应用领域、其他业务的所有图片。

## 图片显示方式

卡片图采用**统一画框 + 模糊衬底**：
- 画框比例固定（产品/应用领域 16:10），四张卡整齐一致；
- 图片**完整显示、不裁切**，内容不丢；
- 画框内多出来的空白，用这张图自身放大模糊后填充，替代生硬的黑边。

所以**图片不必刻意裁成某个比例**，横图、方图、竖图都能自然融入。建议：
- 主体尽量居中，宽度 ≥800px；
- 想让画面铺得更满，用接近 16:10（如 1280×800）的横图效果最好。

## 1. 产品服务（4 张）→ `images/products/`

| 卡片 | 放入文件（严格同名） | 建议尺寸 | 占位回退 |
|------|--------------------|---------|---------|
| 便携式冷却液检测仪 | `images/products/portable-analyzer.jpg` | 800×600（4:3） | portable-analyzer.svg |
| MEMS 在线传感器 | `images/products/mems-sensor.jpg` | 800×600 | mems-sensor.svg |
| 数字孪生与 AI 预测平台 | `images/products/digital-twin.jpg` | 800×600 | digital-twin.svg |
| 运维应急小车 | `images/products/rescue-cart.jpg` | 800×600 | rescue-cart.svg |

显示区域：宽度铺满卡片，高度固定 240px，`object-fit: cover`（会居中裁切）。

## 2. 应用领域（3 张）→ `images/applications/`

| 卡片 | 放入文件（严格同名） | 建议尺寸 | 占位回退 |
|------|--------------------|---------|---------|
| 液冷数据中心 | `images/applications/datacenter.jpg` | 800×500（16:10） | app-datacenter.svg |
| 电池热管理 | `images/applications/battery-thermal.jpg` | 800×500 | app-ev-storage.svg |
| 人形机器人 | `images/applications/humanoid-robot.jpg` | 800×500 | app-humanoid-robot.svg |

显示区域：宽度铺满卡片，高度固定 200px，`object-fit: cover`。

## 3. 其他业务（2 张）→ `images/others/`

小方图（左侧缩略图，96×96 显示，`object-fit: cover`），建议放正方形图。

| 卡片 | 放入文件（严格同名） | 建议尺寸 | 占位回退 |
|------|--------------------|---------|---------|
| 汽车故障诊断及养护 AI 专家系统 | `images/others/auto-diagnosis.jpg` | 400×400（1:1） | other-auto-diagnosis.svg |
| 油液清洁度验证材料 | `images/others/oil-cleanliness.jpg` | 400×400 | other-oil-cleanliness.svg |

## 4. 已有图片位（替换即可，无需改名）

| 位置 | 文件 | 建议尺寸 | 状态 |
|------|------|---------|------|
| 顶部 Hero 大图 | `images/data center.png` | 1920×1080 | ✅ 已有 |
| 公司介绍配图 | `images/office.png` | 1000×750 | ✅ 已有 |
| 导航/页脚 Logo | `images/bidui-logo.png` | 透明 PNG，高 ≥80px | ✅ 已有 |

## 5. 合作客户 Logo → `images/partners/`

透明底 PNG，显示高度 50px（建议 360×120）。

| 文件 | 状态 |
|------|------|
| `images/partners/partner-1.png` | ✅ 已有 |
| `images/partners/partner-2.png` | ✅ 已有 |
| `images/partners/partner-3.png` | ⚠️ 缺失，需补 |
| `images/partners/partner-4.png` | ✅ 已有 |
| `images/partners/partner-5.png` | ⚠️ 缺失，需补 |

缺失的 logo 会自动隐藏。要增减数量，改 `index.html` 第 616-622 行的 `partnerLogos` 数组即可。

---

## 修改文案 → 只改 `content.js` 这一个文件

所有中英文案已统一到 **`content.js`**（唯一数据源）。页面首屏和语言切换都从这里读取，
不用再动 `index.html` 正文。

- **改中文**：在 `content.js` 的 `zh: { ... }` 块里，改引号内的文字。
- **改英文**：在同一字段的 `en: { ... }` 块里改对应文字。
- 改完 **保存 → 刷新网页** 即生效。

> 例：改「便携式冷却液检测仪」的说明 → 找 `zh.products.card1.desc`，改引号里的话；
> 英文改 `en.products.card1.desc`。

⚠️ 只改**引号里的中文/英文**，不要删引号 `'`、逗号 `,` 和大括号 `{ }`，否则页面会白屏。
