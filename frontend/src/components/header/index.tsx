
import React from 'react';
import { JsxAttribute } from 'typescript';
import './style.css';

type Childrens = {
    children?:JSX.Element[] | JSX.Element | string;
}
const Header:React.FC<Childrens> = ({ children }) => {
    return (<header className="header">
        {children}
    </header>)
}

export default Header;