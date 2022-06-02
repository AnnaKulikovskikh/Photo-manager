import cross from './img/cross.png'

export default function Preview() {
    return(
    <div className='preview-box'>
        <div className="preview" style={{backgroundImage: `url(${cross})` }}>
            <div className="cross">X</div>
        </div>
    </div>   
    )
}