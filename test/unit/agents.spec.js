// 导入 Vue.js 和组件，进行测试
import Vue from 'vue'
import agents from '@/components/agents'

// 这里是一些 Jasmine 2.0 的测试，你也可以使用你喜欢的任何断言库或测试工具。

describe('agents', () => {
    // 检查原始组件选项
    it('has a created hook', () => {
        expect(typeof agents.created).toBe('function')
    })

    // 评估原始组件选项中的函数的结果
    it('sets the correct default data', () => {
        expect(typeof agents.data).toBe('function')
        const defaultData = agents.data()
        expect(defaultData.message).toBe('hello!')
    })


    // 创建一个实例并检查渲染输出
    it('renders the correct message', () => {
        const Constructor = Vue.extend(agents)
        const vm = new Constructor().$mount()
        expect(vm.$el.textContent).toBe('bye!')
    })
})
