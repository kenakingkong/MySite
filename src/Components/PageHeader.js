import React, { Component } from 'react';
import style from "../mystyle.less";

class PageHeader extends Component {
    render() {

        return(
            <div id="pageHeader" className={style.pageTitle}>
                <h1 style={{textAlign:'center', padding:'20px 20px', 'font-size':'30px'}}>{this.props.pageTitle}</h1>
            </div>
        );
    }
}

export default PageHeader;