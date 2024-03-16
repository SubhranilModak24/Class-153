// Registering component in box-component.js
AFRAME.registerComponent("terrain-rotation-reader", {
    schema: {
      speed_of_rotation:{type:"number",default:0}
    },
  
    init:function(){
        window.addEventListener("keydown",(e) =>{
            if(e.key==="ArrowRight"){
                if(this.data.speed_of_rotation<=0.1){
                    this.data.speed_of_rotation+=0.01
                }
            }
            if(e.key==="ArrowLeft"){
                if(this.data.speed_of_rotation>=-0.1){
                    this.data.speed_of_rotation-=0.01
                }
            }
        })
    },

    tick: function () {
        var mapRotation=this.el.getAttribute("rotation")
        mapRotation.y=this.data.speed_of_rotation
        this.el.setAttribute("rotation",{
            x:mapRotation.x,
            y:mapRotation.y,
            z:mapRotation.z
        })
        console.log(this.data.speed_of_rotation)
    }
  });
  
  // Registering component in box-component.js
AFRAME.registerComponent("plane-rotation-reader", {
    schema: {
      speed_of_rotation:{type:"number",default:0},
      speed_of_position:{type:"number",default:0}
    },
  
    init:function(){
        window.addEventListener("keydown",(e) =>{
            this.data.speed_of_rotation=this.el.getAttribute("rotation")
            this.data.speed_of_position=this.el.getAttribute("position")
            var planeRotation= this.data.speed_of_rotation
            var planePosition= this.data.speed_of_position
            if(e.key==="ArrowRight"){
                if(planeRotation.x<10){
                    planeRotation.x+=0.5
                    this.el.setAttribute("rotation",planeRotation)
                }
            }
            if(e.key==="ArrowLeft"){
                if(planeRotation.x>-10){
                    planeRotation.x-=0.5
                    this.el.setAttribute("rotation",planeRotation)
                }
            }
            if(e.key==="ArrowUp"){
                if(planeRotation.z<20){
                    planeRotation.z+=0.5
                    this.el.setAttribute("rotation",planeRotation)
                }
                if(planePosition.y<2){
                    planePosition.y+=0.01
                    this.el.setAttribute("position",planePosition)
                }
            }
            if(e.key==="ArrowDown"){
                if(planeRotation.z>-10){
                    planeRotation.z-=0.5
                    this.el.setAttribute("rotation",planeRotation)
                }
                if(planePosition.y>-2){
                    planePosition.y-=0.01
                    this.el.setAttribute("position",planePosition)
                }
            }
        })
    },

    // tick: function () {
    //     var mapRotation=this.el.getAttribute("rotation")
    //     mapRotation.y=this.data.speed_of_rotation
    //     this.el.setAttribute("rotation",{
    //         x:mapRotation.x,
    //         y:mapRotation.y,
    //         z:mapRotation.z
    //     })
    //     console.log(this.data.speed_of_rotation)
    // }
  });
  