import React, { Component } from 'react'

export default class Layout extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-3'>
                        {/* <NavMenu /> */} Test
                    </div>
                    <div className='col-sm-9'>
                        {/* {this.props.children} */}Test
                    </div>
                </div>
            </div>
        )
    }
}