import Nav from "./Nav"

export default function Header(){
    return(
    <header>
    <h1 className="title">Satre's List</h1>
    <h2 className="subtitle">Better-Dressed People</h2>
    <Nav className="nav header-nav"/>
    </header>)
}