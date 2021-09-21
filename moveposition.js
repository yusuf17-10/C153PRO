AFRAME.registerComponent('move', {
    schema: {
        moveY : {default:0,type:"number"}
    },

    tick: function () {
        var pos = this.el.getAttribute("position")
        this.data.moveY = this.data.moveY+0.01
        pos.y = this.data.moveY
        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
    }
});
AFRAME.registerComponent('camera-zoom-out', {
    schema: {
        moveZ:{type:'number',default:0}
    },
    tick: function () {
        var pos = this.el.getAttribute("position")
        this.data.moveZ = this.data.moveZ+0.02
        pos.z = this.data.moveZ
        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
    }
});
AFRAME.registerComponent('fall-down', {
    schema: {
        moveY:{default:0,type:"number"}
    },

    tick: function () {
        window.addEventListener("click",(e)=>{
            this.data.moveY = this.data.moveY-0.00001
        })
        var pos = this.el.getAttribute("position")
        pos.y =pos.y+this.data.moveY
        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})

    }
});


