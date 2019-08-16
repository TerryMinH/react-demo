/*
 * @Author: TerryMin
 * @Date: 2019-07-28 11:34:38
 * @LastEditors: TerryMin
 * @LastEditTime: 2019-08-16 15:15:47
 * @Description: file not
 */
import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter="SHOW_ALL"> All</FilterLink>
    {', '}
    <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
    {', '}
    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
  </p>
)

export default Footer