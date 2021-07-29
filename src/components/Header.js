import Button from "./Button";
const Header = ({ onToggleAddBtn, showAdd }) => {
    // const onClickListner = () => {
    //     console.log('clicked');
    // }

    return (
        <header className="header">
            <h1>Personal Tracker</h1>
            <Button 
                color={showAdd ? 'red' : 'green'} 
                text={showAdd ? 'Close' : 'Add'}
                onClick={onToggleAddBtn} />
        </header>
    )
}

export default Header;
