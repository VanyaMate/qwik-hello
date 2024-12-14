import { component$, Slot } from '@builder.io/qwik';
import classNames from 'classnames';
import css from './Button.module.css';
import type { Button } from '~/components/shared/button';


export const ButtonSimple = component$((props: Button.Props) => {
    const { styleType, ...other } = props;

    return (
        <button
            { ...other }
            class={ classNames(css.container, { [css.primary]: styleType === 'primary' }, [ props.class ]) }
        >
            <Slot/>
        </button>
    );
});

