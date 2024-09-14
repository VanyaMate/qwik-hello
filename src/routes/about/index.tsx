import { component$ } from '@builder.io/qwik';
import User from '~/components/user/User';


export default component$(() => {
    return (
        <div>
            <h2>about us</h2>
            <p>css modules check -&gt;</p>
            <div
                style={ {
                    display      : 'flex',
                    flexDirection: 'column',
                    gap          : 10,
                    width        : 300,
                } }>
                <User
                    avatar={ 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s' }
                    login={ 'Admin' }
                />
                <User
                    avatar={ 'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp' }
                    login={ 'User2' }
                />
                <User
                    avatar={ 'https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg' }
                    login={ 'TestMachine' }
                />
                {
                    [
                        { avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s', login: 'List 1' },
                        { avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s', login: 'List 2' },
                        { avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s', login: 'List 3' },
                    ].map(
                        (user) => <User { ...user } key={ user.login }/>,
                    )
                }
            </div>
        </div>
    );
});