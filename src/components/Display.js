import React, { useContext, useEffect } from 'react'
import { MainContext } from '../state/main/mainProvider'

export default function Display() {

    const { state } = useContext(MainContext);

    // RENDERERS
    const renderPanels = () => {

        const panels = [];

        const verticalSpace = state.newHeight - (state.verticalPadding * 2)

        for (let i = 0; i < state.numPanels; i++) {
            panels.push(
                <div key={i} className="panel-container">
                    <div className="panel" style={{
                        width: state.panelWidth * 10,
                        height: state.panelHeight * 10,
                        // margin: `${(state.verticalPadding / 2) * 10}px auto`
                    }}>
                        <div className="panel-info-box info-top">Top: </div>
                        <div className="panel-info-box info-left">Left: </div>
                        <div className="panel-info-box info-right">Right: </div>
                        <div className="panel-info-box info-bottom">bottom: </div>
                    </div>
                </div>
            )
        }

        return panels
    }


    useEffect(() => {
        const originalDoorRect = document.querySelector("#original-door").getBoundingClientRect() 
        const newDoorRect = document.querySelector("#new-door").getBoundingClientRect()        
        const panels = document.querySelectorAll(".panel")

        let panelTop,
            panelLeft,
            panelRight,
            panelBottom,
            panelRect,
            topFromTop,
            bottomFromBottom,
            leftFromLeft,
            rightFromRight,
            originalCutWidth
        for(let panel of panels){
            panelRect = panel.getBoundingClientRect()
            
            topFromTop = ((panelRect.top / 10) - (newDoorRect.top / 10)).toFixed(2)
            bottomFromBottom = ((newDoorRect.bottom / 10) - (panelRect.bottom / 10)).toFixed(2)
            leftFromLeft = ((panelRect.left / 10) - (newDoorRect.left / 10)).toFixed(2)
            rightFromRight = ((newDoorRect.right / 10) - (panelRect.right / 10)).toFixed(2)
            
            panelTop = panel.querySelector(".info-top")
            panelLeft = panel.querySelector(".info-left")
            panelRight = panel.querySelector(".info-right")
            panelBottom = panel.querySelector(".info-bottom")
            
            panelTop.innerText = "top: " + topFromTop;
            panelLeft.innerText = "left: " + leftFromLeft;
            panelRight.innerText = "right: " + rightFromRight;
            panelBottom.innerText = "bottom: " + bottomFromBottom;


            originalCutWidth = (originalDoorRect.width / 10) - (newDoorRect.width / 10)
            // document.querySelector("#original-door").innerText = originalCutWidth.toFixed(2)
        }

        // console.log({originalDoorRect, newDoorRect})

    })

    return (
        <div id="door-display">

            <div id="original-door" style={{ width: state.originalWidth * 10, height: state.originalHeight * 10 }}>
                <div id="new-door" style={{
                    width: state.newWidth * 10,
                    height: state.newHeight * 10,
                    padding: `${state.verticalPadding * 10}px ${state.horizontalPadding * 10}px`,
                    gridTemplateRows: `repeat(${state.numPanels}, 1fr)`
                }}>
                    {renderPanels()}
                </div>
            </div>

        </div>
    )
}
