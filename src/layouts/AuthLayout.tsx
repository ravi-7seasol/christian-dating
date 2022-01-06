import React, { FC } from 'react'
import AuthHeader from './header/AuthHeader'

interface Props {
    // any props that come into the component
}

const AuthLayout: FC<Props> = ({ children, ...props }) => {
    return(
    <div>
        <AuthHeader /> 
        <div className={""} {...props}>{children}</div>
    </div>
)};

export default AuthLayout
