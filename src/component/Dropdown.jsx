import React, {useState} from "react";
import style from "./Dropdown.module.css";
import ArrowDown from "./Icons/ArrowDown";


function Dropdown() {
    const [open, setOpen] = useState(false);
    const [menus, setMenus] = useState([
        'Menu 1',
        'Menu 2',
        'Menu 3',
        'Menu 4',
    ]);
    const [selectedMenu, setSelectedMenu] = useState('Select Option');

    const handleClickMenu = (data) => {
        setSelectedMenu(data);
    }
    return (
        <>
            <div className={style.dropdownWrapper}>
                <button className={style['dropdown-btn']} onClick={()=>setOpen(!open)}>
                    {selectedMenu}
                    <ArrowDown />
                </button>
                {open &&
                    <div className={style['dropdown-list']}>
                    {menus.map((elem, id) =>
                        <div key={id} onClick={()=>handleClickMenu(elem)}>{elem}</div>
                    )}
                </div>}
            </div>
        </>
    );
};

export default Dropdown;
