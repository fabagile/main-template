import React from "react";
import {VscListFlat} from "react-icons/vsc"
// import {FaBars} from "react-icons/fa"
import Button from "../../components/UI/Button"
import { navlinks } from "../../data/navlinks";

// class Logout extends React.Component {
//   constructor({isGranted}) {
//     super(isGranted)
//     this.state = { granted: isGranted}
//   }
//   logout() {
//     this.setState((state, props) =>({state: !this.state.granted}) )
//   }
//   render() {
//     return <Button onClick={this.logout.bind(this)} label="logout" color="red" />
//   }
// }



export default function Nav({color}) {
  const style = color ? `bg-${color}` : '';
  let isGranted = false
  return (
    <nav className={style}>
      <div className={style} id="brand">
        <a href="./">brand</a>
      </div>
      <div className={style} id="toggler">
        <button><VscListFlat className="fa-fw" size="1.5em" /></button>
      </div>
      <div className={style} id="links">
        {navlinks.map(({ href, title }, k) => (
          <div className={style} key={k}>
            <a href={href} title={title}>
              {title}
            </a>
          </div>
        ))}
      </div>
      {isGranted 
      ? <div className={style} id="user-access">
        <Button color='red' label="log out" />
      {/* <Button color='gold' label="sign up" />
      <Button color='cyan' label="log in" /> */}
      {/* <Logout isGranted={isGranted}  /> */}
      {/* <Button color="glass"  /> */}
      {/* user-access */}
    </div>
        : <div className={style} id="user-access">
        <Button color='gold' label="sign up" />
        <Button color='cyan' label="log in" />
        {/* <Button color="glass"  /> */}
        {/* user-access */}
      </div>
    }
     
    </nav>
  );
}
