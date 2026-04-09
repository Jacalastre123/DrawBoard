
      canvas.addEventListener("mousedown", e => {
        dragging = true
        if (!square || circle || (!circle && !square)) {
         ctx.beginPath()
         if (!circle) {
          const canvasRect = canvas.getBoundingClientRect()
           ctx.lineTo(e.clientX - canvasRect.x, e.clientY - canvasRect.y )
         }
        }
      })
    document.addEventListener("mousemove", e => {
   
if (dragging) {
 
     

      const canvasRect = canvas.getBoundingClientRect()
      if (!square || eraser) {
      ctx.lineTo(e.clientX - canvasRect.x, e.clientY - canvasRect.y )
            ctx.lineCap = "round"
                       
          if (eraser) {

            ctx.strokeStyle = "white"
          }
          else {
            ctx.strokeStyle = prior
          }
   
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
}

}


    })

    canvas.addEventListener("mouseup", e => {
      dragging = false
    })
    canvas.addEventListener("mouseleave", e => {
      dragging = false
    })