/*
 * @Author: TerryMin
 * @Date: 2019-07-28 11:36:51
 * @LastEditors: TerryMin
 * @LastEditTime: 2019-08-16 15:10:52
 * @Description: file not
 */
import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit"> Add Todo12</button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo