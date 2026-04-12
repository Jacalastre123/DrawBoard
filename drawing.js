
      canvas.addEventListener("pointerdown", e => {
        dragging = true
        if ((!circle && !square)) {
         
         ctx.beginPath()
       
          const canvasRect = canvas.getBoundingClientRect()
    ctx.moveTo(e.clientX - canvasRect.x, e.clientY - canvasRect.y)    

 
        }
      })
    document.addEventListener("pointermove", e => {
   
if (dragging) {
    ctx.globalCompositeOperation = eraser ? "destination-out": "source-over"
     
          
      const canvasRect = canvas.getBoundingClientRect()
      if ((!square && !circle) || eraser) {
      ctx.lineTo(e.clientX - canvasRect.x, e.clientY - canvasRect.y )
            ctx.lineCap = "round"
                
       
   
      ctx.stroke()
}   
if (square && !eraser) {
 
  ctx.fillStyle = prior
    
  ctx.fillRect(e.clientX - canvasRect.x - (rectWidth / 2), e.clientY - canvasRect.y - (rectHeight / 2), rectWidth, rectHeight )
}
if (circle && !eraser) {
   
  ctx.beginPath()
     
  ctx.arc(e.clientX - canvasRect.x, e.clientY - canvasRect.y, 20, 0, Math.PI * 2)
ctx.fillStyle = prior
ctx.strokeStyle = prior
ctx.stroke()
 ctx.closePath()
}

}


    })

    canvas.addEventListener("pointerup", e => {
      dragging = false
      ctx.closePath()
               ctx.beginPath()
    })
    canvas.addEventListener("mouseleave", e => {
      dragging = false
       ctx.closePath()       
         ctx.beginPath()
    })
