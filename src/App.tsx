import './App.css'

import React, {useState} from 'react';

const App = () => {


    return (
        <>
            <div>
                {/*<img
                    src="https://p3-zeus.byteimg.com/img/tos-cn-i-tv0gyzr5fi/f7fff595cb9045e18c4d99202cdf2256.png~tplv-tv0gyzr5fi-image.image"/>

                <p style={{position: 'relative', top: '60px'}}>this is a pic</p>
                <div style={{
                    opacity: '0.6',
                    borderRadius: '20px 30 px',
                    width: '100px',
                    height: '200px',
                    backgroundColor: 'red'
                }}></div>
                <p className="font-mono">this is a shirt</p>*/}
            </div>
            <div className='container'>
                <div className={'item3'}>div1</div>
                <div className={'item1'}>div2</div>
                <div className={'item5'}>div3</div>
                <div className={'item5'}>div3</div>
                <div className={'item5'}>div3</div>
                <div className={'item5'}>div3</div>
                <div className={'item5'}>div3</div>
                <div className={'item5'}>div3</div>
            </div>
            <h1>h1 test</h1>
            <p>p<em>testp</em></p>
            <p>p<strong>testp</strong></p>
            <p className={'p-border'}>p <em>testp</em> testp testp testp testp testp testp testp testp testp testp testp
                testp testp testp testp test</p>
            <ul>
                <li>li1</li>
                <li>li2</li>
                <li>li3</li>
                <li>li4</li>
            </ul>
            <ol>
                <li>li1</li>
                <li>li2</li>
                <li>li3</li>
                <li>li4</li>
            </ol>
            <dl>
                <dt>dt1</dt>
                <dd>dt1</dd>
                <dd>dt1</dd>
                <dd>dt1</dd>
            </dl>
            <p>this is code <code>java code</code></p>
            <p>
                According to the
                <a href="/en-US/docs/Web/HTML/Element/blockquote">
                    <cite>MDN blockquote page</cite></a>:
            </p>
            <address>
                <p>
                    Chris Mills<br/>
                    Manchester<br/>
                    The Grim North<br/>
                    UK
                </p>

                <ul>
                    <li>Tel: 0<sub>1</sub>2<sup>3</sup>4 567 890</li>
                    <li>Email: me@grim-north.co.uk</li>
                </ul>
                <time dateTime="2016-01-20">20 January 2016</time>
            </address>
            {/* <img
                srcSet={"https://p3-zeus.byteimg.com/img/tos-cn-i-tv0gyzr5fi/f7fff595cb9045e18c4d99202cdf2256.png~tplv-tv0gyzr5fi-image.image 2000w,https://p3-zeus.byteimg.com/img/tos-cn-i-tv0gyzr5fi/f7fff595cb9045e18c4d99202cdf2256.png~tplv-tv0gyzr5fi-image.image 1000w"}
                src="https://p3-zeus.byteimg.com/img/tos-cn-i-tv0gyzr5fi/f7fff595cb9045e18c4d99202cdf2256.png~tplv-tv0gyzr5fi-image.image"/>
*/}
            <div className='weilei'>this is a weileierwrwerew
                <br/>this is new word
            </div>
            <table>
                <tr>
                    <td>tr1</td>
                    <td>tr2</td>
                    <td>tr3</td>
                    <td>tr4</td>
                </tr>
                <tr>
                    <td>tr1</td>
                    <td>tr2</td>
                    <td>tr3</td>
                    <td>tr4</td>
                </tr>
                <tr>
                    <td>tr1</td>
                    <td>tr2</td>
                    <td>tr3</td>
                    <td>tr4</td>
                </tr>
                <tr>
                    <td>tr1</td>
                    <td>tr2</td>
                    <td>tr3</td>
                    <td>tr4</td>
                </tr>
            </table>
            {/*<div className="divDisplay">
                <button className="buttonClass">button</button>
            </div>*/}
            <div className={"parent"}>
                parent
                <div className={"child1"}>child1</div>
                <div className={"child2"}>child2</div>
                <div className={"child3"}>child3</div>
            </div>
            <div className={"flexbox-container"}>
                parent
                <div className={"flexbox-item flexbox-item-1"}>flexbox-item-1</div>
                <div className={"flexbox-item flexbox-item-2"}>flexbox-item-2</div>
                <div className={"flexbox-item flexbox-item-3"}>flexbox-item-3</div>
                <div className={"flexbox-item flexbox-item-4"}>flexbox-item-4</div>
            </div>
        </>
    );
};

export default App;

