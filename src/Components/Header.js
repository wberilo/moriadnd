import { Parallax } from 'react-parallax';

function Header() {
  const image1 = 'https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs='
  const insideStyles = {
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };
  return (
    <div className="Header">
      <div>
        <Parallax bgImage={image1} strength={500}>
          <div style={{ height: 500 }}>
            <div style={insideStyles}><h1>Moria</h1></div>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default Header;
