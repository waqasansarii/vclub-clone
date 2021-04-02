import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import LoginScreen from '../pages/login'
import { Navbar } from '../layout/navbar/navba'
import Footer from '../layout/footer/footer'
import Validation from '../pages/validationPage/validation'
import New from '../pages/new'

const Approuter = ({ useer }) => {
    return (
        <div>
            <Router >
                <Navbar />
                <Switch>
                    <Route exact path='/'  >
                        {!useer ? <Redirect to='/validate' /> : <LoginScreen />}
                    </Route>
                    <Route path='/news' >
                        {!useer ? <Redirect to='/validate' /> : <New />}
                    </Route>
                    <Route path='/validate' component={Validation} />
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default Approuter
