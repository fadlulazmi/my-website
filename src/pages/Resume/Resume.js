import React from 'react'
import {Animated} from "react-animated-css";
import { Breadcrumb } from 'antd';
import { HomeOutlined, FileOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './styles.scoped.css'

export default function Resume() {
  return (
    <Animated animationIn="fadeInUp" animationOut="fadeOutDown" animationInDuration="1000" animationOutDuration="1000">
      <div className='resume'>
        <Breadcrumb>
            <Breadcrumb.Item href="">
                <Link to="/">
                    <HomeOutlined style={{ color: '#DEBB00', marginRight: '0.4rem'}}/>
                    <span style={{color: '#DEBB00'}}>Home</span>
                </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <FileOutlined style={{ color: '#DEBB00'}}/>
                <span style={{color: '#DEBB00'}}>Resume</span>
            </Breadcrumb.Item>
        </Breadcrumb>
        <iframe 
          title='Fadlul Azmi - CV'
          src="https://drive.google.com/file/d/1-uDN1GbiW-MkpTb6XbD3-R_Vjf0-aNJC/preview"
        />
      </div>
    </Animated>
  )
}
