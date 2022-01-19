import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import main_icon from '../../assets/main_icon.jpg'

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="HomePage-box">
                <div className='plofile-box-body'>
                    <h1>HelloWorld!</h1>
                    <p>This is Tahi's Portfolio Page</p>
                    <img src={main_icon} alt="My test page icon" width="200" height="200"></img>
                    <p>
                        <Link to="/Links">
                            <Button variant='outline-primary'>Links</Button>
                        </Link>
                    </p>
                </div>
            </div>
        )
    }
}
