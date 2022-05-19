import { useState } from "react";

const MemoList=()=>{
  const [memos, setMemos]=useState([
    {id: 1, memo: "내용"},
    {id: 2, memo:"메모를 만들었습니다"}
  ]);
  const [text, setText]=useState("");
  const changeText=(e)=>{
    setText(e.target.value);
  }
  const addMemo=()=>{
    const newMemos=[...memos, {id: memos.length+1, memo: text}];
    setMemos(newMemos);
  }
  const delMemo=(id)=>{
    const newMemos=memos.filter((memo)=>memo.id!==id);
    setMemos(newMemos);
  }
  return (<>
  <h1>메모</h1>
  <input type="text" onChange={changeText}></input>
  <button onClick={()=>{addMemo()}}>추가</button>
  <ul>
    {memos.map((memo)=><li key={memo.id}>{memo.memo}<button onClick={()=>{delMemo(memo.id)}}>X</button></li>)}
  </ul>
  </>)
}

export default MemoList;