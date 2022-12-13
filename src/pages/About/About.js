import React from 'react'
import {Animated} from "react-animated-css";
import './styles.scoped.css'
import dyk from '../../assets/dyk.jpg'
import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <Animated animationIn="fadeInUp" animationOut="fadeOutDown" animationInDuration="1000" animationOutDuration="1000">
            <section className="about">
                <div/>
                <div>
                    <Animated animationIn="fadeInUp" animationInDuration="500">
                        <p className="animate" >
                            want to know more ?
                        </p>
                    </Animated>
                    <Animated animationIn="fadeInUp" animationInDuration="500">
                        <p className="animate" >
                            يٰأَيُّهَا النّاسُ إِنّا خَلَقنٰكُم مِن ذَكَرٍ وَأُنثىٰ وَجَعَلنٰكُم شُعوبًا
                            وَقَبائِلَ لِتَعارَفوا ۚ إِنَّ أَكرَمَكُم عِندَ اللَّهِ أَتقىٰكُم ۚ إِنَّ اللَّهَ عَليمٌ خَبيرٌ
                        </p>
                        <p>
                            O humanity! Indeed, We created you from a male and a female, and made
                            you into peoples and tribes so that you may ˹get to˺
                            know one another. Surely the most noble of you in the sight of Allah
                            is the most righteous among you. Allah is truly All-Knowing, All-Aware.
                            (Qs. Al-Hujurat 13)
                        </p>
                    </Animated>
                    <Animated animationIn="fadeInUp" animationInDuration="500">
                        <p>About Me</p>
                        <p className="animate" >
                            My name is <b>Fadlul Azmi</b>.
                            <br/>
                            I am an allround <b>software engineer</b>. I am a programmer with good knowledge 
                            of web <b>front-end</b> techniques. I love structure and order and I also stand for 
                            quality. I love spending time on fixing little details and optimizing web 
                            apps. Also I like working in a team, you'll learn faster and much more. 
                            As the saying goes: 'two heads are better than one'.
                        </p>
                    </Animated>
                    <Animated animationIn="fadeInUp" animationInDuration="500">
                        <div>
                            <p className="animate" >
                                I'm graduated from Geophysics major, and had several experiences in <b>Geoscience </b> 
                                Fields. Then, I switched my career to <b>Software Development</b>. 
                                So the question is <b>"WHY?"</b>, Because, I want to keep growing, upgrade my skills, 
                                and easily to direct practicing while learning. 
                                <span role="img" aria-label="icon">😄</span>                              
                            </p>
                            <img alt="did-you-know" src={dyk}/>
                        </div>
                    </Animated>
                </div>
                <Breadcrumb>
                    <Breadcrumb.Item href="">
                        <Link to="/">
                            <HomeOutlined style={{ color: '#DEBB00', marginRight: '0.4rem'}}/>
                            <span style={{color: '#DEBB00'}}>Home</span>
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <UserOutlined style={{ color: '#DEBB00'}}/>
                        <span style={{color: '#DEBB00'}}>About</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </section>    
        </Animated>
    )
}
