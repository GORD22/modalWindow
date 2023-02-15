import style from './StartButton.module.css'

const StartButton = (props) => {
    return (
        <div className={style.content}>
            <button className={style.start}>Start</button>
            <h2>{props.currentCount}</h2>
        </div>
    )
}

export default StartButton;