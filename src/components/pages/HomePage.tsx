import React from 'react'
import { Card, Col, Container, Row, Stack, Table } from 'react-bootstrap'

import main_icon from '../../assets/main_icon.png'
import inventor_logo from '../../assets/inventor_logo.png'
import blender_logo from '../../assets/blender_logo.png'
import unity_logo from '../../assets/unity_logo.png'
import kicad_logo from '../../assets/kicad_logo.png'
import cpp_logo from '../../assets/cpp_logo.png'
import work_pic01 from '../../assets/work_pic01.png'

import "./HomePage.css"

const HomePage = (): JSX.Element => {

    /*const [isOpen01, setIsOpen01] = useState(false);*/

    return (
        <div className='main'>
            <Stack gap={4}>
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
                                <td>Anonymous</td>
                            </tr>
                            <tr>
                                <td>Age</td>
                                <td>20</td>
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
                                <Container>
                                    <Row>
                                        <Col xs={9}>
                                            <div className='SkillNameBox'>
                                                <img src={cpp_logo} alt='Cpp logo' height="49" />
                                                <b>C++</b>
                                            </div>
                                        </Col>
                                        <Col xs={3}>
                                            <div className='SkillSinceBox'>2016~</div>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                        <Card border='secondary' bg='dark'>
                            <Card.Body>
                                <Container>
                                    <Row>
                                        <Col xs={9}>
                                            <div className='SkillNameBox'>
                                                <img src={inventor_logo} alt='inventor logo' height="49" />
                                                <b>Inventor</b>
                                            </div>
                                        </Col>
                                        <Col xs={3}>
                                            <div className='SkillSinceBox'>2017~</div>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                        <Card border='secondary' bg='dark'>
                            <Card.Body>
                                <Container>
                                    <Row>
                                        <Col xs={9}>
                                            <div className='SkillNameBox'>
                                                <img src={blender_logo} alt='blender logo' height="49" />
                                                <b>Blender</b>
                                            </div>
                                        </Col>
                                        <Col xs={3}>
                                            <div className='SkillSinceBox'>2020~</div>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                        <Card border='secondary' bg='dark'>
                            <Card.Body>
                                <Container>
                                    <Row>
                                        <Col xs={9}>
                                            <div className='SkillNameBox'>
                                                <img src={unity_logo} alt='Unity logo' height="49" />
                                                <b>Unity</b>
                                            </div>
                                        </Col>
                                        <Col xs={3}>
                                            <div className='SkillSinceBox'>2020~</div>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                        <Card border='secondary' bg='dark'>
                            <Card.Body>
                                <Container>
                                    <Row>
                                        <Col xs={9}>
                                            <div className='SkillNameBox'>
                                                <img src={kicad_logo} alt='kicad logo' height="49" />
                                                <b>kicad</b>
                                            </div>
                                        </Col>
                                        <Col xs={3}>
                                            <div className='SkillSinceBox'>2021~</div>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Stack>
                </div>
                <div className='WorksCard'>
                    <h2>Works</h2>
                    <Stack gap={2}>
                        <Card border='secondary' bg='dark'>
                            <Card.Body>
                                <Card.Title>ポートフォリオ</Card.Title>
                                <Card.Subtitle>
                                    <span className='grayout'>趣味</span>
                                    <p><span className='grayout'>2021/11~</span></p>
                                </Card.Subtitle>
                                <Card.Text>React.jsを使って初めてのWebページとしてこのポートフォリオを作りました。</Card.Text>
                                <Card.Link href='https://github.com/Tahi-knct/my_portfolio'>GitHub</Card.Link>
                            </Card.Body>
                        </Card>
                        <Card border='secondary' bg='dark'>
                            <Card.Body>
                                <Card.Title>自作慣性式モーショントラッカー（WIP）</Card.Title>
                                <Card.Subtitle>
                                    <span className='grayout'>趣味</span>
                                    <p><span className='grayout'>2021/11~</span></p>
                                </Card.Subtitle>
                                <Card.Text>ESP32を使って下半身用のワイヤレスモーショントラッカーを製作中</Card.Text>
                                <Card.Img variant="top" src={work_pic01} alt='DIY-Tracker pic' />
                            </Card.Body>
                        </Card>
                    </Stack>
                </div>
                <div className='ContactsCard'>
                    <h2>Contacts</h2>
                    <Table borderless>
                        <tbody>
                            <tr>
                                <td>Email</td>
                                <td>ynagiz22@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Twitter</td>
                                <td><a href="https://twitter.com/Tahi_314_Dev">@Tahi_314_Dev</a></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className='Copyright'>
                    <span className='grayout'>Copyright © 2023 Tahi_314</span>
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
