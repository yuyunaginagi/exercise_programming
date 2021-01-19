import React, { useReducer } from "react";
import Header from '../../components/header'
import PostList from '../../components/postList'
import './index.css';

export type Data = {
  name: string,
  year: number
}

export type dataAction = {
  type: 'ユーザー名変更' | '年齢変更'
}

export type dataContextType = {
  user: Data;
  dispatch: ({ type }: dataAction) => void;
};

export const DataContext = React.createContext<dataContextType>({} as dataContextType)

export default function Index () {
  const initialData = {
    name: 'techCamp太郎',
    year: 26
  };

  const reducer = (state: Data, action: dataAction) => {
    return { name: state.name, year: state.year }
  }

  const [user, dispatch] = useReducer(reducer, initialData);
  return (
    <div className = 'main'>
      <DataContext.Provider value={{ user, dispatch }}>
        <Header />
        <PostList />
      </DataContext.Provider>
    </div>
  )
};
