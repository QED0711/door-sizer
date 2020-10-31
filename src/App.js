import logo from './logo.svg';
import './App.css';
import InputForm from './components/InputForm';
import { MainProvider } from './state/main/mainProvider';
import Display from './components/Display';
import { useEffect, useState } from 'react';

function App() {

    const [showCoords, setShowCoords] = useState(false)
    const [coords, setCoords] = useState({ x: 0, y: 0 })

    useEffect(() => {
        window.onmousemove = e => {
            if (e.ctrlKey) {
                setShowCoords(true)
                setCoords({x: e.clientX, y: e.clientY})

            } else {
                setShowCoords(false)
            }
        }
    }, [])

    return (
        <MainProvider>
            <div className="App">
                {
                    showCoords
                    &&
                    <div id="mouse-coordinates" style={{left: coords.x, top: coords.y}}>
                        {`x: ${coords.x.toFixed(2)}, y: ${coords.y.toFixed(2)}`}
                    </div>
                }


                <Display />
                <InputForm />
            </div>
        </MainProvider>
    );
}

export default App;
