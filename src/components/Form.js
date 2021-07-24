import React from 'react'

export default function Form() {
    return (
        <form>
			<div>
            <label>名前 *</label> <label id="email-label">　電子メール*　　　</label>
  			<input type="text"></input> <input type="email"></input></div>
  			<div><label>メッセージ </label>
  			<textarea></textarea></div>
  			<input type="submit" value="送る" onclick="MessageConfirm()"></input>
            
		</form>
    )
}
