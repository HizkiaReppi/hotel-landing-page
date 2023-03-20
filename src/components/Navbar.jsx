import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-[7%] w-full h-[75px]">
      <div>
        <h1>Logo</h1>
      </div>
      <div>
        <ul className="flex gap-8 max-sm:hidden">
          <li><a href="#booking">Booking</a></li>
          <li><a href="#facilities">Facilities</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#location">Location</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div>
        <Button addClass="">Login</Button>
      </div>
    </nav>
  )
}

export default Navbar