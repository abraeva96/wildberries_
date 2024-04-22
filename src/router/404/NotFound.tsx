import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const NotFound:FC = () => {
  return (
    <div className='notFound'>
        <h2 className='notFound__title'>Ошибка страница не найдена</h2>
        <Link className='notFound__txt' to="/">перейти на главную</Link>
    </div>
  )
}

export default NotFound