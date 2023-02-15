import style from './StartButton.module.css'

const StartButton = () => {
    return (
        <div className={style.content}>
            <button className={style.start}>Start</button>
        </div>
    )
}

export default StartButton;