import App, {Container} from 'next/app'
import React from 'react'
import {withRouter} from 'next/router'
import withReduxStore from '../lib/with-redux-store'
import {Provider} from 'react-redux'
import Header from '../components/Header';
import Footer from '../components/Footer'
import '../asserts/styles.less'


class MyApp extends App {
  constructor() {
    super()
    this.state = {
      userAgent: {
        userAgent:'pc'
      }
    }
  }

  componentDidMount() {
    const ua = navigator.userAgent;
    let userAgent;
    if (ua.indexOf("Android") > 0 || ua.indexOf("iPhone") > 0 || ua.indexOf("iPad") > 0) {
      //移动端
      userAgent = 'mobile'
    } else {
      userAgent = 'pc'
    }
    this.setState({
      userAgent:{
        userAgent
      }
    })
  }

  render() {

    const {Component, pageProps, reduxStore, router: {pathname}} = this.props;
    const {userAgent} = this.state;
    let myPageProps = {...pageProps, ...userAgent};
    return (
      <Container>
        <Provider store={reduxStore}>
          <div className="container">
            {
              pathname === '/'
                ?
                ''
                : <Header {...userAgent} />
            }
            <Component {...myPageProps}  />
            {
              pathname === '/'
                ?
                ''
                :
                <Footer/>
            }
          </div>
        </Provider>

        <style jsx global>{`

.fl{
    float: left;
}
.fr{
    float: right;
}
.clearfix:after{
    content: '';
    clear: both;
    display: block;
}
ul{
    margin: 0;
    padding: 0;
}
li{
    list-style: none;
}
#__next,.container{
    height: 100%;
}
.container{
    display: flex;
    flex-direction: column;
    background-color: #f0f2f5;
}
.container>div:nth-child(2){
    flex-grow: 1;
}



        `}</style>
      </Container>
    )
  }
}

export default withReduxStore(withRouter(MyApp))
