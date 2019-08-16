/*
 * @Author: TerryMin
 * @Date: 2019-07-28 11:33:57
 * @LastEditors: TerryMin
 * @LastEditTime: 2019-08-16 15:19:55
 * @Description: file not
 */
import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick }) => {
  // console.log( active, children, onClick )
  if (active) {
    return <span>{children}12</span>
  }

  return (
    <a
      href="https://www.baidu.com"
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link