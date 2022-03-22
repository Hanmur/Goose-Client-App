import React, {FC} from 'react'
import {Counter} from './Counter'

// 示例：返回组件
export const Test: FC = () => {
  return (
    <div>
      <h2>测试：计数器</h2>
      <Counter />
    </div>
  )
}