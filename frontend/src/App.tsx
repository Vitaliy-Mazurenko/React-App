import React, { useMemo, useState } from 'react';
import './App.css';
import Board from './components/Board/Board';
import CreateList from './components/CreateList/CreateList';
import circularArrow from "./assets/icons/circular_arrow.svg";
import type IList from './types/initData';
import type ITask from './types/initTask';
import { Context } from './context/context';


function App() {
  const [title, setInitTitle] = useState<string[]>([]);
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [list, setList] = useState<IList[]>([]);//////
  const [showList, setShowCreateList] = useState(false);

  const showCreate = (hide: boolean) => {
		setShowCreateList(hide);
	};

  const setTitle = (data: string[]) => {
    setInitTitle(data);
  };

  const addList = (newList: IList[]) => {
		setList([...list, ...newList]);
	};
  console.log(title);
  console.log(tasks);

  const value = useMemo(
    () => ({
      title,
      tasks,
      setTitle,
      setTasks,
    }),
    [title, tasks],
  );

  return (
    <div className="App">
      <Context.Provider value={value}>
      <header className="App-header">
        <h2>My Task Board</h2>
        <div className="Header-buttons">
        <button className="Histopy-button">
        <img src={circularArrow} alt="arrow" />
         Histopy</button>
        <button className="New-List-button" onClick={() => showCreate(true)}><span>+</span> Create new list</button>
        </div>
      </header>
      {showList ? (
				<CreateList
					showCreate={showCreate}
					addList={addList}
				/>
			) : (
				<Board
					list={list}
				/>
			)}
      {/* {showList && (
				<CreateList
        showCreate={showCreate}
        addList={addList}
      />
					)}
      	<Board list={list}/> */}
      </Context.Provider>
    </div>
  );
}

export default App;
