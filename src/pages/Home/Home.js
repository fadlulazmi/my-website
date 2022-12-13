import React, { useState } from 'react'
import {Animated} from "react-animated-css";
import { Link, useHistory } from 'react-router-dom';
import { Menu } from 'antd';
import './styles.scoped.css'
import { getDeviceType } from '../../utils';

export default function Home() {
    const history = useHistory()
    const isDesktop = getDeviceType() === 'desktop'
    const [first, setFirst] = useState(false)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)

    const menus = [
      {label: 'About', key: 'about'},
      {label: 'Resume', key: 'resume'},
      {label: 'Portfolio', key: 'portfolio'},
    ]

    return (
        <Animated animationIn="fadeInDown" animationOut="fadeOutUp" animationInDuration="1000" animationOutDuration="1000">
            <Menu 
              className={isDesktop ? 'nonavs' : 'navs'}
              items={menus}
              onClick={e => history.push(`/${e.key}`)}
            />
            <section className="home" >
                <div/>
                <div>
                    <Animated animationIn="fadeInUp" animationInDuration="500">
                        {(first && isDesktop) ? (
                            <Link to="/about">
                                <p 
                                    className="animate clickable" 
                                    onMouseLeave={() => setFirst(false)} 
                                >
                                    About
                                </p>
                            </Link>
                        ) : (
                            <p className="animate" onMouseEnter={() => setFirst(true)}>Hi.</p>
                        )}
                    </Animated>
                    <Animated animationIn="fadeInUp" animationInDuration="1500">
                    {(second && isDesktop) ? (
                        <Link to="/resume">
                            <p 
                                className="animate clickable" 
                                onMouseLeave={() => setSecond(false)}
                            >
                                Resume
                            </p>
                        </Link>
                    ) : (
                        <p className="animate" onMouseEnter={() => setSecond(true)}>I am</p>
                    )}
                    </Animated>
                    <Animated animationIn="fadeInUp" animationInDuration="2500">
                    {(third && isDesktop) ? (
                        <Link to="/portfolio">
                            <p 
                                className="animate clickable" 
                                onMouseLeave={() => setThird(false)}
                            >
                                Portfolio
                            </p>
                        </Link>
                    ) : (
                        <p className="animate" onMouseEnter={() => setThird(true)}>Fadlul Azmi</p>
                    )}
                    </Animated>
                </div>
            </section>
        </Animated>
    )
}
