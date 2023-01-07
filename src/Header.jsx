import { useDispatch } from "react-redux";
import "./css/Header.css";
import { menuActions } from "./store/menuSlice";

const mql = window.matchMedia("(max-width: 610px)");

mql.addEventListener("change", e => {
    if(e.matches) {
        document.getElementById("menu-icon").classList.remove("invisible");
        document.getElementsByClassName("list-div")[0].classList.add("invisible");
    }
    else{
        document.getElementById("menu-icon").classList.add("invisible");
        document.getElementsByClassName("list-div")[0].classList.remove("invisible");
    }
})

const Header = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(menuActions.changeIsOpen(true));
        document.body.classList.add("hide-overflow");
    }

    return (
        <div className="main-div d-flex justify-content-between">
            <img src="../images/logo.svg" alt="Capital w."/>
            {mql.matches?
            <div id="menu-div" className="d-flex align-items-end">
                <img id="menu-icon" onClick={handleClick} className="margin-icon-right" alt="Menu icon." src="../images/icon-menu.svg"/>
                <div className="list-div invisible">
                    <a className="margin-right">Home</a>
                    <a className="margin-right">New</a>
                    <a className="margin-right">Popular</a>
                    <a className="margin-right">Trending</a>
                    <a className="margin-right">Categories</a>
                </div>
            </div>:
            <div id="menu-div" className="d-flex">
                <img id="menu-icon" onClick={handleClick} className="margin-icon-right invisible" alt="Menu icon." src="../images/icon-menu.svg" />
                <div className="list-div">
                    <a className="margin-right">Home</a>
                    <a className="margin-right">New</a>
                    <a className="margin-right">Popular</a>
                    <a className="margin-right">Trending</a>
                    <a className="margin-right">Categories</a>
                </div>
            </div>}
        </div>
     );
}



export default Header;
