import React, {useEffect} from 'react';
import './App.css';
import './dal/api';
import {Switch, Route, Redirect} from "react-router-dom";
import {Header} from './ui/components/Header/Header';
import {Counter} from './ui/pages/Counter/Counter';
import {SettingsContainer} from './ui/pages/Settings/Settings';
import {useDispatch} from 'react-redux';
import {getCounterSettings} from './bll/settings-reducer';

function App() {
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch(getCounterSettings())
    }, []);

    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route path={'/counter'} render={() => <Counter/>}/>
                <Route path={'/settings'} render={() => <SettingsContainer/>}/>
                <Redirect exact path={'/'} to={'/counter'}/>
                <Route path={'*'} render={() => <div>ERROR NOT FOUND</div>}/>
            </Switch>
        </div>
    );
}

export default App;



