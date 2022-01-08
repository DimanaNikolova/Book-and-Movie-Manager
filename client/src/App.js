import { Switch, Route } from 'react-router-dom'

import './App.css'

import HomePage from './components/HomePage/HomePage'
import SignUpPage from './components/SignUpPage/SignUpPage'
import SignInPage from './components/SignInPage/SignInPage'
import PageContainer from './components/PageContainer/PageContainer'

function App() {
    return (
        <div className='App'>
            <Switch>
                <PageContainer>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/sign-up' component={SignUpPage} />
                    <Route path='/sign-in' component={SignInPage} />
                </PageContainer>
            </Switch>
        </div>
    )
}

export default App
