import { component$ } from '@builder.io/qwik';
import css from './User.module.css';


export type UserProps = {
    login: string;
    avatar: string;
}

export default component$((props: UserProps) => {
    const { login, avatar } = props;

    return (
        <div class={ css.container }>
            <div class={ css.info }>
                <img src={ avatar } alt={ 'avatar' } class={ css.avatar }/>
                <h2 class={ css.login }>{ login }</h2>
            </div>
            <button class={ css.button }
                    onClick$={ () => console.log(login) }>[..]
            </button>
        </div>
    );
});