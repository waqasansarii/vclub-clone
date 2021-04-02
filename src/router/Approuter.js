import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginScreen from '../pages/login'
import { Navbar } from '../layout/navbar/navba'
import Footer from '../layout/footer/footer'
import New from '../pages/new'

const Approuter = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={LoginScreen} />
                    <Route path='/news' >
                       <New />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default Approuter
