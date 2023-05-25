import ItemsList from "../components/Items/ItemsList"

function Home() {
  return (
    <div className="flex flex-row justify-between">
      <ItemsList />
      <Order />
    </div>
  )
}

export default Home
