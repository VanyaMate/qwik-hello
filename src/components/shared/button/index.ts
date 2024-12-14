import type { QwikIntrinsicElements } from '@builder.io/qwik';
import { ButtonSimple } from '~/components/shared/button/Button/Button';


export namespace Button {
    export type StyleType =
        'default'
        | 'primary';

    export type Props =
        QwikIntrinsicElements['button']
        & {
            styleType: StyleType;
        };

    export const Simple = ButtonSimple;
}