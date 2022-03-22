import React, {FC} from 'react'
import { useSelector, useDispatch } from 'react-redux'


// 导入全局状态
import { RootState } from '../../../utils/redux/store'

// 导入逻辑
import { decrement, increment } from './counterSlice'

// 导入样式
import './index.css'


// 示例：返回组件
export const Counter: FC = () => {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()
  
    return (
    <div>
        <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
        >
        Increment
        </button>
        <span>{ count }</span>
        <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
        >
        Decrement
        </button>
    </div>
    )
  }