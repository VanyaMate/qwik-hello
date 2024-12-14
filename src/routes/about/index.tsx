import { component$, useSignal } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { Button } from '~/components/shared/button';


export const usePosts = routeLoader$(async () => {
    const posts: Array<{
        id: number,
        user_id: number,
        title: string,
        body: string
    }> = await fetch(`https://jsonplaceholder.typicode.com/posts`).then((response) => response.json());
    return posts;
});

export default component$(() => {
    const counter = useSignal(0);
    const posts   = usePosts();

    return (
        <div>
            <h2>about us</h2>
            <p>css modules check -&gt;</p>
            <hr/>
            <p>{ counter.value }</p>
            <button onClick$={ () => counter.value += 1 }>increment</button>
            <Button.Simple styleType={ 'primary' }
                           onClick$={ () => console.log(counter.value, posts.value) }>Text</Button.Simple>
            {
                posts.value.map((post) => (
                    <div key={ post.id }>{ post.title }</div>
                ))
            }
        </div>
    );
});