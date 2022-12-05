import './card.css'
const Card = (props) => {
    const classes = 'card ' + props.className;
    //ustteki satiri eklemezsek sadece card css i calisir ama biz hepsinin birlikte calismasini istiyoruz
    return <div className={classes}>{props.children}</div>
    //bu yuzden class name de {classes verdik yukarda}
    
}



export default Card;