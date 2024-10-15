import React from 'react'

const NewsItem = ({article}) => {
  return (
    <>
    
    <div className="card card-compact w-80 bg-pink-400  shadow-xl">
    <div className=' relative text-white'>
      <p className='absolute z-1 left-40 top-0 bg-pink-500 w-40 text-center rounded-lg '>{article.source.name}</p> 
      </div>
  <figure>
    <img
      src= {article.urlToImage?article.urlToImage: 'https://www.reuters.com/resizer/v2/EGAJAHPTTZLBJP6TYVFGPCJ4TY.jpg?auth=cdd9f60a7a5e826ec7517240e5f45d1611caab079fde78d9084dbe444a27ce3a&height=1005&width=1920&quality=80&smart=true'}
      alt="Shoes"  />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{article.title}</h2>
    <p>{article.description}</p>
    <p className='text-white py-2'>By {article.author} on {new Date(article.publishedAt).toGMTString()}</p>
    <div className="card-actions justify-end">
      <a href={article.url} target='_blank' className="bg-pink-500 btn hover:bg-pink-600">Read More..</a>
    </div>
  </div>
</div>
</>
  )
}

export default NewsItem




