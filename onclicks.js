  
 document.addEventListener("click", e => {
    const contain = document.getElementById("contain")
        if (e.target.id === "strokeStyles") {
          prior = document.getElementById('colour').value;  
          ctx.strokeStyle = document.getElementById('colour').value; 
          deletes = false; 
           speech = false

        }
        else if (e.target.id === "thicks") {
          ctx.lineWidth = document.getElementById('ranges').value; 
          deletes = false
           speech = false
        }
        else if (e.target.id === "erase") {
          deletes = false
           speech = false
          if (document.getElementById("erase").checked) {
            eraser = true
          }
          else {
           
            eraser = falsed
            if (square) {
         document.getElementById("square").click()
          document.getElementById("square").click()
          document.getElementById("square").click()
          document.getElementById("square").click()
          document.getElementById("square").click()
            document.getElementById("square").click()
            }

            if (circle) {
          document.getElementById("circle").click()
          document.getElementById("circle").click()
            }
          }
    

          
        }
                 
       
        else if (e.target.id === "delete") {
          deletes = true;
           speech = false
          document.body.style.cursor = "crosshair"
        }
        else if (e.target.tagName === "IMG" && deletes) {
          e.target.remove(); 
          console.log(e.target + "done")
          deletes = false
           speech = false
          document.body.style.cursor = "auto"
          }
     
         else if (e.target.id === "clearBoard") {
          deletes = false
           speech = false
          ctx.clearRect(0,0,canvas.width,canvas.height)
          document.body.querySelectorAll("img").forEach(item => {
            item.remove()
          })
          document.body.querySelectorAll(".text").forEach(item => item.remove())
          document.querySelectorAll(".clock").forEach(item => item.remove())
           document.getElementById("clock").innerText = "Enable"
              canvas.width = window.innerWidth + 1
      canvas.height = Number(window.innerHeight) - 10
         }
         else if (e.target.id === "newText") {
          let canDrag = false
          deletes = false
           speech = false
          const text = document.createElement("p")
          text.style.fontSize = document.getElementById("size").value + "px"
          text.innerText = document.getElementById("text").value
          text.classList = "text"
          contain.appendChild(text)

          let offsetX;
          let offsetY;
          text.addEventListener("mousedown", event => {
            canDrag = true

           
           offsetX = event.clientX - text.offsetLeft
            offsetY = (event.clientY - text.offsetTop) + text.offsetHeight
          })
          document.addEventListener("mousemove", event => {
            if (canDrag) {
              event.preventDefault()
              text.style.top = (event.clientY - offsetY) + "px"
              text.style.left = (event.clientX - offsetX) + "px"

            }
          })
          document.addEventListener("mouseup", () => {
            canDrag = false
          })
          document.addEventListener("mouseleave", () => {
            canDrag = false
          })
         }
         else if (e.target.classList.contains("text") && deletes) {
          deletes = false
          e.target.remove()
           document.body.style.cursor = "auto"
         }
        
      
         else if (e.target.id === "borders") {
          speech = false
          if (e.target.innerText === "Disable Borders") {
            e.target.innerText  = "Enable Borders"
            canvas.style.border = "none"
          }
          else {
          canvas.style.border = "1px solid black"
          e.target.innerText = "Disable Borders"
          }
         }
         else if (e.target.id === "print") {
           
          speech = false
          deletes = false
          window.print()
          
         
          
         }
         else if (e.target.id === "dark") {
          if (e.target.innerText === "Dark Mode") {
          document.body.style.backgroundColor = "rgb(90,90,90)"
          e.target.innerText = "Light Mode"
          }
          else {
             document.body.style.backgroundColor = "white"
             e.target.innerText = "Dark Mode"
          }
         }
         else if (e.target.id === "square") {
          square = true
           speech = false
          console.log("works")
          if (rectWidth === 2) {
          rectWidth = 30
          rectHeight = 30
          e.target.innerText = "Small Square"
          }
          else if (rectWidth === 30) {
            rectWidth = 60
            rectHeight = 60
            e.target.innerText = "Medium Square"
          }
          else if (rectWidth === 60) {
            rectWidth = 110
            rectHeight = 110
            e.target.innerText = "Large Square"
          }
          else if (rectWidth === 110) {
            rectWidth = 200
            rectHeight = 200
            e.target.innerText = "Giant Square"
          }
          else {
            square = false
            rectWidth = 2
            rectHeight = 2
            e.target.innerText = "Square"
          }
          if (circle) {
             document.getElementById("circle").innerText = "Circle"
             circle = false
          }
         }
         else if (e.target.id === "circle") {
          if (circle) {
            circle = false
          e.target.innerText = "Circle"
          }
          else {
          circle = true
          e.target.innerText = "Drawing Circles"
          }
          if (square) {
            document.getElementById("square").innerText = "Square"
          square = false
          rectWidth = 2
          rectHeight = 2
          }
          
         }

         else if (e.target.id === "clock") {
          
          let isDraggable = false
           speech = false
           deletes = false
            const clockWidget = document.createElement("div")
            clockWidget.classList = "clock"
            let time = new Date()
            clockWidget.innerText = time.getHours() + ":" + String(time.getMinutes()).padStart(2, "0")
            setInterval(function() {
              time = new Date()
               clockWidget.innerText = time.getHours() + ":" + String(time.getMinutes()).padStart(2, "0")
            }, 50)
            let y = 0
            let x = 0
        
            clockWidget.addEventListener("mousedown", (event) => {
              isDraggable = true
              const clockRect = clockWidget.getBoundingClientRect()
                 y = event.clientY - clockRect.top
              x = event.clientX -  clockRect.left
             
            } )
            document.addEventListener("mousemove", event => {
              if (isDraggable) {

                clockWidget.style.top = (event.clientY - y) + "px"
                clockWidget.style.left = (event.clientX - x) + "px"
              }
            })
            document.addEventListener("mouseup", event => {
              isDraggable = false
            })
            contain.appendChild(clockWidget)
            e.target.innerText = "Disable"
            let amount = document.querySelectorAll(".clock")
            if (amount[1]) {
              amount[0].remove()
              amount[1].remove()
              e.target.innerText = "Enable"
            }
         }
         else if (e.target.id === "TTS") {
          speech = true
          deletes = false
          document.body.style.cursor = "crosshair"
          console.log(speech)  
         }
         else if (e.target.classList.contains("text") && speech){
          let newSpeech = new SpeechSynthesisUtterance(e.target.innerText)
          speechSynthesis.speak(newSpeech)
          speech = false
             deletes = false
          e.target.style.fontWeight = "bold"
           document.body.style.cursor = "auto"
          setTimeout(function() {
            e.target.style.fontWeight = "normal"
          }, 1000)
         }

         else if (e.target.id === "closure") {

            start.close()
         }

         else if (e.target.classList.contains("clock") && speech) {
          let speaking = new SpeechSynthesisUtterance(e.target.innerText)
          speechSynthesis.speak(speaking)
          speech = false
          deletes = false
           document.body.style.cursor = "auto"
           e.target.style.fontWeight = "bold"
          setTimeout(function() {
            e.target.style.fontWeight = "normal"
          }, 1000)
         
         }
        
        else if (deletes) {
          deletes = false
          speech = false
           document.body.style.cursor = "auto"
         }
         else if (speech) {
          speech = false
          document.body.style.cursor = "auto"
         }
         
      })
     
