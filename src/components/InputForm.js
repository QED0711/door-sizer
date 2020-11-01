import React, { useContext } from 'react'
import {MainContext} from '../state/main/mainProvider';


export default function InputForm() {
    const {state, setters} = useContext(MainContext);


    // EVENTS
    const handleChange = e => {
        const inputs = document.getElementsByTagName("input")

        let newState = {}

        for (let input of inputs) {
            !!parseFloat(input.value)
                ? newState[input.id] = parseFloat(input.value)
                : newState[input.id] = input.value
        }

        setters.setState(newState)

    }

    return (
        <div>
            
            <form id="input-form" onChange={handleChange}>

                <input type="text" id="name" value={state.name} style={{textAlign: "center"}} />


                <div id="original">
                    <h3>Original</h3>
                    <div className="ib-div">
                        <label htmlFor="originalWidth">Width</label><br/>
                        <input id="originalWidth" type="number" step="0.01" value={state.originalWidth} min="0" max="9999" />
                    </div>
                    <div className="ib-div">
                        <label htmlFor="originalHeight">Height</label><br/>
                        <input id="originalHeight" type="number" step="0.01" value={state.originalHeight} min="0" max="9999" />
                    </div>
                </div>

                <div id="new">
                    <h3>New</h3>
                    <div className="ib-div">
                        <label htmlFor="newWidth">Width</label><br/>
                        <input id="newWidth" type="number" step="0.01" value={state.newWidth} min="0" max="9999" />
                    </div>
                    <div className="ib-div">
                        <label htmlFor="newHeight">Height</label><br/>
                        <input id="newHeight" type="number" step="0.01" value={state.newHeight} min="0" max="9999" />
                    </div>
                </div>

                <div id="panel">
                    <h3>Panels</h3>


                    <div className="b-div">
                        <label htmlFor="numPanels">Count</label><br/>
                        <input id="numPanels" type="number" step="1" value={state.numPanels} min="0" max="9999" />
                    </div>

                    <div className="ib-div">
                        <label htmlFor="panelWidth">Width</label><br/>
                        <input id="panelWidth" type="number" step="0.01" value={state.panelWidth} min="0" max="9999" />
                    </div>
                    <div className="ib-div">
                        <label htmlFor="panelHeight">Height</label><br/>
                        <input id="panelHeight" type="number" step="0.01" value={state.panelHeight} min="0" max="9999" />
                    </div>
                    
                    <br/>

                    {/* <div className="ib-div">
                        <label htmlFor="horizontalPadding">Horizontal Padding</label><br/>
                        <input id="horizontalPadding" type="number" step="0.01" value={state.horizontalPadding} min="0" max="9999" />
                    </div>
                    <div className="ib-div">
                        <label htmlFor="verticalPadding">Vertical Padding</label><br/>
                        <input id="verticalPadding" type="number" step="0.01" value={state.verticalPadding} min="0" max="9999" />
                    </div> */}


                </div>

            </form>

        </div>
    )
}
