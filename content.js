// ============================================================
//  网站文案 —— 唯一数据源 (Single Source of Truth)
//  修改文案只改这个文件即可，改完保存 → 刷新网页生效。
//  中文改 zh: {...}，英文改对应的 en: {...}。
//  注意：不要删除引号、逗号、大括号，只改引号里的文字。
// ============================================================

const translations = {
    zh: {
        nav: {
            home: '首页',
            products: '产品服务',
            applications: '应用领域',
            about: '关于我们',
            contact: '联系我们'
        },
        hero: {
            eyebrow: '液冷冷却液健康监测',
            title: '读懂每一滴冷却液',
            subtitle: '液冷数据中心冷却液健康监测专家 —— 从感知，到预测，到守护',
            learnMore: '了解更多',
            contactUs: '联系我们',
            pills: ['MEMS 多参数在线监测', 'AI 数字孪生预测', '提前 7-30 天预警']
        },
        products: {
            title: '产品服务',
            card1: {
                title: '便携式冷却液检测仪',
                desc: '面向现场的手持检测设备，15分钟完成 pH、电导率/电阻率、浊度、铜离子和 ISO 4406 清洁度等全参数检测，自动生成冷却液健康评分与异常原因建议，为交付验收、巡检和应急抢修建立统一的现场检测标准与数据入口。',
                learnMore: '了解更多'
            },
            card2: {
                title: 'MEMS 在线传感器',
                desc: '微型化、低功耗、可阵列化的 MEMS 多参数传感器，可嵌入 CDU、支路、冷板前后等关键节点，融合电导率/电阻率、pH、温度、浊度等指标。点位密度带来数据质量，数据质量带来预测能力，让冷却液监测成为系统的"神经末梢"。',
                learnMore: '了解更多'
            },
            card3: {
                title: '数字孪生与 AI 预测平台',
                desc: '实时采集多源监测数据，构建冷却液系统数字孪生模型，通过 AI 趋势与异常识别提前 7-30 天预警指标越界、定位污染来源，并自动输出过滤、冲洗、补液、换液等预防性维护工单，把"事后维修"升级为"事前预测"。',
                learnMore: '了解更多'
            },
            card4: {
                title: '运维应急小车',
                desc: '面向数据中心高可用场景的现场液冷急救解决方案，集成泄漏收集与废液封存、不停机过滤/净化/补液、便携检测与 AI 辅助决策、远程专家连线于一体，配合年度维保包与按次应急服务，补齐预警到抢修之间的响应空白。',
                learnMore: '了解更多'
            }
        },
        others: {
            title: '其他业务',
            subtitle: '基于油液监测与可靠性验证的技术积累，我们同时提供以下能力',
            item1: {
                title: '汽车故障诊断及养护 AI 专家系统',
                desc: '识别汽车 VIN 码给出品牌配置，结合故障图片识别、内窥镜、OBD 故障码与油品在线监测数据，定位故障原因，提供专业维修与定制养护建议。'
            },
            item2: {
                title: '油液清洁度验证材料',
                desc: '调配 0-100μm 污染颗粒物，用于变速箱、驱动电机等液压系统及阀、泵、过滤零部件的抗污染可靠性验证，达到 ISO 4406 清洁度要求，可替代进口污染物模拟油液长期使用状态。'
            }
        },
        applications: {
            title: '应用领域',
            card1: {
                title: '液冷数据中心',
                desc: '冷板与浸没式液冷规模化部署后，实时监控冷却液电导率、pH、铜离子和清洁度等指标，预防铜腐蚀、结垢和微粒堵塞引发的局部过热宕机，保障 SLA 与算力连续性。'
            },
            card2: {
                title: '电池热管理',
                desc: '动力电池与储能电池的液冷热管理对冷却液电导率要求极为严格（通常低于 5μS/cm），一旦超标可能引发电气短路甚至热失控。在线监测电导率、pH、铜离子与清洁度，及时预警铜腐蚀与微生物污染，保障电池系统的安全与循环寿命。'
            },
            card3: {
                title: '人形机器人',
                desc: '人形机器人高频运动的液冷管路与密封件易老化，产生的铁锈颗粒污染会降低流量、影响散热，导致伺服电机过热停机，需要微型化在线监测保障关节与驱动系统可靠运行。'
            }
        },
        about: {
            title: '公司介绍',
            desc: '比兑智能科技（上海）有限公司致力于为设备提供智能化的流体监控解决方案。我们以便携检测、MEMS 在线传感、数字孪生与 AI 预测为核心，聚焦液冷数据中心冷却液健康监测，并将多年油液监测与可靠性验证的技术积累延伸至新能源汽车、储能与工业设备等领域。',
            vision: {
                title: '未来展望',
                desc: '用硬件切入、用平台和服务沉淀长期价值，把冷却液从"被动耗材"升级为"可监测、可预测、可服务"的关键基础设施资产，为客户创造更大的价值。'
            }
        },
        contact: {
            title: '联系我们',
            phone: '电话咨询',
            email: '邮件咨询',
            address: '公司地址',
            form: {
                name: '您的姓名',
                email: '电子邮箱',
                phone: '联系电话',
                message: '请输入您的留言',
                submit: '发送消息'
            }
        },
        partners: {
            title: '合作客户'
        },
        footer: {
            company: '比兑智能科技（上海）有限公司',
            quickLinks: '快速链接',
            contactInfo: '联系方式',
            copyright: '© 2025 比兑智能科技（上海）有限公司. 保留所有权利.',
            address: '上海市浦东新区拱秀路1026弄',
            quickLinksItems: {
                home: '首页',
                products: '产品服务',
                applications: '应用领域',
                about: '关于我们'
            }
        }
    },
    en: {
        nav: {
            home: 'Home',
            products: 'Products',
            applications: 'Applications',
            about: 'About',
            contact: 'Contact'
        },
        hero: {
            eyebrow: 'Coolant Health Monitoring',
            title: 'Read Every Drop of Coolant',
            subtitle: 'Coolant Health Monitoring Experts for Liquid-Cooled Data Centers — from Sensing, to Prediction, to Protection',
            learnMore: 'Learn More',
            contactUs: 'Contact Us',
            pills: ['MEMS Multi-Parameter Monitoring', 'AI Digital-Twin Prediction', '7–30 Day Early Warning']
        },
        products: {
            title: 'Products & Services',
            card1: {
                title: 'Portable Coolant Analyzer',
                desc: 'A handheld field device that measures pH, conductivity/resistivity, turbidity, copper ions and ISO 4406 cleanliness in 15 minutes, automatically generating a coolant health score and root-cause advice. It establishes a unified on-site testing standard and data entry point for acceptance, inspection and emergency response.',
                learnMore: 'Learn More'
            },
            card2: {
                title: 'MEMS Online Sensor',
                desc: 'Miniaturized, low-power, array-ready MEMS multi-parameter sensors that embed into CDUs, branch lines and cold-plate inlets/outlets, fusing conductivity/resistivity, pH, temperature and turbidity. More monitoring points mean better data, and better data means predictive power — turning coolant monitoring into the system’s nerve endings.',
                learnMore: 'Learn More'
            },
            card3: {
                title: 'Digital Twin & AI Prediction Platform',
                desc: 'Collects multi-source monitoring data in real time, builds a digital twin of the coolant system, and uses AI trend and anomaly detection to warn 7-30 days ahead of threshold breaches, locate contamination sources, and auto-generate preventive maintenance work orders — shifting from reactive repair to proactive prediction.',
                learnMore: 'Learn More'
            },
            card4: {
                title: 'Mobile Emergency Response Cart',
                desc: 'An on-site liquid-cooling rescue solution for high-availability data centers, integrating leak collection and waste sealing, non-stop filtration/purification/replenishment, portable testing with AI-assisted decisions, and remote expert support — backed by annual maintenance packages and on-demand emergency service to close the gap between alert and repair.',
                learnMore: 'Learn More'
            }
        },
        others: {
            title: 'Other Business',
            subtitle: 'Built on our expertise in oil monitoring and reliability testing, we also offer:',
            item1: {
                title: 'AI Expert System for Vehicle Fault Diagnosis & Maintenance',
                desc: 'Recognizes VIN codes and vehicle configuration, and combines fault-image recognition, endoscopy, OBD codes and online oil-quality data to pinpoint faults and provide professional repair and tailored maintenance advice.'
            },
            item2: {
                title: 'Oil Cleanliness Verification Materials',
                desc: 'Custom 0-100μm contamination particles for anti-contamination reliability testing of transmissions, drive-motor hydraulic systems, valves, pumps and filters. Meets ISO 4406 cleanliness standards and replaces imported contaminants to simulate long-term oil conditions.'
            }
        },
        applications: {
            title: 'Applications',
            card1: {
                title: 'Liquid-Cooled Data Centers',
                desc: 'As cold-plate and immersion cooling scale up, real-time monitoring of conductivity, pH, copper ions and cleanliness prevents downtime from copper corrosion, scaling and particle blockage, safeguarding SLA and compute continuity.'
            },
            card2: {
                title: 'Battery Thermal Management',
                desc: 'Liquid cooling for EV and energy-storage batteries demands extremely low coolant conductivity (typically below 5μS/cm); exceeding it risks short circuits and even thermal runaway. Online monitoring of conductivity, pH, copper ions and cleanliness gives early warning of copper corrosion and microbial contamination, safeguarding battery safety and cycle life.'
            },
            card3: {
                title: 'Humanoid Robots',
                desc: 'High-frequency robot cooling lines and seals age and shed rust particles that reduce flow and heat dissipation, causing servo motors to overheat and stall — miniaturized online monitoring keeps joints and drive systems reliable.'
            }
        },
        about: {
            title: 'About Us',
            desc: 'Bidui Intelligent Technology (Shanghai) Co., Ltd. is committed to intelligent fluid monitoring solutions. Centered on portable testing, MEMS online sensing, and digital-twin AI prediction, we focus on coolant health monitoring for liquid-cooled data centers, extending years of oil-monitoring and reliability-testing expertise to EVs, energy storage and industrial equipment.',
            vision: {
                title: 'Future Vision',
                desc: 'Entering through hardware while accumulating long-term value via platform and services, we aim to upgrade coolant from a "passive consumable" into a monitorable, predictable and serviceable critical infrastructure asset — creating greater value for our customers.'
            }
        },
        contact: {
            title: 'Contact Us',
            phone: 'Phone',
            email: 'Email',
            address: 'Address',
            form: {
                name: 'Your Name',
                email: 'Email Address',
                phone: 'Phone Number',
                message: 'Your Message',
                submit: 'Send Message'
            }
        },
        partners: {
            title: 'Our Customers'
        },
        footer: {
            company: 'Bidui Intelligent Technology (Shanghai) Co., Ltd.',
            quickLinks: 'Quick Links',
            contactInfo: 'Contact Information',
            copyright: '© 2024 Bidui Technology. All Rights Reserved.',
            address: 'Lane No.1026, GoXiong Road, Pudong District, Shanghai City, China',
            quickLinksItems: {
                home: 'Home',
                products: 'Products',
                applications: 'Applications',
                about: 'About Us'
            }
        }
    }
};
