import React from "react";




class Interact extends React.Component {

    render () {

        var el          = document.getElementById('transform'),
        css         = document.getElementById('css'),
        width       = el.clientWidth,
        height      = el.clientHeight,
        perspective = 500,
        rotateX     = 0,
        rotateY     = 0,
        scale       = 100,
        isDown      = false,
        reverse     = false,
        lastX,
        lastY;

        return 

           
        
         
        
           
            
        
           
                
            function scaleVal() {
              var strScale = scale.toString();
              if (scale >= 100) {
                return parseFloat(strScale[0] + '.' +  strScale.slice(1));
              }
              return parseFloat('0.' + strScale);
            }
            
           

    }

   

}

export default Interact;