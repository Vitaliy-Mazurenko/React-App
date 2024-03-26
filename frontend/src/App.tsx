import React, { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';
import CreateList from './components/CreateList/CreateList';

interface IList {
  id: number | string;
  title: string;
}

function App() {
  const [list, setList] = useState<Array<IList>>([]);
  const [show, setShowCreate] = useState(false);

  const showCreate = (hide: boolean) => {
		setShowCreate(hide);
	};

  // const addList = (newList: Array<IList>) => {
	// 	setList([...list, newList]);
	// };

  return (
    <div className="App">
      <header className="App-header">
        <h2>My Task Board</h2>
        <div className="Header-buttons">
        <button className="Histopy-button"><span>&#8634;</span> Histopy</button>
        <button className="New-List-button" onClick={() => showCreate(true)}><span>+</span> Create new list</button>
        </div>
      </header>
      {show ? (
				<CreateList
					showCreate={showCreate}
					list={list}
					// newList={newList}
				/>
			) : (
				<Board
					list={list}
				/>
			)}
    </div>
  );
}

export default App;
