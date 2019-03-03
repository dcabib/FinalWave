import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const links = [
    {
        name: 'My account',
        linkTo: '/user/dashboard'
    },
    {
        name: 'User information',
        linkTo: '/user/user_profile'
    },
    {
        name: 'My Cart',
        linkTo: '/user/cart'
    },
]

const admin = [
    {
        name: 'Site info',
        linkTo: '/admin/site_info'
    },
    {
        name: 'Add products',
        linkTo: '/admin/add_product'
    },
    {
        name: 'Manage categories',
        linkTo: '/admin/manage_categories'
    },
    {
        name: 'Upload file',
        linkTo: '/admin/add_file'
    }
]


const UserLayout = (props) => {

    const generateLinks = (links) => (
        links.map((item,i)=>(
            <Link to={item.linkTo} key={i}>
                {item.name}
            </Link>
        ))
    )
    let switchVisiblity = elem => {
        let cont = document.querySelector(".user_container .user_left_nav")
        cont.querySelectorAll("h2")[elem].classList.toggle("active")
        cont.querySelectorAll("div")[elem].classList.toggle("active")
    }   
    return (
        <div className="container">
            <div className="user_container">
                <div className="user_left_nav">
                    <h2 onClick={()=>switchVisiblity(0)} className="switch-visiblity">My account</h2>
                    <div className="links">
                        { generateLinks(links)}
                    </div>
                    { props.user.userData.isAdmin ?
                        <React.Fragment>
                        <h2 onClick={()=>switchVisiblity(1)} className="switch-visiblity">Admin</h2>
                            <div className="links">
                                { generateLinks(admin)}
                            </div>
                        </React.Fragment>
                    :null
                    }

                </div>
                <div className="user_right">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}


export default connect(mapStateToProps)(UserLayout);