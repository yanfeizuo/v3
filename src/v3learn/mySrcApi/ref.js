import { reactive } from './reactive'

// 定义一个shallowRef函数
function shallowRef(target) {
    return {
        // 将target数据保存起来
        _value: target,
        get value() {
            console.log('劫持到了读取数据')
            return this._value
        },
        set value(val) {
            console.log('劫持到了修改数据，准备更新界面', val)
            this._value = val
        }
    }
}

// 定义一个ref函数
function ref(target) {
    target = reactive(target)
    return {
        // 将target数据保存起来
        _value: target,
        get value() {
            console.log('劫持到了读取数据')
            return this._value
        },
        set value(val) {
            console.log('劫持到了修改数据，准备更新界面', val)
            this._value = val
        }
    }
}