  const canvas = document.getElementById("canvas")
      const ctx = canvas.getContext("2d")
      const ranges = document.getElementById("ranges")
      const file = document.getElementById("file")
      const start = document.getElementById("Start")
      let eraser = false
       let prior = "black"
      let deletes = false
      let rectWidth = 2
      let rectheight = 2
      let square = false
      let circle = false
      let speech = false
       let dragging = false
canvas.width = window.innerWidth + 1
      canvas.height = Number(window.innerHeight) - 10

         
      ranges.addEventListener("input", thickTest) 
     start.showModal()

       function thickTest() {
       
        const thickness = document.getElementById("thickness")
        const tctx = thickness.getContext("2d")
 tctx.clearRect(0,0, thickness.width, thickness.height)
        tctx.beginPath()
        tctx.moveTo(10, 25)
        tctx.lineTo(85,25)
        tctx.lineWidth = ranges.value
        tctx.stroke()
        document.getElementById("thickLabel").innerText = "Thickness (" + ranges.value + "):"
      }
      thickTest()
    
