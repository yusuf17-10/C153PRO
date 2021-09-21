AFRAME.registerComponent('move-on-click', {
    schema: {
        moveY : {type : "number",default:0}
    },
    tick:function(){
        window.addEventListener("click",(e)=>{
            this.data.moveY = this.data.moveY+0.002
        })
        var pos = this.el.getAttribute("position")
        pos.y = pos.y+this.data.moveY
        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
    }
});

