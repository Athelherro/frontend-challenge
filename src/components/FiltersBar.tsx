import React from 'react';

interface FiltersBarProps {
  game: string;
  onGameChange: (value: string) => void;
  search: string;
  onSearchChange: (value: string) => void;
  price: string;
  onPriceChange: (value: string) => void;
  itemType: string;
  onItemTypeChange: (value: string) => void;
}

const FiltersBar: React.FC<FiltersBarProps> = ({
  game, onGameChange, search, onSearchChange, price, onPriceChange, itemType, onItemTypeChange
}) => {
  return (
    <div className="filters-bar">
      <select value={game} onChange={e => onGameChange(e.target.value)}>
        <option value="">Select a game</option>
        <option value="game1">Game 1</option>
        <option value="game2">Game 2</option>
      </select>
      <input type="text" placeholder="Search" value={search} onChange={e => onSearchChange(e.target.value)} />
      <select value={price} onChange={e => onPriceChange(e.target.value)}>
        <option value="">Price All</option>
        <option value="low">Low</option>
        <option value="high">High</option>
      </select>
      <select value={itemType} onChange={e => onItemTypeChange(e.target.value)}>
        <option value="">Item Type All</option>
        <option value="type1">Type 1</option>
        <option value="type2">Type 2</option>
      </select>
    </div>
  );
};

export default FiltersBar; 