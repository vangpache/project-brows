import React, { Component } from 'react';






class Blog extends Component {





    render () {




        return (
            <div className="blog-container">
                <div className="left-blog-container">
                    <p>HELLO. this is the featured blog div.</p>
                </div>
                

                <div className="right-blog-container">
                    <p>this is the right side.</p>
                    <div className="blog-first-row">
                        <div className="blogs-row-one">
                            <p>blog 1</p>
                        </div>
                        <div className="blogs-row-one">
                            <p>blog 2</p>
                        </div>
                        <div className="blogs-row-one">
                            <p>blog 3</p>
                        </div>
                    </div>


                    <div className="blog-second-row-container">
                        <div className="blog-second-row-thirds-container">
                            
                            
                        </div>

                        <div className="blog-second-row-single">

                        </div>

                    </div>

                </div>

            </div>
        )
    }
}


export default Blog; 