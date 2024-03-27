import React, { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';
import CreateList from './components/CreateList/CreateList';

interface IList {
  title: string;
}

function App() {
  const [list, setList] = useState<IList[]>([]);
  const [show, setShowCreateList] = useState(false);

  const showCreate = (hide: boolean) => {
		setShowCreateList(hide);
	};

  const addList = (newList: IList[]) => {
		setList([...list, ...newList]);
	};
  console.log(list);

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
					addList={addList}
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
