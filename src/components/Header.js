import Button from "./Button";
const Header = () => {
    const onClickListner = () => {
        console.log('clicked');
    }
    return (
        <header className="header">
            <h1>Personal Tracker</h1>
            <Button 
                color="green" 
                text="Add"
                onclick={onClickListner} />
        </header>
    )
}

export default Header;
