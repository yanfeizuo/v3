// 定义了一个readonlyHandler处理器
const readonlyHandler = {
    get(target, prop) {
        const result = Reflect.get(target, prop)
        console.warn('拦截到了读取数据了', prop, result)
        return result
    },
    set(target, prop, value) {
        console.warn('只能读取数据，不能修改数据或添加数据')
        return true
    },
    deleteProperty(target, prop) {
        console.log('只能读取数据，不能删除数据')
        return true
    }
}

// 定义一个shallowReadonly函数
function shallowReadonly(target) {
    // 判断当前的数据是不是对象
    if (target && typeof target === 'object') {
        return new Proxy(target, readonlyHandler)
    }

    return target
}

// 定义一个readonly函数
function readonly(target) {
    if (target && typeof target === 'object') {
        if (Array.isArray(target)) {
            target.forEach((item, index) => {
                target[index] = readonly(item)
            })
        } else {
            Object.keys(target).forEach(key => {
                target[key] = readonly(target[key])
            })
        }
        return new Proxy(target, readonlyHandler)
    }
    return target
}