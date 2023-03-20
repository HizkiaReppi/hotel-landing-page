const Button = ({ addClass, children }) => {
  return (
    <button className={`bg-primary px-5 py-2 rounded-3xl text-white ` + addClass}>
      {children}
    </button>
  )
}

export default Button