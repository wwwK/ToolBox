function ifcode(code) {
    let message = {
        // 报错信息
        msg: "",
        // 开关
        open: true
    }
    if (code == -400) {
        message.msg = "信息填写有误"
        // 我们吧开关默认关闭
        message.open = false
        return message
    } else if (code == 62002) {
        message.msg = "视频不见了"
        // 我们吧开关默认关闭
        message.open = false
        return message
    } else if (code == -403) {
        message.msg = "您的权限不足"
        // 我们吧开关默认关闭
        message.open = false
        return message
    } else if (code == -404) {
        message.msg = "没有这条视频哦"
        // 我们吧开关默认关闭
        message.open = false
        return message
    } else {
        // 如果都没有那么我们就把开关打开
        return message
    }
}


export { ifcode }