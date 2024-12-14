import { component$, Slot } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';


export const onGet: RequestHandler = async ({ cacheControl }) => {
    cacheControl({
        staleWhileRevalidate: 60 * 60 * 24 * 7,
        maxAge              : 5,
    });
};

export default component$(() => {
    return (
        <>
            <ul>
                <li>
                    <Link href={ '/' }>home</Link>
                </li>
                <li>
                    <Link href={ '/about' }>about</Link>
                </li>
            </ul>
            <Slot/>
        </>
    );
});
