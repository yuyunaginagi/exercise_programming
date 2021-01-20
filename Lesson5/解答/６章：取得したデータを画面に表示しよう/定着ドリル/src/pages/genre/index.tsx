import React from "react";
import { GenreType } from '../../interfaces/GenreType'

interface Proos
{
  genre: GenreType
  handleOnClickSelectedGenreId: (val: number) => void;
}

export default function Index (props: Proos) {
  return (
    <button className='genre' onClick={()=>props.handleOnClickSelectedGenreId(props.genre.id)}>
    { props.genre.name }
    </button>
  )
}
