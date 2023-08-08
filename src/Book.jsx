export default function Book({
  ISBN,
  author,
  cover,
  genre,
  pages,
  synopsis,
  title,
  year,
  favorite,
  onFavoriteChange
}) {
  return (
    <div
      className='flex flex-col content-center self-center text-center border-2 p-5 border-slate-600 rounded-md hover:bg-gray-600 hover:cursor-pointer
    bg-gradient-to-br to-slate-50 from-slate-400'
    >
      <button
        className='bg-blue-400 rounded-md p-2 transition-colors hover:text-white delay-75 duration-1000'
        onClick={() => onFavoriteChange(ISBN)}
      >
        {favorite ? 'Eliminar favorito' : 'Marcar favorito'}
      </button>
      <h4 className='text-xl'>
        {title} ({year})
      </h4>
      <img src={cover} alt={title} className='h-96' title={synopsis} />
      <p className='ttext-xl'>{author.name}</p>
      <p className='text-sm'>
        {pages} páginas - {genre}
      </p>
      <p className='text-sm'>ISBN: {ISBN}</p>
    </div>
  )
}
