import React from 'react'
import {Animated} from "react-animated-css";
import { Breadcrumb } from 'antd';
import { HomeOutlined, CodeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './styles.scoped.css'

export default function Potfolio() {
  return (
    <Animated animationIn="fadeInUp" animationOut="fadeOutDown" animationInDuration="1000" animationOutDuration="1000">
      <div className='portfolio'>
        <Breadcrumb>
            <Breadcrumb.Item href="">
                <Link to="/">
                    <HomeOutlined style={{ color: '#DEBB00', marginRight: '0.4rem'}}/>
                    <span style={{color: '#DEBB00'}}>Home</span>
                </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <CodeOutlined style={{ color: '#DEBB00'}}/>
                <span style={{color: '#DEBB00'}}>Portfolio</span>
            </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </Animated>
  )
}
