import React from 'react'
import Helmet from 'react-helmet'

import Todo from '../components/Todo'

export default function TodoPage() {
  return (
    <>
      <Helmet>
        <title>Todo app | React MAD Boiler</title>
      </Helmet>
      <Todo />
    </>
  )
}
