import { Switch, Route } from 'react-router-dom'

import './App.css'

import HomePage from './components/HomePage/HomePage'
import SignUpPage from './components/SignUpPage/SignUpPage'
import SignInPage from './components/SignInPage/SignInPage'
import PageContainer from './components/PageContainer/PageContainer'
import MovieCatalog from './components/MovieCatalog/MovieCatalog'
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage'

import AuthContextProvider from './contexts/AuthContext'

function App() {
    return (
        <div className='App'>
            <Switch>
                <AuthContextProvider>

                <PageContainer>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/sign-up' component={SignUpPage} />
                    <Route path='/sign-in' component={SignInPage} />
                    <Route path='/movie-catalog' component={MovieCatalog} />
                    <Route path='/movie/:id' component={MovieDetailsPage} />
                </PageContainer>
                </AuthContextProvider>
            </Switch>
        </div>
    )
}

export default App
