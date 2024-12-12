import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';


export default component$(() => {
    return (
        <>
            <h1>Hi 👋</h1>
            <div>
                Can't wait to see what you build with qwik!
                <br/>
                Happy coding.
            </div>
            <h2>Current counter value: 1</h2>
            <button>Increment</button>
        </>
    );
});

export const head: DocumentHead = {
    title: 'Welcome to Qwik',
    meta : [
        {
            name   : 'description',
            content: 'Qwik site description',
        },
    ],
};
