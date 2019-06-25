import React from 'react';

class Blogs extends React.Component {
    constructor() {
        super();
        this.state = {
            blogList: [
                {
                    name: "blog 1",
                    views: 106,
                    id: 1
                },
                {
                    name: "blog 1",
                    views: 366,
                    id: 2
                },
                {
                    name: "blog 1",
                    views: 546,
                    id: 3
                },
            ]
        }
    }
    render() {
        return (
            <div className="blog">{
                this.state.blogList.map((blog, index) => {
                    return HOC(<Blog blog={this.state.blogList} />);// blog is a component
                })
            }
            </div>
        )
    }
}

export default blogs;

const Blog = (props) => {

}

export default Blog