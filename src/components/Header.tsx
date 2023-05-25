function Header() {
  return (
    <>
      <div className="text-3xl font-bold underline">Marco</div>
      <ul className="bg-blue-200">
        <li>Login</li>
        <li>
          <a href="/items">Item</a>
        </li>
      </ul>
    </>
  )
}

export default Header;
