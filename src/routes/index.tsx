import { component$, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';


export default component$(() => {
    const counterValue = useStore({ value: 0 });

    return (
        <>
            <h1>Hi 👋</h1>
            <div>
                Can't wait to see what you build with qwik!
                <br/>
                Happy coding.
            </div>
            <h2>Current counter value: { counterValue.value }</h2>
            <button onClick$={ () => counterValue.value += 1 }>Increment
            </button>
        </>
    );
});

export const head: DocumentHead = {
    title: 'Welcome to Qwik',
    meta : [
        {
            name: 'description',
            content: 'Qwik site description',
        },
    ],
};
