import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import MyLinkedList from "./common/list/LinkedList";

function App() {
    useEffect(() => {
        test();
    }, []);
    function test () {
        const testLinkList = new MyLinkedList();
        testLinkList.addAtHead(1);
        testLinkList.addAtTail(3);
        testLinkList.addAtIndex(1, 2);
        // testLinkList.get(1);
        // testLinkList.deleteAtIndex(1);
        // testLinkList.get(1);
        console.log(testLinkList);
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
