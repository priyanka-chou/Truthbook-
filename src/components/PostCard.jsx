import React from 'react'

const PostCard = ({ post }) => {

 const { toggleLike } = useApp();
  const [showScore, setShowScore] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
 
  return (
    <div className="animate-slide-up" style={{background:'white',borderRadius:'24px',boxShadow:'0 2px 20px rgba(124,58,237,0.08)',overflow:'hidden'}}>
      {/* Header */}
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'12px 16px'}}>
        <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
          <div style={{position:'relative'}}>
            <div className="story-ring">
              <div style={{width:'40px',height:'40px',borderRadius:'50%',overflow:'hidden',border:'2px solid white'}}>
                <img src={post.user.avatar} alt="" style={{width:'100%',height:'100%',objectFit:'cover',background:'#EDE9FE'}}/>
              </div>
            </div>
            {post.user.verified&&<div style={{position:'absolute',bottom:'-2px',right:'-2px',width:'16px',height:'16px',background:'#7C3AED',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',border:'2px solid white'}}>
              <Icon.Check/>
            </div>}
          </div>
          <div>
            <div style={{fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'14px',color:'#111827'}}>{post.user.username}</div>
            <div style={{fontSize:'11px',fontFamily:'DM Sans,sans-serif',color:'#9CA3AF',display:'flex',alignItems:'center',gap:'4px'}}>
              {post.location&&<><Icon.Pin/>{post.location} · </>}{post.timestamp}
            </div>
          </div>
        </div>
        <button onClick={()=>setShowScore(!showScore)}>
          <AIScoreBadge aiScore={post.aiScore} compact/>
        </button>
      </div>
      {/* Image */}
      <div style={{position:'relative',aspectRatio:'1',background:'#F5F3FF',overflow:'hidden'}}>
        {!imgLoaded&&<div className="shimmer-bg" style={{position:'absolute',inset:0}}/>}
        <img src={post.image} alt="" style={{width:'100%',height:'100%',objectFit:'cover',opacity:imgLoaded?1:0,transition:'opacity 0.3s'}} onLoad={()=>setImgLoaded(true)}/>
        {post.aiScore>60&&<div style={{position:'absolute',top:'12px',left:'12px',background:'rgba(255,255,255,0.88)',backdropFilter:'blur(8px)',borderRadius:'12px',padding:'6px 10px',display:'flex',alignItems:'center',gap:'6px'}}>
          <svg style={{width:'14px',height:'14px',color:'#F97316'}} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm-1-5h2v2h-2zm0-8h2v6h-2z"/></svg>
          <span style={{fontSize:'12px',fontFamily:'Syne,sans-serif',fontWeight:700,color:'#EA580C'}}>{post.aiScore}% AI</span>
        </div>}
        {post.aiScore<=5&&<div style={{position:'absolute',top:'12px',left:'12px',background:'rgba(255,255,255,0.88)',backdropFilter:'blur(8px)',borderRadius:'12px',padding:'6px 10px',display:'flex',alignItems:'center',gap:'6px'}}>
          <Icon.BadgeCheck/>
          <span style={{fontSize:'12px',fontFamily:'Syne,sans-serif',fontWeight:700,color:'#059669'}}>Verified Real</span>
        </div>}
      </div>
      {/* Actions */}
      <div style={{padding:'12px 16px 8px'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'10px'}}>
          <div style={{display:'flex',gap:'16px'}}>
            {[
              { action:()=>toggleLike(post.id), icon:<Icon.Heart filled={post.liked}/>, val:post.likes.toLocaleString(), cls:post.liked?'text-red-500':'text-gray-500 hover:text-red-400' },

              { action:()=>{}, icon:<Icon.Comment/>, val:post.comments, cls:'text-gray-500 hover:text-primary-500' },
              { action:()=>{}, icon:<Icon.Share/>, val:post.shares, cls:'text-gray-500 hover:text-primary-500' },
            ].map((a,i)=>(
              <button key={i} onClick={a.action} style={{display:'flex',alignItems:'center',gap:'6px',background:'none',border:'none',cursor:'pointer',transition:'all 0.2s',fontFamily:'Syne,sans-serif',fontWeight:600,fontSize:'14px'}} className={a.cls}>
                {a.icon}<span>{a.val}</span>
              </button>
            ))}
          </div>
          <button style={{background:'none',border:'none',cursor:'pointer',color:'#9CA3AF'}}><Icon.Bookmark/></button>
        </div>
        <p style={{fontSize:'13px',fontFamily:'DM Sans,sans-serif',color:'#1F2937',lineHeight:'1.5',marginBottom:'8px'}}>
          <span style={{fontFamily:'Syne,sans-serif',fontWeight:700}}>{post.user.username} </span>{post.caption}
        </p>
        {post.tags?.length>0&&<div style={{display:'flex',flexWrap:'wrap',gap:'4px',marginBottom:'10px'}}>
          {post.tags.map(t=><span key={t} style={{fontSize:'12px',fontFamily:'DM Sans,sans-serif',color:'#7C3AED',cursor:'pointer'}}>#{t}</span>)}
        </div>}
        {/* Score expander */}
        <button onClick={()=>setShowScore(!showScore)} style={{width:'100%',background:'none',border:'none',cursor:'pointer',borderTop:'1px solid #F5F3FF',paddingTop:'8px'}}>
          <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
            <svg style={{width:'16px',height:'16px',color:'#A78BFA'}} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <span style={{fontSize:'12px',fontFamily:'Syne,sans-serif',fontWeight:700,color:'#8B5CF6'}}>AI Transparency Score</span>
            <span style={{marginLeft:'auto',color:'#A78BFA'}}><Icon.ChevronDown up={showScore}/></span>
          </div>
          {showScore&&<div className="animate-slide-up" style={{paddingTop:'10px',paddingBottom:'4px',textAlign:'left'}}>
            <AIScoreBadge aiScore={post.aiScore}/>
          </div>}
        </button>
      </div>
    </div>
  );
}

export default PostCard
