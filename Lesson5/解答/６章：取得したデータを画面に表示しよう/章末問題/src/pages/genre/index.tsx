import React from "react";
import { GenreType } from '../../interfaces/GenreType'

interface Proos
{
  genre: GenreType
}
export default function Index (props: Proos) {
  return (
    <div className='genre'>
      { props.genre.id } { props.genre.name }
    </div>
  )
}
