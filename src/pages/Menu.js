import React from 'react'
import { MenuList } from '../helpers/MenuList.js'
import MenuPrinter from '../components/MenuPrinter.js'
import '../styles/Menu.css'

const Menu = () => {
    return (

        <div className='menu'>
            <h1 className='menuTitle'> Our Menu</h1>
            <div className='menuList'>
                {
                MenuList.map((menuItem,key)=>{
                    return(<MenuPrinter image={menuItem.image} name={menuItem.name} price={menuItem.price} key={key}/>)
                })
                }
            </div>
        </div>
    )

}

export default Menu
