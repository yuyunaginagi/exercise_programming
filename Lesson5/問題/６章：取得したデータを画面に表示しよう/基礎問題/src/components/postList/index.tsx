import React from "react";
import Post from '../post'
import './index.css';

export default function Index () {
  const post_contens: string[] = [
    '細部にこだわる。それは時間をかけてもこだわる価値のあるものだ。',
    '成功者になろうとするな。価値ある者になろうとせよ。',
    '真の男は誰に対しても憎しみをもたない。',
    '愛は、敵を友人に変えられる唯一の力である。'
  ]

  return (
    <div className = 'post-list'>
      {
      post_contens.map((content: string) => 
        {
          return <Post content={content}/>
        })
      }
    </div>
  )
};