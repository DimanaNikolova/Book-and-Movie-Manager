import { Switch, Route } from 'react-router-dom'

import './App.css'

import PrivateRoute from './hoc/PrivateRoute'
import { authGuard } from './hoc/authGuard'

import HomePage from './components/HomePage/HomePage'
import UserHomePage from './components/UserHomePage/UserHomePage'
import SignUpPage from './components/SignUpPage/SignUpPage'
import SignInPage from './components/SignInPage/SignInPage'
import PageContainer from './components/PageContainer/PageContainer'
import CatalogPage from './components/CatalogPage/CatalogPage'
import ItemDetailsPage from './components/ItemDetailsPage/ItemDetailsPage'
import ProfilePage from './components/ProfilePage/ProfilePage'

import AuthContextProvider from './contexts/AuthContext'

function App() {
    return (
        <div className='App'>
            <Switch>
                <AuthContextProvider>
                <PageContainer>
                    <Route exact path='/' component={authGuard(HomePage, UserHomePage)} />
                    <Route path='/sign-up' component={SignUpPage} />
                    <Route path='/sign-in' component={SignInPage} />
                    <PrivateRoute path='/movie-catalog' component={CatalogPage} />
                    <PrivateRoute path='/book-catalog' component={CatalogPage} />
                    <PrivateRoute path='/item/:id' component={ItemDetailsPage} />
                    <PrivateRoute path='/profile' component={ProfilePage} />
                </PageContainer>
                </AuthContextProvider>
            </Switch>
        </div>
    )
}

export default App
