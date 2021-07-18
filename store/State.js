
const State = {
    // 工具箱列表
    ToolList: {
        bilibili: {
            id: "bilibili",
            title: "bilibili工具",
            name: "1",
            data: {
                tool0: {
                    id: "bilibili_Tool_0",
                    title: "bilibili封面提取",
                    // 路由
                    to: "/tool/videocover",
                },
                tool1: {
                    id: "bilibili_Tool_1",
                    title: "AV号<-->BV号",
                    to: "/tool/avOrbv"
                }
            }
        },
        internet: {
            id: "color",
            title: "色彩工具",
            name: "2",
            data: {
                tool0: {
                    id: "color_Tool_0",
                    title: "中日传统色",
                    to: "/tool/TraditionalColor"
                }
            }
        },
        encryption: {
            id: "encryption",
            title: "加密与解密",
            name: "3",
            data: {
                tool0: {
                    id: "encryption_Tool_0",
                    title: "MD5加密",
                    to: "/tool/MD5encryption"
                }
            }
        }
    }
}

export default State;