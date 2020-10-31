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
                    }}></div>
                </div>
            )
        }

        return panels
    }


    useEffect(() => {
        const originalDoorRect = document.querySelector("#original").getBoundingClientRect() 
        const newDoorRect = document.querySelector("#new").getBoundingClientRect()
        
        console.log(document.querySelector("#new").offsetTop)
        const panels = document.querySelectorAll(".panel")

        let panelRect,
            topFromTop,
            topFromBottom,
            bottomFromTop,
            bottomFromBottom
        for(let panel of panels){
            panelRect = panel.getBoundingClientRect()
            topFromTop = ((panelRect.top / 10) - (newDoorRect.top / 10))
            // console.log(panelRect.top / 10, newDoorRect.top / 10)
            // panel.innerText = JSON.stringify(panelRect)
            panel.innerText = topFromTop.toFixed(2)
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
