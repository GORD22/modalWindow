import style from './UserDelete.module.css';

const UserDelete = (props) => {
    return (
        <div className={style.form}>
            <div>Удаление пользователя</div>
            <div>Вы действительно хотите удалить этого пользователя с платформы?</div>
            <div>Это действие нельзя будет отменить!</div>
            <button>Отменить</button>
            <button>Удалить</button>
        </div>
    )
}

export default UserDelete;