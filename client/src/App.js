import { Switch, Route } from 'react-router-dom'

import './App.css'

import HomePage from './components/HomePage/HomePage'
import SignUpPage from './components/SignUpPage/SignUpPage'
import SignInPage from './components/SignInPage/SignInPage'
import APhotoADay from './components/APhotoADay/APhotoADay'
import PageContainer from './components/PageContainer/PageContainer'
import MarsWeather from './components/MarsWeather/MarsWeather'

function App() {
    return (
        <div className='App'>
            <Switch>
                <PageContainer>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/sign-up' component={SignUpPage} />
                    <Route path='/sign-in' component={SignInPage} />
                    <Route path='/landing' component={APhotoADay} />
                    <Route path='/mars-weather' component={MarsWeather} />
                </PageContainer>
            </Switch>
        </div>
    )
}

export default App
