import { useDispatch } from "react-redux";
import "./css/Menu.css";
import { menuActions } from "./store/menuSlice";

const Menu = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(menuActions.changeIsOpen(false));
        document.body.classList.remove("hide-overflow");
    }
    return (
        <section id="menu">
            <div className="background-div"/>
            <div id="menu-info">
                <button onClick={handleClick} id="cross-button"></button>
                <ul>
                    <li>Home</li>
                    <li>New</li>
                    <li>Popular</li>
                    <li>Trending</li>
                    <li>Categories</li>
                </ul>
            </div>
        </section>
     );
}

export default Menu;
