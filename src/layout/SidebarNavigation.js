import React from 'react';
import {NavLink} from 'react-router-dom'

const list = [
    {
        icon: 'fas fa-tachometer-alt',
        name: 'Dashboard',
        pathname: '/dashboard'
    },
    {
        icon: 'fas fa-hand-holding-usd',
        name: 'New Loans',
        pathname: '/new-loan'
    },
    {
        icon: 'fas fa-file-signature',
        name: 'Active Loan',
        pathname: '/active-loan'
    },
    {
        icon: 'fas fa-inbox',
        name: 'Indox',
        pathname: '/indox'
    },
    {
        icon: 'far fa-file-alt',
        name: 'Submitted Documents',
        pathname: '/submitted-documents'
    },
    {
        icon: 'far fa-comment-alt',
        name: 'Feedback / Rating',
        pathname: '/feedback-rating'
    },
    {
        icon: 'far fa-newspaper',
        name: 'Directors Information',
        pathname: '/directors-information'
    }
]

const SidebarNavigation = () => {

    return (
        <div className="sidebar-navigation">
            {
                list.map((item, inx) => {
                    return (
                        <NavLink to={item.pathname} className={`navigation-item`} key={inx}>
                            <div className="icon">
                                <i className={item.icon}></i>
                            </div>
                            {item.name}
                        </NavLink>
                    )
                })
            }
        </div>
    )
}

export default SidebarNavigation