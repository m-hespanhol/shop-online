
function Footer(props) {
    const now = new Date();
    const year = now.getFullYear();

    const handleAnotherClick = () => {
        console.log('Another click in ' + year);
    }

    return (
        <footer>
            <hr />
            Copyright &copy; {year}.
            You have {props.cartCount} products in the cart.
            <button onClick={handleAnotherClick}>Another Click</button>
        </footer>
    );
}

export default Footer;