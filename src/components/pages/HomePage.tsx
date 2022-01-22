import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Card, Stack, Table } from 'react-bootstrap'

import main_icon from '../../assets/main_icon.jpg'
import inventor_logo from '../../assets/inventor_logo.png'
import blender_logo from '../../assets/blender_logo.png'

import "./HomePage.css"

const HomePage = (): JSX.Element => {

    /*const [isOpen01, setIsOpen01] = useState(false);*/

    return (
        <div className='main'>
            <Stack gap={3}>
                <div className='TopCard'>
                    <img src={main_icon} alt="my icon" width="200" height="200" />
                    <p className='h1'>Tahi</p>
                    <ul className='list-unstyled TopCard_list'>
                        <li>Tahi314</li>
                        <li>Tahi-314</li>
                        <li>Tahi_314</li>
                        <li>Tahi_knct</li>
                    </ul>
                </div>
                <div className='ProfileCard'>
                    <h2>Profile</h2>
                    <Table borderless>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>hoge hoge</td>
                            </tr>
                            <tr>
                                <td>Age</td>
                                <td>19</td>
                            </tr>
                            <tr>
                                <td>Birth</td>
                                <td>2002/05/22</td>
                            </tr>
                            <tr>
                                <td>School</td>
                                <td>NIT, Kurume College</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className='SkillsCard'>
                    <h2>Skills</h2>
                    <Stack gap={2}>
                        <Card border='secondary' bg='dark'>
                            <Card.Body>
                                <div id='box01'><img src={inventor_logo} alt='inventor logo' width="48" height="49" /></div>
                                <div id='box02'><b>Autodesk Inventor</b></div>
                                <div id='box03'>2018~</div>
                            </Card.Body>
                        </Card>
                        <Card border='secondary' bg='dark'>
                            <Card.Body>
                                <div id='box01'><img src={blender_logo} alt='inventor logo' width="48" height="49" /></div>
                                <div id='box02'><b>Blender</b></div>
                                <div id='box03'>2020~</div>
                            </Card.Body>
                        </Card>
                    </Stack>
                </div>
                <div className='WorksCard'>
                    <h2>Works</h2>
                </div>
                <div className='ArticlesCard'>
                    <h2>Articles</h2>
                </div>
                <div className='ContactsCard'>
                    <h2>Contacts</h2>
                </div>
            </Stack >
        </div >
    );
};

export default HomePage;

/*export default class HomePage extends React.Component {
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
}*/

/*<Button onClick={() => setIsOpen01((now) => !now)}>開閉</Button>
                {
                    isOpen01 ? <div>Secret item</div> : null
                }
                <div hidden={isOpen01}>Second item</div> */
