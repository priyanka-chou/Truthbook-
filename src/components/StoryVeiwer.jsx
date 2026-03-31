
import React from 'react'

const StoryVeiwer = () => {

const { activeStory, setActiveStory, stories, markStoryViewed } = useApp();
  const [progress, setProgress] = useState(0);
  const itvRef = useRef(null);
 
  useEffect(()=>{
    if(!activeStory) return;
    markStoryViewed(activeStory.id);
    setProgress(0);
    clearInterval(itvRef.current);
    itvRef.current = setInterval(()=>{
      setProgress(p=>{
        if(p>=100){ handleNext(); return 0; }
        return p+(100/(5000/50));
      });
    },50);
    return ()=>clearInterval(itvRef.current);
  },[activeStory?.id]);
 
  const handleNext = () => {
    const idx = stories.findIndex(s=>s.id===activeStory?.id);
    if(idx<stories.length-1&&!stories[idx+1].isOwn) setActiveStory(stories[idx+1]);
    else setActiveStory(null);
  };
  const handlePrev = () => {
    const idx = stories.findIndex(s=>s.id===activeStory?.id);
    if(idx>0&&!stories[idx-1].isOwn) setActiveStory(stories[idx-1]);
  };
 
  if(!activeStory||activeStory.isOwn) return null;
  const slide = activeStory.slides?.[0];
 
  return (
    <div className="animate-fade-in" style={{position:'fixed',inset:0,zIndex:100,background:'black',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{position:'relative',width:'100%',maxWidth:'420px',height:'100dvh',background:'black',overflow:'hidden'}}>
        {/* Progress */}
        <div style={{position:'absolute',top:0,left:0,right:0,zIndex:20,padding:'12px 12px 0'}}>
          <div style={{height:'3px',background:'rgba(255,255,255,0.3)',borderRadius:'999px',overflow:'hidden'}}>
            <div style={{height:'100%',background:'white',borderRadius:'999px',width:`${progress}%`,transition:'none'}}/>
          </div>
        </div>
        {/* Header */}
        <div style={{position:'absolute',top:'18px',left:0,right:0,zIndex:20,padding:'0 16px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
            <div style={{width:'38px',height:'38px',borderRadius:'50%',overflow:'hidden',border:'2px solid rgba(255,255,255,0.6)'}}>
              <img src={activeStory.user.avatar} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
            </div>
            <div>
              <div style={{color:'white',fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'14px'}}>{activeStory.user.username}</div>
              <div style={{color:'rgba(255,255,255,0.6)',fontFamily:'DM Sans,sans-serif',fontSize:'11px'}}>2h ago</div>
            </div>
          </div>
          <button onClick={()=>setActiveStory(null)} style={{background:'none',border:'none',color:'rgba(255,255,255,0.8)',cursor:'pointer',padding:'4px'}}>
            <Icon.X/>
          </button>
        </div>
        {/* Image */}
        {slide?<img src={slide.url} alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/>:
          <div style={{position:'absolute',inset:0,background:'linear-gradient(135deg,#4C1D95,#7C3AED)',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <p style={{color:'white',fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'22px',padding:'0 32px',textAlign:'center'}}>Check back soon!</p>
          </div>}
        <div style={{position:'absolute',inset:0,background:'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 30%, rgba(0,0,0,0.15) 100%)',pointerEvents:'none'}}/>
        {/* AI Score */}
        {slide&&<div style={{position:'absolute',bottom:'96px',left:'16px',right:'16px',zIndex:20}}>
          <div style={{background:'rgba(255,255,255,0.88)',backdropFilter:'blur(12px)',borderRadius:'16px',padding:'12px'}}>
            <p style={{fontSize:'11px',fontFamily:'Syne,sans-serif',fontWeight:700,color:'#374151',marginBottom:'8px'}}>AI Transparency</p>
            <div style={{height:'8px',background:'#e5e7eb',borderRadius:'999px',overflow:'hidden',display:'flex',marginBottom:'4px'}}>
              <div className="real-bar" style={{width:`${100-slide.aiScore}%`}}/>
              <div className="ai-bar" style={{width:`${slide.aiScore}%`}}/>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',fontSize:'11px',fontFamily:'DM Sans,sans-serif'}}>
              <span style={{color:'#059669',fontWeight:600}}>Real {100-slide.aiScore}%</span>
              <span style={{color:'#F97316',fontWeight:600}}>AI {slide.aiScore}%</span>
            </div>
          </div>
        </div>}
        {/* Reply */}
        <div style={{position:'absolute',bottom:'16px',left:'16px',right:'16px',zIndex:20,display:'flex',gap:'12px'}}>
          <div style={{flex:1,background:'rgba(255,255,255,0.15)',backdropFilter:'blur(8px)',border:'1px solid rgba(255,255,255,0.25)',borderRadius:'20px',padding:'12px 16px'}}>
            <span style={{color:'rgba(255,255,255,0.55)',fontFamily:'DM Sans,sans-serif',fontSize:'14px'}}>Reply...</span>
          </div>
          <button style={{width:'44px',height:'44px',background:'rgba(255,255,255,0.15)',backdropFilter:'blur(8px)',border:'1px solid rgba(255,255,255,0.25)',borderRadius:'14px',display:'flex',alignItems:'center',justifyContent:'center',color:'white',cursor:'pointer'}}>
            <Icon.Send/>
          </button>
        </div>
        {/* Tap zones */}
        <button style={{position:'absolute',left:0,top:0,bottom:0,width:'33%',zIndex:10,background:'none',border:'none',cursor:'pointer'}} onClick={handlePrev}/>
        <button style={{position:'absolute',right:0,top:0,bottom:0,width:'33%',zIndex:10,background:'none',border:'none',cursor:'pointer'}} onClick={handleNext}/>
      </div>
    </div>
  );

  
}
export default StoryVeiwer