import React, { FC, useState } from 'react'
import AuthHeader from './header/AuthHeader'

interface Props {
    // any props that come into the component
}

const AuthLayout: FC<Props> = ({ children, ...props }) => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div style={{ paddingTop: "56px" }} >
            <AuthHeader showMenu={showMenu} />
            <div className={""} {...props} onClick={() => {setShowMenu(!showMenu)}}>{children}</div>
        </div>
    )
};

export default AuthLayout
