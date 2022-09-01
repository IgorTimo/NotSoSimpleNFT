import NftList from '../components/NftCard/NftList'
import { Modal } from '@components/Modal/Modal'
import React, { useState } from 'react'

const Gallery = (props) => {
  return (
    <div>
      <NftList />
      <Modal img={props.image} />
    </div>
  )
}
export default Gallery
