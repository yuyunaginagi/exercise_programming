import React from "react";
import "./style.css";

export const Registration = () => {
 return (
   <form>
       <h2>会員登録画面</h2>
       <div className="form-group d-flex text-center">
           <h3 className="task_title">ユーザー</h3>
           <input type="text"/>
       </div>
       <div className="form-group d-flex ">
           <h3 className="task_title">アドレス</h3>
           <input type="text"/>
       </div>
   </form>
 );
};
