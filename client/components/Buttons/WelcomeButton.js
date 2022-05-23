import React from 'react'
import styled from './WelcomeButton.module.css'

export const WelcomeButton = ({ onClick }) => {
  return (
    <button
      type="button"
      className={styled.button__type_welcome}
      onClick={onClick}
    >
      Push to blow up ethereum
    </button>
  )
}
