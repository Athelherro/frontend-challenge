import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import FiltersBar from './components/FiltersBar'
import type { Product } from './components/ProductGrid'
import ProductGrid from './components/ProductGrid'
import Pagination from './components/Pagination'

const mockProducts: Product[] = [
  {
    id: 1,
    title: 'Deathshard Knife',
    image: 'https://static.wikia.nocookie.net/roblox-murder-mystery-2/images/2/2e/Deathshard.png',
    price: 1200,
    oldPrice: 1500,
    status: 'on sale',
    description: 'A godly knife from Roblox Murder Mystery 2. Rare and highly sought after.'
  },
  {
    id: 2,
    title: 'Spring Flower Crown',
    image: 'https://tr.rbxcdn.com/7b6e2e2e7e7e7e7e7e7e7e7e7e7e7e7e/420/420/Hat/Png',
    price: 350,
    oldPrice: 420,
    status: 'on sale',
    description: 'A limited-time hat from Roblox. Spring has sprung, and so has my crown.'
  },
  {
    id: 3,
    title: 'Elvish Hat',
    image: 'https://stendhalgame.org/images/items/elvish_hat.png',
    price: 150,
    oldPrice: 200,
    status: 'in stock',
    description: 'Elf craftsmanship has made the leafy material stronger than one would think.'
  },
  {
    id: 4,
    title: 'Iron Scale Armor',
    image: 'https://stendhalgame.org/images/items/iron_scale_armor.png',
    price: 900,
    oldPrice: 1100,
    status: 'on sale',
    description: 'A suit of iron scale armor, whose rounded scales will protect you from many blows.'
  },
  {
    id: 5,
    title: 'Parasol',
    image: 'https://starbounder.org/mediawiki/images/2/2e/Parasol.png',
    price: 500,
    oldPrice: 650,
    status: 'in stock',
    description: "Open to gently float while falling. It's bad luck to open inside the house. (Starbound)"
  },
  {
    id: 6,
    title: 'Blue Partyhat',
    image: 'https://oldschool.runescape.wiki/images/Blue_partyhat.png',
    price: 450,
    oldPrice: 620.5,
    status: 'in stock',
    description: 'A rare and valuable partyhat from Old School RuneScape.'
  },
  {
    id: 7,
    title: 'Red Partyhat',
    image: 'https://oldschool.runescape.wiki/images/Red_partyhat.png',
    price: 470,
    oldPrice: 650,
    status: 'on sale',
    description: 'A festive red partyhat from Old School RuneScape.'
  },
  {
    id: 8,
    title: 'Green Partyhat',
    image: 'https://oldschool.runescape.wiki/images/Green_partyhat.png',
    price: 460,
    oldPrice: 640,
    status: 'in stock',
    description: 'A green partyhat, perfect for celebrations in Gielinor.'
  },
  {
    id: 9,
    title: 'Black Iron Sword',
    image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/6a/Iron_Sword_JE3_BE2.png',
    price: 80,
    oldPrice: 120,
    status: 'in stock',
    description: 'A sturdy iron sword from Minecraft, reliable for any adventurer.'
  },
  {
    id: 10,
    title: 'Golden Apple',
    image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/3e/Enchanted_Golden_Apple_JE2_BE2.png',
    price: 200,
    oldPrice: 250,
    status: 'on sale',
    description: 'A rare enchanted golden apple from Minecraft.'
  },
  {
    id: 11,
    title: 'Dragon Claw',
    image: 'https://oldschool.runescape.wiki/images/Dragon_claw.png',
    price: 1200,
    oldPrice: 1400,
    status: 'on sale',
    description: 'A powerful weapon from Old School RuneScape.'
  },
  {
    id: 12,
    title: 'Dominus Frigidus',
    image: 'https://tr.rbxcdn.com/6b6e2e2e7e7e7e7e7e7e7e7e7e7e7e7e/420/420/Hat/Png',
    price: 25000,
    oldPrice: 30000,
    status: 'in stock',
    description: 'One of the rarest hats in Roblox history.'
  },
  {
    id: 13,
    title: 'Frostmourne',
    image: 'https://static.wikia.nocookie.net/wowpedia/images/7/7e/Frostmourne.png',
    price: 5000,
    oldPrice: 6000,
    status: 'on sale',
    description: 'The legendary sword of the Lich King from World of Warcraft.'
  },
  {
    id: 14,
    title: 'Master Sword',
    image: 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/1/1e/Master_Sword_%28Twilight_Princess%29.png',
    price: 3000,
    oldPrice: 3500,
    status: 'in stock',
    description: 'The legendary blade wielded by Link in The Legend of Zelda.'
  },
  {
    id: 15,
    title: 'Aegis of the Immortal',
    image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/2e/Aegis_of_the_Immortal_icon.png',
    price: 800,
    oldPrice: 950,
    status: 'in stock',
    description: 'A powerful item from Dota 2, grants a second life.'
  },
  {
    id: 16,
    title: 'Butterfly Knife',
    image: 'https://static.wikia.nocookie.net/cswikia/images/2/2e/Weapon_knife_butterfly.png',
    price: 1200,
    oldPrice: 1350,
    status: 'on sale',
    description: 'A rare and stylish knife from CS:GO.'
  },
  {
    id: 17,
    title: 'AK-47 | Redline',
    image: 'https://static.wikia.nocookie.net/cswikia/images/2/2e/AK47_Redline.png',
    price: 900,
    oldPrice: 1100,
    status: 'in stock',
    description: 'A popular weapon skin from CS:GO.'
  },
  {
    id: 18,
    title: 'M4A4 | Howl',
    image: 'https://static.wikia.nocookie.net/cswikia/images/2/2e/M4A4_Howl.png',
    price: 3500,
    oldPrice: 4000,
    status: 'on sale',
    description: 'A legendary and rare skin from CS:GO.'
  },
  {
    id: 19,
    title: 'Crown of O’s',
    image: 'https://tr.rbxcdn.com/5b5e2e2e7e7e7e7e7e7e7e7e7e7e7e7e/420/420/Hat/Png',
    price: 8000,
    oldPrice: 9500,
    status: 'in stock',
    description: 'A rare Roblox hat with a unique design.'
  },
  {
    id: 20,
    title: 'Infernal Cape',
    image: 'https://oldschool.runescape.wiki/images/Infernal_cape.png',
    price: 2000,
    oldPrice: 2500,
    status: 'on sale',
    description: 'A prestigious cape from Old School RuneScape.'
  },
]

function App() {
  const [game, setGame] = useState('')
  const [search, setSearch] = useState('')
  const [price, setPrice] = useState('')
  const [itemType, setItemType] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 12

  // Filter and paginate products
  const filtered = mockProducts.filter(p =>
    (!search || p.title.toLowerCase().includes(search.toLowerCase()))
  )
  const totalPages = Math.ceil(filtered.length / pageSize)
  const paginated = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  return (
    <>
      <Header />
      <main className="main-content">
        <h1 className="main-title">Condimentum consectetur</h1>
        <FiltersBar
          game={game}
          onGameChange={setGame}
          search={search}
          onSearchChange={setSearch}
          price={price}
          onPriceChange={setPrice}
          itemType={itemType}
          onItemTypeChange={setItemType}
        />
        <div className="main-card-area">
          <div className="main-card-area__info">Showing {paginated.length} - from {filtered.length}</div>
          <ProductGrid
            products={paginated}
            onAdd={id => {}}
            onDetails={id => {}}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </main>
    </>
  )
}

export default App
