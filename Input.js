
    

      
      document.getElementById("size").addEventListener("input", e => {
        if (size.value > 150) {
          size.value = 150
        }
      })
      file.addEventListener("input", e => {
        const img = document.createElement("img")
       

        let dragging = false
       
        let offx;
          let offy;
document.body.appendChild(img)
      
           const imgRect = img.getBoundingClientRect()
           
       
  
        img.src = URL.createObjectURL(file.files[0])
        file.value = ""
        img.addEventListener("mousedown", event => {
          dragging = true
          event.preventDefault()
const imgRect = img.getBoundingClientRect()
    offy = event.clientY - imgRect.top
         offx = event.clientX - imgRect.left
        
                  
        })
        document.addEventListener("mousemove", event => {
           event.preventDefault()
          if (dragging) {
             
            img.style.top = (event.clientY - offy) + "px"
            img.style.left = (event.clientX - offx) + "px"
              
          }
         
        })
        document.addEventListener("mouseup", event => {
          dragging = false
    
        })
      
      })

     
    
   