function Card({item}){
    const cardStyle = {
        backgroundImage: `url(${item.cover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    return(
        <div className='card' style={cardStyle}>
            <h2 className='card-title'>{item.title}</h2>         
        </div>
    )
}

export default Card