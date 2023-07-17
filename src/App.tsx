import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import MyLinkedList from "./common/list/LinkedList";
import {mergeTwoLists} from "./common/leetcode/mergeTwoLists";
import { list1, list2 } from './data';

function App() {
    useEffect(() => {
        console.log(mergeTwoLists(list1, list2))
    }, []);
    // function test () {
        // test();
    // }
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
