import Button from "./Button";
const Header = ({ onToggleBtn }) => {
    // const onClickListner = () => {
    //     console.log('clicked');
    // }
    return (
        <header className="header">
            <h1>Personal Tracker</h1>
            <Button 
                color="green" 
                text="Add"
                onClick={onToggleBtn} />
        </header>
    )
}

export default Header;
