import React from 'react'
import { useApp } from "../store/AppContext";

const StoryBar = () => {
const { stories, setActiveStory } = useApp();
  return (
    <div style={{background:'white',borderBottom:'1px solid #F5F3FF'}}>
      <div className="no-scrollbar" style={{display:'flex',gap:'12px',overflowX:'auto',padding:'12px 16px'}}>
        {stories.map((s,i)=>(
          <button key={s.id} onClick={()=>setActiveStory(s)} style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'6px',flexShrink:0,background:'none',border:'none',cursor:'pointer',padding:0}}>
            <div className={s.isOwn?'':'story-ring '+(!s.viewed?'':'story-ring-viewed')}>
              <div style={{position:'relative'}}>
                <div style={{width:'60px',height:'60px',borderRadius:'50%',overflow:'hidden',background:'#EDE9FE',border:s.isOwn?'2px solid #EDE9FE':'none'}}>
                  <img src={s.user.avatar} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                </div>
                {s.isOwn&&<div style={{position:'absolute',bottom:0,right:0,width:'20px',height:'20px',background:'linear-gradient(135deg,#7C3AED,#A78BFA)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',border:'2px solid white'}}>
                  <svg style={{width:'10px',height:'10px',color:'white'}} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </div>}
              </div>
            </div>
            <span style={{fontSize:'11px',fontFamily:'DM Sans,sans-serif',fontWeight:500,color:s.viewed?'#9CA3AF':'#374151',maxWidth:'60px',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>
              {s.isOwn?'Your story':s.user.username}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default StoryBar


